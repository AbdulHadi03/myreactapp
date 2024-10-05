import './Product.css'
import ProductItem from './ProductItem'
function Product(props){
    return (
      <div className='product'>
        <ProductItem part={props.items[0]}></ProductItem>
        <ProductItem part={props.items[1]}></ProductItem>
        <ProductItem part={props.items[2]}></ProductItem>
        <ProductItem part={props.items[3]}></ProductItem>
      </div>
    )
}
export default Product;