import { Container } from "react-bootstrap";
import { FaLaptopHouse } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Header() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    return (
        <section>
            <div className="header">
                <Container>
                    <div  data-aos="fade-right">
                        <h1>Best
                            <span className="header4">Broadband</span>
                            <br />
                            Internet Plans For You</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Natus tempore accusamus quis magnam doloremque itaque ad
                            modi, pariatur iste labore similique officiis impedit
                            aspernatur aperiam facere architecto. Eligendi,
                            repellendus inventore</p>
                        <div className="header1">
                            <span >
                                <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                    <linearGradient id="gradient-horizontal">
                                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                                        <stop offset="50%" stop-color="var(--color-stop-2)" />
                                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                                    </linearGradient>
                                    <FaLaptopHouse size={350} className="dash" />
                                    <linearGradient id="gradient-vertical" x2="0" y2="1">
                                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                                        <stop offset="50%" stop-color="var(--color-stop-2)" />
                                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                                    </linearGradient>
                                </svg>
                                </span>
                            <p>
                                Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="header2">
                            <span>
                                <svg height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><title />
                                    <linearGradient id="gradient-horizontal">
                                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                                        <stop offset="50%" stop-color="var(--color-stop-2)" />
                                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                                    </linearGradient>
                                    <FaWifi size={350} className="dash" />
                                    <linearGradient id="gradient-vertical" x2="0" y2="1">
                                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                                        <stop offset="50%" stop-color="var(--color-stop-2)" />
                                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                                    </linearGradient>
                                </svg>
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div>
                            <a className="header3" href="/">View Plans</a>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
export default Header;