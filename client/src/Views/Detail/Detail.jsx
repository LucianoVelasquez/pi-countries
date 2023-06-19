import { Link, useParams } from 'react-router-dom'
import style from './detail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCountrie } from '../../redux/actions';
import { useEffect } from 'react';

export default function Detail(){
  const {id} = useParams();
  const dispatch = useDispatch();
  const { dataPaises } = useSelector((state)=>state);

  useEffect(()=>{
    dispatch(getCountrie(id));
  },[id])

    return(
      <div className={style.card}>
      <div className={style.cardInner}>
          <h1>{dataPaises[0].id}</h1>
          <div>
            <img className={style.cardImg} src={dataPaises[0].flags} alt="bandera de un pais."></img>
          </div>
          <div className={style.seccion}>
            <text className={style.span}>Nombre:{dataPaises[0].name}</text>
            <text className={style.span}>Continente:{dataPaises[0].continents}</text>
            <text className={style.span}>Capital:{dataPaises[0].continents}</text>
            {dataPaises[0].subregion? <text className={style.span}>Subregión:{dataPaises[0].subregion}</text>: ''}
            {dataPaises[0].area ? <text className={style.span}>Área:{dataPaises[0].area}</text> : ''}
            <text className={style.span}>Población:{dataPaises[0].population}</text>
          </div>
          <Link className={style.link} to={'/home'}><button className={style.button}>Volver</button></Link>
      </div>
    </div>
    )
}