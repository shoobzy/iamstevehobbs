import React, { useRef, useEffect } from "react";
import posed, { PoseGroup } from "react-pose";

const ModalContainer = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

function useClickOutside(ref, onModalClose) {
  function handleStatusChange(event) {
    if (!ref.current.contains(event.target)) {
      onModalClose();
    }
  }

  document.addEventListener("click", handleStatusChange)

  return function cleanup() {
    document.removeEventListener("click", handleStatusChange)
  };
}

function Modal({ isOpen, onModalClose, children }) {
  const modalRef = useRef(null);

  useEffect(() =>
    useClickOutside(modalRef, onModalClose)
  );

  return (
    <PoseGroup>
      <Shade
        key="shade"
        className="shade"
      />
      <ModalContainer
        key="modal"
        className="c-Modal"
      >
        <div
          className="c-Modal--Content o-Container"
          ref={modalRef}
        >
          {children}
        </div>
      </ModalContainer>
    </PoseGroup>
  );
}

export default Modal;
