import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { TransactionContext } from 'context/context';
import classes from 'styles/Modal.module.css';

const Modal = (props) => {
  const { onOpenModal } = useContext(TransactionContext);
  return ReactDOM.createPortal(
    <>
      <div className={classes.modalShadow} onClick={() => onOpenModal(false)} />
      <div className={classes.modal}>
        <div className={classes.modalBanner}></div>
        <div className={classes.modalContent}>{props.children}</div>
        <div className={classes.modalFooter}></div>
      </div>
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
