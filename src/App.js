import Navbars from './Components/Navbars';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import myContext from './Context/Context';
import './App.css';
import  Home  from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Clothes } from './Data/Data';
import Wishlist from './Components/Wishlist';
import AllenSolly from './Components/AllenSolly'
import ParkAvanue from './Components/ParkAvanue';
import DennisLingo from './Components/DennisLingo';
import PeterEngland from './Components/PeterEngland';
import VanHuesen from './Components/VanHuesen';
import UserLogin from './Components/UserLogin';
import SignUp from './Components/SignUp';
import AdminLogin from './Components/Admin';
import Shirts from './Components/Shirts';
import Tshirts from './Components/Tshirts';
import Cart from './Components/Cart';
import Search from './Components/Search';
import AdminFun from './Components/AdminFun';
import Suits from './Components/Suits';
import Jeans from './Components/Jeans';
import Trousers from './Components/Trousers';
import AdminProducts from './Components/AdminProducts';
import AdminUsers from './Components/AdminUsers';
import ProductDetails from './Components/ProductDetails';
import UserProfile from './Components/UserProfile';
function App() {
  const[data,setData]=useState(Clothes)
  const[like,setLike]=useState([])
  const[user,setUser]=useState([])
  const[addcart,setAddcart]=useState([])
  const[loginstate,setLoginState]=useState(false)
  const [input,setInput]=useState("")
  const[product,setProduct]=useState([])
  const[state,setState]=useState({})
  const[signUp,setSignUp]=useState({username:"",email:"",password:""})
  const Dress={
    data,
    setData,
    like,
    setLike,
    user,
    setUser,
    loginstate,
    setLoginState,
    addcart,
    setAddcart,
    input,
    setInput,
    product,
    setProduct,
    state,
    setState,
    signUp,
    setSignUp
  }
  return (
    <div className="App">
      <BrowserRouter>
       
       <myContext.Provider value={Dress}>
       <Navbars/>
            <Routes>
                 <Route path='/' element={<Home/>}></Route>
                 <Route path='/Wishlist' element={<Wishlist/>}></Route>
                 <Route path='/AS' element={<AllenSolly/>}></Route>
                 <Route path='/PA' element={<ParkAvanue/>}></Route>
                 <Route path='/DL' element={<DennisLingo/>}></Route>
                 <Route path='/PE' element={<PeterEngland/>}></Route>
                 <Route path='/VH' element={<VanHuesen/>}></Route>
                 <Route path='/ULI' element={<UserLogin/>}></Route>
                 <Route path='/SU' element={<SignUp/>}></Route>
                 <Route path='/admin' element={<AdminLogin/>}></Route>
                 <Route path='/Shirts' element={<Shirts/>}></Route>
                 <Route path='/Tshirts' element={<Tshirts/>}></Route>
                 <Route path='/Cart' element={<Cart/>}></Route>
                 <Route path='/Search' element={<Search/>}></Route>
                 <Route path='/Adminfunction' element={<AdminFun/>}></Route>
                 <Route path='/Suits' element={<Suits/>}></Route>
                 <Route path='/Jeans' element={<Jeans/>}></Route>
                 <Route path='/Trousers' element={<Trousers/>}></Route>
                 <Route path='/Adminproducts' element={<AdminProducts/>}></Route>
                 <Route path='/Adminusers' element={<AdminUsers/>}></Route>
                 <Route path='/Productdetails/:id' element={<ProductDetails/>}></Route>
                 <Route path='/UserProfile' element={<UserProfile/>}></Route>
                 
            </Routes>
        </myContext.Provider>    
      </BrowserRouter>
      

    </div>
  );
}

export default App;
