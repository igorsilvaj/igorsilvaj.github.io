import styled from "styled-components";
import { Link } from "react-router-dom";

interface PropStyles {
  img: string;
}

interface Props {
  image: string;
  name: string;
  type: string;
  url: string;
  repository: string;
}

const StyledContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0px rgb(0 0 0 / 20%);
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 300px;
  height: 280px;
`;

const CardContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 5px 0;
  padding: 8px;
`;

const Thumbnail = styled.div`
  border-radius: 4px;
  background-image: url(${(props: PropStyles) => (props.img ? props.img : "")});
  background-position: center;
  background-size: cover;
  width: 280px;
  height: 200px;
`;

const Title = styled.p`
  color: black;
  font-weight: 900;
  font-size: 1.2em;
  margin: 0;
`;

const MoreInfo = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const CardButtons = styled.div`
  display: flex;
  flex-flow: row-reverse wrap;
  gap: 0 5px;
`;

const StyledButton = styled(Link)`
  background-color: green;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-weight: 900;
  padding: 5px;
`;

const StyledTag = styled.button`
  background-color: blue;
  color: white;
  padding: 2px 10px;
  border-radius: 4px;
`;

export default function ProjectCard(props: Props) {
  const { image, name, type, url, repository } = props;
  return (
    <StyledContainer>
      <CardContent>
        <Thumbnail img={image} />
        <Title>{name}</Title>
        <MoreInfo>
          <StyledTag>{type}</StyledTag>
          <CardButtons>
            <StyledButton to={url} target="_blank">Live</StyledButton>
            <StyledButton to={repository} target="_blank">Github</StyledButton>
          </CardButtons>
        </MoreInfo>
      </CardContent>
    </StyledContainer>
  );
}
