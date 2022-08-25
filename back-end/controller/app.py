from flask import Flask, request
import requests as req
import json
from flask_cors import CORS
import sys
sys.path.insert(0, '../')
from service import RaMServices as rms

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['GET'])
def root():
    return "Hello, World!"

@app.route("/personagens", methods=['GET'])
def getCharacteres():
    personagens = []
    for n in range(42):
        personagens.append(json.loads(req.get(f'https://rickandmortyapi.com/api/character?page={n}').content))
        print(personagens)
    return personagens

@app.route("/chars", methods=['GET'])
def getPersonagens():
    return rms.transformInPersonaTipe(getCharacteres())

@app.route("/especies", methods=['GET'])
def madeAndCatalogOfSpecies():
    return rms.getSpecies(getCharacteres())

@app.route("/sync", methods = ['GET'])
def syncronization():
    return rms.getSyncro(getCharacteres())

@app.route("/random", methods = ['GET'])
def getRandomChar():
    return rms.randomChar()

@app.route("/char_by_name", methods = ['GET'])
def getCharByName():
    return rms.getCharByName(getCharacteres(),
               request.args.get('char'))


app.run()