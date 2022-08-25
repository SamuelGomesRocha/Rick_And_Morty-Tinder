import './styles.css'
import loadImg from '../../img/load.svg'


export function Loading(){
    return(
        <div className = 'load-container'>

            <img className = 'load-img' src={loadImg} alt="Loading"></img>

        </div>
    );
}