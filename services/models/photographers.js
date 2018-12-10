const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const photographersSchema = new Schema({
    username: { type: String, required: true, max: 20 },
    password: { type: String, required: true, max: 100 },
    firstName: { type: String, required: true, max: 20 },
    lastName: { type: String, required: true, max: 20 },
    email: String,
    phoneNumber: String,
    profilePicture: Buffer,
    age: Number,
    sex: String,
    about: String,
    linkFacebook: String,
    linkLinkedIn: String,
    linkTwitter: String,
    linkInstagram: String,
    enterdDt: { type: Date, default: Date.now },
    updateDt: Date,
    isActive: { type: Boolean, default: false },
});

const Photographers = mongoose.model('Photographers', photographersSchema);
module.exports = Photographers;
