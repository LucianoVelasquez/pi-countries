import { Link } from 'react-router-dom';
import {back} from './landing.module.css'

export default function Landing(){
    return(
     <div className={back}>
        <h1>Welcome</h1>
        <Link to='/home'>
            <button>Ingresar</button>
        </Link>
     </div>   
    );
}