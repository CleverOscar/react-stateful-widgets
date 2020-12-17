import React from 'react'; 
import { useState} from 'react'

export default function Counter() {

  let [count, setCount] = useState(0);

  const increment = () => {
    /* STEP 4 */
    setCount(count + 1);
    console.log('Increment: ', count)
    return count
  };
  
  const decrement = () => {
    /* STEP 5 */
    setCount(count - 1);
    console.log('Decrement: ', count)
    return count
  };
  const reset = () => {
    /* STEP 6 */
    setCount(count = 0)
    console.log('reset: ', count)
    return count
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: count % 2 ? 'crimson' : 'royalblue'
  };

  return (
    <div className='widget-counter container'>
      <h2>Counter</h2>
      <div id='count' style={style}>
        Number {count} is {(count % 2 === 0) ? 'Even' : 'Odd'}
      </div>
      <div>
        <button id='increment' onClick={increment}>Increment</button>
        <button id='decrement' onClick={decrement}>Decrement</button>
        <button id='resetCount' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
