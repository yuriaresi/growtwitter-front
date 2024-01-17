import styled from "styled-components";

const AsideStyled = styled.aside`
  background-color: green;
  min-width: 250px;
`;

export function RightMenu() {
  return (
    <AsideStyled>
      <div>
        <p> right</p>
      </div>
    </AsideStyled>
  );
}
