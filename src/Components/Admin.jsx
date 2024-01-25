import React, {useState } from 'react'
import '../Styles/Adminfun.css'
import { useNavigate } from 'react-router-dom'
function AdminFun(){
  const[adminuser,setAdminuser]=useState("")
  const[adminpass,setAdminpass]=useState("")
  const[miss,setMiss]=useState({})
  const nav=useNavigate()
  const handleAdmin =()=>{
   const error=validate(adminuser,adminpass)
   setMiss(error)
   if(Object.keys(error).length  === 0)
   {
    nav('/adminfunction')
   }
  }
  function validate(user,pass)
  {
    const ero={}
    if(!user)
    {
      ero.username="Mandatory Field"
    }
    else if(user !== "harikv" )
    {
      ero.username="Invalid Username"
    }
    if(!pass)
    {
      ero.password="Mandatory Field"
    }
    else if(pass !== "hari@123")
    {
      ero.password="Invalid Password"
    }
    return ero;
  }
return (
    <div>
      <div className='user'>
        <div className='com'>
            <h4>🅰🅳🅼🅸🅽 🅻🅾🅶🅸🅽</h4>
            <div className='name'><input type='text' value={adminuser} placeholder='Username' onChange={(e)=>setAdminuser(e.target.value)}/></div>
            <p>{miss.username}</p>
            <div className='name'><input type='text' value={adminpass} placeholder='Password' onChange={(e)=>setAdminpass(e.target.value)}/></div>
            <p>{miss.password}</p>
            <div className='b'><button className='click' type='submit' onClick={()=>{handleAdmin()}} >Login</button></div>
        </div>
    </div>
    </div>
  )
}
export default AdminFun;


