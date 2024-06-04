import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 8rem;
  background-color: rgb(0, 119, 255);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin: 0;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        Stock Dashboard
      </Title>
    </HeaderContainer>
  );
}