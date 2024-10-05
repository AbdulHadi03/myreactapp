import './NewProduct.css'
import { useState } from 'react';
function NewProduct(props){
   const [newtitle,setTitle]=useState('')
   const [newdate,setDate]=useState('')
    function submitHandler(event){
        event.preventDefault();
       const obj={
        title:newtitle,
        date:newdate,
       }
       props.pass(obj)
       setTitle('')
       setDate('')
    }
    function changeTitle(event){
        setTitle(event.target.value)
    }
    function changeDate(event){
        setDate(event.target.value)
    }
    return(
        <div>
           <form onSubmit={submitHandler}>
            <div>
                Title:
                <input type='text' onChange={changeTitle} value={newtitle} ></input>
            </div>
            <div>
               Date:
               <input type='date' onChange={changeDate} value={newdate}></input>
            </div>
            <button type='submit'>Submit</button>
           </form>
        </div>
    )
}
export default NewProduct;