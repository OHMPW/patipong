import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled, { css } from 'styled-components'

import { Title, Title1 } from '../../components/Font'
import Box from '../../components/BoxComponent/Box'
import BoxHeader from '../../components/BoxComponent/BoxHeader'

import { selectLanguage } from '../../redux/action/action_language'

class Proflie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.seleceLanguage = this.seleceLanguage.bind(this)
  }

  seleceLanguage(language) {
    this.props.selectLanguage(language)
  }

  render() {
    let { store_language: { dictionary } } = this.props
    return <Box>
      <BoxHeader>
        <Title bold>{dictionary.profile}</Title>
      </BoxHeader>
      <ProflieDetial>
        <Image alt='' src='https://goo.gl/KPtDQL' />
      </ProflieDetial>
      <ProflieDetial>
        <Title1>{dictionary.name}</Title1>
      </ProflieDetial>
    </Box>
  }
}

const ProflieDetial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0px;
`

const Image = styled.div`
  width: 130px;
  height: 130px;
  border-radius 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${props => props.src
    && css`background-image: url(${props.src});`
  }
`


const mapStateToProps = (state) => {
  return {
    store_language: state.language
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    selectLanguage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Proflie)