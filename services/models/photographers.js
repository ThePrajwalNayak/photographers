const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const photographersSchema = new Schema({
    username: { type: String, required: true, minlength: 2, maxlength: 20, unique : true },
    password: { type: String, required: true, minlength: 2, maxlength: 50 },
    firstName: { type: String, required: true, minlength: 3, maxlength: 20 },
    lastName: { type: String, required: true, minlength: 3, maxlength: 20 },
    location: { type: String, maxlength: 20 },
    email: { type: String, required: true, minlength: 5, maxlength: 30 },
    phoneNumber: { type: String, maxlength: 30 },
    profilePicture: String,
    dob: { type: String, maxlength: 30 },
    sex: { type: String, maxlength: 1 },
    about: { type: String, required: true, minlength: 5, maxlength: 500 },
    linkFacebook: { type: String, maxlength: 100 },
    linkLinkedIn: { type: String, maxlength: 100 },
    linkTwitter: { type: String, maxlength: 100 },
    linkInstagram: { type: String, maxlength: 100 },
    photoLink: { type: String, maxlength: 100 },
    videoLink: { type: String, maxlength: 100 },
    activationLink: String,
    isActive: { type: Boolean, default: false },
    enterdDt: {type: Date, default: Date.now},
    updateDt: {type: Date, default: Date.now},
    saveStatus : {type: String, required : true, default: 'S',  minlength: 1, maxlength: 1},
});

const Photographers = mongoose.model('Photographers', photographersSchema);
module.exports = Photographers;