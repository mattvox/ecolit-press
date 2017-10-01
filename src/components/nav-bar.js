import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Nav, Navbar, NavItem, Image } from 'react-bootstrap'
import styled from 'styled-components'

const StyledNavbar = styled(Navbar)`
  &.navbar, &.navbar-default {
    ${'' /* background: none; */}
    ${'' /* background-color: #fff; */}
    border: none;
    ${'' /* position: absolute; */}
    width: 100%;
    ${'' /* z-index: 0; */}
  }

  .container {
    ${'' /* border: none; */}
  }

  .navbar-toggle {
    ${'' /* border: none; */}
    ${'' /* background: none; */}
  }

  @media screen and (max-width: 768px) {
    .navbar-collapse {
      background-color: #fff;
    }
  }
`

const NavBar = (props) => (
  <StyledNavbar collapseOnSelect fixedTop={true}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>
          <Image
            src={`https://images.contentful.com/dfr34shq95oy/2ffRNwYr0YekAU6SqyCGOK/460ed6fb4f026ec19059c81f76bea3ea/EcoLitLogo_FullColor_web_small.png`}
            style={{
              height: '40px',
            }}
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem
          eventKey={1}
          onClick={ e => props.history.push('/about') }
        >
          About
        </NavItem>
        <NavItem
          eventKey={1}
          onClick={ e => props.history.push('/books/emma') }
        >
          Emma
        </NavItem>
        <NavItem
          eventKey={1}
          onClick={ e => props.history.push('/contact') }
        >
          Contact
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </StyledNavbar>
)

export default withRouter(NavBar);
