import mongoose, { Schema } from 'mongoose';
import _Firm from './FirmModel';

const propertySchema = new mongoose.Schema({
    propertyOwner: {
        type: Schema.Types.ObjectId,
        ref: 'Firm',
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
