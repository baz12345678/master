import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Collection from './pages/collection'
import About from './pages/about'
import Contact from './pages/contact'
import Product from './pages/product'
import Cart from './pages/cart'
import Login from './pages/login'
import Placeorder from './pages/placeorder'
import Order from './pages/order'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Searchbar from './components/searchbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Announcement from './components/Announcement'

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Announcement/>
<Navbar/>
<Searchbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/placeorder' element={<Placeorder/>}/>
        <Route path='/order' element={<Order/>}/>
        
         
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
