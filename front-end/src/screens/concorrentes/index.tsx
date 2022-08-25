import axios from 'axios'
import { useEffect, useState } from 'react'
import { Loading } from '../../components/load'
import { PersonagemCard } from '../../components/personagem'
import { PersonagemType } from '../../types/PersonagemType'
import { ALL_CHARS } from '../../utils/requests'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export function Concorrentes(){

    const [page, setPage] = useState<PersonagemType[]>()
    const [removeLoading, setRemoveLoading] = useState<boolean>(false)

    useEffect(()=>{
        axios.get(ALL_CHARS).then(resp => {
            const data = resp.data as PersonagemType[]
            setPage(data)
            data.map(p => {
                {console.log("Personagens: "+p.nome)}
            })
            setRemoveLoading(true)
        })
    }, [])

    return(
        <>
        {!removeLoading && 
        <>
        <div className='Loadzim'>
           <h3>Carregando lista de concorrentes</h3>
            <Loading />
        </div>
        </>
        }
        {removeLoading &&  
            <>
                <div className='concorrentes-title'>
                    <h1>Lista de concorrentes</h1>
                </div>
                <div className='container'>
                    <div className='row' style={{
                        marginBottom:"10px"
                       }}>
                        {page?.map(persona => (
                            <div key={persona.id} 
                            className="col-sm-7 col-lg-5 col-xl-4"
                            style={{marginTop:"40px"}}
                            >
                                <PersonagemCard p={persona}/>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </>
        }
        
        </>
    )
}