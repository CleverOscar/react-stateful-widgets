import React, {useState} from 'react'; /* STEP 0 */

export default function Input() {
  let [inputValue, setInputValue] = useState('')

  const changeInput = evt => {
    const { value } = evt.target;
    
   setInputValue(inputValue = value);
  };
  const reset = () => {
    /* STEP 5 */

    setInputValue(inputValue = '')
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: inputValue.length > 10 ? 'crimson' : 'royalblue', 
  };

  return (
    <div className='widget-input container'>
      <h2>Input</h2>
      <div id='output' style={style}>{inputValue.toUpperCase()}</div> 
      <div>
        <input value={inputValue} id='input' type='text' onChange={changeInput} /> {/* STEP 6 */}
        <button id='resetInput' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
