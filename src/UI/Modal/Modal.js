import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { TransactionContext } from "../../store/TransactionContext";
import classes from "./Modal.module.css";

const Modal = () => {
    const { onOpen } = useContext(TransactionContext)
  return ReactDOM.createPortal(
    <>
      <div className={classes.modalShadow} onClick={() => onOpen(false)}/>
      <div className={classes.modal}>
        <div className={classes.modalBanner}>
        </div>
        <div className={classes.modalContent}>
            
        </div>
        <div className={classes.modalFooter}></div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
