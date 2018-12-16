import React from 'react'
import { 
  Row, Col 
} from 'reactstrap'
import styled from 'styled-components'

import Proflie from './proflie'

export default class extends React.Component{
  render(){
    return(
      <ResumeBox>
        <Row>
          <Col xs={3}> <Proflie /> </Col>
          <Col xs={9}>  Data User </Col>
        </Row>
      </ResumeBox>
    )
  }
}

const ResumeBox = styled.div`
  padding: 15px;
`