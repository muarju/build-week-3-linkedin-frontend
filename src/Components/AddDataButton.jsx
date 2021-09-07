import Modal from "react-bootstrap/Modal";
import AddForm from "./AddForm";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";

export default function AddExperience(props) {
  let [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className="experience-fragment-add-button-container">
        <FiPlus
          className="icons experience-fragment-add-button"
          onClick={handleShow}
        ></FiPlus>
      </div>
      <Modal
        {...props}
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
      </Modal>
    </>
  );
}
