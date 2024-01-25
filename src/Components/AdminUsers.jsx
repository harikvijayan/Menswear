import React, { useContext} from 'react'
import '../Styles/Adminfun.css'
import Table from 'react-bootstrap/Table';
import myContext from '../Context/Context'

function AdminUsers(){
    const{user,setUser,setLoginState}=useContext(myContext)
    console.log("asa",user);
    function deleteUser(m){
        const del=user.filter((element)=>element!==m)
        setUser(del)
        setLoginState(false)
      }
  return (
    <div className='adm1'>
        <h1>───── USERS ─────</h1>
 <div className='user-container'>
 
 <Table striped bordered hover>
   <thead>
     <tr>
       <th>User Name</th>
       <th>Email</th>
       <th>Password</th>
       <th>Action</th>
     </tr>
   </thead>
   <tbody>
   {user.map((c)=>(
     <tr>
       <td>{c.username}</td>
       <td>{c.email}</td>
       <td>{c.password}</td>
       <td><button className='bt' onClick={()=>{deleteUser(c)}}>Delete</button></td>
     </tr>
      ))}
   </tbody>
 </Table>

</div>  
      
    </div>
  )
}

export default AdminUsers
