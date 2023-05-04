import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { scrollToElement } from "../utils/scroll";
import { DefaultLink } from "../interfaces";

interface Props {
  mobile?: boolean;
  links?: DefaultLink[];
}

const StyledSection = styled.section`
  ${(props: Props) =>
    props.mobile &&
    css`
      background-color: gray;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      height: 100%;
      right: 0;
      position: fixed;
      transform: translateY(8px);
      width: 150px;
      animation: menuOpen 0.4s;
    `};
  @keyframes menuOpen {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 150px;
    }
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  gap: 0 20px;
  color: white;
  ${(props: Props) =>
    props.mobile &&
    css`
      display: flex;
      flex-flow: ${(props: Props) => (props.mobile ? "column" : "row")} wrap;
      gap: 8px 0;
    `};
`;

const StyledListItem = styled.li`
  cursor: pointer;
`;

export default function NavLinks(props: Props) {
  const { mobile, links } = props;
  return (
    <StyledSection mobile={mobile}>
      <StyledList mobile={mobile}>
        {links &&
          links.map(({ name, url, type }) => {
            if (type === "anchor")
              return (
                <StyledListItem key={name} onClick={() => scrollToElement(url)}>
                  {name}
                </StyledListItem>
              );
            return (
              <li key={name}>
                <Link to={url}>{name}</Link>
              </li>
            );
          })}
      </StyledList>
    </StyledSection>
  );
}
