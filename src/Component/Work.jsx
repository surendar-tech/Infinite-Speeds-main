import { Container, Row, Col } from "react-bootstrap";
import Work1 from '../Image/work.jpg'
import { FaBriefcase } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Work() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    return (
        <section className="work d-flex align-items-center py-5">
            <div>
                <Container className="text-light">
                    <Row className="work4">
                        <Col
                            data-aos="fade-right"
                            md={12}
                            lg={6}
                            className="d-flex align-items-center justify-content-center"
                        >
                            <img className="img-fluid" src={Work1} alt="work" />
                        </Col>

                        <Col md={12} lg={6} className="d-flex align-items-center px-4 py-3">
                            <Row>
                                <div className="text-center text-lg-start py-4 pt-lg-0">
                                    <p className="work3">OUR WORK</p>
                                    <h2 className="py-2 work1">Explore unlimited possibilities</h2>
                                    <p className="work2" style={{ color: 'lightgray' }}>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Dignissimos dicta mollitia totam explicabo obcaecati quia
                                        laudantium repudiandae.
                                    </p>
                                </div>

                                <Container>
                                    <Row className="g-4">
                                        <Col data-aos="fade-up" xs={6} className="text-start">
                                            <span>
                                                <FaBriefcase size={40} className="dash" />
                                            </span>
                                            <h2><CountUp end={1258} duration={4} separator="" /></h2>
                                            <p>PROJECTS COMPLETED</p>
                                        </Col>

                                        <Col data-aos="fade-up" xs={6} className="text-start">
                                            <span>
                                                <FaAward size={40} className="dash" />
                                            </span>
                                            <h2><CountUp end={150} duration={4} /></h2>
                                            <p>AWARDS</p>
                                        </Col>

                                        <Col data-aos="fade-up" xs={6} className="text-start">
                                            <span>
                                                <FaUsers size={40} className="dash" />
                                            </span>
                                            <h2><CountUp end={1255} duration={4} separator="" /></h2>
                                            <p>CUSTOMER ACTIVE</p>
                                        </Col>

                                        <Col data-aos="fade-up" xs={6} className="text-start">
                                            <span>
                                                <FaClock size={40} className="dash" />
                                            </span>
                                            <h2><CountUp end={1157} duration={4} separator="" /></h2>
                                            <p>GOOD REVIEWS</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}
export default Work;