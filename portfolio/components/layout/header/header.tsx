"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="!sticky w-[90%] top-[20px] mx-[auto] rounded-full z-50 shadow-2xl bg-gradient-to-r from-[#506bd7] to-[#4c1d95]"
    >
      <Container className="flex items-center justify-between">
        {/* Brand */}
        <Navbar.Brand
          href="/"
          className="text-2xl font-bold tracking-wide text-white hover:text-purple-300 transition-colors"
        >
          Elemently
        </Navbar.Brand>

        {/* Toggle (hamburger) */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 focus:outline-none focus:ring-2 focus:ring-purple-400 navbar-toggler-white"
        />

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex items-center space-x-6 text-lg">
            <Nav.Link
              href="/periodic-table"
              className="!text-white hover:!text-purple-300 transition-colors"
            >
              Periodic Table
            </Nav.Link>
            <Nav.Link
              href="/about"
              className="!text-white hover:!text-purple-300 transition-colors"
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
