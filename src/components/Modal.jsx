import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onModalClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onModalClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById("root")
  );
}

export default Modal;
