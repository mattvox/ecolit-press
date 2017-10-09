// NEEDS A TON OF WORK, VERY MESSY!!!!

import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Nav, Navbar, NavItem, Image } from 'react-bootstrap'
import styled from 'styled-components'

const StyledNavbar = styled(Navbar)`
  &.navbar, &.navbar-default {
    border: none;
    width: 100%;
    font-family: 'Bitter', serif;
    padding: 0;
    display: block;

    ${'' /* a {
      color: #fff;

      &:link {
        color: #fff;
      }
      &:visited {
        color: #fff;
      }
      &:hover {
        color: #fff;
      }
      &:active {
        color: #fff;
      }
    } */}

  }

  a.navbar-brand {
    padding: 0;
    margin-left: 20px;

    &.landing-page {
      display: none;
    }
  }

  .container {
    border: none;
    padding: 0;
    display: block;
  }

  .navbar-toggle {
    margin-top: 10px;
    border: none;
    ${'' /* background: none; */}
  }

  .navbar-header {
    ${'' /* height: 50px; */}
  }

  @media screen and (max-width: 768px) {
    .navbar-collapse {
      background-color: #fff;
    }
  }
`

const Logo = styled(Image)`
  margin: 10px 0;
  height: 30px;
  ${'' /* display: none;
  visibility: hidden; */}
`

const NavLink = styled(NavItem)`
  margin-top: 2px;
`

const NavBar = (props) => {
  // window.onscroll = function() {
  //   const nav = document.querySelector('.logo')
  //   const navBg = document.querySelector('.navbar')
  //
  //   if (props.location.pathname === '/') {
  //     if ( window.pageYOffset > 360 ) {
  //         nav.classList.remove('hidden')
  //         nav.classList.remove('animate-hidden')
  //         nav.classList.add('animate-show')
  //         navBg.classList.add('show-bg')
  //         navBg.classList.remove('hide-bg')
  //     } else {
  //         nav.classList.add('animate-hidden')
  //         nav.classList.remove('animate-show')
  //         navBg.classList.add('hide-bg')
  //         navBg.classList.remove('show-bg')
  //     }
  //   } else {
  //     navBg.classList.remove('hide-bg')
  //     navBg.classList.add('show-bg')
  //     nav.classList.add('animate-show')
  //     nav.classList.remove('hidden')
  //   }
  // }

  return (
    <StyledNavbar collapseOnSelect fixedTop={true} className='show-bg'>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>
            <Logo
              className='logo'
              src={`https://images.contentful.com/dfr34shq95oy/2ffRNwYr0YekAU6SqyCGOK/460ed6fb4f026ec19059c81f76bea3ea/EcoLitLogo_FullColor_web_small.png`}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        {/* <Navbar.Text pullRight>
          Under Construction... in the meantime, enjoy the new home page :)
        </Navbar.Text> */}
        <Nav pullRight>
          <NavLink
            eventKey={1}
            onClick={ e => props.history.push('/') }
          >
            Home
          </NavLink>
          <NavLink
            eventKey={1}
            onClick={ e => props.history.push('/books/emma') }
          >
            Emma
          </NavLink>
          <NavLink
            eventKey={1}
            onClick={ e => props.history.push('/contact') }
          >
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  )
}

export default withRouter(NavBar);
