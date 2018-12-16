import React from 'react'
import styled from 'styled-components'

export default class Box extends React.Component {
  render() {
    return <BoxC>
      {this.props.children}
    </BoxC>
  }
}

const BoxC = styled.div`
  border: 1px solid #CCC;
  border-radius 5px;
  padding: 20px 15px;
  background-color: #FFF;
  width: 100%;
`