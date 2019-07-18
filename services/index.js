const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Photographers = require('./models/photographers.js');
const Contacts = require('./models/contacts.js');
var randomstring = require("randomstring");

// const dbConnection = "mongodb://accountUser:password@localhost:27017/dbname";
const dbConnection = "mongodb://admin:Pass1234@ds129904.mlab.com:29904/photographers";

app.use( bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit:50000
}));


mongoose.Promise = require('bluebird');
mongoose.connect(dbConnection);

app.listen(3000);
console.log('Starting application');

app.use(function (req, res, next) {
    console.log('We are the router, move next');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.json({ message: 'Hey!' });
});

//START PHOTOGRAPHERS

// app.get('/api/photographers', function (req, res) {
//     console.log('GET PHOTOGRAPHERS WITH LIMIT : '+parseInt(req.query.limit));
//     Photographers.find({}).sort({enterdDt: -1}).limit(parseInt(req.query.limit)).then(eachOne => {
//         res.json(eachOne);
//     });
// });

//Sorting by entered date
app.get('/api/photographers', function (req, res) {
    console.log('GET PHOTOGRAPHERS');
    Photographers.find({}).sort({enterdDt: -1}).then(eachOne => {
        res.json(eachOne);
    });
});


app.post('/api/photographers', function (req, res) {
    console.log('SAVE PHOTOGRAPHERS');
    Photographers.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        location : req.body.location,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        profilePicture: req.body.profilePicture,
        dob: req.body.dob,
        sex: req.body.sex,
        about: req.body.about,
        linkFacebook: req.body.linkFacebook,
        linkLinkedIn: req.body.linkLinkedIn,
        linkTwitter: req.body.linkTwitter,
        linkInstagram: req.body.linkInstagram,
        photoLink: req.body.photoLink,
        videoLink: req.body.videoLink,
        activationLink : randomstring.generate(10),
        isActive: false,
    }).then(Photographers => {
        res.json(Photographers);
    }, err => {
        res.json(err.message);
    })
});

app.get('/api/photographers/:photographers_id', function (req, res) {
    console.log('GET PHOTOGRAPHERS BY ID');
    Photographers.findById(req.params.photographers_id).then(function (err, photographers) {
        if (err) {
            res.send(err);
        }
        res.send(photographers);
    });
});

app.put('/api/photographers/:photographers_id', function (req, res) {
    console.log('UPDATE PHOTOGRAPHERS');
    req.body.updateDt = new Date();
    Photographers.findByIdAndUpdate(req.params.photographers_id, { $set: req.body }, function (err, photographers) {
        if (err) return next(err);
        res.json(photographers);
    });
});

app.delete('/api/photographers/:photographers_id', function (req, res) {
    console.log('DELETE PHOTOGRAPHERS BY ID');
    Photographers.findByIdAndRemove(req.params.photographers_id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
});

app.post('/api/login', function (req, res) {
    console.log('Login');
    Photographers.findOne({username: req.body.username, password : req.body.password}, function(err, photographer) {
       if (err) return next(err);
       res.json(photographer)
      });
});

//END PHOTOGRAPHERS


//START CONTACTS

app.post('/api/contacts', function (req, res) {
    console.log('SAVE CONTATCS' + req.body.contactCategory);
    Contacts.create({
        contactCategory : req.body.contactCategory,
        fullName: req.body.fullName,
        email: req.body.email,
        mobile:  req.body.mobile,
        message: req.body.message
    }).then(Contacts => {
        res.json(Contacts);
    }, err => {
        res.json(err.message);
    })
});

//Sorting by entered date
app.get('/api/contacts', function (req, res) {
    console.log('GET CONTATCS');
    Contacts.find({}).sort({enterdDt: -1}).then(eachOne => {
        res.json(eachOne);
    });
});

//END CONTACTS