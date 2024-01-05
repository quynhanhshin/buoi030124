import logo from './logo.svg';
import './App.css';
import ReactStrap from './component/ReactStrap';
import Footer from './component/footer/Footer'
import "./style.css"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from "./component/header/Header"
import Home from './component/home/Home';
import Menu from './component/Menu';
import NotFound from './component/NotFound';
import Product from './component/Product';
import ListProduct from './component/ListProduct';


function App() {
  return (
    <div>
      {/* <ReactStrap/>
      <Footer/> */}
      <BrowserRouter>
      <Routes>
        <Route index element={<ListProduct/>}/>
        <Route path="/footer" element={<Footer/>} />
        <Route path="/header" element={<Header/>}/>
        <Route path="/reactstrap" element={<ReactStrap/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
