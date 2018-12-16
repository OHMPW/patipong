import styled, { css } from 'styled-components'

const fontStyle = styled.div`
  color: ${props => props.theme.secondary};
  ${props => props.flex && css`
    display: flex;
    align-items: center;
  `}
  ${props => props.link && css`
    cursor: pointer;
    &:hover{ opacity:0.9; }
  `}
  ${props => props.danger && css`color: ${props.theme.red};`}
  ${props => props.white && css`color: ${props.theme.white};`}
  ${props => props.success && css`color: ${props.theme.green};`}
  ${props => props.primary && css` color: ${props.theme.primary};`}
  ${props => props.bold && css`font-weight: ${props.theme.font_bold};`}
  ${props => props.secondary && css`color: ${props.theme.secondary};`}
`

export const Title = styled(fontStyle)`
  font-size: ${props => props.theme.font_l};
  @media (max-width: 990px) {
    font-size: ${props => props.theme.font_m};
  }
`

export const Title1 = styled(fontStyle)`
  font-size: ${props => props.theme.font_m};
  @media (max-width: 990px) {
    font-size: ${props => props.theme.font_s};
  }
`

export const Title2 = styled(fontStyle)`
  font-size: ${props => props.theme.font_s};
  @media (max-width: 990px) {
    font-size: ${props => props.theme.font_xs};
  }
`
export const Title3 = styled(fontStyle)`
  font-size: ${props => props.theme.font_xs};
  @media (max-width: 990px) {
    font-size: ${props => props.theme.font_xxs};
  }
`

