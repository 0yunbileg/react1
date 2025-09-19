"use client"
import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { useState } from "react"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Navbar
      expand='lg'
      className='!fixed w-[100%] top-0 left-0 z-50 bg-gradient-to-r from-[#0f172a] via-[#1e1b4b] to-[#4c1d95] shadow-md'
    >
      <Container className='flex items-center justify-between'>
        {/* Brand */}
        <Navbar.Brand
          href='/'
          className='text-2xl font-bold tracking-wide text-white hover:text-purple-300 transition-colors'
        >
          Elemently
        </Navbar.Brand>

        {/* Toggle (hamburger) */}
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className='border-0 focus:outline-none focus:ring-2 focus:ring-purple-400 navbar-toggler-white'
        />

        {/* Links */}
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto flex items-center space-x-6 text-lg'>
            <Nav.Link
              href='/periodic-table'
              className='!text-white hover:!text-purple-300 transition-colors'
            >
              Periodic Table
            </Nav.Link>
            <Nav.Link
              href='/about'
              className='!text-white hover:!text-purple-300 transition-colors'
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
