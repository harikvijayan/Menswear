import {React,useContext,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import add from '../Carimg/AddW.png'
import remove from '../Carimg/RemoveW.png'
import Add from '../Carimg/add-to-cart.png'
import Remove from '../Carimg/remove-from-cart.png'
import myContext from '../Context/Context';
import { useNavigate } from 'react-router-dom';
function ProductDetails() {
    const {data,like,setLike,addcart,setAddcart,loginstate}=useContext(myContext)
    const {id}=useParams()
    const newId=parseInt(id)
    const navigate = useNavigate();
    const [incart, setIncart] = useState(false);
    const detail=data.filter((element)=>(element.id===newId))
    function LikeBtn(p){
        if(like.includes(p)){
          setLike(like.filter((n) =>n !== p))
        }
        else if(loginstate===true){
          setLike([...like,p])
        }
        else{
          navigate("/ULI")
          alert('Please Signin To Continue..')
        }
      }
      function CartBtn(p,i){
        console.log("index",i)
        if(incart){
          setAddcart(addcart.filter((cart) =>(cart.id !== i)))
        }
        else if(loginstate===true){
          setAddcart([...addcart,p])
          setIncart(true);
        }
        else{
          navigate("/ULI")
          alert('Please Signin To Continue..')
        }
      }
      useEffect(() => {
        const cardexist = addcart.some((element) => element.id === parseInt(id));
        setIncart(cardexist);
      }, [addcart, id]);
  return (
    <div className='main'>
    <div className='container'>  
    {detail.map((a,index)=>    
        <div className='coupon'>
            <img className='cardimg' src={a.pic}  alt='img'/>
            <h5>{a.Brand}</h5>
            <h5>{a.Material}</h5>
            <h5>₹{a.Price}</h5>
            <h4>{a.Description}</h4>
            <div className='btn-grp'>
            <button className='but' onClick={()=>{LikeBtn(a)}}>{like.includes(a)?<img src={remove} height='30px' width='30px'alt='img'/>:<img src={add} height='30px' width='30px'alt='img'/>}</button>
            <button className='but' onClick={()=>{CartBtn(a,a.id)}}>{incart ?<img src={Remove} height='30px' width='30px'alt='img'/>:<img src={Add} height='30px' width='30px'alt='img'/>}</button>
            </div>
        </div>   

     )}
    </div> 
    </div>
  )
}
export default ProductDetails;