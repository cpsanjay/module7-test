import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/Shop";
import Blog from "./Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import Pages from "./components/Pages";
import Login from "./components/Login";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Products />
            </>
          }
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
