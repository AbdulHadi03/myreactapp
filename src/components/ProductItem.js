import './ProductItem.css'
import { useState } from 'react'
import ProductDate from './ProductDate.js'

function ProductItem(props){
   const [title,setTitle]=useState(props.part.name)

    function onClickHandler(){
        setTitle('Product Added!')
    }
    return(
        <div className='productItem'>
            <ProductDate date={props.part.date}></ ProductDate>
            <div>{title}</div>
            <button onClick={onClickHandler}>Add to cart</button>
        </div>
    )
}
export default ProductItem;