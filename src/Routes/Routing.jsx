import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/HomePage/Home";
import ScrollToTop from "./ScrollToTop";
import Blog from "../Components/Pages/BlogPage/Blog";
import Contact from "../Components/Pages/ContactPage/Contact";
import Products from "../Components/Pages/ProductPage/Products";
import Knowledge from "../Components/Pages/KnowledgePage/Knowledge";
import SignUp from "../Components/Pages/SignupPage/SignUp";
import Login from "../Components/Pages/LoginPage/Login";

const Routing = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/create-user" element={<SignUp />} />
        <Route path="/login-user" element={<Login />} />
      </Routes>
    </>
  );
};

export default Routing;
