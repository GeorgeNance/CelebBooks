import React from "react";
import style from "./Modal.module.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";
const Modal = props => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
      <div
        className={style.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? `1` : `0`
        }}
      >
        <div className={style.ModalContent}>{props.children}</div>
      </div>
    </Aux>
  );
};

export default Modal;
