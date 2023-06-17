import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {setValidation,accesSubmit} from "./validaciones/validaciones";
import style from "./Form.module.css";
import axios from 'axios';
import InputName from "./ComponentsForm/InputName/InputName.jsx";
import InputDuracion from "./ComponentsForm/InputDuracion/InputDuracion";
import InputPaises from "./ComponentsForm/InputPaises/InputPaises";
import InputTemp from "./ComponentsForm/InputTemp/InputTemp";
import InputDificult from "./ComponentsForm/InputDificult/InputDificult";
import ShowPaises from "./ComponentsForm/ShowPaises/ShowPaises";



export default function FormC() {
  const [error,setError] = useState({
    name: '',
    dificultad: "Debes elegir una dificultad",
    duracion: "",
    temporada: 'Debes elegir una opcion',
    idPais: "Debes elegir una opcion",
    sumbit: false,
    tipo: ''
  })
  const [data,setData] = useState({
  name: '',
  dificultad: 0,
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

    setValidation(error.tipo,data,error,setError);

  },[data])

  const setClear = () =>{
    setData({...data,name: '',duracion: '',temporada: '',dificultad: 0,paises: [],idPais:[]})
    setError({
      name: '',
      dificultad: "Debes elegir una dificultad",
      duracion: "",
      temporada: 'Debes elegir una opcion',
      idPais: "Debes elegir una opcion",
      sumbit: false,
      tipo: ''
    })
  }

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
    console.log(tipo);
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
        },
        setError({...error,tipo})) 
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
    setError({...error,tipo:"pais"});
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
      
      if(accesSubmit(error)){
        const response = await axios.post(endpoint,newActiviti);
        const message = response.data.message;
        alert(message);
        setClear();
      }else{
        alert('Completa correctamente los campos.')
      }
      

    } catch (error) {
      alert(error.response.data);
    }
    
   
  }

  return (
   
    <div className={style.divMain}>
      <div className={style.divSec}>
      <h1>Crea una actividad Turistica</h1>

        <form className={style.styleForm} onSubmit={handleSubmit}>

          <div className={style.divOptions}>

            <InputName data={data} handleData={handleData} error={error}/>

            <InputDuracion data={data} handleData={handleData} error={error}/>
            
            <InputPaises allPaises={allPaises} hanldeOptions={hanldeOptions} error={error} data={data}/>

            <InputTemp handleData={handleData} error={error} data={data}/>

            <InputDificult data={data} handleData={handleData} error={error}/>
      
            <button className={style.button}>Crear actividad</button>

          </div>

          <ShowPaises data={data} handleClick={handleClick}/>

        </form>
      </div>
    </div>  
  );
}
