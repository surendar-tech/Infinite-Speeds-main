import { Row, Col } from "react-bootstrap";
import { FaTachometerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Info() {
    useEffect(() => {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
            });
        }, []);
    return (
        <section>
            <div>
                <Row className="w-100 speed3">
                    <Col data-aos="zoom-in" className="col-md-12 col-lg-4 text-center p-5 speed">
                        <span >
                            <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                <linearGradient id="gradient-horizontal">
                                    <stop offset="0%" stop-color="var(--color-stop-1)" />
                                    <stop offset="50%" stop-color="var(--color-stop-2)" />
                                    <stop offset="100%" stop-color="var(--color-stop-3)" />
                                </linearGradient>
                                <FaTachometerAlt size={500} className="dash" />
                                <linearGradient id="gradient-vertical" x2="0" y2="1">
                                    <stop offset="0%" stop-color="var(--color-stop-1)" />
                                    <stop offset="50%" stop-color="var(--color-stop-2)" />
                                    <stop offset="100%" stop-color="var(--color-stop-3)" />
                                </linearGradient>
                            </svg>
                        </span>
                        <h4>Download 1 GBPS</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Magnam odit consequatur doloribus natus in suscipit!
                        </p>
                    </Col>
                    <Col data-aos="zoom-in" className="col-md-12 col-lg-4 text-center p-5 speed1">
                        <span>
                            <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                <linearGradient id="gradient-horizontal">
                                    <stop offset="0%" stop-color="var(--color-stop-1)" />
                                    <stop offset="50%" stop-color="var(--color-stop-2)" />
                                    <stop offset="100%" stop-color="var(--color-stop-3)" />
                                </linearGradient>
                                <FaClock size={500} className="dash" />
                                <linearGradient id="gradient-vertical" x2="0" y2="1">
                                    <stop offset="0%" stop-color="var(--color-stop-1)" />
                                    <stop offset="50%" stop-color="var(--color-stop-2)" />
                                    <stop offset="100%" stop-color="var(--color-stop-3)" />
                                </linearGradient>
                            </svg>
                        </span>
                        <h4>99% Internet Uptime</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Magnam odit consequatur doloribus natus in suscipit!
                        </p>
                    </Col>
                    <Col data-aos="zoom-in" className="col-md-12 col-lg-4 text-center p-5 speed2">
                        <span >
                            <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                <linearGradient id="gradient-horizontal">
                                    <stop offset="0%" stop-color="var(--color-stop-1)" />
                                    <stop offset="50%" stop-color="var(--color-stop-2)" />
                                    <stop offset="100%" stop-color="var(--color-stop-3)" />
                                </linearGradient>
                                <FaHeadset size={500} className="dash" />
                                <linearGradient id="gradient-vertical" x2="0" y2="1">
                                    <stop offset="0%" stop-color="var(--color-stop-1)" />
                                    <stop offset="50%" stop-color="var(--color-stop-2)" />
                                    <stop offset="100%" stop-color="var(--color-stop-3)" />
                                </linearGradient>
                            </svg>
                        </span>
                        <h4>24/7 Support </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Magnam odit consequatur doloribus natus in suscipit!
                        </p>
                    </Col>
                </Row>
            </div>
        </section>
    )
}
export default Info;