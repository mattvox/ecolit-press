import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Title, Content, theme } from '../../styled/theme'

import SectionContainer from '../../section-container'

const Mission = ({ data: { heading, content } }) => (
  <SectionContainer bg={theme.white}>
    <Title>{heading}</Title>
    <Content>
      <ReactMarkdown source={content} />
    </Content>
  </SectionContainer>
)

export default Mission;

// to be used later with fully dynamic rendered sections
// -----------------------------------------------------

// const Mission = (props) => (
// // const Mission = ({ data: { heading, content } }) => (
//   <WithThemePage>
//     <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
//       {props.data.heading && <Title>{props.data.heading}</Title>}
//       {props.imageProp && <Title>{props.data.heading}</Title>}
//       <Content>
//         <ReactMarkdown source={props.data.content} />
//       </Content>
//     </Col>
//   </WithThemePage>
// )
