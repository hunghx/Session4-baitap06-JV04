import { useState, useReducer, memo, useCallback, useMemo } from 'react';
import TableComponent from './components/Table';

const initState = 0;

const reducer = (state, action) => {
  switch(action.type) {
    case "UP":
      return state + 1;
    case "DOWN":
      return state - 1;
    case "UP_TO": 
      return state + action.payload;
    default:
      return state;
  }
}

function App() {
  //const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, initState);
  const [products, setProducts] = useState([
    {id: 1, name: 'tivi', price: 5},
    {id: 2, name: 'bếp từ', price: 4},
    {id: 3, name: 'điều hòa', price: 3},
  ])

  // const total = (() => {
  //   let _total = products.reduce((result, pro) => {
  //     console.log('tính lại...')
  //     return result + pro.price;
  //   }, 0);
  //   return _total;
  // })();

  const total = useMemo(() => {
    let _total = products.reduce((result, pro) => {
      console.log('tính lại...')
      return result + pro.price;
    }, 0);
    return _total;
  }, [products]);

  const handleUp = () => {
    //setCount(count + 1);
    dispatch({type: "UP"});
  }
  const handleDown = () => {
    //setCount(count - 1);
    dispatch({type: "DOWN"});
  }
  const handleUpTo = (number = 0) => {
    //setCount(count + number)
    dispatch({type: "UP_TO", payload: number});
  }

  const handleOnUpdate = 
  useCallback(
    () => {
    console.log("Updated!");
  }
  , []);

  return (
    <div className="App">
      <TableComponent />
      <h1>Total: {total}</h1>
      <h1>Counter: {count}</h1>
      <button onClick={handleUp}>Up</button>
      <button onClick={e => handleUpTo(5)}>Up +5</button>
      <button onClick={handleDown}>Down</button>
      <UseCallBackComponent onUpdate={handleOnUpdate} />
    </div>
  );
}
const UseCallBackComponent = memo(({onUpdate}) => {
  console.log('UseCallBackComponent render');
  return (
    <>
      <div>Xin chao!</div>
      <button onClick={onUpdate}>Click me!</button>
    </>
  )
})

export default App;
