import styled from 'styled-components'

export const ImageList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 767px) {
    li {
      display: none;
    }

    li:first-child {
      display: block;
      margin-left: 4px;
      margin-right: 4px;
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
