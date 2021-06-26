import React from 'react';
import '../css/App.css';

const PriceInput = (props) => {
  const priceArray = [1, 5, 10, 20];

  return (
    <div className='price-container'>
      <h1>Select Price here:</h1>
      <div className='price-btn-container'>
        {priceArray.map((price) => (
          <button
            id={price}
            key={price}
            onClick={() => {
              props.onPriceClick(price);
            }}
            className='price-btn'
          >
            ${price}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PriceInput;
