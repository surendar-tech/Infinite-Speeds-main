import { Col, Container, Row } from "react-bootstrap";
import { FaRegCheckCircle } from "react-icons/fa";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Plans() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    return (
        <section>
            <div className="plans align-items-center py-5" id="plan">
                <Container>
                    <div className="container text-light">
                        <div className="text-center pb-4">
                            <p>
                                OUR PLANS
                            </p>
                            <h2 className="py-2">
                                Explore unlimited possibilities
                            </h2>
                            <p style={{ color: "lightgray" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Vitae asperiores, quia accusantium sunt corporis optio
                                recusandae? Nostrum libero pariatur cumque, ipsa dolores
                                voluptatibus voluptate alias sit fuga. Itaque, ea quo.
                            </p>
                        </div>
                        <Row data-aos="zoom-in" className="gy-4 plans3">
                            <Col md={12} lg={4}>
                                <div className="card2 bg-transparent px-4 h-100 text-light">
                                    <h4 className="py-2">
                                        BASIC BUNDLE
                                    </h4>
                                    <p className="py-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <div className="block d-flex align-items-center plans2">
                                    <span>
                                            <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                                <linearGradient id="gradient-horizontal">
                                                    <stop offset="0%" stop-color="var(--color-stop-1)" />
                                                    <stop offset="50%" stop-color="var(--color-stop-2)" />
                                                    <stop offset="100%" stop-color="var(--color-stop-3)" />
                                                </linearGradient>
                                                <FaRegCheckCircle size={200} className="dash" />
                                                <linearGradient id="gradient-vertical" x2="0" y2="1">
                                                    <stop offset="0%" stop-color="var(--color-stop-1)" />
                                                    <stop offset="50%" stop-color="var(--color-stop-2)" />
                                                    <stop offset="100%" stop-color="var(--color-stop-3)" />
                                                </linearGradient>
                                            </svg>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="block d-flex align-items-center plans2">
                                        <span>
                                            <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                                <FaRegCheckCircle size={200} className="dash" />
                                            </svg>
                                        </span>
                                        <p>
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                    <div className="block d-flex align-items-center plans2">
                                        <span>
                                            <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                                <FaRegCheckCircle size={200} className="dash" />
                                            </svg>
                                        </span>
                                        <p>
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                    <div className="block d-flex align-items-center plans2">
                                        <span>
                                            <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />

                                                <FaRegCheckCircle size={200} className="dash" />

                                            </svg>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <h4 className="py-3">
                                        $24/Month
                                    </h4>
                                    <div className="my-3 plans1">
                                        <a href="/">View Plans</a>
                                    </div>
                                </div>
                            </Col>
                            <Col Col md={12} lg={4}>
                                <div className="card2 bg-transparent px-4">
                                    <h4 className="py-2">
                                        BUSINESS BUNDLE
                                    </h4>
                                    <p className="py-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <div className="block d-flex align-items-center plans2">
                                        <span>
                                            <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />

                                                <FaRegCheckCircle size={200} className="dash" />

                                            </svg>
                                        </span>
                                        <p>
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                    <div className="block d-flex align-items-center plans2">
                                        <span>
                                            <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />

                                                <FaRegCheckCircle size={200} className="dash" />

                                            </svg>
                                        </span>
                                        <p>
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                    <div className="block d-flex align-items-center plans2">
                                        <span>
                                            <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />

                                                <FaRegCheckCircle size={200} className="dash" />

                                            </svg>
                                        </span>
                                        <p>
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                    <div className="block d-flex align-items-center plans2">
                                        <span>
                                            <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />

                                                <FaRegCheckCircle size={200} className="dash" />

                                            </svg>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <h4 className="py-3">
                                        $99/Month
                                    </h4>
                                    <div className="my-3 plans1">
                                        <a href="/">View Plans</a>
                                    </div>
                                </div>
                            </Col>
                            <Col Col md={12} lg={4}>
                                <div className="card2 bg-transparent px-4">
                                    <h4 className="py-2">
                                        PREMIUM BUNDLE
                                    </h4>
                                    <p className="py-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <div className="block d-flex align-items-center plans2">
                                        <span>
                                            <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                                <FaRegCheckCircle size={200} className="dash" />
                                            </svg>
                                        </span>
                                        <p>
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                    <div className="block d-flex align-items-center plans2">
                                        <span>
                                            <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                                <FaRegCheckCircle size={200} className="dash" />
                                            </svg>
                                        </span>
                                        <p>
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                    <div className="block d-flex align-items-center plans2">
                                        <span>
                                            <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                                <FaRegCheckCircle size={200} className="dash" />
                                            </svg>
                                        </span>
                                        <p>
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                    <div className="block d-flex align-items-center plans2">
                                        <span>
                                            <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                                <FaRegCheckCircle size={200} className="dash" />
                                            </svg>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <h4 className="py-3">
                                        $199/Month
                                    </h4>
                                    <div className="my-3 plans1">
                                        <a href="/">View Plans</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    )
}
export default Plans;