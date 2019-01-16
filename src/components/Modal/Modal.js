import React from "react";
import PropTypes from "prop-types";

const Modal = ({ children, customClass, show, closeCallback }) => (
  <div className={`${customClass}`} style={{ display: show ? "block" : "none"}}>
    <div className="c-Modal--Content o-Container">
      {children}
      <button title="Close" className="c-Modal--Close" onClick={closeCallback}>
        &times;
      </button>
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.element,
  customClass: PropTypes.string,
  show: PropTypes.bool,
  closeCallback: PropTypes.func,
};

Modal.defaultProps = {
  children: <div>Empty Modal</div>,
  customClass: "",
  show: false,
  closeCallback: () => (false)
};

export default Modal;
