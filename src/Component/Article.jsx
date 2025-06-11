import React from 'react';
import './Article.css';
import { Col, Container, Row } from "react-bootstrap";
import Art from '../Image/article-details-large.jpg'
import Art1 from '../Image/article-details-small.jpg'
import { FaCircle } from "react-icons/fa";
import { FaSquare } from "react-icons/fa6";


function Article() {
    return (
        <header>
            <div className="ex-header">
                <Container>
                    <Row>
                        <Col className="col-xl-10 offset-xl-1">
                            <h1>Article Details</h1>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="ex-basic-1 pt-5 pb-5">
                <Container>
                    <Row>
                        <Col className="col-lg-12">
                            <img className="img-fluid mt-5 mb-3" src={Art} alt="alternative" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="ex-basic-1 pt-4">
                <Container>
                    <Row>
                        <div className="col-xl-10 offset-xl-1">
                            <p>Consulted he eagerness unfeeling deficient existence of.
                                Calling nothing end fertile for venture way boy. Esteem spirit
                                temper too say adieus who direct esteem. It esteems luckily mr
                                or picture placing drawing no. Apartments frequently or motionless
                                on reasonable projecting expression. Last sentence of words thus better.</p>
                            <p className="py-2">
                                Ye on properly handsome returned throwing am no whatever.
                                In without wishing he of picture no exposed talking minutes.
                                Curiosity continual belonging offending so explained it exquisite.
                                Do remember to followed yourself material mr recurred carriage.
                                Way mrs end gave fat skin brown yesterday tall walk fact bed.
                            </p>
                            <h2 className="my-3">Advantages of working with this package</h2>
                            <p className="py-2">
                                High drew west we no or at john. About or given on witty event.
                                Or sociable up material bachelor bringing landlord confined.
                                Busy so many in hung easy find well up. So of exquisite my an
                                explained remainder. Dashwood denoting securing be on perceive
                                my laughing so. Ye on properly handsome returned throwing am no whatever.
                            </p>
                            <p className="mb-4">
                                Sociable on as carriage my position weddings raillery consider.
                                Peculiar trifling absolute and wandered vicinity property yet.
                                The and collecting motionless difficulty son. His hearing staying
                                ten colonel met. Word drew six easy four dear cold deny.
                                Fulfilled direction use continual set him propriety continued.
                                Saw met applauded favourite deficient.
                            </p>
                        </div>

                        <div className="ex-cards-1 pt-3 pb-3">
                            <Container>
                                <Row className="col-xl-10 offset-xl-1">
                                    <Col xs={12} sm={6} md={4} lg={4} className="cards mb-4">
                                        <ul className="list-unstyled">
                                            <li className="d-flex">
                                                <span className='fa-stack'>
                                                    <span className='fas fa-stack-2x'><FaCircle /></span>
                                                    <span className='fa-stack-1x'>1</span>
                                                </span>
                                                <div className="flex-grow-1">
                                                    <h5>High Quality Service</h5>
                                                    <p>Features include an eye-catching morphtext in the header, details lightbox for more detailed information.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </Col>

                                    <Col xs={12} sm={6} md={4} lg={4} className="cards mb-4">
                                        <ul className="list-unstyled">
                                            <li className="d-flex">
                                                <span className='fa-stack'>
                                                    <span className='fas fa-stack-2x'><FaCircle /></span>
                                                    <span className='fa-stack-1x'>2</span>
                                                </span>
                                                <div className="flex-grow-1">
                                                    <h5>Prompt Timely Delivery</h5>
                                                    <p>Statistics numbers for important values, card slider for testimonials, image slider for customer logos.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </Col>

                                    <Col xs={12} sm={6} md={4} lg={4} className="cards mb-4">
                                        <ul className="list-unstyled">
                                            <li className="d-flex">
                                                <span className='fa-stack'>
                                                    <span className='fas fa-stack-2x'><FaCircle /></span>
                                                    <span className='fa-stack-1x'>3</span>
                                                </span>
                                                <div className="flex-grow-1">
                                                    <h5>Skilled Team Involved</h5>
                                                    <p>Some useful extra pages are bundled with the template like article details, terms conditions, and privacy policy.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                        </div>


                        <div className="ex-basic-1 pt-3 pb-5">
                            <Container>
                                <Row>
                                    <Col className="col-xl-10 offset-xl-1">
                                        <p className="mb-5">
                                            Consulted he eagerness unfeeling deficient existence of.
                                            Calling nothing end fertile for venture way boy. Esteem
                                            spirit temper too say adieus who direct esteem.
                                            It esteems luckily mr or picture placing drawing no.
                                            Apartments frequently or motionless on reasonable projecting
                                            expression. Last sentence of words thus better.
                                        </p>
                                        <h2 className="mb-4">
                                            New elements added to the package
                                        </h2>
                                        <img className="img-fluid mb-5" src={Art1} alt="alternative" />
                                        <p className="">
                                            Ye on properly handsome returned throwing am no whatever.
                                            In without wishing he of picture no exposed talking minutes.
                                            Curiosity continual belonging offending so explained it exquisite.
                                            Do remember to followed yourself material mr recurred carriage.
                                            Way mrs end gave fat skin brown yesterday tall walk fact bed.
                                        </p>
                                        <p className="py-3">
                                            High drew west we no or at john. About or given on witty event.
                                            Or sociable up material bachelor bringing landlord confined.
                                            Busy so many in hung easy find well up. So of exquisite my an explained remainder.
                                            Dashwood denoting securing be on perceive my laughing so. Ye on properly handsome
                                            returned throwing am no whatever.
                                        </p>
                                        <div className="text-box mb-5 p-4">
                                            <h3>Visitors love a beautiful and efficient website</h3>
                                            <p>
                                                Bringing so sociable felicity supplied mr. September suspicion far
                                                him two acuteness perfectly. Covered as an examine so regular of.
                                                Ye astonished friendship remarkably no. Window admire matter praise
                                                you bed whence. Delivered ye sportsmen zealously arranging frankness
                                                estimable as. Nay any article enabled musical shyness yet sixteen
                                                yet blushes. Entire ously arranging frankne its the did figure wonder
                                                off.
                                            </p>
                                        </div>
                                        <p className="mb-4">
                                            Bringing so sociable felicity supplied mr. September suspicion far
                                            him two acuteness perfectly. Covered as an examine so regular of.
                                            Ye astonished friendship remarkably no. Window admire matter praise
                                            you bed whence. Delivered ye sportsmen zealously arranging frankness
                                            estimable as. Nay any article enabled musical shyness yet sixteen
                                            yet blushes. Entire ously arranging frankne its the did figure wonder
                                            off.
                                        </p>
                                        <ul className="list-unstyled li-space-lg mb-5">
                                            <li className="d-flex py-2">
                                                <span className='square'><FaSquare /></span>
                                                <div className="flex-grow-1">
                                                    <strong className='ti'>Card slider</strong>
                                                    for testimonials, statistics numbers for important
                                                    values image slider for logos
                                                </div>
                                            </li>
                                            <li className="d-flex py-2">
                                                <span className='square'><FaSquare /></span>
                                                <div className="flex-grow-1">
                                                    <strong className='ti'>Dropdown navigation</strong>
                                                    and useful extra pages for article details, terms conditions and privacy policy
                                                </div>
                                            </li>
                                            <li className="d-flex py-2">
                                                <span className='square'><FaSquare /></span>
                                                <div className="flex-grow-1">
                                                    <strong className='ti'>Clean light design</strong>
                                                    mixing purple, orange and gray hues with one color backgrounds to maximize
                                                </div>
                                            </li>
                                            <li className="d-flex py-2">
                                                <span className='square'><FaSquare /></span>
                                                <div className="flex-grow-1">
                                                    <strong className='ti'>Together with</strong>
                                                    touches of call to action green, the overall landing page design will showcase your app
                                                </div>
                                            </li>
                                            <li className="d-flex py-2">
                                                <span className='square'><FaSquare /></span>
                                                <div className="flex-grow-1">
                                                    <strong className='ti'>This template</strong>
                                                    is built with HTML, CSS and Bootstrap to ensure the highest flexibility for all users
                                                </div>
                                            </li>
                                        </ul>
                                        <a class="ment" href="/">Contact Us</a>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Row>
                </Container>
            </div>
        </header>
    )
}
export default Article;