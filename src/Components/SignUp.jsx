import React, { useContext, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import myContext from '../Context/Context';
import '../Styles/UserLogin.css'
function SignUp(){
  const{user,setUser,signUp,setSignUp,setState,setLoginState}=useContext(myContext)
  const[passMatch,setPassMatch]=useState("")
  const[errorCount,setErrorCount]=useState({})
  const nav=useNavigate()
  console.log('signup',user);
  function handleData(key,value)
  {
    setSignUp({...signUp,[key]:value})
  }
  function handleSign(){
   const error=validate(signUp)
   setErrorCount(error)
   if(Object.keys(error).length===0)
   {
    setUser([...user,signUp])
    setSignUp({username:"",email:"",password:""})
    setPassMatch("")
    setLoginState(true)
    setState(signUp)
    nav('/')
   }

  }
  function validate(p){
    const ero={}
    var passo=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var mailo=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    if(!p.username)
    {
      ero.name="Username mandatory"
    }
    if(!p.email)
    {
      ero.email="Email mandatory"
    }
    if(!p.password)
    {
      ero.pass="Password mandatory"
    }
    if(!passMatch)
    {
      ero.passMatch="re-enter password mandatory"
    }
    else if(p.password !== passMatch)
    {
      ero.passMatch="password doesnt match"
    }
    else if(!mailo.test(p.email))
    {
      ero.email="Email must contain one character from the English alphabet (both cases), digits and special characters"
    }
    else if(!passo.test(p.password))
    {
      ero.pass="password must contain minimum eight characters, at least one letter and one number"
    }
    return ero
  }

  return (
    <div className='user'>
    <div className='com'>
        <h4 >🆄🆂🅴🆁 🆂🅸🅶🅽🆄🅿</h4>
        <div className='name'><input type='text' value={signUp.username} placeholder='Username' onChange={(e)=>{handleData("username",e.target.value)}} /></div>
        <p className='error'>{errorCount.name}</p>
        <div className='name'><input type='text' value={signUp.email} placeholder='Email' onChange={(e)=>{handleData("email",e.target.value)}} /></div>
        <p className='error'>{errorCount.email}</p>
        <div className='name'><input type='password' value={signUp.password} placeholder='Password' onChange={(e)=>{handleData("password",e.target.value)}} /></div>
        <p className='error'>{errorCount.pass}</p>
        <div className='name'><input type='password' value={passMatch} placeholder='Re-Enter Password' onChange={(e)=>setPassMatch(e.target.value)} /></div>
        <p className='error'>{errorCount.passMatch}</p>
        <div className='bu'><button className='click' type='submit' onClick={handleSign} >SignUp</button></div>
        <div><p>already have an account?</p><Link className='link' to='/ULI'>Login</Link></div>
    </div>
</div>
  )
}
export default SignUp;



