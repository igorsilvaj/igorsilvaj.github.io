import styled, { css } from 'styled-components'

import tagDiv from '../assets/img/tags/div.png'

interface Props {
  x?: number
}

const Raining = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
  position: relative;
  top: 0;
  width: 100vw;
  height: 50px;
  `

const Code = styled.div`
animation: animateRain calc(15s / var(--i)) linear infinite;
  background-image: url(${tagDiv});
  width: 100px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  ${(props: Props) => (props.x != null) && css`
      --i: ${(props: Props) => (props.x ?? 0)};
    `};
  @keyframes animateRain {
    0% {
      transform: translateY(0) scale(1);
    }
    30% {
      transform: translateY(10vh) scale(0.7);
    }
    50% {
      transform: translateY(30vh) scale(0.6);
    }
    70% {
      transform: translateY(50vh) scale(0.5);
    }
    100% {
      transform: translateY(70vh) scale(0);
    }
  }
`

export default function RainingCode () {
  return (
    <Raining>
      <Code x={9} />
      <Code x={16} />
      <Code x={5} />
      <Code x={14} />
      <Code x={6} />
      <Code x={8} />
    </Raining>
  )
}
