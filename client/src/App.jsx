import { Route, Routes, useLocation } from "react-router-dom";
import { Detail, FormC, Home, Landing } from "./Views/index";
import Nav from "./components/Nav/Nav";

function App() {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname !== '/' && <Nav/>}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/create" element={<FormC />} />
      </Routes>
    </div>
  );
}

export default App;
