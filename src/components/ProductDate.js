import './ProductDate.css'

function ProductDate(props){
    let month=props.date.toLocaleString('en-US', { month: 'long' });
    let day=props.date.toLocaleString('en-US',{ day: '2-digit' });
    let year=props.date.getFullYear();
    return (
        <div className='productDate'>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
}
export default ProductDate;