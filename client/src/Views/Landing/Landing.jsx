import { Link } from "react-router-dom";
import style from "./landing.module.css";

export default function Landing() {
  return (
    <div className={style.back}>
        <div className={style.tercer}>
        <h1>Welcome</h1>
        </div>
        <div className={style.primary}>
            <img src="https://cdn.dribbble.com/users/967990/screenshots/3687586/kiwi_gif_dribble.gif"></img>
        </div>
        <div className={style.secundary}>
            <Link /* className={style.but} */ to="/home">
            <button>Ingresar</button>
            </Link>
        </div>
        
    </div>
  );
}
