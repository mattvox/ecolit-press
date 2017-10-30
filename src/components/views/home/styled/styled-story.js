import styled from 'styled-components'

export const ImageList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  div {
    padding: 0;
  }

  @media screen and (max-width: 767px) {
    li {
      display: none;
    }

    li:first-child {
      display: block;
      margin-left: 16px;
      margin-right: 16px;
      padding: 0;
    }

    div {
      padding: 0;
    }
  }

  @media screen and (min-width: 768px) {


    li {
      display: block;
    }

    li>div {
      padding-left: 8px;
      padding-right: 8px;
      margin: 20px 0;
    }

    li:first-child {
      div {
        padding-left: 0;
        padding-right: 16px;
      }
    }

    li:last-child {
      div {
        padding-left: 16px;
        padding-right: 0;
      }
    }
  }
`
