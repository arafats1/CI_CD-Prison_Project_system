const express = require('express');
const router = express.Router();
const Register = require('../models/registerModel');



//The router gets the report page and renders it
router.get('/inmates', async(req,res)=>{
    
    try {
        //This will pick information in the schema
        const data = await Register.find({}).sort({$natural:-1});

        //The sum aggregate
        let totalParking = await Register.aggregate([
          {$group:{_id:'$all', totalParking:{ $sum:'$amount'}}}
        ]);
        
        res.render('inmatesReport', { 
          registers : data,
        });

        //Incase of an error, render error
      } catch(error) {
        return res.status(400).send(
          { 
            status: 400,
            message: 'Oops failed to fetch all registrations',
            error
          });
    }
});


module.exports = router;