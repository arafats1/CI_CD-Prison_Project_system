const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
const UserRegister = require('../models/userRegist_model');
const flash = require('connect-flash');
const bcrypt = require('bcryptjs/dist/bcrypt');
router.use(expressValidator());

router.get('/register', (req, res) => {
    res.render('register')
});

//The post function to pick up the form input
router.post('/register', async (req, res) => {
   
    try{
        const newUser = new UserRegister(req.body);
        let user = await UserRegister.findOne({email:req.body.email});
        if(user){
            return res.status(400).send('You cant register, email already exists');
        }
        else {

            //Bcrypt will be used to hash the password after a user has input when registering
            bcrypt.genSalt(7,(err,salt) => {
                bcrypt.hash(newUser.password, salt,(err,hash) =>{
                    if(err){
                        console.error(err);
                        return;
                    }
                    newUser.password = hash;
                });
            });

            await UserRegister.register(newUser, req.body.password, (err) => {
                if(err){ //Register method has an inbuilt encryption
                    throw err;
                }
               
            //After registering the user is redirected to the login page
                res.redirect('/')
                
                
            } );
        }
       
    }

    catch(err){
        console.log(err);
        res.send('You data wasnt saved')
    }

});
    

module.exports = router;
