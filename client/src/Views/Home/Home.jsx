import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SearchBard from "../../components/Search/SearchBar";
import Paginado from '../../components/Paginado/paginado'
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getActivities, getCountrie, getCountries,filterCountries,orderCountries,filterActivities } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();
  const paises = useSelector((state) => state.dataPaises);
  const [order,setOrder] = useState('');

  //Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const indexOfLastCountrie = currentPage * countriesPerPage;
  const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage;
  let currentCountries = paises.slice(
    indexOfFirstCountrie,
    indexOfLastCountrie
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //


  useEffect(() => {
    
    dispatch(getCountries())
    dispatch(getActivities());
    setTimeout(()=>{
      dispatch(filterActivities());
    },200)
  }, []);

  const hanldeClickOrder = (e) => {
    const value = e.target.id;
    console.log(e);
    dispatch(orderCountries(value));
    setCurrentPage(1)
    setOrder(`Ordenado: ${value}`); //Sirve para que se renderize el componente y muestre correctamente el orden de las cartas.
  };

  const handleSearchid = (id) => {
    dispatch(getCountrie(id));
    setCurrentPage(1)
  };

  //
  const handleFilter = (e) =>{ 
    const value = e.target.id;
    dispatch(filterCountries(value))
    setCurrentPage(1)
  }  

  return (
    <>
      <SearchBard hanldeClickOrder={hanldeClickOrder} handleSearchid={handleSearchid} handleFilter={handleFilter}/>

      <Paginado countriesPerPage={countriesPerPage} paises={paises.length} paginado={paginado}/>

      <CardsContainer currentCountries={currentCountries} />

      <Paginado countriesPerPage={countriesPerPage} paises={paises.length} paginado={paginado}/>
    </>
  );
}
