import styled from "styled-components";

const MainStyled = styled.main`
  background-color: black;
  flex: 1;
  border: solid 1px gray;
  border-radius: 5px;
  border-top: none;
`;

export function Main() {
  return (
    <MainStyled>
      <p>Content</p>
    </MainStyled>
  );
}
