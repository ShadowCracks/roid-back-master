const express = require('express');
const topicCtrl = require('../controllers/userCtrl');

const router = express.Router();

const User = require('../models/user');

const app = express();

// User

router.post('/users',async (request,response) => {
    // console.log('users request',request);
    try{
        if(
            !request.body.email ||
            !request.body.userName ||
            !request.body.password ||
            !request.body.publicGroupObject ||
            !request.body.aboutYourself ||
            !request.body.dob ||
            !request.body.weight ||
            !request.body.height ||
            !request.body.bodyFat
        ){
            return response.status(400).send({message:'Send all required fields'});
        }

        const newUser = {
            email: request.body.email,
            userName: request.body.userName,
            password: request.body.password,
            publicGroupObject: request.body.publicGroupObject,
            aboutYourself: request.body.aboutYourself,
            dob: request.body.dob,
            weight: request.body.weight,
            height: request.body.height,
            bodyFat: request.body.bodyFat,
        }

        const user = await User.create(newUser);
        return response.status(201).send(user);
    
    } catch(error){
        console.log('/user',error.message);
        response.status(500).send({message: error.message})
    }

});

router.post('/users/login',async (request,response) => {
    // console.log('users request',request);
    try{
        if(
            !request.body.email ||
            !request.body.password
        ){
            return response.status(400).send({message:'Send all required fields'});
        }

        const newUser = {
            email: request.body.email,
            password: request.body.password,
        }

        const loginData = await User.find({"email":request.body.email});
        return response.status(200).json(loginData);
    
    } catch(error){
        console.log('/users/login',error.message);
        response.status(500).send({message: error.message})
    }

});

module.exports = router;
