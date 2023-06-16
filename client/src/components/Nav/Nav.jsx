import style from "./nav.module.css";
import { Link } from "react-router-dom";
import ima from "./logo/airplane.png";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <div className={style.divMain}>
      
      {pathname === "/create" ? (
        <Link className={style.a} to="/home">
          <img className={style.icon} src={ima}></img>
        </Link>
      ) : (
        <Link className={style.a} to="/">
          <img className={style.icon} src={ima}></img>
        </Link>
      )}

      {pathname === "/create" ? (
        ""
      ) : (
        <Link className={style.link} to="/create">
          Crea tus actividades
        </Link>
      )}
    </div>
  );
}
