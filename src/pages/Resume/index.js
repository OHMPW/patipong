import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'

import Flag from '../../components/Flag'
import Box from '../../components/BoxComponent/Box'

import Proflie from './proflie'

export default class extends React.Component {
  render() {
    return <Container fluid>
      <ResumeBox>
        <Flag />
        <Row>
          <Col xs={4} style={{ padding: '15px' }}>
            <Proflie />
          </Col>
          <Col xs={8} style={{ padding: '15px' }}>
            <Box>
              DataUser
          </Box>
          </Col>
        </Row>
      </ResumeBox>
    </Container>
  }
}

const ResumeBox = styled.div`
  padding: 15px;
`