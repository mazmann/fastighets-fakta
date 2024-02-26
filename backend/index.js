import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 5000;

await mongoose.connect("mongodb://127.0.0.1:27017/property_data")
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });


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

const insertedProperty = new property({
        propertyOwner: "Nordahl Fastigheter",
        organisationNumber: "",
        propertyTag: "Kolonisten 3",
        propertyAddress: "Järnvägsgatan 62",
        propertyArea: "Sundbyberg",
        visitingAddress: "",
        visitingArea: "",
        contactRep: "Bengt Mikael Nordahl",
        phoneNumber: "087957801",
});

await insertedProperty.save();

// For backend and express
app.use(express.json());
app.use(cors());

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/properties', async (req, resp) => {
    try {
        const properties = await property.find({});
        resp.json(properties);
    } catch (e) {
        console.error('Error:', e);
        resp.status(500).send('Something Went Wrong');
    }
});

app.get('/properties/:propertyId', async (req, res) => {
    try {
        const propertyId = req.params.propertyId;
        const propertyData = await property.findById(propertyId);

        if (!propertyData) {
            return res.status(404).json({ error: 'Property not found' });
        }

        res.json(propertyData);
    } catch (e) {
        console.error('Error:', e);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.put('/properties/:propertyId', async (req, res) => {
    try {
        const propertyId = req.params.propertyId;
        const updatedData = req.body;

        updatedData.secondDate = new Date();

        const updatedProperty = await property.findByIdAndUpdate(propertyId, updatedData, { new: true });

        if (!updatedProperty) {
            return res.status(404).json({ error: 'Property not found' });
        }

        res.json(updatedProperty);
    } catch (e) {
        console.error('Error:', e);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.post('/register', async (req, resp) => {
    try {
        const newProperty = new property(req.body);
        let result = await newProperty.save();
        result = result.toObject();
        if (result) {
            resp.json(result);
            console.log(result);
        } else {
            console.log('Property already registered');
        }
    } catch (e) {
        console.error('Error:', e);
        resp.status(500).send('Something Went Wrong');
    }
});

app.listen(port, () => {
    console.log(`App listen at port ${port}`);
});
