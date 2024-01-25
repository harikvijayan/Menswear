import React, { useContext, useState } from 'react'
import myContext from '../Context/Context'
import '../Styles/UserLogin.css'
function UserProfile(){
    const{user,setUser,state,setState,signUp,setSignUp,loginstate}=useContext(myContext)
    const[errorCount,seterrorcount] = useState({})
    const[toggle,setToggle]=useState(-1)
    const[passMatch,setPassMatch]=useState("")
    console.log("ping",state);
    console.log("jfgfhgfhdhdnfd",user)

    const handleData =(key,value) =>{
        setSignUp({...signUp,[key]:value})
    }
    function Edit(){
        if(loginstate===true)
        {
            setToggle(1)
            setSignUp(state)

        }
     
    }
    function handleSave(){
        const error = validate(signUp)
        seterrorcount(error)
        if(Object.keys(error).length===0)
        {
            const filterUserindex = user.findIndex((element)=>(element === state))
            const save=[...user]
             save[filterUserindex] = signUp
             setSignUp({username:"",email:"",password:""})
             setPassMatch("")
             setUser(save)
             setToggle(-1)
             setState(signUp)
             alert("Succesfully Updated...")
        }
   
    }
    function validate(p){
        const ero={}
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
        return ero
      }
     const handleCancel = ()=>{
        setToggle(-1)
        setSignUp({username:"",email:"",password:""})
        setPassMatch("")
     }
  return (
    <div className='user'>
    <div className='comp'>
        <h4 className='word'>Profile Edit</h4>
        <div className='nm'><input type='text' value={signUp.username} placeholder='Username' onChange={(e)=>{handleData("username",e.target.value)}} /></div>
        <p className='error'>{errorCount.name}</p>
        <div className='nm'><input type='text' value={signUp.email} placeholder='Email' onChange={(e)=>{handleData("email",e.target.value)}} /></div>
        <p className='error'>{errorCount.email}</p>
        <div className='nm'><input type='text' value={signUp.password} placeholder='Password' onChange={(e)=>{handleData("password",e.target.value)}} /></div>
        <p className='error'>{errorCount.pass}</p>
        <div className='nm'><input type='text' value={passMatch} placeholder='Re-Enter Password' onChange={(e)=>setPassMatch(e.target.value)} /></div>
        <p className='error'>{errorCount.passMatch}</p>
        <div className='nm'>
            {toggle === -1 ? 
           <button className="frm-btn" onClick={()=>{Edit()}}>Edit</button>:
           <>
           <button className="frm-btn" onClick={() => handleSave()}>Save</button>
           <button className="frm-btn" onClick={()=>handleCancel()}>Cancel</button></>}
        </div>
    </div>
</div>
  )
}
export default UserProfile