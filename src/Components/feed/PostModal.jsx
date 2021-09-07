import "../../post.css";
import { useState } from "react";
import { Modal, Image, Button, Form } from "react-bootstrap";
import PrivacyModal from "../PrivacyModal";
import { BiWorld } from "react-icons/bi";
import { VscTriangleDown } from "react-icons/vsc";
import { IoDocumentTextSharp } from "react-icons/io5";
import { GiShinyIris } from "react-icons/gi";
import { IoBagRemove } from "react-icons/io5";
import { FaPoll } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiFillPlaySquare } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";

const CenteredModal = (props) => {
  const [modalShow, setModalShow] = useState(false);
  // const [input, setInput] = useState("")
  const [comment, setComent] = useState({
    text: "",
  });
  // useEffect(() => {

  // }, [])
  const fetchPost = async (e) => {

    e.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            Authorization:`Bearer ${process.env.REACT_APP_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Your post is POSTED!");
        setComent({
          text: "",
        });
      } else {
        alert("Something WRONG!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePost = (key, value) => {
    setComent({
      [key]: value,
    });
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mb-0">
        <div className="d-flex">
          <Image src="https://bit.ly/3zegycw" className="elon mt-0 mr-2" />
          <div className="d-flex flex-column mt-n2">
            <p className="profile-info">Cras mattis</p>
            <div
              onClick={() => setModalShow(true)}
              className="rounded-pill bg-white text-black border"
              style={{ width: "110px" }}
            >
              <div className="d-flex ml-2" style={{ cursor: "pointer" }}>
                <BiWorld className="mt-1" />
                <p className="mx-1">Public</p>
                <VscTriangleDown className="mt-1" />
              </div>
            </div>
            <PrivacyModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
        <Form onSubmit={fetchPost}>
          <Form.Group
            className="mt-3 mb-0"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              style={{ border: "none" }}
              as="textarea"
              placeholder="What do you want to post?"
              rows={3}
              value={comment.text}
              onChange={(e) => handlePost("text", e.target.value)}
            />
          </Form.Group>
          <a className="profile-info" href="#">
            Add hashtag
          </a>

          <div className="d-flex justify-content-between align-items-center mt-5">
            <div>
              <HiOutlinePhotograph className="mr-2 icons" />
              <AiFillPlaySquare className="mr-2 icons" />
              <IoDocumentTextSharp className="mr-2 icons" />
              <IoBagRemove className="mr-2 icons" />
              <GiShinyIris className="mr-2 icons" />
              <FaPoll className="mr-2 icons" />
              <BsThreeDots className="mr-2 icons" />
            </div>
            <RiMessage2Line className="mt-2 mr-n4" />
            <span className="mt-1">Anyone</span>
            <Button
              disabled={!comment.text}
              type="submit"
              className="rounded-pill"
            >
              Post
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default CenteredModal;
