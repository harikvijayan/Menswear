import React, { useContext } from 'react'
import myContext from '../Context/Context'
import add from '../Carimg/AddW.png'
import remove from '../Carimg/RemoveW.png'
import '../Styles/Home.css'
import { Link ,useNavigate} from 'react-router-dom';
import C1 from '../Carimg/Shirts.jpeg'
import C2 from '../Carimg/TShirts.jpeg'
import C3 from '../Carimg/Jeans.jpeg'
import C4 from '../Carimg/Suits.jpeg'
import C5 from '../Carimg/Trousers.jpeg'
import i1 from '../Carimg/Car1.jpeg'
import i2 from '../Carimg/Car2.jpeg'
import i3 from '../Carimg/Car3.jpeg'
import i4 from '../Carimg/Car4.jpeg'
import i5 from '../Carimg/Car5.gif'
import allen from '../Carimg/AllenSolly.jpg'
import peter from '../Carimg/PeterEngland.jpg'
import ParkAvanue from '../Carimg/ParkAvanue.jpg'
import van from '../Carimg/VanHuesen.png'
import DennisLingo from '../Carimg/DennisLingo.jpg'
import Carousel from 'react-bootstrap/Carousel'
    function Home() {
        const {loginstate,data,like,setLike,signUp,user}=useContext(myContext)
        const nav=useNavigate();
       console.log("signupdata",signUp);
       console.log("userdata",user);
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
         <div >
          <Carousel className='carou'>
            <Carousel.Item>
              <img src={i3} className='caro-im' alt='img' width='100%' height='550px'  text="First slide" />
            </Carousel.Item>
            <Carousel.Item>
            <img src={i2} className='caro-im' alt='img' width='100%' height='550px'  text="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
            <img src={i5} className='caro-im' alt='img' width='100%' height='550px' text="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
            <img src={i4} className='caro-im' alt='img' width='100%' height='550px' text="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
            <img src={i1} className='caro-im' alt='img' width='100%' height='550px' text="Third slide" />
            </Carousel.Item>
          </Carousel>
          </div>
        <div className='logos'>
         <img className='logoi' src={allen} height="150px" width="200px" alt='img'/>
          <img className='logoi' src={van} height="150px" width="200ox" alt='img'/>
          <img className='logoi' src={peter} height="150px" width="200px" alt='img'/>
          <img className='logoi' src={ParkAvanue} height="150px" width="200px" alt='img'/>
          <img className='logoi' src={DennisLingo} height="150px" width="200px" alt='img'/>
        </div>  
        <h1>──────── Top Categories ────────</h1> 
        <div className='category'>
          <div className='cat-el'>
          <Link className='link' to='/Shirts'> 
          <img className='cat' src={C1} height="200px" width="200px" alt='img' />
          </Link> 
          <h5>Shirts</h5>
          </div>
          <div className='cat-el'>
          <Link className='link' to='/Tshirts'>   
          <img className='cat' src={C2} height="200px" width="200ox" alt='img'/>
          </Link>
          <h5>T-shirt</h5>
          </div>
          <div className='cat-el'>
          <Link className='link' to='/Jeans'>   
          <img className='cat' src={C3} height="200px" width="200px" alt='img'/>
          </Link>
          <h5>Jeans</h5>
          </div>
          <div className='cat-el'>
          <Link className='link' to='/Suits'>   
          <img className='cat' src={C4} height="200px" width="200px" alt='img'/>
          </Link>
          <h5>Suits</h5>
          </div>
          <div className='cat-el'>
          <Link className='link' to='/AS'>   
          <img className='cat' src={C5} height="200px" width="200px" alt='img'/>
          </Link>
          <h5>Trousers</h5>
          </div>
        </div>  
        
        <div class='container'>  
        {data.map((a,i)=>    
          <Link className='lnk' to={`/Productdetails/${a.id}`}>
            <div className='coupon'>
                <img className='cardimg' src={a.pic} width="250px"  alt='img'/>
                <h5>{a.Brand}</h5>
                <h5>{a.Material}</h5>
                <h5>₹{a.Price}</h5>
                <div className='btn-grp'>
                <button className='but' onClick={(e)=>{LikeBtn(a); e.preventDefault()}}>{like.includes(a)?<img src={remove} height='30px' width='30px'alt='img'/>:<img src={add} height='30px' width='30px'alt='img'/>}</button>
              
                </div>
            </div>   
            </Link>
         )}
        </div> 
       
          </div>  
        );
      }
      
      export default Home;
