/*

STEPS 4, 5, 6:
  Inside these click handlers set the correct mood, using 'setMood' and the variables below the imports.
*/

import React from 'react';
import {useState} from 'react';

const initialMood = 'Not sure how I feel'; // null
const happyMood = 'Quite happy!'; // true
const sadMood = 'Rather sad'; // false

export default function Moods() {
  let [mood, setMood] = useState(initialMood);

  const makeHappy = () => {
    /* STEP 4 */
    setMood(mood = happyMood)
  };
  const makeSad = () => {
    /* STEP 5 */
    setMood(mood = sadMood)
  };
  const reset = () => {
    /* STEP 6 */
    setMood(mood = initialMood)
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: mood === happyMood  ? 'royalblue' : 'crimson'
  };

  return (
    <div className='widget-moods container'>
      <h2>Moods</h2>
      <div id='mood' style={style}>{mood}</div> {/* STEP 3 */}
      <div>
        <button id='makeHappy' onClick={makeHappy}>Make Happy</button>
        <button id='makeSad' onClick={makeSad}>Make Sad</button>
        <button id='resetMood' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
