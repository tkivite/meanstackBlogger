var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memberSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    nationalId: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Members = mongoose.model('Member', memberSchema);
// make this available to our Node applications
module.exports = Members;