import React from 'react';
import '../css/App.css';

const NumberSelector = (props) => {
  return (
    <div className='num-slt-container'>
      <div className='num-container'>
        {props.numbers.map((num) => (
          <div
            id={num.value}
            key={num.value}
            onClick={() => {
              props.onNumberClick(num);
            }}
            className={num.highlight ? 'num num-border' : 'num'}
          >
            {num.value}
          </div>
        ))}
      </div>
      <div className='num-btn-container'>
        <button className='num-cash-btn'>CASH</button>
        <button className='num-clear-btn'>CLEAR</button>
      </div>
    </div>
  );
};

export default NumberSelector;
