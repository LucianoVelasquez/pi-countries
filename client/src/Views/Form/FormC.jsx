import { useEffect, useState } from "react";
import style from "./Form.module.css";
import { useSelector } from "react-redux";
import {validation} from "./validaciones/validaciones";
import axios from 'axios';

export default function FormC() {
  const [error,setError] = useState({
    name: '',
    dificultad: "",
    duracion: "",
    temporada: 'Debes elegir una opcion',
    idPais: "Debes elegir una opcion",
    sumbit: false,
    tipo: ''
  })
  const [data,setData] = useState({
  name: '',
  dificultad: 1,
  duracion: '',
  temporada: '',
  paises: [],
  idPais: []
  })

  let { allPaises } = useSelector((state)=>state);

  //Ordenamiento
  allPaises = allPaises.sort((a,b)=>{
    if (a.name < b.name) {
      return -1;
    }
    if (a.name  > b.name) {
      return 1;
    }
    return 0;
  });
  ///

  
  useEffect(()=>{
    validation(error.tipo,data,error,setError);
  },[data])

  const hanldeOptions = (e) => {
    const value = e.target.value;
    const id = value.split('.')[1];
    setError({...error,tipo: 'pais'});
    e.preventDefault();
    if(!data.paises.find(e=> e === value) && value !== 'id1'){
      setData({...data,
        paises: [...data.paises,value],
        idPais: [...data.idPais,id]}) 
    } 

  };
  const handleData = (e) =>{
    const tipo = e.target.name;
    const value = e.target.value;
    e.preventDefault();
    switch(tipo){
      case 'nombre':
        return(
          setData({
            ...data,
            name:value,
          }),
          setError({...error,tipo})
        ) 
      case 'duracion':
        return(
          setData({
            ...data,
            duracion: value,
          }),
          setError({...error,tipo})
        ) 
        case 'temporada':
          return (
            setData({
              ...data,
              temporada: value !== 'Seleccionar'? value : 'Seleccionar',
            }),
            setError({...error,tipo})
          ) 
        case 'dificultad':
          return setData({
            ...data,
            dificultad: value,
          }) 
      default:
        return;
    }

  }
  const handleClick = (e) =>{
    e.preventDefault();
    const paisId = e.target.id.split('.')[1];
    setData({...data,
      paises: data.paises.filter(pais=> pais !== e.target.id),
      idPais: data.idPais.filter(id=> id !== paisId)
    })
  }
  const handleSubmit = async (e) =>{
    try {
      e.preventDefault();
    const endpoint = 'http://localhost:3001/activities';

      const newActiviti = {
        name: data.name,
        dificultad: data.dificultad,
        duracion: data.duracion,
        temporada: data.temporada,
        countri: data.idPais
      } 

      if(error.duracion <= 6){
        const response = await axios.post(endpoint,newActiviti);
        const message = response.data.message;
        alert(message);
        setData({...data,name: '',duracion: '',dificultad: 1})
      }else{
        alert('No se pueden superar las 6 horas.')
      }
      

    } catch (error) {
      alert(error.response.data);
    }
    
   
  }

  return (
    <div className={style.divMain}>
      <h1>Crea una actividad Turistica</h1>

      <div className={style.divSec}>

        <form className={style.styleForm} onSubmit={handleSubmit}>

          <div className={style.divOptions}>
            <label className={style.lavels}>Nombre de actividad</label>
            <input name="nombre" className={data.name == ''? style.inputError: ''} value={data.name} type="text" onChange={(e)=>handleData(e)}></input>
            <span className={style.spanError}>{error.name}</span>


            <label className={style.lavels}>Duracion</label>
            <input
              name="duracion"
              type="text" 
              placeholder="cantidad en horas"
              value={data.duracion}
              onChange={(e)=>handleData(e)}
            ></input>
            <span className={style.spanError}>{error.duracion}</span>


            <label className={style.lavels}>Paises</label>
            <select className={style.option} onChange={(e) =>hanldeOptions(e)} >
              <option value="id1">Selecionar</option>
               {allPaises?.map((e)=>{
                return <option key={e.id} title={e.id} value={`p.${e.id}.${e.name}`}>{e.name}</option> 
              })} 
            </select>
            <span className={style.spanError}>{error.idPais}</span>

            <button className={style.button}>Crear actividad</button>
            
          </div>

          <div className={style.divTier}>
            <label className={style.lavels}>
              Dificultad {` "${data.dificultad}" `}
            </label>
            <input
              name="dificultad"
              type="range"
              min="1"
              max="5"
              step="1"
              defaultValue={data.dificultad}
              onChange={(e)=>handleData(e)}
            ></input>
            <span className="style.error"></span>

            <label className={style.lavels}>Temporada</label>
            <select className={style.option} name='temporada' onChange={(e)=>handleData(e)} >
              <option>Seleccionar</option>
              <option value={'Verano'}>Verano</option>
              <option value={'Otoño'}>Otoño</option>
              <option value={'Invierno'}>Invierno</option>
              <option value={'Primavera'}>Primavera</option>
            </select>
            <span className={style.spanError}>{error.temporada}</span>

            <label className={style.lavels}>Paises donde se agregan</label>
            <div className={style.divPaises}>
              {
                data.paises.map(e=>{
                  return <button onClick={(event)=>handleClick(event)}  className={style.p} key={e+1}>{e.split('.')[2]}
                            <span className={style.link} id={e}>X</span>
                          </button>
                })
              }
            </div>
            
          </div>

        </form>

      </div>

    </div>
  );
}
