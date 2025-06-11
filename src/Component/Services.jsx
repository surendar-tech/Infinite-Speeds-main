import { Col, Container, Row } from "react-bootstrap";
import { FaHome, FaWifi, FaPhone, FaMobile, FaTv } from "react-icons/fa";
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
    const location = useLocation()

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [location.pathname]);
    return (
        <section>
            <div className="services d-flex align-items-center py-5" id="servis">
                <Container>
                    <div className="text-center pb-4 services1">
                        <p style={{ color: "#fff" }}>OUR SERVICES</p>
                        <h2 className="py-2" style={{ color: "#fff" }}>Explore unlimited possibilities</h2>
                        <p style={{ color: "lightgray" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Vitae asperiores, quia accusantium sunt corporis optio
                            recusandae? Nostrum libero pariatur cumque, ipsa dolores
                            voluptatibus voluptate alias sit fuga. Itaque, ea quo.
                        </p>
                    </div>

                    <Row data-aos="zoom-in" className="gy-4 py-2 services2">
                        <Col md={12} lg={4} className="services3">
                            <div className="card1 ">
                                <span style={{ padding: "15px 0" }}>
                                    <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                        <linearGradient id="gradient-horizontal">
                                            <stop offset="0%" stop-color="var(--color-stop-1)" />
                                            <stop offset="50%" stop-color="var(--color-stop-2)" />
                                            <stop offset="100%" stop-color="var(--color-stop-3)" />
                                        </linearGradient>
                                        <FaHome size={500} className="dash" />
                                        <linearGradient id="gradient-vertical" x2="0" y2="1">
                                            <stop offset="0%" stop-color="var(--color-stop-1)" />
                                            <stop offset="50%" stop-color="var(--color-stop-2)" />
                                            <stop offset="100%" stop-color="var(--color-stop-3)" />
                                        </linearGradient>
                                    </svg>
                                </span>

                                <h4>HOME BROADBAND</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                            </div>
                        </Col>

                        <Col md={12} lg={4} className="services3">
                            <div className="card1 bg-transparent">
                                <span style={{ padding: "15px 0" }}>
                                    <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                        <linearGradient id="gradient-horizontal">
                                            <stop offset="0%" stop-color="var(--color-stop-1)" />
                                            <stop offset="50%" stop-color="var(--color-stop-2)" />
                                            <stop offset="100%" stop-color="var(--color-stop-3)" />
                                        </linearGradient>
                                        <FaWifi size={500} className="dash1" />
                                        <linearGradient id="gradient-vertical" x2="0" y2="1">
                                            <stop offset="0%" stop-color="var(--color-stop-1)" />
                                            <stop offset="50%" stop-color="var(--color-stop-2)" />
                                            <stop offset="100%" stop-color="var(--color-stop-3)" />
                                        </linearGradient>
                                    </svg>
                                </span>
                                <h4>HOME WIFI</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                            </div>
                        </Col>

                        <Col md={12} lg={4} className="services3">
                            <div className="card1 bg-transparent">
                                <span style={{ padding: "15px 0" }}>
                                    <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                        <linearGradient id="gradient-horizontal">
                                            <stop offset="0%" stop-color="var(--color-stop-1)" />
                                            <stop offset="50%" stop-color="var(--color-stop-2)" />
                                            <stop offset="100%" stop-color="var(--color-stop-3)" />
                                        </linearGradient>
                                        <FaPhone size={500} className="dash1" />
                                        <linearGradient id="gradient-vertical" x2="0" y2="1">
                                            <stop offset="0%" stop-color="var(--color-stop-1)" />
                                            <stop offset="50%" stop-color="var(--color-stop-2)" />
                                            <stop offset="100%" stop-color="var(--color-stop-3)" />
                                        </linearGradient>
                                    </svg>
                                </span>
                                <h4>CALL SERVICES</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                            </div>
                        </Col>

                        <Col md={12} lg={4} className="services3">
                            <div className="card1 bg-transparent">
                                <span style={{ padding: "15px 0" }}>
                                    <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                        <linearGradient id="gradient-horizontal">
                                            <stop offset="0%" stop-color="var(--color-stop-1)" />
                                            <stop offset="50%" stop-color="var(--color-stop-2)" />
                                            <stop offset="100%" stop-color="var(--color-stop-3)" />
                                        </linearGradient>
                                        <FaMobile size={500} className="dash1" />
                                        <linearGradient id="gradient-vertical" x2="0" y2="1">
                                            <stop offset="0%" stop-color="var(--color-stop-1)" />
                                            <stop offset="50%" stop-color="var(--color-stop-2)" />
                                            <stop offset="100%" stop-color="var(--color-stop-3)" />
                                        </linearGradient>
                                    </svg>
                                </span>
                                <h4>MOBILE CONNECTION</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                            </div>
                        </Col>

                        <Col md={12} lg={4} className="services3">
                            <div className="card1 bg-transparent">
                                <span style={{ padding: "15px 0" }}>
                                    <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                        <linearGradient id="gradient-horizontal">
                                            <stop offset="0%" stop-color="var(--color-stop-1)" />
                                            <stop offset="50%" stop-color="var(--color-stop-2)" />
                                            <stop offset="100%" stop-color="var(--color-stop-3)" />
                                        </linearGradient>
                                        <FaHome size={500} className="dash1" />
                                        <linearGradient id="gradient-vertical" x2="0" y2="1">
                                            <stop offset="0%" stop-color="var(--color-stop-1)" />
                                            <stop offset="50%" stop-color="var(--color-stop-2)" />
                                            <stop offset="100%" stop-color="var(--color-stop-3)" />
                                        </linearGradient>
                                    </svg>
                                </span>
                                <h4>SECURITY</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                            </div>
                        </Col>

                        <Col md={12} lg={4} className="services3">
                            <div className="card1 bg-transparent">
                                <span style={{ padding: "15px 0" }}>
                                    <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                        <linearGradient id="gradient-horizontal">
                                            <stop offset="0%" stop-color="var(--color-stop-1)" />
                                            <stop offset="50%" stop-color="var(--color-stop-2)" />
                                            <stop offset="100%" stop-color="var(--color-stop-3)" />
                                        </linearGradient>
                                        <FaTv size={500} className="dash1" />
                                        <linearGradient id="gradient-vertical" x2="0" y2="1">
                                            <stop offset="0%" stop-color="var(--color-stop-1)" />
                                            <stop offset="50%" stop-color="var(--color-stop-2)" />
                                            <stop offset="100%" stop-color="var(--color-stop-3)" />
                                        </linearGradient>
                                    </svg>
                                </span>
                                <h4>DIGITAL TV</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odit consequatur doloribus natus in suscipit!</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Services;
