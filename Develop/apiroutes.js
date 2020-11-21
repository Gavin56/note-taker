const router = require("express").Router();
const fs = require("fs");
let notes = require("./db/db.json");
let uniqid = require('uniqid');

router.get("/api/notes", function (req, res) {
    //Only read
    fs.readFile("./db/db.json", "utf8", function (error, data) {
        data = JSON.parse(data);
        console.log(data);
        res.json(data);
    });
});

router.post("/api/notes", function (req, res) {
    //Read + write
    console.log("Note: ", req.body);

    //Auto increment the id
    let notes = {...req.body, id:uniqid()};

    fs.readFile("./db/db.json", "utf8", function (error, data) {
        data = JSON.parse(data);
        data.push(notes);
        
        //Write
        fs.writeFile("./db/db.json", JSON.stringify(data), function (error) {
            res.json(data);
        });
    });
    // notes.push(req.body);
    // return res.json(note);
});

module.exports = router;