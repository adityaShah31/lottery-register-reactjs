import React from 'react';
import '../css/App.css';

const SideDisplay = (props) => {
  return (
    <div className='side-dsp-container'>
      <div>
        <h4>Numbers Selected</h4>
        {props.displayNumbersArray.map((num) => (
          <p key={num.value}>Mark: {num.value}</p>
        ))}
      </div>
      <div>
        <h2>Total: ${props.totalAmount}</h2>
      </div>
    </div>
  );
};

export default SideDisplay;
