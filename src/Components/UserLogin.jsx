import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import '../Styles/UserLogin.css'
import myContext from '../Context/Context';
function UserLogin(){
  const Navigate=useNavigate()
  const{user,setState,setLoginState}=useContext(myContext)
  console.log(user);
  const[loguser,setUserLog]=useState("")
  const[logpass,setLogpass]=useState("")
  const[errorValid,setErrorValid]=useState({})
  function handleChange(){
    const error=validate(logpass,loguser)
    setErrorValid(error)
    if(Object.keys(error).length === 0)
    {
      Navigate("/")
      setLoginState(true)
    }
  }
  function validate(p,q){
    const ero={}
    if(!p)
    {
      ero.user="Email mandatory"
    }
    if(!q)
    {
      ero.pass="password mandatory"
    }
    else{

      const Data=user.filter((element)=>{return(element.email === q)})
      if(Data.length === 0)
      {
        ero.user="Invalid Email"
      }
     else 
      {
        const Datas=Data.find((ele)=>{return(ele.password === p)})
        setState(Datas)
        if(!Datas)
        {
          ero.pass="Invalid Password"
        }
        
      }

    }

    return ero;
  }
  return (
    <div className='user'>
        <div className='com'>
            <h4>🆄🆂🅴🆁 🅻🅾🅶🅸🅽</h4>
            <div className='name'><input type='text' value={loguser} placeholder='Email' onChange={(e)=>setUserLog(e.target.value)}  /></div>
            <p className='error'>{errorValid.user}</p>
            <div className='name'><input type='text' value={logpass} placeholder='Password' onChange={(e)=>setLogpass(e.target.value)} /></div>
            <p className='error'>{errorValid.pass}</p>
            <div className='butt'><button type='submit' className='click' onClick={()=>{handleChange()} } >Login</button></div>
            <div><p>Don't have an account?</p><Link className='link' to='/SU'>SignUp</Link></div>
        </div>
    </div>
  )
}
export default UserLogin