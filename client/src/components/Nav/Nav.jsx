import style from "./nav.module.css";
import { Link } from "react-router-dom";
import ima from "./logo/globe.png";
import create from "./logo/copy.png";
import editing from './logo/edit.png'
import hom from "./logo/hom.png";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <div className={pathname === '/home' ? style.divMain : style.divMainCreate}>

      {pathname === "/home" ? (
        
        <div className={style.divS}>
          <Link className={style.a} to="/">
            <img className={style.icon} src={ima}></img>
          </Link>
        </div>

      ) : (

        <Link className={style.a} to=""></Link>

      )}

      {pathname === "/create" ||pathname === "/editing"  ? (

        <Link className={style.link} to="/home">
          <img className={style.home} src={hom}></img>
          Home
        </Link>

      ) : (

        <div className={style.divT}>
          <Link className={style.link} to="/create">
            <img className={style.create} src={create}></img>
            Crea tus actividades
          </Link>
          <Link className={style.link} to="/editing">
            <img className={style.editing} src={editing}></img>
            Editar atividades
          </Link>
        </div>

      )}

    </div>
  );
}
