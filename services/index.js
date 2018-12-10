const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Photographers = require('./models/photographers.js');

// const dbConnection = "mongodb://accountUser:password@localhost:27017/dbname";
const dbConnection = "mongodb://[username]:[password]@ds129904.mlab.com:29904/[dbname]";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = require('bluebird');
mongoose.connect(dbConnection);

app.listen(3000);
console.log('Starting application');

app.use(function (req, res, next) {
    console.log('We are the router, move next');
    next();
});

app.get('/', function (req, res) {
    res.json({ message: 'Hey!' });
});

app.get('/api/photographers', function (req, res) {
    console.log('GET PHOTOGRAPHERS');
    Photographers.find({}).then(eachOne => {
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
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        profilePicture: req.body.profilePicture,
        age: req.body.age,
        sex: req.body.sex,
        about: req.body.about,
        linkFacebook: req.body.linkFacebook,
        linkLinkedIn: req.body.linkLinkedIn,
        linkTwitter: req.body.linkTwitter,
        linkInstagram: req.body.linkInstagram,
        enterdDt: new Date(),
        updateDt: new Date(),
        isActive: false
    }).then(Photographers => {
        res.json(Photographers);
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

