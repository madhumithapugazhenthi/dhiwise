import React from "react";
import Completed from "pages/Completed";
import Checkout from "pages/Checkout";
import Cart from "pages/Cart";
import ProductDetails from "pages/ProductDetails";
import ProductList from "pages/ProductList";
import CategorieswithSidebar from "pages/CategorieswithSidebar";
import HomepageVThree from "pages/HomepageVThree";
import HomepageVTwo from "pages/HomepageVTwo";
import HomepageVOne from "pages/HomepageVOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageVOne />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homepagevtwo" element={<HomepageVTwo />} />
        <Route path="/homepagevthree" element={<HomepageVThree />} />
        <Route
          path="/categorieswithsidebar"
          element={<CategorieswithSidebar />}
        />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
