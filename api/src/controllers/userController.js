const express = require('express');

const User = require('../models/user');
const router = express.Router();

const { cpf: cpfValidator } = require('cpf-cnpj-validator');


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
        return res.send({ user });
    } catch (err) {
        console.log(err);
        res.status(400).send({error: 'Registration Failed'});
    }
})

module.exports = app => app.use('/auth', router);

