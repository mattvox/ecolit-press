import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import styled from 'styled-components'

// import Plx from 'react-plx'


const NavBar = styled.nav`
  ${'' /* position: absolute; */}

  .navWide {
    display: none;
  }

  .navNarrow {
    i {
        ${'' /* float: left; */}
    }

    .narrowLinks {
        display: none;

        a {
            display: block;
            ${'' /* float: left; */}
            clear: left;
        }
    }
  }

  @media (min-width: 480px) {
    .navWide {
        display: block;
    }

    .navNarrow {
        display: none;
    }
  }
`

const HeaderNav = (props) => {
  const burgerToggle = () => {
    const linkEl = document.querySelector('.narrowLinks')

    if (linkEl.style.display === 'block') {
      linkEl.style.display = 'none'
    } else {
      linkEl.style.display = 'block'
    }
  }

  return (
      <NavBar>
        <div className="navWide">
          <div className="wideDiv">
            <Link to='/about'>About</Link>
            <Link to='/books/emma'>Emma</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
        <div className="navNarrow">
          <i
            className="fa fa-bars fa-2x"
            onClick={burgerToggle}
          ></i>
          <div className="narrowLinks">
            <Link to='/about'>About</Link>
            <Link to='/books/emma'>Emma</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
      </NavBar>


  )
}

export default HeaderNav
