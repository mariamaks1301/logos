import { Route, Routes } from "react-router-dom";
import Layout from "./Lyout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Sales from "./pages/Sales/Sales";
import Delivery from "./pages/Delivery/Delivery";
import Cotalog from "./pages/Catalog/Cotalog";
import Product from "./pages/Product/Product";
import AddProduct from "./pages/AddProduct/AddProduct";
import Basket from "./pages/Basket/Basket";
import './styles/style.scss';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={''} element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/sales" element={<Sales/>}/>
          <Route path="/delivery" element={<Delivery/>}/>
          <Route path="/cotalog/:category" element={<Cotalog/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/product/add" element={<AddProduct/>}/>
          <Route path="/basket" element={<Basket/>}/>

        </Route>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>

      </Routes>
    </div>
  );
}

export default App;
