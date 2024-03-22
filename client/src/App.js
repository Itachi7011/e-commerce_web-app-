import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./App.scss";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import CustomerRegistration from "./Components/Customers/CustomerRegistration";
import SellerRegistration from "./Components/Sellers/SellerRegistration";
import CustomerLogin from "./Components/Customers/CustomerLogin";
import SellerLogin from "./Components/Sellers/SellerLogin";
import MobileProducts from "./Components/ProductsForCustomers/MobileProducts";
import Error from "./Components/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/CustomerRegistration" element={<CustomerRegistration />}></Route>
          <Route path="/SellerRegistration" element={<SellerRegistration />}></Route>

          <Route path="/CustomerLogin" element={<CustomerLogin />}></Route>
          <Route path="/SellerLogin" element={<SellerLogin />}></Route>

          <Route path="/MobileProducts" element={<MobileProducts />}></Route>

          <Route path="*" element={<Error />} > </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
