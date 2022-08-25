import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Loading } from "../../components/load"
import { PersonagemType } from "../../types/PersonagemType"
import { RANDOM_NUMBER } from "../../utils/requests"
import "./styles.css"

export function YL(){

    const [char, setChar] = useState<PersonagemType>()
    const [removeLoading, setRemoveLoading] = useState<boolean>(false)

    useEffect(() => {
    setTimeout(()=>{
        axios.get(RANDOM_NUMBER).then(resp => {
            const randomChar = resp.data as PersonagemType
            setChar(randomChar as PersonagemType)
            console.log("O personagem: "+randomChar.nome)
            setRemoveLoading(true)
        }) 
    },2000)
    
    }, [])

    return(

        <>
        {!removeLoading && <Loading />}
        {removeLoading &&
            <><div className="yourlove-card">


                    <div className="yl-title">
                        <h1>{char?.nome}</h1>
                    </div><img src={char?.imagem} style={{ borderRadius: "30px" }} /><div className="yourlove-data">
                        <h2 style={{ marginBottom: "0px", fontSize: "20px", marginTop: "28px" }}>
                            Gender: {char?.genero}</h2>
                        <h2 style={{ marginBottom: "0px", fontSize: "20px" }}>
                            Status: {char?.status}</h2>
                        <h2 style={{ fontSize: "20px" }}>
                            Espécie:
                            {char?.especie}</h2>
                    </div>

                     <div className="yl-buttons">
                    <div className='yl-button' onClick={() => window.location.reload()}>
                        Próxim@!</div>
                    <Link to={'/concorrentes'} style={{ textDecorationLine: "none"}}>
                    <div className='yl-buttonc'>
                        Amei!</div>
                    </Link>
                </div>

                </div>
               
                </>
        }
        </>
    )

}