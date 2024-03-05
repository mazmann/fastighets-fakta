import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { property } from './propertySchema.js';

const app = express();
const port = 5000;

await mongoose.connect("mongodb://127.0.0.1:27017/property_data")
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

    const insertedProperty = new property({
        propertyOwner: "TEST OBJECT inc",
        organisationNumber: "123345",
        propertyTag: "Kolonisten 3",
        propertyAddress: "Järnvägsgatan 62",
        propertyArea: "Sundbyberg",
        visitingAddress: "",
        visitingArea: "",
        contactRep: "Bengt Mikael Nordahl",
        phoneNumber: "087957801",
        email: "",
        date: "",
        secondDate: "",
    });
    
    await insertedProperty.save();

// For backend and express
app.use(express.json());
app.use(cors());

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

app.delete('/properties/:propertyId', async (req, res) => {
    try {
        const propertyId = req.params.propertyId;
        const deletedProperty = await property.findByIdAndDelete(propertyId);

        if (!deletedProperty) {
            return res.status(404).json({ error: 'Property not found' });
        }

        res.json({ message: 'Property deleted successfully' });
    } catch (e) {
        console.error('Error:', e);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(port, () => {
    console.log(`App listen at port ${port}`);
});
