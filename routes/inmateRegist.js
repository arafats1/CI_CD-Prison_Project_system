const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
const Register = require('../models/registerModel');

router.use(expressValidator());

router.get('/inmateReg', (req,res) => {
    res.render('inmateRegist');
});

router.post('/inmateRegister', (req, res) => {
    //const data = req.body;

    const name = req.body.name;
    const age = req.body.age;
    const crime = req.body.crime;
    const kin = req.body.kin;
    const kinNumber = req.body.kinNumber;
    const entryDate = req.body.entryDate;
    const releaseDate = req.body.releaseDate;


    //Incase there are errors
    let errors = req.validationErrors();
    if(errors){
        res.render('vehicleRegist');
    }

    else{
        //let newRegister = new Register(req.body)

        let newRegister = new Register({
            name: name,
            age: age,
            crime: crime,
            kin: kin,
            kinNumber: kinNumber,
            entryDate: entryDate,
            releaseDate: releaseDate
        });
        

        newRegister.save((err) => {
            if(err){
                console.error(err);
                return; 
            }
            
            else{  
                console.log('Information posted');
                res.redirect('/inmates');           
            }
        });
    }
});

//Editing route
//The get method renders the edit page with retrieved data
router.get("/update/:id", async (req, res) => {
    try {
      
      const updateUser = await Register.findOne({ _id: req.params.id })
      res.render('editVehicle', { register: updateUser })
     
      //If it fails catch an error
    } catch (error) {
      res.status(400).send("unable to find the user in the database");
    }
});

//This route posts back the edited data
router.post("/update", async (req, res) => {

    try {
      await Register.findOneAndUpdate({ _id: req.query.id }, req.body)
      res.redirect("/vehicleReport");
   
    } catch (error) {
      res.status(400).send("unable to update vehicle");
    }
});



// DELETE USER
router.get('/deleteVehicle/:id', async(req, res)=> {
  try{
    await Register.deleteOne({_id:req.params.id})
    res.redirect('/vehicleReport');
  }
 
  catch{
        res.status(400).send('Unable to delete Vehicle from database');
      }
  });

  
module.exports = router;