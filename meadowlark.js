const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3000);

// custom error || 404 page
app.use(function (req, res) {
    res.type("text/plain");
    res.status(404);
    res.send("404 - Not Found");
});

// custom 500 page

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type("text/plain");
    res.status(500);
    res.send("500 - Server Error");
});

app.listen(app.get("port"), function () {
    console.log("your service is running on port " + app.get("port"));
});
