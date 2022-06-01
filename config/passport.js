//This handles authentication
const LocalStrategy = require('passport-local').Strategy;
const UserRegister = require('../models/userRegist_model');
const bcrypt = require('bcryptjs');

module.exports = (passport) =>{
    // Local strategy
    passport.use(new LocalStrategy(function(email, password, done){
      let query = { email: email };
      UserRegister.findOne(query, function(err, userRegist_model){
        if(err) throw err;
  
        if(!userRegist_model) {
          return done(null, false, { message: 'No user found' });
        }
  // Match password
  bcrypt.compare(password, userRegist_model.password, function(err, isMatch){
    if (err) throw err;
    if(isMatch) {
      return done(null, userRegist_model);
    } else {
      return done(null, false, { message: 'Wrong password' });
    }
  });
})
})); 

//Serialize gives a user a serial number when logged into the system
passport.serializeUser(function(userRegist_model, done) {
    done(null, userRegist_model.id);
  });

  //This terminates the user serial number after leaving system
  passport.deserializeUser(function(id, done) {
    UserRegister.findById(id, function(err, userRegist_model) {
      done(err, userRegist_model);
    });
  });
};

