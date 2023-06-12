/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './search.module.css'; 

export default function Search({ handleOrder,handleSearchid,handleFilter }) {
  let keyId = 0;
  const [id,setId] = useState('');
  const {allActividades} = useSelector(state=>state);


  const handleChange = (e) => {
    setId(e.target.value);
  }

  return (

    <div className={style.divMain}>
      <div className={style.searchMain}>
        {/* <button className={style.searchButt} onClick={handleShowAll}>Mostrar todos</button> */}
        <input type="search" onChange={handleChange} value={id}></input>
        <button onClick={()=>{handleSearchid(id); setId('')}}>Search</button>
      </div>


      <div className={style.divSec}>
        <span className={style.p1}>Continentes:</span>

          <select onChange={handleFilter}>
            <option value='con.ALL'>Todos</option>
            <option value='con.Asia'>Asia</option>
            <option value='con.Africa'>Africa</option>
            <option value='con.Europe'>Europe</option>
            <option value='con.North America'>North America</option>
            <option value='con.Oceania'>Oceania</option>
            <option value='con.South America'>South America</option>
          </select>

        <span className={style.p2}>Actividad Turistica:</span>
          <select onChange={handleFilter} value='Default' >
            <option value='Default'>Selecionar</option>
            {
               allActividades?.map(act=>{
                return <option value={act.name} key={keyId++}>{act.name}</option>
              })
            }
          </select>
      </div>

      <div>
        <span className={style.p3}>Ordenar por:</span>
        <select className={style.option} onChange={handleOrder}>
          <option value='default'>Selecionar</option>
          <option value='asc'>Asendente</option>
          <option value='des'>Desendente</option>
          <option value='popu'>Poblacion</option>
        </select>
      </div>
    </div>
  );
}
