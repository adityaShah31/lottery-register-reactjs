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
            className={num.highlight ? 'num num-highlight' : 'num'}
          >
            {num.value}
          </div>
        ))}
      </div>
      <div className='num-btn-container'>
        <button className='num-btn rndm-btn' onClick={() => props.onRandomClick()}>
          RANDOM
        </button>
        <button className='num-btn cashout-btn' onClick={() => props.onCashoutClick()}>
          CASH OUT
        </button>
        <button className='num-btn clear-btn' onClick={() => props.onClearClick()}>
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default NumberSelector;
