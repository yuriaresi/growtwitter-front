import styled from "styled-components";
import logoGrowtwitter from "../assets/light_color/logo_growtweet.svg";

const NavStyled = styled.nav`
  
  min-width: 250px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;


  #bot-side{
    padding-bottom: 16px
  }
`;

export function LeftMenu() {
  return (
    <NavStyled>
      <div id="top-side">
        <img src={logoGrowtwitter} alt="Logo Growtwitter" />

        <ul>
          <li>Pagina Inicial</li>
          <li>Explorar</li>
          <li>Perfil</li>
        </ul>
        <button>Tweetar</button>
      </div>

      <div id="bot-side">
        <div>Card usuario</div>
        <button>Sair</button>
      </div>
    </NavStyled>
  );
}
