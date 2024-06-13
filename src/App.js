import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Birthday from "./Components/Birthday";
import Mandapam from "./Components/Mandapam";
import Mangalashnanam from "./Components/Haldi";
import SmallKids from "./Components/SmallKids";
import Reception from "./Components/Reception";
import Gates from "./Components/Gates";
import ContactUs from "./Components/ContactUs";
import NotFound from "./Components/NotFound";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/mandapam" element={<Mandapam />} />
        <Route path="/mangalashnanam" element={<Mangalashnanam />} />
        <Route path="/smallkids" element={<SmallKids />} />
        <Route path="/reception" element={<Reception />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gates" element={<Gates />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
