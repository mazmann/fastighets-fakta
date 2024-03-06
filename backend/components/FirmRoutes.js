// userRoutes.js
import express from 'express';
import firm from './FirmModel.js';


const app = express();


app.get('/firm', async (req, resp) => {
    try {
        const firms = await firm.find({}); // Corrected to use firm instead of firm
        resp.json(firms);
    } catch (e) {
        console.error('Error:', e);
        resp.status(500).send('Something Went Wrong');
    }
});

app.get('/firm/:firmId', async (req, res) => {
    try {
        const firmId = req.params.firmId;
        const firmData = await firm.findById(firmId); // Corrected to use firm instead of firm

        if (!firmData) {
            return res.status(404).json({ error: 'firm not found' }); // Corrected to use firm instead of firm
        }

        res.json(firmData);
    } catch (e) {
        console.error('Error:', e);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.put('/firm/:firmId', async (req, res) => {
    try {
        const firmId = req.params.firmId;
        const updatedData = req.body;

        updatedData.secondDate = new Date();

        const updatedFirm = await firm.findByIdAndUpdate(firmId, updatedData, { new: true }); // Corrected to use firm instead of firm

        if (!updatedFirm) {
            return res.status(404).json({ error: 'firm not found' }); // Corrected to use firm instead of firm
        }

        res.json(updatedFirm);
    } catch (e) {
        console.error('Error:', e);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.post('/register', async (req, resp) => {
    try {
        const newFirm = new firm(req.body); // Corrected to use firm instead of firm
        let result = await newFirm.save();
        result = result.toObject();
        if (result) {
            resp.json(result);
            console.log(result);
        } else {
            console.log('firm already registered'); // Corrected to use firm instead of firm
        }
    } catch (e) {
        console.error('Error:', e);
        resp.status(500).send('Something Went Wrong');
    }
});

app.delete('/firm/:firmId', async (req, res) => {
    try {
        const firmId = req.params.firmId;
        const deletedFirm = await firm.findByIdAndDelete(firmId); // Corrected to use firm instead of firm

        if (!deletedFirm) {
            return res.status(404).json({ error: 'firm not found' }); // Corrected to use firm instead of firm
        }

        res.json({ message: 'firm deleted successfully' }); // Corrected to use firm instead of firm
    } catch (e) {
        console.error('Error:', e);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

export default app;
