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

router.delete("/api/notes/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (error, data) => {
        const deleteData = JSON.parse(data);
        let newJSON = deleteData.filter(note => req.params.id !== note.id);
        newJSON = JSON.stringify(newJSON);
        
        fs.writeFile("./db/db.json", newJSON, (error, data) => {
            console.log(error);
            res.json({ ok: true });
        });
    });
});

module.exports = router;