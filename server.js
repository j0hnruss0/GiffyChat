var express = require("express");
var path = require("path");
require("dotenv").config();

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "index.html")));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
