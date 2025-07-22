import { Routes, Route } from "react-router-dom"
import Home from './../components/Home';
import Products from '../Pages/Products';


const AppRoute = () => {
   return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      {/* Add more routes here */}
    </Routes>
  );
}

export default AppRoute
