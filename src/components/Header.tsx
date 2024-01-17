import styled from "styled-components";
import logoGrotwitter from "../assets/light_color/logo_growtweet.svg";

const HeaderStyled = styled.div`
  color: red;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  height:200px;
  margin-bottom: 8px;

  img{
    height:50px;
  }
`;

export function Header() {
  return (
    <HeaderStyled>
      <img src={logoGrotwitter} alt="Logo Growteet" />
    </HeaderStyled>
  );
}
