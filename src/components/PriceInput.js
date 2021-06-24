import React from 'react';
import '../css/App.css';

function PriceInput() {
  return (
    <div className='price-container'>
      <h1>Select Price here:</h1>
      <div className='price-btn-container'>
        <button>$1</button>
        <button>$5</button>
        <button>$10</button>
        <button>$20</button>
      </div>
    </div>
  );
}

export default PriceInput;
