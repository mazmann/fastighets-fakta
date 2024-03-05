// propertyModel.js
import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    propertyOwner: {
        type: String,
        required: true,
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
    date: {
        type: Date,
        default: Date.now,
    },
});

const property = mongoose.model('property', propertySchema);

export default property;
