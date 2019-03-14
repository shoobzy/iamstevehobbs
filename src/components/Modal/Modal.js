import React from "react";
import posed from "react-pose";
import styled from "styled-components";

const ModalContent = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

const Modal = styled.div`
  display: ${props => (props.open ? `block` : `none`)};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`

export default ({ open, closeModal, children }) => {
  <Modal
    className="c-Modal"
    open={open}
    onClick={closeModal}
  >
    <ModalContent
      className="c-Modal--Content o-Container"
      onClick={event => event.stopPropagation()}
    >
      {children}
      <button
        title="Close"
        className="c-Btn c-Modal--Close"
        onClick={closeModal}
      >
        &times;
      </button>
    </ModalContent>
  </Modal>
}
