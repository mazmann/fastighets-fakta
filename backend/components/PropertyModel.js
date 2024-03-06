import mongoose, { Schema } from 'mongoose';

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

const Property = mongoose.model('Property', propertySchema);

export default Property;
