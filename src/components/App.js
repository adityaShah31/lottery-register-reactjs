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
    //checks if selected numbers are at max 5 numbers, while allowing to deselect them
    //if the highlight property of the clicked number was true, we know that the user wants to
    //deselect the number, hence we allow him to do so, and if highlight is false, we know that
    //the user wants to select a number, at this point, if there are already 5 numbers selected,
    //the execution goes in the else block and gives an alert
    if (activeNumbers.length < 5 || clickedNum.highlight === true) {
      //the numbers are contiguous & ordered and hence can be used as indices. Subtracting 1 from the element essentially gives us it's index in the array.
      allNumbers[clickedNum.value - 1].highlight = !allNumbers[clickedNum.value - 1].highlight;
      setHighlightedNumbers(allNumbers);

      let finalNumbers = allNumbers.filter((num) => num.highlight === true);
      setActiveNumbers(finalNumbers);
    } else {
      alert('Sorry, you can select only 5 numbers!');
    }
  };

  const clearSelection = () => {
    setHighlightedNumbers(numArray);
    setActiveNumbers([]);
  };

  const randomizeSelection = () => {
    //for if the user presses random button multiple times
    //clearSelection();  //this line does not work as React overrides multiple 'setState()' calls with just the latest one, instead of calling them synchronously :(

    //Logic for randomNumArray to consists of 5 DISTINCT / NON-REPEATING numbers
    var randomNumArray = [];
    while (randomNumArray.length < 5) {
      var randNum = Math.floor(Math.random() * 20) + 1; //Range: 1 to 20
      if (randomNumArray.indexOf(randNum) === -1) randomNumArray.push(randNum);
    }

    let finalNumbers = allNumbers;
    //setting highlight property of selected numbers
    for (let i = 0; i < randomNumArray.length; i++) {
      let index = randomNumArray[i];

      finalNumbers[index - 1].highlight = true;
    }

    //filtering highlighted numbers to pass to Side display
    let sideDisplayNumbers = finalNumbers.filter((num) => num.highlight === true);

    setHighlightedNumbers(finalNumbers);
    setActiveNumbers(sideDisplayNumbers);
  };

  return (
    <div className='container'>
      <Modal modalObject={modal} />
      <Header />
      <main>
        <PriceInput onPriceClick={addPriceToTotal} />
        <NumberSelector
          numbers={allNumbers}
          onNumberClick={toggleNumberState}
          onClearClick={clearSelection}
          onRandomClick={randomizeSelection}
          cashButtonState={isButtonActive}
        />
        <SideDisplay displayNumbersArray={activeNumbers} totalAmount={total} />
      </main>
    </div>
  );
};

export default App;
