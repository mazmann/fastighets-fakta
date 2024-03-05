// index.js
import express from 'express';
import cors from 'cors';
import connectToDatabase from './db.js';
import propertyRouter from './components/PropertyRoutes.js';
import property from './components/PropertyModel.js';
import firmRouter from './components/FirmRoutes.js';
import firm from './components/FirmModel.js';

const app = express();
const port = 5000;

// Connect to the database
connectToDatabase();

const insertedFirm = new firm({
    firmName: "Ikano",
    organisationNumber: "Kolonisten 3",
    visitingAddress: "Järnvägsgatan 62",
    phoneNumber: "Sundbyberg",
    email: "Sundbyberg",
    contactRep: "Sundbyberg",
});

try {
    await insertedFirm.save();
    console.log('Firm saved successfully');
} catch (error) {
    console.error('Error saving Firm:', error);
}

const insertedProperty = new property({
    propertyOwner: "TEST OBJECT inc",
    propertyTag: "Kolonisten 3",
    propertyAddress: "Järnvägsgatan 62",
    propertyArea: "Sundbyberg",
});

try {
    await insertedProperty.save();
    console.log('property saved successfully');
} catch (error) {
    console.error('Error saving property:', error);
}
// For backend and express
app.use(express.json());
app.use(cors());

// Use property routes
app.use('/api', propertyRouter);
app.use('/api', firmRouter);

app.listen(port, () => {
    console.log(`App listen at port ${port}`);
});
