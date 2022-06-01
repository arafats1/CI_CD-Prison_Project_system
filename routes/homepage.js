const express = require('express');
const router = express.Router();


//This renders the home page
router.get('/home', (req, res) => {
    res.render('homepage')
});

module.exports = router;