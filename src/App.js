import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage'; // Halaman Produk
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart'; // Halaman Keranjang Belanja
import Checkout from './components/Checkout'; // Halaman Checkout
import Payment from './components/Payment'; // Halaman Pembayaran
import { CartProvider } from './context/CartContext'; // Context untuk Keranjang Belanja

const App = () => {
  return (
    <Router>
       <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
      </CartProvider>
    </Router>
  );
};

export default App;
