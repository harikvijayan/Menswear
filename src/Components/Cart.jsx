import React, { useContext } from 'react'
import no from '../Carimg/emptycart.png';
import myContext from '../Context/Context';
import '../Styles/Home.css'
import { Link } from 'react-router-dom'
function Cart(){
  const {addcart,user, setAddcart}=useContext(myContext)
  console.log("addcart",addcart);
  console.log(user);
  function IncItem(item)
  {
    const up=addcart.map((element)=>{
      if(element.id===item){
        return{...element,count:element.count+1}
      }
      return element   
    })
    setAddcart(up)
  }
  function DecItem(item){
    const up=addcart.map((element)=>{
      if(element.id===item){
        const updatedCount=element.count-1
        return{...element,count:updatedCount >= 1 ? updatedCount: 1}
      }
      return element;
    })
    setAddcart(up)
  }
  const calculateTotalPrice = ()=>{
    let totalcost = 0;
    addcart.forEach(element => {
         totalcost += element.count * element.Price
    });
    return totalcost
  }
  return (
   <div className='main'>
    {addcart.length===0 ?  
    <div>
       <img src={no} height="500px" width="500px"  alt='img'/>
       <h3>Sorry...Your Cart Is Empty...</h3>
    </div>
     :
    <div> 
    <div class='container'>  
       {addcart.map((a,i)=> {
       const totalItemPrice = a.Price * a.count;
       return(  
       <Link className='lnk' to={`/Productdetails/${a.id}`}> 
       <div className='coupon'>
          <img className='cardimg' src={a.pic}  alt='img'/>
          <h5>{a.Brand}</h5>
          <h5>{a.Material}</h5>
          <h5>₹{totalItemPrice}</h5>
          <div className='cntr'>
          <button className='cntr-btn' onClick={(e)=>{DecItem(a.id);e.preventDefault()}}>-</button>
          <p className='cnt'>{a.count}</p>
          <button className='cntr-btn' onClick={(e)=>{IncItem(a.id);e.preventDefault()}}>+</button>
          </div>
        </div>   
       </Link>)})}
    </div> 
    <div className="total-price">
        <h2>Total Cart Price</h2>
        <label className="ttl">
        <h2>₹{calculateTotalPrice()}</h2>
        </label>
        <div>
        <button className='buy-now'>Buy Now</button>
        </div>
    </div>
    </div>
  }
  </div>
  )
}
export default Cart;
