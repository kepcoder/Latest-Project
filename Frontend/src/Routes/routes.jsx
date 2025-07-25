import { Routes, Route } from "react-router-dom"
import Home from './../components/Home';
import Products from '../Pages/Products';
import Worldwide from './../Pages/worldwide';
import EthicalSourcing from './../Pages/ethicalSourcing';
import Login from './../Pages/Login';
import Register from '../Pages/Register';
import Influencer from "../Pages/influencer";
import CartPage from './../Pages/cart';
import PaymentPage from './../Pages/paymentPage';
import NotFound from './../Pages/NotFoundPage';

const AppRoute = () => {
   return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/worldwide" element={<Worldwide/>} />
      <Route path="/ethicalsourcing" element={<EthicalSourcing/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/influencer" element={<Influencer/>} />
      <Route path="/carts" element={<CartPage/>} />
      <Route path="/carts/paymentpage" element={<PaymentPage/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default AppRoute
