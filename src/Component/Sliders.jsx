import { Col, Container, Row } from "react-bootstrap";
import React from 'react';
import Slider from 'react-slick';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Player1 from "../Image/testimonial-1.jpg";
import Player2 from "../Image/testimonial-2.jpg";
import Player3 from "../Image/testimonial-3.jpg";
import Player4 from "../Image/testimonial-4.jpg";

function Sliders() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <div className="custom-arrow next"><MdArrowBackIos /></div>,
        prevArrow: <div className="custom-arrow prev"><MdArrowForwardIos /></div>,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section>
            <div className="slider testimonial text-light d-flex align-items-center">
                <Container>
                    <Row>
                        <div className="text-center w-lg-75 m-auto pb-4">
                            <p>TESTIMONIALS</p>
                            <h2 className="py-2">What Our Clients Says</h2>
                            <p style={{ color: "lightgray" }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Adipisci esse facilis vel, neque ipsa mollitia impedit,
                                commodi ab illo dignissimos, voluptatum quae amet sed
                                tenetur dolores reprehenderit laudantium quo sint.
                            </p>
                        </div>
                    </Row>
                    <Row data-aos="zoom-in" className="p-2">
                        <Col className="col-lg-12">
                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div className="testimonial-card">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Laboriosam commodi officia laborum qui iste quidem!</p>
                                        <div className="d-flex pt-4">
                                            <div>
                                                <img className="images" src={Player1} alt="" />
                                            </div>
                                            <div className="ms-3 pt-2">
                                                <h6>Marlene Visconte</h6>
                                                <p>General Manager - Scouter</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-card1">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Laboriosam commodi officia laborum qui iste quidem!</p>
                                        <div className="d-flex pt-4">
                                            <div>
                                                <img className="images" src={Player2} alt="" />
                                            </div>
                                            <div className="ms-3 pt-2">
                                                <h6>John Spiker</h6>
                                                <p>Team Leader - Vanquish</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-card1">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Laboriosam commodi officia laborum qui iste quidem!</p>
                                        <div className="d-flex pt-4">
                                            <div>
                                                <img className="images" src={Player3} alt="" />
                                            </div>
                                            <div className="ms-3 pt-2">
                                                <h6>Stella Virtuoso</h6>
                                                <p>Design Chief - Upscale</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-card1">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Laboriosam commodi officia laborum qui iste quidem!</p>
                                        <div className="d-flex pt-4">
                                            <div>
                                                <img className="images" src={Player4} alt="" />
                                            </div>
                                            <div className="ms-3 pt-2">
                                                <h6>Mike tim</h6>
                                                <p>Investor - TechGroww</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Sliders;
