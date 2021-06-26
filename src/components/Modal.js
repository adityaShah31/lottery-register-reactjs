import React from 'react';

const Modal = (props) => {
  return (
    <div
      className={props.modalObject.hidden ? 'modal-container hide' : 'modal-container'}
      onClick={() => {
        props.onDismiss();
      }}
    >
      <div className='modal'>{props.modalObject.message}</div>
    </div>
  );
};

export default Modal;
