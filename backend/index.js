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
        console.log('Connected to database');
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
        required: false,
    },
    propertyTag: {
        type: String,
        required: false,
    },
    propertyAddress: {
        type: String,
        required: true,
    },
    propertyArea: {
        type: String,
        required: false,
    },
    visitingAddress: {
        type: String,
        required: false,
    },
    visitingArea: {
        type: String,
        required: false,
    },
    contactRep: {
        type: String,
        required: false,
    },
    phoneNumber: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema, 'fastighets_data');

// For backend and express
app.use(express.json());
app.use(cors());

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/properties', async (req, resp) => {
    try {
        const properties = await User.find({}, '-password'); // Exclude the password field
        resp.json(properties);
    } catch (e) {
        console.error('Error:', e);
        resp.status(500).send('Something Went Wrong');
    }
});

app.get('/properties/:propertyId', async (req, res) => {
    try {
      const propertyId = req.params.propertyId;
      const property = await User.findById(propertyId);
      
      if (!property) {
        return res.status(404).json({ error: 'Property not found' });
      }
  
      res.json(property);
    } catch (e) {
      console.error('Error:', e);
      res.status(500).json({ error: 'Something went wrong' });
    }
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
        console.error('Error:', e);
        resp.status(500).send('Something Went Wrong');
    }
});

app.listen(port, () => {
    console.log(`App listen at port ${port}`);
});
