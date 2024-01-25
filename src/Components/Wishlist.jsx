import React, { useContext } from 'react'
import add from '../Carimg/AddW.png'
import remove from '../Carimg/RemoveW.png'
import wish from '../Carimg/emptywish.png'
import myContext from '../Context/Context';
import '../Styles/Home.css'
import { Link ,useNavigate} from 'react-router-dom'
function Wishlist(){
  const {like,setLike,loginstate}=useContext(myContext)
  const nav = useNavigate()
  function LikeBtn(p)
  {
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
  return (
    <div className='main'>
      { like.length=== 0 ?
      <div>
      <img src={wish} height="500px" width="500px"  alt='img'/>
      <h3>Your Wishlist Is Empty...</h3>
   </div>:
   <div>
    <div class='container'>  
    {like.map((a,i)=>    
    <Link  className='lnk' to={`/Productdetails/${a.id}`}>
        <div className='coupon'>
            <img className='cardimg' src={a.pic}  alt='img'/>
            <h5>{a.Brand}</h5>
            <h5>{a.Material}</h5>
            <h5>₹{a.Price}</h5>
            <div>
            <button className='but' onClick={(e)=>{LikeBtn(a); e.preventDefault()}}>{like.includes(a)?<img src={remove} height='30px' width='30px'alt='img'/>:<img src={add} height='30px' width='30px'alt='img'/>}</button>
            </div>
        </div>   
      </Link>
     )}
    </div> 
    </div>
}
    </div>
  )
}
export default Wishlist;
