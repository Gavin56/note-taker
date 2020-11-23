const express = require("express");
const apiFile = require("./apiroutes");
const htmlFile = require("./htmlroutes");



var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(apiFile);
app.use(htmlFile);

//Opens the port and notifies.
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});