import style from "./nav.module.css";
import { Link } from "react-router-dom";
import ima from "./logo/globe.png";
import create from './logo/edit.png';
import hom from './logo/hom.png';
import { useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <div className={style.divMain}>
      
      {
        pathname === '/home'? (
          <Link className={style.a} to="/">
            <img className={style.icon} src={ima}></img>
          </Link>
        ):
        <Link className={style.a} to="">
        </Link>
      }
      
      {pathname === "/create" ? (
        <Link className={style.link} to="/home">
          <img className={style.create} src={hom}></img>
          Home
        </Link>
      ) : (
        <Link className={style.link} to="/create">
          <img className={style.create} src={create}></img>
          Crea tus actividades
        </Link>
      )}
      
      <a className={style.prueba}></a>
    </div>
  );
}
