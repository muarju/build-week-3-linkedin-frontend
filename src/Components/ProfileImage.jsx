import { Modal, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiPhotoAlbum } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import ProfileImageUpload from "./ProfileImageUpload";
import { MdModeEdit } from 'react-icons/md'

const ProfileImage = (props) => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <img
        src={props.profileData.image}
        alt="#"
        className="profile-pic rounded-circle"
        onClick={() => setLgShow(true)}
      />
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="modal-bg">
          <Modal.Title id="example-modal-sizes-title-lg" className='profile-edit-title'>
            Profile Photo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-profile modal-bg">
          <p>
            <img
              src={props.profileData.image}
              alt="#"
              className="profile-pic-modal rounded-circle"
              onClick={() => setLgShow(true)}
            />
          </p>
          <Button className="public-button">
            {" "}
            <AiOutlineEye className="public-icon" />
            Public
          </Button>
        </Modal.Body>
        <Modal.Footer className="modal-bg justify-content-between">
            <Row className='mx-0 my-0'>
            
            <Col className="flex-column mb-0 modal-edit col-1 d-flex first-svg align-items-center justify-content-center" >
              <MdModeEdit className="mb-1 ml-1" size="1x" />
              <span className="mb-0 text-white footer-span ml-1">Edit</span>
            </Col>
            <ProfileImageUpload profileData={props.profileData} fetch={props.fetch}/>
            <Col className="flex-column mb-0 modal-edit col-3 d-flex second-svg  justify-content-center mr-auto">
            <BiPhotoAlbum className="mb-1 ml-1 mt-1" size="1x"/>
            <span className="mb-0 text-white footer-span ml-1">Frames</span>
            </Col>
            <Col className="flex-column mb-0 modal-edit col-3 d-flex second-svg  justify-content-center align-items-end">
            <RiDeleteBin5Line className="mb-1 ml-1 mt-1" size="1x"/>
            <span className="mb-0 text-white footer-span ml-1">Delete</span>
            </Col>
            </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileImage;

//rgba(0, 0, 0, 0.9)
