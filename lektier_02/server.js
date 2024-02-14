const express = require('express');
const filereader = require("../lektier_01/js_file_reader");
const app = express();
const getRouter = express.Router()

app.use("/get", getRouter)

app.listen(3000)

//Stringify før route -> JSON

getRouter.get('/XML', (req, res) => {
    const xmldata = filereader.readFromXML();
    console.log("XML Data sent")
    res.send(xmldata);
});

getRouter.get('/YAML', (req, res) => {
    const yamldata = filereader.readFromYAML();
    console.log("YAML Data sent")
    res.send(yamldata);
});

getRouter.get('/JSON', (req, res) => {
    const jsondata = filereader.readFromJSON();
    console.log("JSON Data sent")
    res.send(jsondata);
});

getRouter.get('/TXT', (req, res) => {
    const txtdata = filereader.readFromTXT();
    console.log("TXT Data sent")
    res.send(txtdata);
});

getRouter.get('/CSV', (req, res) => {
    const csvData = filereader.readFromCSV()
        console.log("CSV Data sent")
        res.send(csvData);
});

