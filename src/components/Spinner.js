import React, {useState} from 'react'; 

export default function Spinner() {
  const [spinnerOn, setSpinnerOn] = useState(true);

  const toggleSpinner = () => {
    if(!spinnerOn){
      setSpinnerOn(true)
    } else {
      setSpinnerOn(false)
    }
  };

  return (
    <div className='widget-spinner container'>
      <h2>Spinner</h2>
      {
        spinnerOn  && <div id='spinner' className='spinner'>--+--</div>
      }
      <button id='toggleSpinner' onClick={toggleSpinner}>
      {!spinnerOn ? 'Show spinner' : 'Hide Spinner'}
      </button>
    </div>
  );
}
