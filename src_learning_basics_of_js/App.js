import {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState();
  useEffect(()=>{
    alert("You have change the counter to" + counter)
  }, [counter])
  return (
    <div className="App">
      <button OnClick = { () => setCounter( (prevCount) => prevCount -1 )}>-</button>
      <h1>{counter}</h1>
      <button OnClick = { () => setCounter( (prevCount) => prevCount +1 )}>+</button>
    </div>
  );
}

export default App;
