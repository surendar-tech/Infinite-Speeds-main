import { Col, Container, Row } from "react-bootstrap";

function News() {
    return (
        <section>
            <div className="newsletter text-light py-5 new">
                <Container>
                    <Row className="align-items-center">
                        {/* Left Column - Text */}
                        <Col data-aos="fade-right" xs={12} md={6} className="text-center text-lg-start">
                            <h4 className="py-1">Subscribe to our Newsletter</h4>
                            <p className="text-light" style={{ color: "lightgray" }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Dolor deleniti nobis amet accusamus debitis facilis quibusdam
                                officia laborum nesciunt. Nihil.
                            </p>
                        </Col>

                        {/* Right Column - Input */}
                        <Col data-aos="fade-down" xs={12} md={6} className="d-flex justify-content-center justify-content-lg-start">
                            <div className="input-group my-3">
                                <input
                                    type="email"
                                    className="form-control p-2"
                                    placeholder="Enter your email address"
                                    aria-label="Recipient's email"
                                />
                                <button className="new1 btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}
export default News;