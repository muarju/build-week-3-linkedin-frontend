import { useRef, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai'

const AddForm = (props) => {

  const [expData, setexpData] = useState(props.editData)
  const [working, setWorking] = useState(false)

  const input = useRef()

  const userId = props.userId
  const expId = props.expId

  const submitData = async () => {
    try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,{
          method: 'PUT',
          body: JSON.stringify(expData),
          headers: {
              'Content-Type': 'application/json',
              Authorization : `Bearer ${process.env.REACT_APP_API_KEY}`
          }
      })
      if(response.ok){
          
      }
      else{
          console.log(response.status)
      }
    } catch (error) {
        console.log(error)
    }
}

const deleteData = async () => {
  try {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,{
          method: 'DELETE',
          headers: {
              Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1M2IyNTBlZmU3ODAwMTU1YzM0YTAiLCJpYXQiOjE2MjY2ODQxOTcsImV4cCI6MTYyNzg5Mzc5N30.3ZXfLM8Xio4MkKGlFiTA42FVjeiUinuO7VDCroKKFMw"
          }
      })
      if(response.ok){
          
      }
      else{
          console.log(response.status)
      }
  } catch (error) {
    console.log(error)
  }
}


  
    return (
      <>
        
        <Form
          className="container-form d-flex flex-column align-items-center"
          onSubmit={(e) => this.Fetch(e)}
        >
          <Form.Group className="w-100">
            <Form.Label>Title *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex. Retail Sales Manager"
              defaultValue={expData.role}
              onChange={(e) => {
                expData.role=e.target.value
              }}
            />
          </Form.Group>

          <Form.Group className="w-100">
            <Form.Label>Employment type</Form.Label> <br />
            <select
              className="w-100"
              //value={this.state.form.employmentType}
              /*onChange={(e) => {
                this.HandleInput("employmentType", e.target.value);
              }}*/
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
              defaultValue={expData.company}
              onChange={(e) => {
                expData.company = e.target.value
              }}
            />
          </Form.Group>

          <Form.Group className="w-100">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex. London, United Kingdom"
              defaultValue={expData.area}
              onChange={(e) => {
                expData.area = e.target.value
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3 w-100" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label=" I am currently working in this role"
              onClick={() => {
                setWorking(true);
              }}
            />
          </Form.Group>

          <Row className="w-100">
            <Col xs={6}>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Start Date *</Form.Label> <br />
                <select
                  value={expData.startDate}
                  /*onChange={(e) => {
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
                  }}*/
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
                  value={expData.startDate}
                  /*onChange={(e) => {
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
                  }}*/
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
                      value={expData.endDate}
                      /*onChange={(e) => {
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
                      }}*/
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
                      value={expData.endDate}
                      /*onChange={(e) => {
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
                      }}*/
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
              value={expData.role}
              onChange={(e) => {
                expData.role=e.target.value
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
              /*onClick={() => {
                this.setState({
                  ...this.state,
                  headline: !this.state.headline,
                });
              }}*/
            />
          </Form.Group>

          {/*<Form.Group className={this.state.headline ? "w-100" : "d-none"}>
            <Form.Label>Headline *</Form.Label>
            <Form.Control
              type="text"
              defaultValue={expData.description}
              onChange={(e) => {
                this.HandleInput("headline", e.target.value);
              }}
            />
          </Form.Group>*/}

          <Form.Group
            className="mb-3 w-100"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              defaultValue={expData.description}
              onChange={(e) => {
               expData.description = e.target.value
              }}
            />
          </Form.Group>
          <Form.Control type="file" hidden ref={input}/>
      
      
      <Row className='w-100 align-self-center mb-3' onClick={() => {
          input.current.click();
        }}>
              <AiOutlinePlus />
              <span className='mb-0'>Add Media</span>
            </Row>
          <Form.Group className='w-100 d-flex justify-content-between'>
          <Button className='del-exp-button btn-light' type="submit" onClick={deleteData}>Delete Experience</Button>
          <Button className='edit-exp-button' type="submit" onClick={submitData}>Save</Button>
          </Form.Group>
        </Form>
      </>
    );

}

export default AddForm;
