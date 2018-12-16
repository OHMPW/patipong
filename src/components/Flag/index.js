import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled, { css } from 'styled-components'

import th from '../../assets/img/th.png'
import en from '../../assets/img/en.png'

import { selectLanguage } from '../../redux/action/action_language'

class Flag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.seleceLanguage = this.seleceLanguage.bind(this)
  }

  seleceLanguage(language) {
    this.props.selectLanguage(language)
  }

  render() {
    return <MenuFlag>
      <div onClick={() => this.seleceLanguage('th')}>
        <ImageFlag alt='' src={th} />
      </div>
      <div onClick={() => this.seleceLanguage('en')} style={{ paddingLeft: '10px', }}>
        <ImageFlag alt='' src={en} />
      </div>
    </MenuFlag>
  }
}

const MenuFlag = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const ImageFlag = styled.div`
  width: 20px;
  height: 20px;
  border-radius 50%;
  cursor: pointer;
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

export default connect(mapStateToProps, mapDispatchToProps)(Flag)