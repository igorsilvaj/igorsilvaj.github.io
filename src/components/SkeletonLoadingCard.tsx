import styled from 'styled-components'

const SkeletonLoading = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0px rgb(0 0 0 / 20%);
  width: 300px;
  height: 280px;

  animation: loading 1s linear infinite alternate;
  @keyframes loading {
    0% {
      background-color: rgb(200, 200, 200);
    }
    100% {
      background-color: white;
    }
  }
`

export default function SkeletonLoadingCard () {
  return (
    <>
      <SkeletonLoading />
    </>
  )
}
