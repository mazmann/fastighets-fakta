// db.js
import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/property_data", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to database');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

export default connectToDatabase;
