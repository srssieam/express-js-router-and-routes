const express = require('express');
const router = express.Router();

// http://localhost:3000/api/user/

router.get("/register", (req, res)=>{
    res.send("I am get request at register page")
})
router.get("/login", (req, res)=>{
    res.send("I am get request at login page")
})

module.exports = router;