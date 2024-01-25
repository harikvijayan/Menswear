import React, { useContext } from 'react'
import { Link} from 'react-router-dom';
import '../Styles/Adminfun.css'
import userD from '../Carimg/business-card.png'
import productD from '../Carimg/info.png'
import myContext from '../Context/Context';
function AdminFun(){
  const{user}=useContext(myContext)
  console.log(user);
return (
      <div className='adm1'>
        <h1>Welcome Admin!!!!</h1>   
        <div className='ad-fun'>
          <div>
          <Link to='/Adminusers' className='ad-link'><img src={userD} alt='user' height='300px' width='300px'/><h3 className='do'>User Management</h3></Link> 
          </div>
          <div>
          <Link to='/Adminproducts' className='ad-link'><img src={productD} alt='product' height='300px' width='300px'/><h3 className='do'>Product Management</h3></Link>
          
          </div>
        </div>     
      </div>
  )
}
export default AdminFun;


