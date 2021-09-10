/* eslint-disable jsx-a11y/img-redundant-alt */
import { Card, Col, Form, Row,Dropdown } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import { BiWorld, BiLike, BiComment, BiShare } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";
import CenteredEditModal from "./EditPostModal";
import EditCommentModal from './EditCommentModal'

const SinglePost = (props) => {
  console.log(props.post)
  const id=localStorage.getItem('id')
  const [showComment, SetShowComment] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [EditCommentmodalShow, setEditCommentmodalShow] = useState(false);
  const [comment, setComment] = useState({
    comment: "",
    profileId:`${id}`,
  });
  const userID = props.user._id
  const curent_userId=localStorage.getItem('id');
  const accesstoken=localStorage.getItem('accesstoken');
  const avatar=localStorage.getItem('avatar');

  const LikeAction=async (postId)=>{
    const response= await axios.get(`${process.env.REACT_APP_API_URL}/post/${postId}/like/${curent_userId}`,{
      headers: {
        'authentication': `${accesstoken}`
      }
    })
    if(response){
      console.log('like',response.data)
      setTimeout(function() {
        window.location.replace('/');
      }, 500);
    }else{
      console.log("something wrong")
    }
  }

  const onSubmit=async (e,postId) =>{
    e.preventDefault();
    console.log(comment)
    const response= await axios.post(`${process.env.REACT_APP_API_URL}/post/${postId}/comment`,comment, {
      headers: {
      'authentication':  `${accesstoken}`
      }
    })
    if(response){
      props.fetch()

     
    }else{
      console.log("something wrong")
    }
   
  }
  const onInputChange = e => {
    setComment({ ...comment, [e.target.name]: e.target.value });
    e.preventDefault();
    if(e.key === 'Enter'){
      console.log('enter pressed')
    }
  };
 const DeletePost =async (postId) =>{
  const response= await axios.delete(`${process.env.REACT_APP_API_URL}/post/${postId}`,{
    headers: {
    'authentication':  `${accesstoken}`
    }
  })
  if(response){
    props.fetch()

  }else{
    console.log("something wrong")
  }
 }
 

 const DeleteComment =async (postId,commentId) =>{
  const response= await axios.delete(`${process.env.REACT_APP_API_URL}/post/${postId}/comment/${commentId}`,{
    headers: {
    'authentication':  `${accesstoken}`
    }
  })
  if(response){
    props.fetch()

  }else{
    console.log("something wrong")
  }
 }

  return (
    
    <Card className="w-100">
      <Card.Body className="post-card">
        <div style={{display: "flex",justifyContent: "space-between"}}>
        <a href={`/profile/${userID}`} className="post-user-info" style={{"color":"#191919"}}>
          <div className="user-icon-container">
            <img src={props.user.image} alt="" className="user-icon" width="45" height="45"
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
        <span>
        <Dropdown style={{marginTop:"15px"}}>
        <Dropdown.Toggle variant="" style={{background:"none", border:"none", fontSize: "12px", padding:"0px !important"}} id="dropdown-basic">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
          <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
        </svg>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href={`/profile/${props.post.user._id}`}>View Profile</Dropdown.Item>
          {props.post.user._id===curent_userId ? <Dropdown.Item  onClick={() => setModalShow(true)}>Edit Post</Dropdown.Item>: <></>}
          <CenteredEditModal
              show={modalShow}
              post={props.post}
              fetch={props.fetch}
              onHide={() => setModalShow(false)}
            />
          {props.post.user._id===curent_userId ? <Dropdown.Item  onClick={() => DeletePost(props.post._id)}>Delete</Dropdown.Item>: <></>}
        </Dropdown.Menu>
        </Dropdown>
        </span>
        </div>
        <p className="user-post">
          {props.post.text}
        </p>
        {
          props.post.image && (
            <div>
              <img src={props.post.image} alt="LinkedIn Image" className="img-fluid user-post-image" />
            </div>
          )
        }
        <ul style={{ fontSize: "10px", lineHeight: "20px", display: "inline-flex", padding: "0px" }}>
          <li style={{ listStyle: "none", marginRight: "20px" }}><img src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" height="16px" width="16px" />
            {props.post.likes.length}</li>
          <li>{props.post.Comments.length} comments</li>
        </ul>
        <Row className="post-buttons-container">
          <div>
          </div>
          <div className="post-action-container" >
            <div className="post-action" onClick={() => LikeAction(props.post._id)}>
              <BiLike size={20} />
              <span className="post-action-descriptor">Like</span>
            </div>
            <div xs={1} className="post-action" onClick={() => SetShowComment(true)}>
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
          {props.post.Comments.map(c => 
             <Row className="d-flex justify-content-between">
             <div className="post-comment-img">
               <img
                 src={c.profileId.image}
                 alt="profile-picture"
                 className="rounded-circle" 
                 style={{height: "40px", width: "40px", padding: "5px"}}
               />
             </div>
             <div className="pt-2 mr-auto">
             {c.comment}
             </div>
             <div className="pt-2">
             {c.profileId._id===curent_userId ? 
             <Dropdown>
              <Dropdown.Toggle variant="" style={{background:"none", border:"none", fontSize: "12px", padding:"0px !important"}} id="dropdown-basic">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
              </svg>
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item onClick={() => setEditCommentmodalShow(true)}>Edit Comment</Dropdown.Item>
              <EditCommentModal
              show={EditCommentmodalShow}
              comment={c}
              post={props.post}
              fetch={props.fetch}
              onHide={() => setModalShow(false)}
            />
              <Dropdown.Item  onClick={() => DeleteComment(props.post._id, c._id)}>Delete Comment</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
              : <></>}
             </div>
           </Row>
            
            )}

            <Row className="d-flex">
              <div className="post-comment-img">
                <img
                  src={avatar}
                  style={{height: "40px", marginTop: "5px"}}
                  alt="profile-picture"
                  className="rounded-circle"
                />
              </div>
              <div className="post-textarea">
               <Form onSubmit={(e,postId )=> onSubmit(e,props.post._id)}>
               <Form.Group
                    className="mb-2 mt-2 pr-2"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      type="text"
                      name="comment"
                      defaultValue={comment.comment}
                      className="w-100"
                      onChange={e => onInputChange(e)}
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
  let relatedness = Math.floor(Math.random() * 3) + 1
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
