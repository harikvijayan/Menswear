import React, { useContext } from 'react'
import myContext from '../Context/Context'
import add from '../Carimg/AddW.png'
import remove from '../Carimg/RemoveW.png'
import Add from '../Carimg/add-to-cart.png'
import Remove from '../Carimg/remove-from-cart.png'
import '../Styles/Home.css'
import { Link, useNavigate } from 'react-router-dom'
function ParkAvanue(){
  const{data,like,loginstate,setLike,addcart,setAddcart}=useContext(myContext)
  const nav=useNavigate()
  const Park=data.filter((b)=>b.Brand==='Park Avanue')
  function LikeBtn(p){
    if(loginstate===false)
          {
            nav('/SU')
            alert('Please SignUp To Continue..')
          }
          else{
    if(like.includes(p)){
      setLike(like.filter((n) =>n !== p))
    }
    else{
      setLike([...like,p])
    }
  }
  }
  function CartBtn(p){
    if(loginstate===false)
          {
            nav('/SU')
            alert('Please SignUp To Continue..')
          }
          else{
    if(addcart.includes(p)){
      setAddcart(like.filter((n) =>n !== p))
    }
    else{
      setAddcart([...addcart,p])
    }
  }
  }
  return (
    <div className='main'>
    <div class='container'>  
        {Park.map((a,i)=>  
        <Link className='lnk' to={`/Productdetails/${a.id}`}> 
            <div className='coupon'>
                <img className='cardimg' src={a.pic}  alt='img'/>
                <h5>{a.Brand}</h5>
                <h5>{a.Material}</h5>
                <h5>₹{a.Price}</h5>
                <div className='btn-grp'>
                <button className='but' onClick={(e)=>{LikeBtn(a); e.preventDefault()}}>{like.includes(a)?<img src={remove} height='30px' width='30px'alt='img'/>:<img src={add} height='30px' width='30px'alt='img'/>}</button>
                <button className='but' onClick={(e)=>{CartBtn(a); e.preventDefault()}}>{addcart.includes(a)?<img src={Remove} height='30px' width='30px'alt='img'/>:<img src={Add} height='30px' width='30px'alt='img'/>}</button>
                </div>
            </div>   
          </Link>
         )}
        </div> 
    </div>
  )
}
export default ParkAvanue;
