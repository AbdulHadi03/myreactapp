import './App.css';
import Product from './components/Product';
import NewProduct from './components/NewProduct';
let products=[
  {
    id:'p1',
    name:'Tide',
    amount:200,
    date: new Date(2024, 8, 10),
  },{
    id:'p2',
    name:'Surf Excel',
    amount:150,
    date: new Date(2024, 9, 11),
  },{
    id:'p3',
    name:'Omo',
    amount:250,
    date:new Date(2024, 7, 13)
  },{
    id:'p4',
    name:'Pearl',
    amount:180,
    date: new Date(2024, 10, 5)
  }

]
function App() {
  function test(obj){
    console.log(obj)
  }
  return (
    <div className="App">
          <NewProduct pass={test}></NewProduct>
         <Product items={products}></Product>
    </div>
  );
}

export default App;
