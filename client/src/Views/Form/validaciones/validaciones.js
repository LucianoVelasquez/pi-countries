export function validation(tipo, data, error, setError) {

  switch (tipo) {
    case "nombre":
      if (!/^[^0-9]+$/.test(data.name) && data.name !== "") {
        setError({
          ...error,
          name: "No puede contener numeros",
          sumbit: false,
        });
      } else if (data.name.length > 15) {
        setError({
          ...error,
          name: "Debe tener menos de 15 caracteres",
          sumbit: false,
        });
      } else {
        setError({ ...error, name: "", sumbit: true });
      }
      break;
    case "duracion":
      if (parseInt(data.duracion) > 6) {
        setError({ ...error, duracion: "No puede superar las 6 horas", sumbit: false  });
      }else if(!/^[^a-zA-Z]+$/.test(data.duracion) && data.duracion!== ''){
        setError({ ...error, duracion: "No puede contener letras", sumbit: false  })
      } else {
        setError({ ...error, duracion: "" , sumbit: true });
      }
      break;
    case "temporada":
      if(data.temporada == 'Seleccionar'){
        setError({...error,temporada: 'Debes elegir una opcion', sumbit: false });
      }else{
        setError({...error,temporada: '', sumbit: true })
      }
      break;
    case "pais":
      if(data.temporada == 'Seleccionar'){
        setError({...error,idPais: 'Debes elegir una opcion', sumbit: false });
      }else{
        setError({...error,idPais: '', sumbit: true })
      }
      break;  
    default:
      break;
  }

  return;
}
