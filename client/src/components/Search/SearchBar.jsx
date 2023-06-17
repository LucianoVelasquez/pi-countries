/* eslint-disable react/prop-types */
import {useState } from 'react';
import { useSelector} from 'react-redux';
import style from './search.module.css'; 
import ButtonE from './Buttons-Order/buttonE';
import ButtonC from './Butons-Continents/buttonC'

export default function Search({ hanldeClickOrder,handleSearchid,handleFilter }) {
  let keyId = 0;
  const [id,setId] = useState('');

  const {showActivitiesFilter} = useSelector(state=>state);

  const handleChange = (e) => {
    setId(e.target.value);
  }


  return (

    <div className={style.divMain}>
      <div className={style.searchMain}>
        <input type="search" className={style.input} onChange={handleChange} value={id}></input>
        <button onClick={()=>{handleSearchid(id); setId('')}}>Search</button>
      </div>


      <div className={style.divSec}>
        <span className={style.p1}>Continentes</span>
          <ButtonC handleFilter={handleFilter}></ButtonC>
      </div>

      <div>
        <span className={style.p3}>Ordenar por</span>
        <ButtonE hanldeClickOrder={hanldeClickOrder}></ButtonE>
      </div>

      <div className={style.divActi}>
        <span className={style.p2}>Actividad Turistica</span>
            {
              
              showActivitiesFilter.length < 1 ? <span className={style.p2}>No hay actividades disponibles</span>: 
              showActivitiesFilter.map(act=>{
                return <button className={style.buttActi} id={act.name} key={keyId++} onClick={(e)=>handleFilter(e)}>{act.name}</button>
              })
            } 
      </div>

    </div>
  );
}
