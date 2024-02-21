import fs from "fs"
//npm install js-yaml
import yaml from "js-yaml"
//npm install fast-xml-parser
import { XMLParser, XMLBuilder, XMLValidator} from "fast-xml-parser"

class Person {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}

function readFromCSV(path) {
    path = '../../02._files/me.csv'
    const lines = fs.readFileSync(path, 'utf-8').split('\n');
    const [name, age, ...hobbies] = lines[1].split(',');
    return new Person(name, parseInt(age), hobbies.map(hobby => hobby.replace(/"/g, '')));
}

const meCSV = readFromCSV('../02._files/me.csv');

function readFromJSON(path) {
    path = '../../02._files/me.json'
    const data = JSON.parse(fs.readFileSync(path, 'utf-8'));
    const { name, age, hobbies } = data;
    return new Person(name, parseInt(age), hobbies);
}

const meJSON = readFromJSON('../02._files/me.json');

function readFromTXT(path) {
    path = '../../02._files/me.txt'
    const lines = fs.readFileSync(path, 'utf-8').split('\n').map(line => line.trim());
    const name = lines[0].split(" ")[1];
    const age = lines[1].split(" ")[1];
    const hobbies = lines[2].split(" ").splice(1);
    return new Person(name, parseInt(age), hobbies);
}

const meTXT = readFromTXT('../02._files/me.txt');

function readFromXML(path) {
    path = '../../02._files/me.xml'
    const xmlData = fs.readFileSync(path, 'utf-8');
    const parser = new XMLParser();
    const parsedXML = parser.parse(xmlData, { ignoreAttributes: false, attributeNamePrefix : "" });
    const { name, age, hobbies } = parsedXML.me;
    return new Person(name, age, hobbies.hobby);
}

const meXML = readFromXML('../02._files/me.xml');

function readFromYAML(path) {
    path = '../../02._files/me.yaml'
    const yamlData = fs.readFileSync(path, 'utf-8');
    const { name, age, hobbies } = yaml.load(yamlData);
    return new Person(name, age, hobbies);
}

const meYAML = readFromYAML('../02._files/me.yaml');


console.log(meCSV)
console.log(meJSON)
console.log(meTXT)
console.log(meXML)
console.log(meYAML)

export { readFromCSV, readFromJSON, readFromTXT, readFromXML, readFromYAML };