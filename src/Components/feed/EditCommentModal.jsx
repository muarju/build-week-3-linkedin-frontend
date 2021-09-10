import "../../post.css";
import { useState } from "react";
import { Modal, Image, Button, Form } from "react-bootstrap";



const EditCommentModal = (props) => {
const accesstoken=localStorage.getItem('accesstoken');
  const [modalShow, setModalShow] = useState(false);
  const [post, setPost] = useState({
    comment: `${props.comment.comment}`,
  });


  const onSubmit = async (e) => {

    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/post/${props.post._id}/comment/${props.comment._id}`,
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
        console.log('Comments Updated')
      } else {
        alert("Something WRONG!");
      }
      setTimeout(function() {
        window.location.replace('/');
      }, 500);
      

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
         Update Comment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mb-0">
        <Form onSubmit={e => onSubmit(e)}>
          <Form.Group
            className="mt-3 mb-0"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              style={{ border: "none" }}
              as="textarea"
              name="comment"
              placeholder="What do you want to post?"
              rows={3}
              value={post.comment}
              onChange={e => onInputChange(e)}
            />
          </Form.Group>
         

          <div className="d-flex justify-content-between align-items-center mt-5">
          
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
export default EditCommentModal;
