import { Modal, ListGroup, Form, Button } from "react-bootstrap";
import { BiWorld } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import "../post.css";

const PrivacyModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create posts
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mb-0 p-0">
        <span className="ml-4 font-weight-lighter">
          Your post will be visible on feed, on your profile and in search
          results
        </span>
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between">
            <div className="d-flex">
              <BiWorld className="mr-2 mt-2 privacy-icons" />
              <div className="ml-3 mt-2">
                <p className="privacy-para">Anybody</p>
                <span className="privacy-opt ">Connections on Linkedin</span>
              </div>
            </div>
            <Form.Check type="radio" aria-label="radio 1" />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            <div className="d-flex">
              <BiWorld className="mr-2 mt-2 privacy-icons" />
              <div className="ml-3 mt-2">
                <p className="privacy-para">Anyone + Twitter</p>
                <span className="privacy-opt ">Connections on Linkedin</span>
              </div>
            </div>
            <Form.Check type="radio" aria-label="radio 1" />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            <div className="d-flex">
              <IoPeople className="mr-2 mt-2 privacy-icons" />
              <div className="ml-3 mt-2">
                <p className="privacy-para">Contacts only</p>
                <span className="privacy-opt ">Connections on Linkedin</span>
              </div>
            </div>
            <Form.Check type="radio" aria-label="radio 1" />
          </ListGroup.Item>
          <hr />
        </ListGroup>
        <div className="d-flex justify-content-end mt-n4">
          <Button className="rounded-pill  text-black border">Back</Button>
          <Button className="rounded-pill  text-black border">Save</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default PrivacyModal;
