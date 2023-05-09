import { type ReactNode, useState } from 'react'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

interface Props {
  content?: ReactNode
}

export default function HamburgerDropdown (props: Props) {
  const [isActive, setIsActive] = useState(false)
  const { content } = props

  return (
    <div id="teste">
      {isActive
        ? (
        <RxCross1 onClick={() => { setIsActive(!isActive) }} />
          )
        : (
        <RxHamburgerMenu onClick={() => { setIsActive(!isActive) }} />
          )}
      {isActive && content}
    </div>
  )
}
