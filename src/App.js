import React from 'react';
import './App.css';
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './components/Layout';
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Contact from "../src/pages/Contact"
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import SingleBlog from "./pages/SingleBlog"
import ComapreProduct from './pages/ComapreProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndCondition from './pages/TermsAndCondition';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from "./pages/Checkout"

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />}/>
    <Route path="contact" element={<Contact />} />
    <Route path="product" element={<OurStore />} />
    <Route path="/product/:id" element={<SingleProduct />}/>
    <Route path="blogs" element={<Blog />} />
    <Route path="cart" element={<Cart />}/>
    <Route path="checkout" element={<Checkout />}/>
    <Route path="blog/:id" element={<SingleBlog />} />
    <Route path='compare-product' element={<ComapreProduct />} />
    <Route path="wishlist" element={<Wishlist />}/>
    <Route path="login" element={<Login />} />
    <Route path="forgot-password" element={<ForgotPassword />} />
    <Route path="signup" element={<Signup />} />
    <Route path="reset-password" element={<Resetpassword />} />
    <Route path="privacy-policy" element={<PrivacyPolicy />} />
    <Route path="refund-policy" element={<RefundPolicy />} />
    <Route path="shipping-policy" element={<ShippingPolicy />} />
    <Route path="term-conditions" element={<TermsAndCondition />} />
    
    </Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
