/*
PROGRAMMERS Instructions
https://tk-assets.lambdaschool.com/1ea6e6a2-2ef1-45de-bcab-b99a8f775870_programmers.gif
*/

import React, {useState} from 'react';

export const listOfAwesome = [
  { id: '1', name: 'Ada Lovelace' },
  { id: '2', name: 'Grace Hopper' },
  { id: '3', name: 'Evelyn Boyd Granville' },
  { id: '4', name: 'Mary Kenneth Keller' },
  { id: '5', name: 'Frances Allen' },
  { id: '6', name: 'Carol Shaw' },
];

export default function Programmers(props) {
  // programmers list 
  let [programerList, setProgramerList] = useState(listOfAwesome);
  // programmer id
  let [programerId, setProgramerId] = useState(listOfAwesome.id);

  const getNameOfFeatured = () => {

    return programerList[programerId - 1].name
  };

  const style = {
    fontSize: '1.5em',
    marginTop: '0.5em',
    color: 'royalblue', // 🤔 color turns to gold, when celebrating
  };

  return (
    <div className='widget-programmers container'>
      <h2>Programmers</h2>
      <div className='programmers'>
        {
          programerList.map(dev =>
            <div className='programmer' key={dev.id}>
              
              {dev.name} <button onClick={() => {setProgramerId( programerId = dev.id)}}>Feature</button>
            </div>
          )
        }
      </div>
      <div id='featured' style={style}>
        {
          !programerId === false
            ? `🎉 Let's celebrate ${getNameOfFeatured()}! 🥳`
            : 'Pick an awesome programmer'
        }
      </div>
    </div>
  );
}
