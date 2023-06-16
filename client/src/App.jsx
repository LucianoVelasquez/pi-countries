import { Route, Routes, useLocation } from "react-router-dom";
import { Detail, FormC, Home, Landing } from "./Views/index";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== '/' && <Nav/>}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<FormC />} />
      </Routes>
      {pathname !== '/' && <Footer/>}
    </>
  );
}

export default App;
