/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './search.module.css'; 

export default function Search({ handleShowAll,handleSearchid }) {

  const [id,setId] = useState('');
  const {actividades} = useSelector(state=>state);


  const handleChange = (e) => {
    setId(e.target.value);
  }

  return (

    <div className={style.divMain}>
      <div className={style.searchMain}>
        <button className={style.searchButt} onClick={()=> handleShowAll()}>Mostrar todos</button>
        <input type="search" onChange={handleChange} value={id}></input>
        <button onClick={()=>{handleSearchid(id); setId('')}}>Search</button>
      </div>


      <div className={style.divSec}>
        <text className={style.p1}>Continentes:</text>
          <select>
            <option value=''>Selecionar</option>
            <option value='Asia'>Asia</option>
            <option value='Africa'>Africa</option>
            <option value='Europe'>Europe</option>
            <option value='North America'>North America</option>
            <option value='Oceania'>Oceania</option>
            <option value='South America'>South America</option>
          </select>
        <text className={style.p2}>Actividad Turistica:</text>
          <select>
            <option>Selecionar</option>
            {
            actividades?.map(act=>{
              return <option value={act.name} key={act.id}>{act.name}</option>
            })
          }
          </select>
      </div>

      <div>
        <text className={style.p3}>Ordenar por:</text>
        <select className={style.option}>
          <option >Selecionar</option>
          <option value='asc'>Asendente</option>
          <option value='des'>Desendente</option>
          <option value='population'>Poblacion</option>
        </select>
      </div>
    </div>
  );
}
