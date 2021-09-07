import { Component } from "react";
import { Form } from "react-bootstrap";

class UploadImage extends Component {
  /*   componentDidMount = () => {
    const upload = async () => {
let response = fetch("https://striveschool-api.herokuapp.com/api/profile/{userId}/experiences/:expId/picture")
    };
  }; */
  render() {
    return (
      <Form.Group className="w-100">
        <Form.Label>Upload an Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    );
  }
}

export default UploadImage;
