//? This file contains the schema for the property object and the model for the property object.
import mongoose from 'mongoose';
const propertySchema = new mongoose.Schema({
    propertyOwner: {
        type: String,
        required: true,
    },
    organisationNumber: {
        type: String,
    },
    propertyTag: {
        type: String,
    },
    propertyAddress: {
        type: String,
        required: true,
    },
    propertyArea: {
        type: String,
    },
    visitingAddress: {
        type: String,
    },
    visitingArea: {
        type: String,
    },
    contactRep: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    email: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    secondDate: {
        type: Date,
        default: null,
    },
});

const property = mongoose.model('property', propertySchema);


export { property };