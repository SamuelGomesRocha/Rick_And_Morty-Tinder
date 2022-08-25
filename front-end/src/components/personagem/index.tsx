import { PersonagemType } from "../../types/PersonagemType"
import './styles.css'

type Props = {
    p : PersonagemType
}

export function PersonagemCard({p} : Props){

    return(
        <div className="personagem-card">


                    <div className="personagem-title">
                        <h1 style={{fontSize:'24px'}}>{p.nome}</h1>
                    </div><img src={p.imagem} style={{ borderRadius: "30px", width: '200px' }} /><div className="personagem-data">
                        <h2 style={{ marginBottom: "0px", fontSize: "18px", marginTop: "20px" }}>
                            Gender: {p.genero}</h2>
                        <h2 style={{ marginBottom: "0px", fontSize: "18px" }}>
                            Status: {p.status}</h2>
                        <h2 style={{ fontSize: "18px" }}>
                            Espécie:
                            {p.especie}</h2>
        </div>
        </div>
    )

}