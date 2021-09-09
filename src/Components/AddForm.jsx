import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FaLessThan } from "react-icons/fa";
import UploadImage from "./UploadImage";

const AddForm = () => {

  const [working, setWorking] = useState(false)
  const [headline, setHeadline] = useState(false)
  const [image, setImage] = useState(null)
  const [form, setForm] = useState({
    role: "",
    employmentType: "",
    company: "",
    location: "",
    start: { month: "", year: "" },
    end: { month: "", year: "" },
    industry: "",
    headline: "",
    description: "",
    image: ""
  })

  const HandleInput = (key, value) => setForm({ ...form, [key]: value })

  const Fetch = async (e) => {
    e.preventDefault();

    let username = localStorage.getItem('username');
    let accesstoken = localStorage.getItem('accesstoken');
    let formData = null
    let expId = null


    let objectPost = {
      role: form.role,
      company: form.company,
      startDate: form.start.month + form.start.year,
      endDate: form.end.month + form.end.year,
      description: form.description,
      area: form.location,
      image: image.name
    };



    try {
      const postExp = await fetch(`${process.env.REACT_APP_API_URL}/profile/${username}/experiences`, {
        headers: {
          'Content-Type': 'application/json',
          'authentication': `${accesstoken}`
        },
        method: "POST",
        body: JSON.stringify(objectPost),
      }
      );
      if (postExp.ok) {
        expId = await postExp.json()
        console.log('post data here', expId);
        alert("Experience added !");
      }


      if (image) {
        formData = new FormData()
        formData.append("image", image)
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL}/profile/${username}/experiences/${expId}/image`, {
        method: "PUT",
        body: formData,
        headers: {
          'authentication': `${accesstoken}`
        },
        
      })
      
      if (response.ok) {
        const imageData = await response.json()
        console.log(expId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form
        className="container-form d-flex flex-column align-items-center"
        onSubmit={(e) => Fetch(e)}
      >
        <Form.Group className="w-100">
          <Form.Label>Title *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex. Retail Sales Manager"
            defaultValue={form.role}
            onChange={(e) => HandleInput("role", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="w-100">
          <Form.Label>Employment type</Form.Label> <br />
          <select
            className="w-100"
            value={form.employmentType}
            onChange={(e) => HandleInput("employmentType", e.target.value)}
          >
            <option>-</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Self-employed</option>
            <option>Freelance</option>
            <option>Contract</option>
            <option>Internship</option>
            <option>Seasonal</option>
          </select>
          <p className="under-text">Country-specific employment types</p>
          <p className="learn-more">Learn More</p>
        </Form.Group>

        <Form.Group className="w-100">
          <Form.Label>Company *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex. Microsoft"
            value={form.company}
            onChange={(e) => HandleInput("company", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="w-100">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex. London, United Kingdom"
            value={form.location}
            onChange={(e) => HandleInput("location", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 w-100" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label=" I am currently working in this role"
            onClick={() => setWorking(!working)}
          />
        </Form.Group>
        <Row className="w-100">
          <Col xs={6}>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Start Date *</Form.Label> <br />
              <select
                value={form.start.month}
                onChange={(e) => setForm({ ...form, start: { ...form.start, month: e.target.value } })}
                className="start"
              >
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select
                value={form.start.year}
                onChange={(e) => setForm({ ...form, start: { ...form.start, year: e.target.value } })}
                className="start"
              >
                <option>Year</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
                <option>2011</option>
                <option>2010</option>
                <option>2009</option>
                <option>2008</option>
                <option>2007</option>
                <option>2006</option>
                <option>2005</option>
                <option>2004</option>
                <option>2003</option>
                <option>2002</option>
                <option>2001</option>
                <option>2000</option>
              </select>
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>End Date</Form.Label> <br />
              {working ? (
                <span>Present</span>
              ) : (
                <>
                  <select
                    value={form.end.month}
                    onChange={(e) => setForm({ ...form, end: { ...form.end, month: e.target.value } })}
                    className="end"
                  >
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                  <select
                    value={form.end.year}
                    onChange={(e) => setForm({ ...form, end: { ...form.end, year: e.target.value } })}
                    className="end"
                  >
                    <option>Year</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                    <option>2010</option>
                    <option>2009</option>
                    <option>2008</option>
                    <option>2007</option>
                    <option>2006</option>
                    <option>2005</option>
                    <option>2004</option>
                    <option>2003</option>
                    <option>2002</option>
                    <option>2001</option>
                    <option>2000</option>
                  </select>
                </>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="w-100">
          <Form.Label>Industry *</Form.Label> <br />
          <select
            className="w-100"
            value={form.industry}
            onChange={(e) => HandleInput("industry", e.target.value)}
          >
            <option>Choose an industry...</option>
            <option>Accounting</option>
            <option>Arts & Crafts</option>
            <option>Business</option>
            <option>Design</option>
            <option>E-learning</option>
            <option>Farming</option>
            <option>...</option>
          </select>
        </Form.Group>

        <Form.Group className="w-100">
          <Form.Check
            type="checkbox"
            label="Update my headline"
            onClick={() => setHeadline(!headline)}
          />
        </Form.Group>

        <Form.Group className={headline ? "w-100" : "d-none"}>
          <Form.Label>Headline *</Form.Label>
          <Form.Control
            type="text"
            value={form.headline}
            onChange={(e) => HandleInput("headline", e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 w-100"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={form.description}
            onChange={(e) => HandleInput("description", e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <UploadImage image={form.image} />
          <Form.Control id="file-input" type="file" onChange={e => setImage(e.target.files[0])} className="d-none" />
        </Form.Group>
        <Button type="submit">Save</Button>
      </Form>
    </>
  );
}

export default AddForm;
