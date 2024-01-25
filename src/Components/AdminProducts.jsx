import React from 'react'
import myContext from '../Context/Context'
import  { useContext,useState } from 'react'
import '../Styles/Adminfun.css'
function AdminProducts(){
    const{data,setData,addcart,like,setLike,  setAddcart}=useContext(myContext)
    const [errorCo, setErrorCo] = useState({})
    const[toggle,setToggle]=useState(-1)
    const[adddata,setAdddata]=useState({id:"",count:"",Brand:"",Material:"",Category:"",Price:"",Description:"",pic:""})
    const handlePro = (keys,values) => 
    {
      setAdddata({...adddata,[keys]:values});
     
    }
    const datas = {
      id:parseInt(adddata.id),
      count:parseInt(adddata.count),
      Brand:adddata.Brand,
      Material:adddata.Material,
      Category:adddata.Category,
      Price:adddata.Price,
      Description:adddata.Description,
      pic:adddata.pic
    }
    function AddPro(){
      const error=validate(datas)
      setErrorCo(error)
      if(Object.keys(error).length===0)
     {
      setData([...data,datas])
      setAdddata({id:"",count:"",Brand:"",Material:"",Category:"",Price:"",Description:"",pic:""})
     }
    }
    const validate = (p)=>{
      const ero={}
      if(!p.id)
      {
        ero.id="mandatory Field"
      }
      if(!p.count)
      {
        ero.count="mandatory Field"
      }
      if(!p.Brand)
      {
        ero.brd="mandatory Field"
      }
      if(!p.Material)
      {
        ero.matl="mandatory field"
      }
      if(!p.Category)
      {
        ero.cat="mandatory field"
      }
      if(!p.Price)
      {
        ero.pr="mandatory field"
      }
      if(!p.Description)
      {
        ero.Description="mandatory field"
      }
      if(!p.pic)
      {
        ero.img="mandatory field"
      }
      return ero
    }
   
    function handleSave(index){
      const newarray = [...data]
      newarray[index] = adddata
      setData(newarray)
      setAdddata({id:"",count:"",Brand:"",Material:"",Category:"",Price:"",Description:"",pic:""})
      setToggle(-1)
  
    }
    function handleCancel(){
      setToggle(-1)
      setAdddata({id:"",count:"",Brand:"",Material:"",Category:"",Price:"",Description:"",pic:""})
    }  
    function handleDelete(p,ind){
      const filterCart = addcart.filter((element)=>element.id !== ind)
      const filterlike = like.filter((element)=>element.id !== ind)
        const filter=data.filter((element)=>element!==p)
        setLike(filterlike)
        setAddcart(filterCart)
        setData(filter)
      }
    function Edit(index){
          setToggle(index)
          setAdddata(data[index])
      } 

  return (
    <>
    <div className='adm'>
        <div className='addprd'>
             <h2>Product Details</h2>
             <div className='name'><input type='number' value={adddata.id}  placeholder='Id' onChange={(e)=>{handlePro("id",e.target.value)}}/></div>
             <p className='error'>{errorCo.id}</p>
             <div className='name'><input type='number' value={adddata.count}  placeholder='count' onChange={(e)=>{handlePro("count",e.target.value)}}/></div>
             <p className='error'>{errorCo.count}</p>
             <div className='name'><input type='text' value={adddata.Brand}  placeholder='Brand' onChange={(e)=>{handlePro("Brand",e.target.value)}}/></div>
             <p className='error'>{errorCo.brd}</p>
             <div className='name'><input type='text' value={adddata.Material}  placeholder='Material' onChange={(e)=>{handlePro("Material",e.target.value)}}/></div>
             <p className='error'>{errorCo.matl}</p>
             <div className='name'><input type='text' value={adddata.Category} placeholder='Category' onChange={(e)=>{handlePro("Category",e.target.value)}}/></div>
             <p className='error'>{errorCo.cat}</p>
             <div className='name'><input type='text' value={adddata.Price} placeholder='Price' onChange={(e)=>{handlePro("Price",e.target.value)}}/></div>
             <p className='error'>{errorCo.pr}</p>
             <div className='name'><input type='text' value={adddata.Description} placeholder='Description' onChange={(e)=>{handlePro("Description",e.target.value)}}/></div>
             <p className='error'>{errorCo.Description}</p>
             <div className='name'><input type='url' value={adddata.pic} placeholder='Product Image' onChange={(e)=>{handlePro("pic",e.target.value)}}/></div>
             <p className='error'>{errorCo.img}</p>
             <div className='name'>{toggle === -1 ? <button onClick={()=>{AddPro()}}>Submit</button>:<><button className="frm-btn" onClick={() => handleSave(toggle)}>
                      Save
                    </button>
                    <button className="frm-btn" onClick={handleCancel}>
                      Cancel
                    </button></>}
                    </div>

        </div>
        </div>
        <div class='container'>  
            {data.map((a,index)=>    
                <div className='coupon'>
                    <img className='cardimg' src={a.pic}  alt='img'/>
                    <h5>{a.Brand}</h5>
                    <h5>{a.Material}</h5>
                    <h5>₹{a.Price}</h5>
                    <div className='btn-grp'>
                     <button  onClick={()=>{Edit(index)}}>Edit</button>
                     <button  onClick={()=>{handleDelete(a,a.id)}}>Delete</button>
                    </div>
                </div>   

            )}
        </div> 
      
   
    </>
  )
}

export default AdminProducts
