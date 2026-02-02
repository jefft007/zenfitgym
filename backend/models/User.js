const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // Personal Data (Step 3)
    age: { type: Number },
    gender: { type: String },
    height: { type: Number }, // in cm or ft
    weight: { type: Number }, // in kg or lbs
    goal: { type: String }, // e.g. weight loss, muscle gain

    // Membership
    membershipType: { type: String, default: 'Free' },
    membershipStartDate: { type: Date },
    membershipEndDate: { type: Date },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);
