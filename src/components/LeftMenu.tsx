import styled from "styled-components";

const NavStyled = styled.nav`
  background-color: orange;
  min-width: 250px;
`;

export function LeftMenu() {
  return (
    <NavStyled id="left">
      <p>Left menu</p>
    </NavStyled>
  );
}
