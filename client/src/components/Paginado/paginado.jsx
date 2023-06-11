/* eslint-disable react/prop-types */
import style from './paginado.module.css';
export default function Paginado({ countriesPerPage, paises, paginado }) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(paises / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={style.divMain}>
        <nav >
        <ul className={style.divul}>
          {pageNumbers &&
            pageNumbers.map((num) => (
              <li className={style.li} key={num}>
                <a
                  onClick={() => {
                    paginado(num+1);
                  }}
                >
                  {num}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
