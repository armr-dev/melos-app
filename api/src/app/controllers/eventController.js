const express = require('express');

const router = express.Router();
const Event = require('../models/event');
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const events= await Event.find().populate({
            path: 'creator',
            select: '-cpf'
        });
        return res.send({ events })
    } catch (error) {

       return res.status(400).send({error: 'Could not retrieve events'}) 
    }
});

router.get('/:eventId', async (req, res) => {
    try {
        const event= await Event.findById(req.params.eventId).populate({
            path: 'creator',
            select: '-cpf'
        });
        return res.send({ event })
    } catch (error) {
       return res.status(400).send({error: 'Could not retrieve event'}) 
    }
});

router.put('/:eventId', async (req, res) => {
    try {
        const event= await Event.findByIdAndUpdate(req.params.eventId, req.body).populate({
            path: 'creator',
            select: '-cpf'
        });
        return res.send({ event })
    } catch (error) {
       return res.status(400).send({error: 'Could not retrieve event'}) 
    }
});

router.delete('/:eventId', async (req, res) => {
    try {
        await Event.findByIdAndRemove(req.params.eventId);
        return res.send({ message: "Event deleted"})
    } catch (error) {
       return res.status(400).send({error: 'Could not delete event'}) 
    }
});

router.post('/', async (req, res) => {
    try {
        const event = await Event.create({ ...req.body, creator: req.userId });
        return res.send({ event })
    } catch (error) {
        console.log(req.body);
        console.log(error);

       return res.status(400).send({error: 'Could not create event'}) 
    }

});

module.exports = app => app.use('/event', router);