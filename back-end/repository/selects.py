from repository import PersonagemRepository as pr

def selectAllPersonagens():
    pr.sql.execute("SELECT * FROM personagem")
    print(pr.sql.fetchall())

selectAllPersonagens()

