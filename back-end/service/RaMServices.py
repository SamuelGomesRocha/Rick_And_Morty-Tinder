import json
import sys
import requests as req
import random
from entities.Personagem import Personagem

sys.path.insert(0, '../')
from repository import PersonagemRepository as pr

def getSpecies(personagens):
    species = []
    for p in personagens:
        print("Olhe o p: "+ str(p))
        for per in p.get('results'):
            species.append(per.get('species'))
    return removeDuplicadas(species)

def removeDuplicadas(lista):
    cleanList = []
    for l in lista:
        if l not in cleanList:
          cleanList.append(l)
    return cleanList

def getSyncro(persona):
    personagens = []
    for p in persona:
        for per in p.get('results'):
            personagem = Personagem(per.get('id'), per.get('name'), per.get('status'), per.get('species'), per.get('gender'), per.get('image'))
            personagens.append(personagem)
    pr.insertPersonagem(personagens)
    return "Carga completa!"

def randomChar():
    n = random.randint(1, 820)
    per = json.loads(req.get(f'https://rickandmortyapi.com/api/character/{n}').content)
    randomChar = {"id":per.get('id'), "nome":per.get('name'), "status": per.get('status'), "especie":per.get('species'), "genero":per.get('gender'), "imagem":per.get('image')}
    return randomChar

def getCharByName(personagens, name):
    for p in personagens:
        if(name == p.get('name')):
            return p
    return "Personagem não encontrado"

def transformInPersonaTipe(personagens):
    personas = []
    for p in personagens:
        print("Olhe o p: "+ str(p))
        for per in p.get('results'):
            personas = personas + [{"id":per.get('id'), "nome":per.get('name'), "status": per.get('status'), "especie":per.get('species'), "genero":per.get('gender'), "imagem":per.get('image')}]
    return personas




