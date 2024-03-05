// propertyModel.js
import mongoose from 'mongoose';

const firmSchema = new mongoose.Schema({
    firmName: {
        type: String,
        required: true,
    },
    organisationNumber: {
        type: String,
    },
    visitingAddress: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    email: {
        type: String,
    },
    contactRep: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const firm = mongoose.model('firm', firmSchema);


export default firm;
