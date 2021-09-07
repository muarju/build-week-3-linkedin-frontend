import { Card, Col, Form, Row } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import { BiWorld, BiLike, BiComment, BiShare } from "react-icons/bi";
import { useState } from "react";
import faker from 'faker'


const SinglePost = (props) => {
  const [showPost, SetShowPost] = useState(false);
  const [showComment, SetShowComment] = useState(false);
  const userID = props.user._id

  return (
    <Card className="w-100">
      {console.log("USER POST PROPS", props.user, props.post)}
      <Card.Body className="post-card">
        <a href={userID} className="post-user-info" style={{"color":"#191919"}}>
          <div className="user-icon-container">
            <img
              src={props.user.image}
              alt=""
              className="user-icon"
              width="45"
              height="45"
            />
          </div>
          <div className="user-fragment-info fragment-info-post">
            <h6 className="post-user-name">
              {props.user.name + " " + props.user.surname} • <span className="text-secondary">{relatedness()}</span>
            </h6>
            <p className="post-job-descriptor text-secondary">
              {props.user.title} 
            </p>
            <p className="post-job-descriptor-details text-secondary">
              {formatDate(props.post.createdAt)} • <BiWorld />
            </p>
          </div>
        </a>
        <p className="user-post">
          {props.post.text}
        </p>
        {
          props.post.image && (
            <div>
              <img
                src={props.post.image}
                alt="LinkedIn Image"
                className="img-fluid user-post-image" />
            </div>
          )
        }
        
        <Row className="post-buttons-container">
          <div className="post-action-container" >
            <div className="post-action">
              <BiLike size={20}/>
              <span className="post-action-descriptor">Like</span>
            </div>
            <div xs={1} className="post-action" onClick={()=> SetShowComment(true)}>
              <BiComment size={19} />
              <span className="post-action-descriptor">Comment</span>
            </div>
            <div xs={1} className="post-action">
              <BiShare size={22} />
              <span className="post-action-descriptor">Share</span>
            </div>
            <div xs={1} className="post-action">
              <FaPaperPlane size={16} />
              <span className="post-action-descriptor">Send</span>
            </div>
          </div>
        </Row>
        
        <Row>
          <Col className={showComment ? "post-comment-area" : "d-none"}>
            <Row className="d-flex">
              <div className="post-comment-img">
                <img
                  src="https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png"
                  alt="profile-picture"
                  className="rounded-circle"
                />
              </div>
              <div className="post-textarea">
                <Form className="post-textarea w-100">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      rows={1}
                      className="post-comment-textarea w-100"
                    />
                  </Form.Group>
                </Form>
              </div>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

function relatedness() {
  let relatedness = Math.floor(Math.random()*3) +1
  if (relatedness === 1) return (relatedness + "st")
  if (relatedness === 2) return (relatedness + "nd")
  if (relatedness === 3) return (relatedness + "rd")
  if (relatedness === 4) return (relatedness + "th")
}

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

export default SinglePost;
