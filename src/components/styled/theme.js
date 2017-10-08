import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'

// reusable styles used app-wide

export const theme = {
  white: '#ffffff',
  offWhite: '#e7eff2',
  lightGray: '#e6ecee',
  lightBlue: '#9bd2db',
  mediumBlue: '#53c3c3',
  mediumGray: '#67737b',
  darkGray: '#232b3a',
  green: '#87b09A',
  orange: '#e16a2d',
  blue: '#c7dae7',
  purple: '#41395f',
}

export const Page = styled(Row)`
  padding-top: 60px;
  padding-bottom: 60px;

  ${'' /* &.light {
    background-color: ${theme.orange};
    color: ${theme.blue};
    text-align: center;
  } */}
`

export const Title = styled.h1`
  font-family: 'Bitter', serif;
  font-size: 4em;
  font-weight: bold;
  letter-spacing: -1px;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 60px;
`

export const Subtitle = styled.h1`
  font-family: 'Bitter', serif;
  font-size: 1.8em;
  font-weight: bold;
`

export const Content = styled.div`
  .add-padding {
    padding: 20px;
  }

  h1, h2, h3 {
    padding: 20px 0 0 20px;
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
  }

  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }

  h3 {
    font-size: 1.2em;
    text-transform: uppercase;
    color: ${theme.mediumBlue};
  }

  p {
    font-size: 1.5em;
    font-weight: normal;
    padding: 20px 0;
  }

  ul {
    margin: 0;
    padding: 0 0 20px 0;
  }

  li {
    font-size: 1.2em;
    list-style-type: none;
    margin: 0;
    padding: 20px 0;
  }

  blockquote {
    border: none;
    padding: 20px;
    quotes: "“" "”" "‘" "’";

    p {
      font-size: 1.25em;
      font-family: 'Bitter', serif;
      font-style: italic;
      line-height: 1.8em;
      color: ${theme.mediumGray};

      &::before {
        content: open-quote;
        font-family: serif;
        font-style: italic;
        font-size: 2.6em;
        line-height: 0.1em;
        margin-right: 6px;
        vertical-align: -0.25em;
      }

      &::after {
        content: close-quote;
        font-family: serif;
        font-style: italic;
        font-size: 2.6em;
        line-height: 0.1em;
        margin-left: 6px;
        vertical-align: -0.55em;
      }
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`

export const LinkButton = styled(Link)`
  display: inline-block;
  border-radius: 6px;
  border: 2px solid ${theme.green};
  font-size: 1em;
  padding: 10px;
  text-decoration: none;
  width: 90%;

  &:link {
    color: ${theme.white};
    background-color: ${theme.green};
  }
  &:visited {
    color: ${theme.white};
    background-color: ${theme.green};
    text-decoration: none;
  }
  &:hover {
    color: ${theme.white};
    background-color: ${theme.purple};
    border-color: ${theme.purple};
    text-decoration: none;
  }
  &:active {
    color: ${theme.white};
    background-color: ${theme.purle};
    text-decoration: none;
  }
`
