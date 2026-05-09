import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'
import ProductDetails from './components/ProductDetails'
import CartProvider from './context/CartContext'

function App() {

  return ( 

  <AuthProvider>
    <CartProvider>
  <div className='app'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path='*' element={<h1 style={{ textAlign: 'center', margin: '10rem 0' }}>404 Not Found</h1>} />
    </Routes>
  </div>
  </CartProvider>
</AuthProvider>
  )
}

export default App
