import React from 'react'
import { Col } from 'react-bootstrap'
import { Section, SectionWrapper, theme } from './styled/theme'

const SectionContainer = (props) => {
  const { bg, fg, noPadding, children, landing } = props

  return (
    <SectionWrapper
      style={{
        paddingTop: landing && '80px',
      }}
    >
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
  )
}

export default SectionContainer;
