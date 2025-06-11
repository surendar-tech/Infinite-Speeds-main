import { Col, Container, Row } from "react-bootstrap";
import React, { useRef } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaCaretRight } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    const aboutRef = useRef(null);
    const servisRef = useRef(null);
    const planRef = useRef(null);
    const contactRef = useRef(null);
    const privacyRef = useRef(null);
    const termsRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section>
            <div className="footer text-light">
                <Container>
                    <Row data-aos="fade-right" className="footer3">

                        {/* Column 1 - Mirko */}
                        <Col xs={12} sm={6} md={3} lg={3} className="py-4 py-md-5">
                            <div className="d-flex align-items-center">
                                <h4>Mirko</h4>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Minus animi repudiandae explicabo esse maxime, impedit rem
                                voluptatibus amet error quas.
                            </p>
                            <div className="d-flex">
                                <div className="me-3">
                                    <a href="/">
                                        <span className="fab fa-2x py-2 footer1"><FaFacebookF /></span>
                                    </a>
                                </div>
                                <div className="me-3">
                                    <a href="/">
                                        <span className="fab fa-2x py-2 footer1"><FaTwitter /></span>
                                    </a>
                                </div>
                                <div className="me-3">
                                    <a href="/">
                                        <span className="fab fa-2x py-2 footer1"><IoLogoInstagram /></span>
                                    </a>
                                </div>
                            </div>
                        </Col>

                        {/* Column 2 - Quick Links */}
                        <Col xs={12} sm={6} md={3} lg={3} className="py-4 py-md-5 footer2">
                            <h4 className="py-2">Quick Links</h4>
                            <div className="d-flex align-items-center">
                                <span><FaCaretRight /></span>
                                <Link className="ms-2" onClick={() => scrollToTop(aboutRef)} to="/about">About</Link>
                            </div>
                            <div className="d-flex align-items-center">
                                <span><FaCaretRight /></span>
                                <Link className="ms-2" onClick={() => scrollToTop(servisRef)} to="/services">Services</Link>
                            </div>
                            <div className="d-flex align-items-center">
                                <span><FaCaretRight /></span>
                                <Link className="ms-2" onClick={() => scrollToTop(planRef)} to="/plans">Plans</Link>
                            </div>
                            <div className="d-flex align-items-center">
                                <span><FaCaretRight /></span>
                                <Link className="ms-2" onClick={() => scrollToTop(contactRef)} to="/contact">Contact</Link>
                            </div>
                        </Col>

                        {/* Column 3 - Useful Links */}
                        <Col xs={12} sm={6} md={3} lg={3} className="py-4 py-md-5 footer2">
                            <h4 className="py-2">Useful Links</h4>
                            <div className="d-flex align-items-center">
                                <span><FaCaretRight /></span>
                                <Link className="ms-2" onClick={() => scrollToTop(privacyRef)} to="/privacy">Privacy</Link>
                            </div>
                            <div className="d-flex align-items-center">
                                <span><FaCaretRight /></span>
                                <Link className="ms-2" onClick={() => scrollToTop(termsRef)} to="/terms">Terms</Link>
                            </div>
                            <div className="d-flex align-items-center">
                                <span><FaCaretRight /></span>
                                <a className="ms-2" href="/">Disclaimer</a>
                            </div>
                            <div className="d-flex align-items-center">
                                <span><FaCaretRight /></span>
                                <a className="ms-2" href="/">FAQ</a>
                            </div>
                        </Col>

                        {/* Column 4 - Newsletter */}
                        <Col xs={12} sm={6} md={3} lg={3} className="py-4 py-md-5">
                            <div className="d-flex align-items-center">
                                <h4>Newsletter</h4>
                            </div>
                            <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, ab.</p>
                            <div className="d-flex align-items-center">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control p-2" placeholder="Enter Email" aria-label="Recipient's email" />
                                    <button>
                                        <span className="mail"><FaEnvelope /></span>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </section>
    );
}

export default Footer;
