var express = require("express");
var app = express();

app.get("/url", (req, res, next) => {
    let msg = new Object();
    msg['ip'] = req.connection.remoteAddress;

    if(typeof req.query.name !== "undefined"){
        msg['greeting'] = req.query.name;
    }
    res.statusCode = 200;
    res.set("Content-Type", "text/json");
    res.set('x-hello-world', 'RV');
    res.json(msg);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
