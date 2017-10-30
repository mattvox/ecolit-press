import React from 'react'
import { Col } from 'react-bootstrap'
import { Container, Section, SectionWrapper, theme } from './styled/theme'

const SectionContainer = (props) => {
  const { bg, fg, noPadding } = props
  const { children, ...containerProps } = props

  return (
    <Container {...containerProps}>
      <SectionWrapper fluid>
        <Col
          xs={12}
          md={10}
          mdOffset={1}
          style={{
            background: bg || theme.offWhite,
            color: fg || theme.darkGray,
          }}
        >
          <Section
            style={{
              paddingTop: noPadding && 0,
              paddingBottom: noPadding && 0,
            }}
          >
            <Col
              xs={12}
              sm={10}
              smOffset={1}
            >
              {children}
            </Col>
          </Section>
        </Col>
      </SectionWrapper>
    </Container>
  )
}

export default SectionContainer;
