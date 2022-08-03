import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomShop from './pages/CustomShop';
import Cart from './pages/Cart';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/customshop' element={<CustomShop/>}/>
        <Route  path='/cart' element={<Cart/>}/>
      </Routes>     
      <Footer/>
    </div>
  );
}

export default App;
