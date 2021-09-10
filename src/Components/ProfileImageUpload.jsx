import { Modal, Button, Col } from "react-bootstrap";
import { useState, useRef } from "react";
import { AiOutlineCamera } from "react-icons/ai";

const ProfileImageUpload = (props) => {
  const [lgShow, setLgShow] = useState(false);

const input = useRef()
const fileUpload = async (e) => {
    try {

      const accesstoken = localStorage.getItem('accesstoken');
      const userId = localStorage.getItem('id');
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("profileImage", file);

      const response = await fetch(`${process.env.REACT_APP_API_URL}/profile/${userId}/picture`,
        {
          method: "PUT",
          body: formData,
          headers: {
            'authentication': `${accesstoken}`
        }
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        //alert('successfully updated')
        props.fetch()
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Col
        className="flex-column mb-0 modal-edit col-3 d-flex second-svg align-items-center justify-content-center"
        onClick={() => setLgShow(true)}
      >
        <AiOutlineCamera className="mb-1 ml-1 mt-1" size="1x" />
        <span className="mb-0 text-white footer-span ml-1">Add Photo</span>
      </Col>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-modal-sizes-title-lg"
            className="profile-edit-title"
          >
            Change Photo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="upload-body modal-body-profile mb-5">
          <span className="d-flex justify-content-center text-dark mb-4 upload-body-span">
            {props.profileData.name}, Keep your profile fresh!
          </span>
          <p>
            <img
              src={props.profileData.image}
              alt="#"
              className="profile-pic-upload rounded-circle"
              onClick={() => setLgShow(true)}
            />
          </p>
          <span className="d-flex justify-content-center mt-3 modal-body-span">
            Take or upload a photo. Then crop, filter and adjust it to
            perfection.
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button className="footer-button">Use Camera</Button>
          {/*<input type="file"></input>*/}
          <input ref={input} hidden type="file" accept='image/png' onChange={fileUpload}></input>
          <Button onClick={() => {
          input.current.click();
        }}>Upload Photo</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileImageUpload;
