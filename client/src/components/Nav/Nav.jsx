import style from "./nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className={style.divMain}>
      <Link className={style.logo} to="/home">
        logo
      </Link>

      <Link className={style.link} to="/create">
        From
      </Link>
    </div>
  );
}
