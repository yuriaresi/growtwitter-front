import styled from "styled-components";

const AsideStyled = styled.aside`
  background-color: green;
  min-width: 250px;
`;

export function RightMenu() {
  return (
    <AsideStyled id="right">
      <p>Right Menu</p>
    </AsideStyled>
  );
}
