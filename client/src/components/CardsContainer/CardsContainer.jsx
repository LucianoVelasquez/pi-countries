import Card from "../Card/Card";
import style from "./cardContainer.module.css";
import { useSelector } from 'react-redux';

export default function CardsContainer() {
  
  const paises = useSelector(state => state.dataPaises);
  let idKey = 0;

  return (
    <div className={style.divMain}>
      {paises.map((pais) => {
        return (
          <Card
            bandera={pais.flags}
            name={pais.name}
            continente={pais.continents}
            key={idKey++}
          />
        );
      })}
    </div>
  );
}
