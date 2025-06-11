import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import React, { useState, useEffect, useRef } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Header() {
  const [navbarBg, setNavbarBg] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.scrollY > 50 ? "black" : "transparent");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar expand="lg" fixed="top" className={`navbar navbar-${navbarBg}`} style={{ transition: 'background-color 0.3s ease' }} id='over'>
        <Container>
          <Navbar.Brand className="over1" href="#home">Infinite Speed</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto naa">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link onClick={scrollToTop} as={Link} to="/about">About</Nav.Link>
              <Nav.Link onClick={scrollToTop} as={Link} to="/services">Services</Nav.Link>
              <Nav.Link onClick={scrollToTop} as={Link} to="/Plans">Plans</Nav.Link>
              <NavDropdown className='black' title="Drop" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={scrollToTop} as={Link} to="/article">Article Details</NavDropdown.Item>
                <NavDropdown.Item onClick={scrollToTop} as={Link} to="/terms">Terms Conditions</NavDropdown.Item>
                <NavDropdown.Item onClick={scrollToTop} as={Link} to="/privacy">Privacy Policy</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={scrollToTop} as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link href="/">
                <span id='face'><TiSocialFacebook /></span>
                <span id='twit'><RiTwitterFill /></span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
