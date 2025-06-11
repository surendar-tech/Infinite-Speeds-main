import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Abut from '../Image/about.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



function About() {
    useEffect(() => {
                AOS.init({
                    duration: 1000,
                    easing: 'ease-in-out',
                    once: true,
                });
            }, []);
    return (
        <section>
            <div className="about align-items-center text-light py-5">
                <Container>
                    <Row className="align-items-center about1" id="aboutus">
                        <Col lg={7} data-aos="fade-right" className="about2">
                            <p>ABOUT US</p>
                            <h1>
                                We are top internet
                                <br />
                                service company
                            </h1>
                            <p style={{ color: 'lightgray' }} className="py-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Non sed accusantium aut dolores inventore architecto modi
                                cupiditate eligendi corporis, illum illo culpa. Reiciendis,
                                molestias. Illum voluptatum quisquam ad veritatis dolorem.
                            </p>
                            <p style={{ color: 'lightgray' }} className="py-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Non sed accusantium aut dolores inventore architecto modi
                                cupiditate eligendi corporis, illum illo culpa. Reiciendis,
                                molestias. Illum voluptatum quisquam ad veritatis dolorem.
                            </p>
                            <a className="about3" href="/">Learn More</a>
                        </Col>

                        <Col lg={5} className="text-center py-4 py-sm-0 about4">
                            <div data-aos="fade-down">
                                <img className="img-fluid" src={Abut} alt="About us" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}
export default About;