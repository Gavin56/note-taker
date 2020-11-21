const router = require("express").Router();
const fs = require("fs");
let notes = require("./db/db.json");

router.get("/api/notes", function (req, res) {
    //Only read
    fs.readFile("./db/db.json", "utf8", function (error, data) {
        data = JSON.parse(data);
        //console.log(data);
        res.json(data);
    });
});

router.post("/api/notes", function (req, res) {
    //Read + write
    notes.push(req.body);
    return res.json(note);
});

module.exports = router;