import { Col, Container, Row } from "react-bootstrap";
import { FaRegMap } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

function Location() {
    return (
        <section>
            <div  className="location text-light py-5">
                <Container>
                    <Row data-aos="zoom-in">
                        {/* First Column - Address */}
                        <Col xs={12} md={6} lg={3} className="d-flex align-items-center mb-4 mb-lg-0">
                            <div className="p-2">
                                <span>
                                    <svg height="60" viewBox="0 0 512 512" width="60" xmlns="http://www.w3.org/2000/svg">
                                        <title />
                                        <linearGradient id="gradient-horizontal">
                                            <stop offset="0%" stopColor="var(--color-stop-1)" />
                                            <stop offset="50%" stopColor="var(--color-stop-2)" />
                                            <stop offset="100%" stopColor="var(--color-stop-3)" />
                                        </linearGradient>
                                        <FaRegMap size={450} className="dash" />
                                        <linearGradient id="gradient-vertical" x2="0" y2="1">
                                            <stop offset="0%" stopColor="var(--color-stop-1)" />
                                            <stop offset="50%" stopColor="var(--color-stop-2)" />
                                            <stop offset="100%" stopColor="var(--color-stop-3)" />
                                        </linearGradient>
                                    </svg>
                                </span>
                            </div>
                            <div className="ms-2">
                                <h6>ADDRESS</h6>
                                <p>Teuku Umar ST. 1919</p>
                            </div>
                        </Col>

                        {/* Second Column - Call for Query */}
                        <Col xs={12} md={6} lg={3} className="d-flex align-items-center mb-4 mb-lg-0">
                            <div className="p-2">
                                <span>
                                    <svg height="60" viewBox="0 0 512 512" width="60" xmlns="http://www.w3.org/2000/svg">
                                        <title />
                                        <linearGradient id="gradient-horizontal">
                                            <stop offset="0%" stopColor="var(--color-stop-1)" />
                                            <stop offset="50%" stopColor="var(--color-stop-2)" />
                                            <stop offset="100%" stopColor="var(--color-stop-3)" />
                                        </linearGradient>
                                        <FaMobileAlt size={450} className="dash" />
                                        <linearGradient id="gradient-vertical" x2="0" y2="1">
                                            <stop offset="0%" stopColor="var(--color-stop-1)" />
                                            <stop offset="50%" stopColor="var(--color-stop-2)" />
                                            <stop offset="100%" stopColor="var(--color-stop-3)" />
                                        </linearGradient>
                                    </svg>
                                </span>
                            </div>
                            <div className="ms-2">
                                <h6>CALL FOR QUERY</h6>
                                <p>(800) 265 216 2020</p>
                            </div>
                        </Col>

                        {/* Third Column - Send Us Message */}
                        <Col xs={12} md={6} lg={3} className="d-flex align-items-center mb-4 mb-lg-0">
                            <div className="p-2">
                                <span>
                                    <svg height="60" viewBox="0 0 512 512" width="60" xmlns="http://www.w3.org/2000/svg">
                                        <title />
                                        <linearGradient id="gradient-horizontal">
                                            <stop offset="0%" stopColor="var(--color-stop-1)" />
                                            <stop offset="50%" stopColor="var(--color-stop-2)" />
                                            <stop offset="100%" stopColor="var(--color-stop-3)" />
                                        </linearGradient>
                                        <FaRegEnvelope size={450} className="dash" />
                                        <linearGradient id="gradient-vertical" x2="0" y2="1">
                                            <stop offset="0%" stopColor="var(--color-stop-1)" />
                                            <stop offset="50%" stopColor="var(--color-stop-2)" />
                                            <stop offset="100%" stopColor="var(--color-stop-3)" />
                                        </linearGradient>
                                    </svg>
                                </span>
                            </div>
                            <div className="ms-2">
                                <h6>SEND US MESSAGE</h6>
                                <p>infodemofile@example.com</p>
                            </div>
                        </Col>

                        {/* Fourth Column - Opening Hours */}
                        <Col xs={12} md={6} lg={3} className="d-flex align-items-center">
                            <div className="p-2">
                                <span>
                                    <svg height="60" viewBox="0 0 512 512" width="60" xmlns="http://www.w3.org/2000/svg">
                                        <title />
                                        <linearGradient id="gradient-horizontal">
                                            <stop offset="0%" stopColor="var(--color-stop-1)" />
                                            <stop offset="50%" stopColor="var(--color-stop-2)" />
                                            <stop offset="100%" stopColor="var(--color-stop-3)" />
                                        </linearGradient>
                                        <FaRegClock size={450} className="dash" />
                                        <linearGradient id="gradient-vertical" x2="0" y2="1">
                                            <stop offset="0%" stopColor="var(--color-stop-1)" />
                                            <stop offset="50%" stopColor="var(--color-stop-2)" />
                                            <stop offset="100%" stopColor="var(--color-stop-3)" />
                                        </linearGradient>
                                    </svg>
                                </span>
                            </div>
                            <div className="ms-2">
                                <h6>OPENING HOURS</h6>
                                <p>09:00 AM - 18:00 PM</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}
export default Location;