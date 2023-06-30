import { Link } from "react-router-dom";
import style from "./landing.module.css";

export default function Landing() {
  return (
    <div className={style.back}>

      <div className={style.primary}>
        <img
          src="https://cdn.dribbble.com/users/967990/screenshots/3687586/kiwi_gif_dribble.gif"
          alt="logo-presentacion"
        ></img>
      </div>

      <div className={style.secundary}>
        <h1 className={style.h1}>Countries App</h1>
      </div>

      <div className={style.divT}>
        <Link /* className={style.but} */ to="/home">
          <button className={style.but}>Ingresar</button>
        </Link>
      </div>
    </div>
  );
}
