import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SearchBard from "../../components/Search/SearchBar";
import Paginado from '../../components/Paginado/paginado'
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getActivities, getCountrie, getCountries,filterCountries,orderCountries } from "../../redux/actions";

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
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);

  const handleOrder = (e) => { //Ver clase de Selene
    const value = e.target.value;
    value !== 'default'? 
    dispatch(orderCountries(value)) : '';
    setCurrentPage(1)
    setOrder(`Ordenado: ${value}`); //Sirve para que se renderize el componente y muestre correctamente el orden de las cartas.
  };
  const handleSearchid = (id) => {
    dispatch(getCountrie(id));
    setCurrentPage(1)
  };

  const handleFilter = (e) =>{
    const value = e.target.value;
    value !== 'Default' ? dispatch(filterCountries(value)) : '';
    
    setCurrentPage(1)
  }  





  return (
    <>
      <SearchBard
        handleOrder={handleOrder}
        handleSearchid={handleSearchid}
        handleFilter={handleFilter}
      />

      <Paginado
        countriesPerPage={countriesPerPage}
        paises={paises.length}
        paginado={paginado}
      ></Paginado>

      <CardsContainer currentCountries={currentCountries} />

      <Paginado
        countriesPerPage={countriesPerPage}
        paises={paises.length}
        paginado={paginado}
      ></Paginado>
    </>
  );
}
