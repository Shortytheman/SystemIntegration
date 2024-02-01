import json
#pip install pyyaml
import yaml
import xml.etree.ElementTree as ET

class Person:
    def __init__(self, name, age, hobbies):
        self.name = name
        self.age = age
        self.hobbies = hobbies

    def __repr__(self):
        return f"""Person(
        name = {self.name},
        age = {self.age},
        hobbies = {self.hobbies}
        )"""


def read_from_csv(path):
    with open(path, 'r', encoding="utf-8") as csv_document:
        next(csv_document)
        data = [line.strip().replace('"', '') for line in csv_document.readlines()]
        name = data[0].split(",")[0]
        age = data[0].split(",")[1]
        hobbies = data[0].split(",")[2:]

    return Person(name, age, hobbies)
        
me_csv = read_from_csv("02._files\me.csv")


def read_from_json(path):
    with open(path, 'r', encoding="utf-8") as json_document:
        data = json.load(json_document)
        name = data.get("name")
        age = data.get("age")
        hobbies = data.get("hobbies")
    return Person(name,age,hobbies)

me_json = read_from_json("02._files/me.json")


def read_from_txt(path):
    with open(path, 'r', encoding="utf-8") as txt_document:
        lines = [line.strip() for line in txt_document.readlines()]
        name = lines[0].split(" ")[1]
        age = lines[1].split(" ")[1]
        hobbies = lines[2].split(" ")[1:]
    return Person(name,age,hobbies)

me_txt = read_from_txt("02._files/me.txt")


def read_from_xml(path):
    data = ET.parse(path)
    elements = data.getroot()   
    name = elements.find("name").text.strip()
    age = elements.find("age").text.strip()
    hobbies = [hobby.text.strip() for hobby in elements.find('hobbies').iter('hobby')]
    return Person(name,age,hobbies)

me_xml = read_from_xml("02._files/me.xml")


def read_from_yaml(path):
    with open(path, 'r', encoding="utf-8") as yaml_document:
        data = yaml.load(yaml_document, Loader=yaml.SafeLoader)
        name = data.get("name")
        age = data.get("age")
        hobbies = data.get("hobbies")
    return Person(name,age,hobbies)

me_yaml = read_from_yaml("02._files/me.yaml")

#print(me_csv)
#print(me_json)
#print(me_txt)
#print(me_xml)
#print(me_yaml)