import styled from "styled-components";

const MainStyled = styled.main`
  background-color: black;
  flex: 1;
`;

export function Main() {
  return (
    <MainStyled>
      <p>Content</p>
    </MainStyled>
  );
}
