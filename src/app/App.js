import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../components/Main/Main';
import Navbar from '../components/Nav/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Main selectedPage="Home"/>} />
        <Route path="/home*" element={<Main selectedPage="Home"/>} />
        <Route path="/products" element={<Main selectedPage="Products"/>} />
        <Route path="/product/:id" element={<Main selectedPage="Product"/>} />
        <Route path="/about" element={<Main selectedPage="About"/>} />
        <Route path="/login" element={<Main selectedPage="Login"/>} />
        <Route path="/cart" element={<Main selectedPage="Cart"/>} />
        <Route path="/checkout" element={<Main selectedPage="Checkout"/>} />
        <Route path="/contact" element={<Main selectedPage="Contact"/>} />
        <Route path="/register" element={<Main selectedPage="Register"/>} />
        
      </Routes>
  </BrowserRouter>
  );
}
export default App;
