import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import th from '../../assets/img/th.png'
import en from '../../assets/img/en.png'
import styled, { css } from 'styled-components'
import { selectLanguage } from '../../redux/action/action_language'
class Proflie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Patipong'
    }
    this.seleceLanguage = this.seleceLanguage.bind(this)
  }

  seleceLanguage(language) {
    this.props.selectLanguage(language)
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentWillUnmount() {
    console.log('componentDidMount')
  }

  render() {
    let { store_language: { dictionary } } = this.props
    return (
      <ProflieBox>
        <MenuFlag>
          <div onClick={() => this.seleceLanguage('th')}>
            <ImageFlag alt='' src={th} />
          </div>
          <div onClick={() => this.seleceLanguage('en')} style={{ paddingLeft: '10px' }}>
            <ImageFlag alt='' src={en} />
          </div>
        </MenuFlag>
        <ProflieImg>
          {dictionary.profile}
          <Image alt='' src='https://goo.gl/KPtDQL' />
        </ProflieImg>
      </ProflieBox>
    )
  }
}

const MenuFlag = styled.div`
  padding-bottom: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`


const ProflieBox = styled.div`
  border: 1px solid #CCC;
  border-radius 8px;
  padding: 20px 15px;
`

const ProflieImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`



const Image = styled.div`
  width: 180px;
  height: 180px;
  border-radius 50%;
  margin: 5px;
  border: 5px solid #CCC;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${props => props.src
    && css`background-image: url(${props.src});`
  }
  
`


const ImageFlag = styled.div`
  width: 25px;
  height: 25px;
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

export default connect(mapStateToProps, mapDispatchToProps)(Proflie)