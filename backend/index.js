const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'fastighets_info',
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to yourDB-name database');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Schema for users of app
const UserSchema = new mongoose.Schema({
    propertyOwner: {
        type: String,
        required: true,
    },
    organisationNumber: {
        type: String,
        required: true,
    },
    properyTag: {
        type: String,
        required: true,
    },
    propertyAdress: {
        type: String,
        required: true,
    },
    propertyArea: {
        type: String,
        required: true,
    },
    visitingAdress: {
        type: String,
        required: true,
    },
    visitingArea: {
        type: String,
        required: true,
    },
    contactRep: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('hummer', UserSchema);

// For backend and express
app.use(express.json());
app.use(cors());

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/', (req, resp) => {
    resp.send('App is Working');
    // You can check if the backend is working or not by entering http://localhost:5000
    // If you see "App is working," the backend is working properly.
});

app.post('/register', async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password; // Assuming there's a password field that you want to exclude
            resp.json(result);
            console.log(result);
        } else {
            console.log('User already registered');
        }
    } catch (e) {
        console.error('Something Went Wrong:', e);
        resp.status(500).send('Something Went Wrong');
    }
});

app.listen(port, () => {
    console.log(`App listen at port ${port}`);
});
