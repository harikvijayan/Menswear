import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import wish from '../Carimg/wishlist.png'
import admini from '../Carimg/protection.png'
import { Link,useNavigate } from 'react-router-dom';
import login from '../Carimg/inu.png';
import logout from '../Carimg/ino.png';
import home from '../Carimg/home.png';
import cart from '../Carimg/cart.png';
import brand from '../Carimg/brand.png';
import edit from '../Carimg/edit.png';
import '../Styles/Navbars.css'
import { useContext } from 'react';
import myContext from '../Context/Context';
function Navbars() {
  const{loginstate,setLoginState,setLike,input,setInput,setAddcart}=useContext(myContext)
  const navigate=useNavigate()
  const Edit=()=>{
    if(loginstate===true)
    {
      navigate('/Userprofile')
    }
    else
    {
      alert('Please Signin.... ')
      navigate('/SU')
    }
  }
  
  function Click(){
    navigate('/Search')
   }
  function handleState()
  {
    if(loginstate===true)
    {
      setLike([])
      setAddcart([])
      setLoginState(false)
      navigate('/')
    }
    else
    {
      navigate('/ULI')
    }     
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary  navbarsize position-fixed fixed-top">
      <Container fluid>
        <Navbar.Brand href="#">Premium</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className='frm'>
            <input type='text'
                  placeholder="Search...."
                  className="me-2 inp"
                  aria-label="Search"
                  value={input}
                  onChange={(e)=>setInput(e.target.value)}
            />
          <button className='sr'  onClick={()=>{Click()}} >Search</button>
          </div>
          <div className='change '>
            <Nav className="me-auto my-2 my-lg-0 navbari  " style={{ maxHeight: '100px' }} navbarScroll >
              <Nav.Link><Link className='link' to='/'><img src={home} height='40px' width='40px' alt='img' /></Link></Nav.Link>
              <NavDropdown  title={<img src={brand} alt="user pic" height='40px' width='40px'/>} >
                <NavDropdown.Item><Link className='link' to='/AS'>Allen Solly</Link></NavDropdown.Item>
                <NavDropdown.Item><Link className='link' to='/PA'>Park Avanue</Link></NavDropdown.Item>
                <NavDropdown.Item><Link className='link' to='/DL'>Dennis Lingo</Link></NavDropdown.Item>
                <NavDropdown.Item><Link className='link' to='/PE'>Peter England</Link></NavDropdown.Item>
                <NavDropdown.Item><Link className='link' to='/VH'>Van Huesen</Link></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link><Link className='link' to='/Wishlist'><img src={wish} height='40px' width='40px' alt='img' /></Link></Nav.Link>
              <Nav.Link><Link className='link' to='/Cart'><img src={cart} height='40px' width='40px' alt='img' /></Link></Nav.Link>
              <button className='users' onClick={handleState} >{loginstate?<img src={logout} height='30px' width='30px' alt='logout'/>:<img src={login} height='30px' width='30px' alt='login'/>}</button>
              <Nav.Link><Link className='link' to='/admin'><img src={admini} height='40px' width='40px' alt='img' /></Link></Nav.Link>
              <button className='users' onClick={()=>{Edit()}}><img src={edit} height='40px' width='40px' alt='img'/></button>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;



                