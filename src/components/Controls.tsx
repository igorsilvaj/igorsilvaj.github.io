import { useState } from 'react'
import styled, { css } from 'styled-components'
import {
  RxChevronDown,
  RxChevronLeft,
  RxChevronRight,
  RxChevronUp,
  RxDoubleArrowDown,
  RxDoubleArrowUp
} from 'react-icons/rx'
import { scrollToBottom, scrollToElement, scrollToTop } from '../utils/scroll'
import { type DefaultLink } from '../interfaces'

interface StyleProps {
  isOpen: boolean
}

interface Props {
  links?: DefaultLink[]
}

const Container = styled.div`
  align-items: center;
  background-color: #00000049;
  border-radius: 10px 0 0 10px;
  bottom: 100px;
  display: flex;
  flex-flow: row wrap;
  height: 40px;
  justify-content: center;
  position: fixed;
  width: 180px;
  transition: right 2s;
  ${(props: StyleProps) =>
    props.isOpen &&
    css`
      right: 0px;
    `}
  ${(props: StyleProps) =>
    !props.isOpen &&
    css`
      right: -180px;
    `}
`

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  gap: 0 15px;
  justify-content: center;
  position: relative;
`

const StyledArrowContainer = styled.div`
  align-items: center;
  background-color: white;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: 30px;
  width: 30px;
`

const StyledMenu = styled.div`
  cursor: pointer;
  position: absolute;
  left: -25px;
`

export default function Controls (props: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [navIndex, setNavIndex] = useState(0)
  const { links } = props
  const nav: string[] = ['hero']

  if (links != null) {
    links.forEach((e) => e.type === 'anchor' && nav.push(e.url))
  }

  const previous = () => {
    scrollToElement(nav[navIndex - 1])
    navIndex > 0 && setNavIndex(navIndex - 1)
    console.log('state', navIndex)
    console.log('nav', nav)
  }

  const next = () => {
    scrollToElement(nav[navIndex + 1])
    navIndex < nav.length - 1 && setNavIndex(navIndex + 1)
    console.log('state', navIndex)
    console.log('nav', nav)
  }

  return (
    <Container isOpen={isOpen}>
      <Wrapper>
        <StyledMenu>
          {isOpen
            ? (
            <RxChevronRight onClick={() => { setIsOpen(!isOpen) }} />
              )
            : (
            <RxChevronLeft onClick={() => { setIsOpen(!isOpen) }} />
              )}
        </StyledMenu>
        <StyledArrowContainer>
          <RxDoubleArrowDown
            onClick={() => {
              scrollToBottom()
              setNavIndex(nav.length - 1)
            }}
          />
        </StyledArrowContainer>
        <StyledArrowContainer>
          <RxChevronUp onClick={() => { previous() }} />
        </StyledArrowContainer>
        <StyledArrowContainer>
          <RxChevronDown onClick={() => { next() }} />
        </StyledArrowContainer>
        <StyledArrowContainer>
          <RxDoubleArrowUp
            onClick={() => {
              scrollToTop()
              setNavIndex(0)
            }}
          />
        </StyledArrowContainer>
      </Wrapper>
    </Container>
  )
}
