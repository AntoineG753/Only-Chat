// import { Router } from 'express';

// import { signup, connectAuth, login } from '../controllers/users.js';
// import Joi from 'joi';
// import { auth } from '../middleware/auth.js';
// import multer from '../middleware/multer-config.js';
// import { authAdmin } from '../middleware/authAdmin.js';

const { Router } = require('express');
const router = Router();
const { signup, connectAuth, login  } = require('../controllers/users.js');
const Joi = require('joi');
const { auth } = require('../middleware/auth.js');
const multer = require('multer');


// const testShemaValide = data => {
    
//     const schema = Joi.object({
//         pseudo: Joi.string()
//         .alphanum()
//         .min(4)
//         .max(20)
//         .required()
//     }).unknown();
//     console.log(schema.validate(data));
//     return schema.validate(data);
// }




router.post('/signup', (req, res) => {
   
    const schema = Joi.object({
        pseudo: Joi.string()
        .alphanum()
        .min(4)
        .max(17)
        .required()
    });
    const result = schema.validate(req.body)
    if(result.error) throw result.error;
    signup(req, res);
});
router.post('/login', (req, res) => {
   
    const schema = Joi.object({
        pseudo: Joi.string()
        .alphanum()
        .min(4)
        .max(17)
        .required(),
        secretKey: Joi.string()
        .required()
    });
    const result = schema.validate(req.body)
    if(result.error) throw result.error;
    login(req, res);
});

router.post('/connectAuth', connectAuth);

module.exports = router;
