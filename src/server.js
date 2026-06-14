const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Welcome to my simple deployment!");
});

app.listen(8080, function () {
    console.log("app listening on port 3000");
});
