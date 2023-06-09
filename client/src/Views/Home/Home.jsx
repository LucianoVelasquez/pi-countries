import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SearchBard from "../../components/Search/SearchBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivities, getCountrie, getCountries } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);

  const handleShowAll = () =>{
    dispatch(getCountries());
  }
  const handleSearchid = (id) =>{
    dispatch(getCountrie(id));
  }


  return (
    <>
      <SearchBard handleShowAll={handleShowAll} handleSearchid={handleSearchid}/>
      <CardsContainer />
    </>
  );
}
