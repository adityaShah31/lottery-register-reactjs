import React from 'react';
import '../css/App.css';
import Header from './Header';
import NumberSelector from './NumberSelector';
import PriceInput from './PriceInput';
import Modal from './Modal';
import SideDisplay from './SideDisplay';

function App() {
  return (
    <div className='container'>
      <Modal />
      <Header />
      <main>
        <PriceInput />
        <NumberSelector />
        <SideDisplay />
      </main>
    </div>
  );
}

export default App;
