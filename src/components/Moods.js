/*
MOODS Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/fe491c4f-395b-425c-b62e-3fbebf3cbb3f_moods-clip.gif

STEP 3:
  Remove the hard-coded mood and interpolate the 'mood' slice of state instead, using curly brackets.

STEPS 4, 5, 6:
  Inside these click handlers set the correct mood, using 'setMood' and the variables below the imports.
*/

import React, {useState} from 'react'; /* STEP 0 */

const initialMood = 'Not sure how I feel';
const happyMood = 'Quite happy!';
const sadMood = 'Rather sad';

export default function Moods() {
  /* STEP 1 */
  const [mood, setMood] = useState(initialMood) 

  const makeHappy = () => {
    /* STEP 4 */
    setMood(happyMood);
  };
  const makeSad = () => {
    /* STEP 5 */
    setMood(sadMood);
  };
  const reset = () => {
    /* STEP 6 */
    setMood(initialMood)
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: mood == happyMood ? 'royalblue' : 'crimson'
  };

  return (
    <div className='widget-moods container'>
      <h2>Moods</h2>
      <div id='mood' style={style}>{mood}</div>
      <div>
        <button id='makeHappy' onClick={makeHappy}>Make Happy</button>
        <button id='makeSad' onClick={makeSad}>Make Sad</button>
        <button id='resetMood' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
