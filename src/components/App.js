import React from 'react';
import '../css/App.css';
import Header from './Header';
import NumberSelector from './NumberSelector';
import PriceInput from './PriceInput';
import Modal from './Modal';
import SideDisplay from './SideDisplay';

import { useState, useEffect } from 'react';

const App = () => {
  let numArray = [];
  for (let i = 1; i <= 20; i++) {
    numArray.push({
      value: i,
      highlight: false,
    });
  }

  const [allNumbers, setHighlightedNumbers] = useState(numArray);
  const [activeNumbers, setActiveNumbers] = useState([]);
  const [total, setTotalAmount] = useState(0.0);
  const [modal, setModal] = useState({
    msg: '',
    visible: false,
  });
  const [isButtonActive, setCashButton] = useState(false);

  const addPriceToTotal = (price) => {
    let newTotal = total + price;

    setTotalAmount(newTotal);
  };

  const toggleNumberState = (clickedNum) => {
    allNumbers[clickedNum.value - 1].highlight = !allNumbers[clickedNum.value - 1].highlight;

    setHighlightedNumbers(allNumbers);

    let finalNumbers = allNumbers.filter((num) => num.highlight === true);
    console.log(finalNumbers);
    setActiveNumbers(finalNumbers);
  };

  return (
    <div className='container'>
      <Modal modalObject={modal} />
      <Header />
      <main>
        <PriceInput onPriceClick={addPriceToTotal} />
        <NumberSelector onNumberClick={toggleNumberState} numbers={allNumbers} cashButtonState={isButtonActive} />
        <SideDisplay displayNumbersArray={activeNumbers} totalAmount={total} />
      </main>
    </div>
  );
};

export default App;
