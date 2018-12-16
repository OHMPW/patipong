import React from 'react'
import styled from 'styled-components'

export default class BoxHeader extends React.Component {
  render() {
    return <BoxHeaderC>
      {this.props.children}
    </BoxHeaderC>
  }
}

const BoxHeaderC = styled.div`
  border-bottom: 1px solid #CCC;
  padding: 0px 15px 15px 15px;
  margin-bottom: 15px;
  background-color: #FFF;
  width: 100%;
`