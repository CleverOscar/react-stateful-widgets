import React, {useState} from 'react';

export default function Spinner() {

let [spinnerOn, setSpinnerOn] = useState(true);

  const toggleSpinner = () => {
  setSpinnerOn(!spinnerOn)
  };

  return (
    <div className='widget-spinner container'>
      <h2>Spinner</h2>
      {
        spinnerOn && <div i='spinner' className='spinner'>--+--</div>
      }
      <button id='toggleSpinner' onClick={toggleSpinner}>
        Hide Spinner {!spinnerOn ? 'Show' : 'Hide'}
      </button>
    </div>
  );
}
