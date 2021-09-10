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
import { useHistory } from 'react-router-dom';


const CenteredEditModal = (props) => {
  const history = useHistory();
  const accesstoken=localStorage.getItem('accesstoken');
  const id=localStorage.getItem('id');
  const username=localStorage.getItem('username');
  const avatar=localStorage.getItem('avatar');
  const name=localStorage.getItem('name');
  const surname=localStorage.getItem('surname');
  let formData=null;
  let postId=null
  const [modalShow, setModalShow] = useState(false);
  const [post, setPost] = useState({
    text: `${props.post.text}`,
    username:`${username}`,
    user: `${id}`
  });
  const [postImage, setPostImage] = useState(null);

  const onSubmit = async (e) => {

    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/post/${props.post._id}`,
        {
          method: "PUT",
          body: JSON.stringify(post),
          headers: {
            'authentication':  `${accesstoken}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        let resp = await response.json()
        postId=resp._id
        console.log('post added')
      } else {
        alert("Something WRONG!");
      }

      if(postImage){
        const id=postId
        formData = new FormData()
        formData.append("image", postImage)

        const response = await fetch(`${process.env.REACT_APP_API_URL}/post/${id}/image`, {
          method: "PUT",
          body: formData,
          headers: {
            'authentication': `${accesstoken}`
          },
  
        })
  
        if (response.ok) {
          console.log('image also uploaded')
        }
      }
      props.fetch()
      
      

    } catch (error) {
      console.log(error);
    }
  };
  const onInputChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
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
         Update post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mb-0">
        <div className="d-flex">
          <Image src={avatar} className="elon mt-0 mr-2" />
          <div className="d-flex flex-column mt-n2">
            <p className="profile-info">{name} {surname}</p>
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
        <Form onSubmit={e => onSubmit(e)}>
          <Form.Group
            className="mt-3 mb-0"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              style={{ border: "none" }}
              as="textarea"
              name="text"
              placeholder="What do you want to post?"
              rows={3}
              value={post.text}
              onChange={e => onInputChange(e)}
            />
          </Form.Group>
          <a className="profile-info" href="#">
            Add hashtag
          </a>

          <div className="d-flex justify-content-between align-items-center mt-5">
            <div>
              
              <input type="file" id="file" style={{display: "none"}}
                onChange={e => setPostImage(e.target.files[0])}/>
                <label htmlFor="file" >
                    <HiOutlinePhotograph className="mr-2 icons" />
                </label>

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
              type="submit"
              className="rounded-pill"
            >
              Update
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default CenteredEditModal;
