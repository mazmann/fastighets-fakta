// propertyRoutes.js
import express from 'express';
import property from './PropertyModel.js';


const app = express();


app.get('/', async (req, resp) => {
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
            return res.status(404).json({ error: 'property not found' });
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

        const updatedproperty = await property.findByIdAndUpdate(propertyId, updatedData, { new: true });

        if (!updatedproperty) {
            return res.status(404).json({ error: 'property not found' });
        }

        res.json(updatedproperty);
    } catch (e) {
        console.error('Error:', e);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.post('/register', async (req, resp) => {
    try {
        const newproperty = new property(req.body);
        let result = await newproperty.save();
        result = result.toObject();
        if (result) {
            resp.json(result);
            console.log(result);
        } else {
            console.log('property already registered');
        }
    } catch (e) {
        console.error('Error:', e);
        resp.status(500).send('Something Went Wrong');
    }
});

app.delete('/properties/:propertyId', async (req, res) => {
    try {
        const propertyId = req.params.propertyId;
        const deletedproperty = await property.findByIdAndDelete(propertyId);

        if (!deletedproperty) {
            return res.status(404).json({ error: 'property not found' });
        }

        res.json({ message: 'property deleted successfully' });
    } catch (e) {
        console.error('Error:', e);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.use((err, req, res, next) => {
    console.error('Unexpected Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});

export default app;
