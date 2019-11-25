const express = require('express');

const User = require('../models/user');
const router = express.Router();
const authConfing = require('../config/auth');


const bcypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { cpf: cpfValidator } = require('cpf-cnpj-validator');

function generateToken(params) {
    return jwt.sign({ params }, authConfing.secret, {
        expiresIn: '1d',
    });
};


router.post('/register', async (req, res) => {
    try {
        const { email } = req.body;
        if(await User.findOne({ email })) 
            return res.status(400).send({ error: 'User already exists'});
        
        const { cpf } = req.body;

        if(cpfValidator.isValid(cpf) === false) 
            return res.status(400).send({ error: 'User cpf is not valid' });

        const user = await User.create(req.body);
        
        user.password = undefined;
        return res.send({ user, token: generateToken({ id: user.id }) });
    } catch (err) {
        console.log(err);
        res.status(400).send({error: 'Registration Failed'});
    }
});

router.post('/authenticate', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');
        
        if(!user) {
            return res.status(400).send({ error: 'User not found!'});
        }

        if(!await bcypt.compare(password, user.password)) {
            return res.status(400).send({ error: 'Invalid password' });
        }

        user.password = undefined;

        return res.send({ user, token: generateToken({ id: user.id }) });

    } catch(err) {

        console.log(err);
    }

});

module.exports = app => app.use('/auth', router);

