const express = require("express");
const app = express();

app.get("/jsonp", function(req, res) {
    let callback = req.query.call;
    let obj = {
        name: 10,
        age: 20
    }
    res.end(callback + "(" + JSON.stringify(obj) + ")");
})

app.listen(4000);