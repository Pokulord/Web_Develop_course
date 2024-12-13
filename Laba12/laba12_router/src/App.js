import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from "./layout/Nav";
import Contacts from "./pages/Contacts";
import Faq from "./pages/Faq";
import Portfolio from "./pages/Portfolio";
import Products from "./pages/Products";
import Services from "./pages/Services"
import Aboutus from "./pages/Aboutus";
import MakeRequest from './pages/MakeRequest';
import MakeCalc from './pages/Calc';


function App() {
  return (
    <>
      <div className='container' >
        <Nav />
        <Routes>
          <Route path='/faq' element={<Faq />} ></Route>
          <Route path='/cont' element={<Contacts />} ></Route>
          <Route path='/portf' element={<Portfolio />}></Route>
          <Route path='/products' element={<Products />} ></Route>
          <Route path='/services' element={<Services />} ></Route>
          <Route path='/aboutus' element={<Aboutus/>}></Route>
          <Route path='/make-request' element={<MakeRequest/>}></Route>
          <Route path='/make-calc' element = {<MakeCalc/>}></Route>
        </Routes>
      </div> 
    </>
  );
}

export default App;
