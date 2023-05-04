import { ReactNode } from "react";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";

interface Props {
  bgColor?: string;
  title?: ReactNode;
  desktopMenu?: ReactNode;
  mobileMenu?: ReactNode;
  children?: ReactNode;
}

const StyledHeader = styled.header.attrs((props: Props) => ({
  bgColor: props.bgColor || "rgb(36, 37, 38)",
}))`
  align-items: center;
  background-color: ${(props) => props.bgColor};
  color: white;
  display: flex;
  flex-flow: row wrap;
  font-size: 1.5em;
  font-weight: 900;
  height: 45px;
  justify-content: space-between;
  position: fixed;
  padding: 0 10px;
  top: 0;
  text-decoration: none;
  width: 100%;
  z-index: 999;
`;

export default function Header(props: Props) {
  const { bgColor, title, desktopMenu, mobileMenu } = props;
  const size = useWindowSize();
  let isMobile = false;
  // let isPortrait = false;
  // isPortrait = size.height > size.width;

  if (size.width) {
    isMobile = size.width < 700;
  }

  return (
    <StyledHeader bgColor={bgColor}>
      {title}
      {isMobile ? mobileMenu : desktopMenu}
    </StyledHeader>
  );
}
