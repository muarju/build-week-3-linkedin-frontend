import { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import UploadImage from "./UploadImage";

class AddForm extends Component {
  state = {
    form: {
      role: "",
      employmentType: "",
      company: "",
      location: "",
      start: { month: "", year: "" },
      end: { month: "", year: "" },
      industry: "",
      headline: "",
      description: "",
    },
    working: false,
    headline: false,
    post: null,
  };

  HandleInput = (key, value) => {
    this.setState({
      ...this.state,
      form: { ...this.state.form, [key]: value },
    });
  };

  Fetch = async (e) => {
    e.preventDefault();
    let userId = process.env.REACT_APP_API_USER;

    let objectPost = {
      role: this.state.form.role,
      company: this.state.form.company,
      startDate: this.state.form.start.month + this.state.form.start.year,
      endDate: this.state.form.end.month + this.state.form.end.year,
      description: this.state.form.description,
      area: this.state.form.location,
    };

    try {
      const postExp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          },
          method: "POST",
          body: JSON.stringify(objectPost),
        }
      );
      if (postExp.ok) {
        alert("Experience added !");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <>
        {console.log(this.state)}
        <Form
          className="container-form d-flex flex-column align-items-center"
          onSubmit={(e) => this.Fetch(e)}
        >
          <Form.Group className="w-100">
            <Form.Label>Title *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex. Retail Sales Manager"
              defaultValue={this.state.form.role}
              onChange={(e) => {
                this.HandleInput("role", e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="w-100">
            <Form.Label>Employment type</Form.Label> <br />
            <select
              className="w-100"
              value={this.state.form.employmentType}
              onChange={(e) => {
                this.HandleInput("employmentType", e.target.value);
              }}
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
              value={this.state.form.company}
              onChange={(e) => {
                this.HandleInput("company", e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="w-100">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex. London, United Kingdom"
              value={this.state.form.location}
              onChange={(e) => {
                this.HandleInput("location", e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3 w-100" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label=" I am currently working in this role"
              onClick={() => {
                this.setState({
                  ...this.state,
                  working: !this.state.working,
                });
              }}
            />
          </Form.Group>

          <Row className="w-100">
            <Col xs={6}>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Start Date *</Form.Label> <br />
                <select
                  value={this.state.form.start.month}
                  onChange={(e) => {
                    this.setState({
                      ...this.state,
                      form: {
                        ...this.state.form,
                        start: {
                          ...this.state.form.start,
                          month: e.target.value,
                        },
                      },
                    });
                  }}
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
                  value={this.state.form.start.year}
                  onChange={(e) => {
                    this.setState({
                      ...this.state,
                      form: {
                        ...this.state.form,
                        start: {
                          ...this.state.form.start,
                          year: e.target.value,
                        },
                      },
                    });
                  }}
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
                {this.state.working ? (
                  <span>Present</span>
                ) : (
                  <>
                    <select
                      value={this.state.form.end.month}
                      onChange={(e) => {
                        this.setState({
                          ...this.state,
                          form: {
                            ...this.state.form,
                            end: {
                              ...this.state.form.end,
                              month: e.target.value,
                            },
                          },
                        });
                      }}
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
                      value={this.state.form.end.year}
                      onChange={(e) => {
                        this.setState({
                          ...this.state,
                          form: {
                            ...this.state.form,
                            end: {
                              ...this.state.form.end,
                              year: e.target.value,
                            },
                          },
                        });
                      }}
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
              value={this.state.form.industry}
              onChange={(e) => {
                this.HandleInput("industry", e.target.value);
              }}
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
              onClick={() => {
                this.setState({
                  ...this.state,
                  headline: !this.state.headline,
                });
              }}
            />
          </Form.Group>

          <Form.Group className={this.state.headline ? "w-100" : "d-none"}>
            <Form.Label>Headline *</Form.Label>
            <Form.Control
              type="text"
              value={this.state.form.headline}
              onChange={(e) => {
                this.HandleInput("headline", e.target.value);
              }}
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
              value={this.state.form.description}
              onChange={(e) => {
                this.HandleInput("description", e.target.value);
              }}
            />
          </Form.Group>
          <UploadImage />
          <Button type="submit">Save</Button>
        </Form>
      </>
    );
  }
}

export default AddForm;
