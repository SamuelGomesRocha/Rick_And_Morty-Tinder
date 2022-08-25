import { Link } from 'react-router-dom'
import './styles.css'


export function RootScreen(){
    return(
        <div className="root-container">
            <Link to={"/match"} style={{ textDecorationLine: "none"}}>
            <div className='root-button'>
                    Encontre seu amor</div>
            </Link>
        </div>
    )
}