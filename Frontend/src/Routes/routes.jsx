import { Routes, Route } from "react-router-dom"
import Home from './../components/Home';
import Products from '../Pages/Products';
import Worldwide from './../Pages/worldwide';
import EthicalSourcing from './../Pages/ethicalSourcing';


const AppRoute = () => {
   return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/worldwide" element={<Worldwide/>} />
      <Route path="/ethicalsourcing" element={<EthicalSourcing/>} />
      {/* Add more routes here */}
    </Routes>
  );
}

export default AppRoute
