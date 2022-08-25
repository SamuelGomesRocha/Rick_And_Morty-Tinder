import './styles.css'
import { AiFillHeart } from 'react-icons/ai';
import { useState } from "react";
import { YL } from '../yl';




export function MatchScreen(){

    const [verifyLoad, setVerifyLoad] = useState<boolean>(true)
    const [titleSize, setTitleSize] = useState<Number>(24) 
    setTimeout(() => {setVerifyLoad(false), setTitleSize(34)}, 2000)


    return(
        <div className="rm-container">
          {!verifyLoad &&
            <h1 style={{
                alignItems:"center", marginBottom:"40px", color:"#e5d18a",
                fontSize:`${titleSize}px`, marginTop:"20px"
                }}><AiFillHeart />MATCH!!!!!!!!<AiFillHeart /></h1>
            }
            <YL />
        </div>
    );

}