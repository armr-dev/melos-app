const mongoose = require('../../database');

const bcrypt = require('bcryptjs');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true,
    },
    tags: [String],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

EventSchema.pre('save', async function (next) {
    next();
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;