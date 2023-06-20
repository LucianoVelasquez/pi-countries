import style from './editing.module.css'
import { useSelector } from "react-redux";
import CardActivity from './CardActivity/CardActivity';

import { useDispatch } from 'react-redux';
import { useEffect,useState } from 'react';
import { removeActivity,getActivities } from '../../redux/actions';

export default function ActivitiesContainer() {
    const { actividades } = useSelector((state)=>state);
    const [reload,setReload] = useState('');
    const dispatch = useDispatch();
    let keyId = 0;
  
    useEffect(()=>{
        dispatch(getActivities());
    },[reload])
   
    const handleRemove = (e) =>{
        setReload(e.target.id);
        dispatch(removeActivity(e.target.id));
    }
    
    return(
      <div className={style.divMain}>
  
        <div className={style.divSec}>

          {actividades.length < 1 ? <div className={style.h1}><h1 className={style.h1}>No hay actividades disponibles</h1></div>  :
          actividades.map((acti) => {
            return (
              <CardActivity
                name={acti.name}
                dificultad={acti.dificultad}
                duracion={acti.duracion}
                temporada={acti.temporada}
                bandera={acti.Countries}
                id={acti.id}
                key={keyId++}
                handleRemove={handleRemove}
              />
            );
          })}

        </div>
        
      </div>
    );
  }