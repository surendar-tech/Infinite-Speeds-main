import { Col, Row } from "react-bootstrap";
import Contact1 from '../Image/contact.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    useEffect(() => {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
            });
        }, []);
    return (
        <section>
            <div className="contact d-flex align-items-center py-5" id="contact">
                <div className="container-fluid text-light">
                    <Row>
                        <Col data-aos="fade-right" className="col-lg-6 justify-content-center justify-content-lg-end align-items-center px-lg-5 contact1">
                            <div style={{ width: "90%" }}>
                                <div className="text-center text-lg-start py-4 pt-lg-0">
                                    <p>CONTACT</p>
                                    <h2 className="py-2">Send your query</h2>
                                    <p style={{ color: "lightgray" }}>Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Dignissimos dicta mollitia
                                        totam explicabo obcaecati quia laudantium repudiandae.</p>
                                </div>
                            </div>
                            <div>
                                <Row>
                                    <div className="contact2">
                                        <Col style={{ width: "45%" }} className="col-lg-6 ">
                                            <div className="form-group py-2">
                                                <input type="text" className="form-control form-control-input" id="exampleFormControlInput1" placeholder="Enter name" />
                                            </div>
                                        </Col>
                                        <Col style={{ width: "294px",marginLeft: "25px"}} className="col-lg-6 contact3">
                                            <div className="form-group py-2">
                                                <input type="email" className="form-control form-control-input" id="exampleFormControlInput2" placeholder="Enter phone number" />
                                            </div>
                                        </Col>
                                    </div>
                                    <div className="form-group py-1">
                                        <input type="email" className="form-control form-control-input" id="exampleFormControlInput3" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group py-2">
                                        <textarea class="form-control form-control-input" id="exampleFormControlTextarea1" rows="6" placeholder="Message"></textarea>
                                    </div>
                                </Row>
                                <div className="my-3 plans1">
                                    <a href="/">Submit</a>
                                </div>
                            </div>
                        </Col>
                        <Col data-aos="fade-down" className="col-lg-6 d-flex align-items-center">
                            <div>
                                <img className="img-fluid d-none d-lg-block" src={Contact1} alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    )
}
export default Contact;