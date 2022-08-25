import sqlite3
import sys
sys.path.insert(0, '../')
from entities.Personagem import Personagem

db = sqlite3.connect('remdatabase.sql', check_same_thread=False)
sql = db.cursor()

def insertPersonagem(personagens):
    lista = []
    for p in personagens:
        lista.append((p.id, p.nome, p.status, p.especie, p.genero, p.imagem))
        print("Lista: "+ str(lista))
        print("Persona: "+ str(p.id)+p.nome+p.status+p.especie+p.genero+ p.imagem)
    try:
        sql.executemany("INSERT INTO personagem (id, nome, status, especie, genero, imagem) VALUES(?, ?, ?, ?, ?, ?)",
                        lista)
        db.commit()
        print("Transação realizada com sucesso")
        db.close()
    except:
        db.rollback()


sql.execute("INSERT INTO personagem(id, nome, status, especie, genero, imagem) VALUES(2, 'teste',  'teste', 'teste', 'teste', 'teste')")