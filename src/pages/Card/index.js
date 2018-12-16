import React, { Component } from 'react';
import styled from 'styled-components'

export default class extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardDetailImgCover>
            <CardImgCover alt='' src='https://goo.gl/tKXtcr' />
          </CardDetailImgCover>
          <BorderImg />
          <CardDetailImg>
            <CardImg alt='' src='https://goo.gl/KPtDQL' />
          </CardDetailImg>
          <PaddingImg />
          <CardDetailPreson>
            <CardDetailName>
              PATIPONG WANARUK
            </CardDetailName>
            <CardDetailAdd>
              @PW_OHM
            </CardDetailAdd>
          </CardDetailPreson>
        </Card>
      </div>
    )
  }
}

const CardDetailAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #D0D0D0;
`


const CardDetailName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`

const CardDetailPreson = styled.div`
  padding: 20px;
`

const PaddingImg = styled.div`
  width: 100%;
  height: 125px;
`

const BorderImg = styled.div`
  width: 250px;
  height: 250px;
  position: absolute;
  left: 50%;
  background-color: #FFF;
  border-radius: 50%;  
  transform: translate(-50%, -50%); 
`

const CardImg = styled.img`
  width: 220px;
  height: auto;
`

const CardDetailImg = styled.div`
  border-radius: 50%;  
  width: 220px;
  height: 220px;
  overflow: hidden;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%); 
`

const CardImgCover = styled.img`
  width: 450px;
  height: auto;
`

const CardDetailImgCover = styled.div`
  border-radius: 45px 45px 0px 0px;  
  width: 450px;
  height: 200px;
  overflow: hidden;
`

const Card = styled.div`
  width: 450px;
  height: 600px;
  border: 1px solid #D0D0D0;
  border-radius: 45px;  
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
`