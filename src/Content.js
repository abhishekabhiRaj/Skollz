import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {BsSearch, BsPencilFill, BsPerson} from "react-icons/bs";



// Content Component

const Content = () => {
  return(
    <>
      <Container >

      {/* Search Bar */}
          <Row className="">
              <Col md={11} className="">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail"> 
                    <Form.Control type="email" placeholder="Search Staff" />      
                  </Form.Group>
                </Form>
              </Col>
              <Col md={1} className="">
                  <Button className="custom-btn" variant="light" type="submit">
                      <BsSearch/>
                  </Button>
              </Col>
          </Row>

      {/* Sorting and Adding Staff Button */}
          <Row className="">
              <Col md={2} className="mt-3">
                  <Form.Select className="custom-btn" aria-label="Default select example" >
                     <option>Sort By</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </Form.Select>
              </Col>
              <Col md={2} className="mt-3">
               <Form.Select className="custom-btn" aria-label="Default select example" >
                     <option>Designation</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </Form.Select>
              </Col>
              <Col md={8} className="mt-3 custom-flex">
                  <div></div>
                  <button className="add_staff_btn custom-btn">
                       + 
                  </button>
              </Col>
          </Row>

      {/* Person Details */}
          <Row className=" p-2 mb-5">
          {/* First bordered box  */}
              <Col md={12} className="mt-4">
                  <section className="custom-border custom-flex">
                      <div className="border-box"></div>
                      <p className="custom-text m-0">Full Name</p>
                      <p className="custom-text m-0">Designation</p>
                      <div className="d-flex align-items-center">
                        <BsPerson/>
                        <p className="custom-text m-0">View Profile</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <BsPencilFill className=""/>
                        <p className="custom-text m-0 p-1">Edit</p>
                      </div>
                  </section>
              </Col>
          {/* Second bordered box with details */}
              <Col md={12} className="mt-4">
                  <section className="custom-border">
                      <div className=" custom-flex">
                      <div className="border-box">
                          <span className="small-text"> Profile <br/> Picture </span>
                      </div>
                      <p className="custom-text m-0 p-text">Full Name</p>
                      <p className="custom-text m-0 p-text">Designation</p>
                      <div className="d-flex align-items-center">
                        <BsPerson className="p-text" />
                        <p className="custom-text m-0 p-text">View Profile</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <BsPencilFill className="p-text"/>
                        <p className="custom-text m-0 p-1 p-text">Edit</p>
                      </div>
                      </div>
                        {/* <p className="text-main mt-5"> Personal Details</p> */}
                        
                      <div className=" custom-flex mt-4">
                      
                      
                      
                       <section className="custom-flex  personal-info w-100 align-item-unset">
                            <div className="border-radius ">
                          {/* <span className="small-text"> jhj </span> */}
                            </div>

                            <section className="w-100">

                            <div  className="w-100">
                            <p className="text-main  m-2 p-text"> Personal Details</p>
                                <section className="d-flex">
                                
                                
                                
                                </section>

                                <Container className=" ">
                                    <Row>
                                        <Col md={6}><p className="m-0 info-detail m-1 small-text-13">Building number</p></Col>
                                        <Col md={6}><p className="m-0 info-detail m-1 small-text-13">Street</p></Col>
                                        
                                    </Row>
                                    <Row>
                                        <Col md={6}><p className="m-0 info-detail m-1 small-text-13">City</p></Col>
                                        <Col md={6}><p className="m-0 info-detail m-1 small-text-13">Pin Code</p></Col>
                                        
                                    </Row>
                                    <Row>
                                        <Col md={6}><p className="m-0 info-detail m-1 small-text-13">Date of Birth</p></Col>
                                        <Col md={6}><p className="m-0 info-detail m-1 small-text-13">Date of Joining</p></Col>
                                        
                                    </Row>
                                </Container>
                          
                            </div>
                            <div  className="w-100 mt-4">
                            <p className="text-main  m-2 p-text"> Bank Details</p>
                                <section className="d-flex">
                                
                                
                                
                                </section>

                                <Container className=" ">
                                    <Row>
                                        <Col md={6}><p className="m-0 info-detail m-1 small-text-13">Salary Amount</p></Col>
                                        {/* <Col md={6}><p className="m-0 info-detail m-1 small-text-13">Street</p></Col> */}
                                        
                                    </Row>
                                    <Row>
                                        <Col md={6}><p className="m-0 info-detail m-1 small-text-13">Bank Name</p></Col>
                                        <Col md={6}><p className="m-0 info-detail m-1 small-text-13">IFSC Code</p></Col>
                                        
                                    </Row>
                                    <Row>
                                        <Col md={6}><p className="m-0 info-detail m-1 small-text-13">Account Number</p></Col>
                                        <Col md={6}><p className="m-0 info-detail m-1 small-text-13">Branch Code</p></Col>
                                        
                                    </Row>
                                </Container>
                          
                            </div>

                            </section>
                            
                      </section>
                     
                      </div>
                  </section>
              </Col>

             {/* Save Button */}
              <Col className="mt-2">
                  <Button variant="primary m-1 save-btn" onClick={()=>window.alert('Form has been reset')}>Reset</Button>
                  <Button variant="primary m-1 save-btn" onClick={()=>window.alert('Form has been successfully submitted')}>Save</Button>
              </Col>
              
          </Row>

        
      </Container>
    </>
  );
}

export default Content;