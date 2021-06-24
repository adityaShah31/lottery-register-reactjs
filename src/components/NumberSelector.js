import React from 'react';
import '../css/App.css';

let numbers = [];
for (let i = 1; i <= 20; i++) {
  numbers.push(i);
}

function NumberSelector() {
  return (
    <div className='num-slt-container'>
      <div className='num-container'>
        {numbers.map((num) => (
          <div key={num} className='num'>
            {num}
          </div>
        ))}
      </div>
      <div className='num-btn-container'>
        <button className='num-cash-btn'>CASH</button>
        <button className='num-clear-btn'>CLEAR</button>
      </div>
    </div>
  );
}

export default NumberSelector;
