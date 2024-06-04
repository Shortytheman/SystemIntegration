import express from "express";
import { readFromXML, readFromYAML, readFromJSON, readFromTXT, readFromCSV } from "../01a/js_file_reader.js";

const router = express.Router();

router.get('/XML', (req, res) => {
    const xmldata = readFromXML();
    console.log("XML Data sent");
    res.send(xmldata);
});

router.get('/YAML', (req, res) => {
    const yamldata = readFromYAML();
    console.log("YAML Data sent");
    res.send(yamldata);
});

router.get('/JSON', (req, res) => {
    const jsondata = readFromJSON();
    console.log("JSON Data sent");
    res.send(jsondata);
});

router.get('/TXT', (req, res) => {
    const txtdata = readFromTXT();
    console.log("TXT Data sent");
    res.send(txtdata);
});

router.get('/CSV', (req, res) => {
    const csvData = readFromCSV();
    console.log("CSV Data sent");
    res.send(csvData);
});

export default router;