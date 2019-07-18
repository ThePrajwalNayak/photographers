const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const contactsSchema = new Schema({
    contactCategory : { type : String, required : true },
    fullName: { type: String, required: true, minlength: 5, maxlength: 30 },
    email: { type: String, required: true, minlength: 5, maxlength: 30 },
    mobile: { type: String, required: true, minlength: 5, maxlength: 30 },
    message: { type: String, required: true, minlength: 5, maxlength: 500 },
    enterdDt: { type: Date, default: Date.now },
    updateDt: { type: Date, default: Date.now }
});

const Contacts = mongoose.model('Contacts', contactsSchema);
module.exports = Contacts;