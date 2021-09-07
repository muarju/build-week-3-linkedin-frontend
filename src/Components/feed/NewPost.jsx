import { useState } from "react";
import { Card, Row, Col, Image, FormControl, CardGroup } from "react-bootstrap";
import "../../post.css";
import CenteredModal from "./PostModal";
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiFillPlaySquare } from "react-icons/ai";
import { RiCalendarEventFill } from "react-icons/ri";
import { RiArticleLine } from "react-icons/ri";
const NewPost = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Row>
      <Card className="mt-2 w-100 mb-0 newPost">
        <Card.Body>
          <div className="d-flex">
            <Image src="https://bit.ly/3zegycw" className="elon mt-0 mr-2" />

            <FormControl
              placeholder="Post here"
              aria-label="post"
              aria-describedby="basic-addon1"
              className="rounded-pill post-input"
              onClick={() => setModalShow(true)}
            />
            <CenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div className="d-flex">
              <HiOutlinePhotograph className="mr-2 mt-1 text-primary" />
              <p className="post-para mt-1">Photo</p>
            </div>
            <div className="d-flex">
              <AiFillPlaySquare className="mr-2 mt-1 text-success" />
              <p className="post-para mt-1">Video</p>
            </div>
            <div className="d-flex">
              <RiCalendarEventFill className="mr-2 mt-1 text-warning" />
              <p className="post-para mt-1">Event</p>
            </div>
            <div className="d-flex">
              <RiArticleLine className="mr-2 mt-1 text-danger" />
              <p className="post-para mt-1">Write article</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Row>
  );
};
export default NewPost;
