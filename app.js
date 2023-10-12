const express = require('express');
const app = express();
const userRouter = require("./routes/users.route")

app.use("/api/user",userRouter);

app.use("/register", (req, res)=>{   // send json data to server
    res.status(200).json({
        message: "I am register page",
        statusCode: 200,
    });
});

app.use("/login", (req, res)=>{
    res.send("Hi I am login page")
})

app.use("/", (req, res)=>{
    res.send("Hi I am home page")
});



app.use((req, res)=>{
    res.send("<h1>404 !!! Not a valid url</h1>")
})

module.exports = app; // exported to index.js
