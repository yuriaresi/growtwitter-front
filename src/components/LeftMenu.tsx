import styled from "styled-components";
import logoGrowtwitter from "../assets/dark_color/LOGO_GROWTWEET.svg";
import iconePaginaInicial from "../assets/dark_color/PAGINA_INICIAL_STROKE.svg";
import iconeExplorar from "../assets/dark_color/EXPLORAR_FILL.svg";
import iconePerfil from "../assets/dark_color/PERFIL_FILL.svg";
import { Icons } from "./Icon";
import { CardUsuario } from "./CardUsuario";

const NavStyled = styled.nav`
  min-width: 250px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  font-size: 16px;

  #button-tweetar {
    background-color: rgb(29, 155, 240);
    border-color: rgba(0, 0, 0, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 28px;
    transition-duration: 0.2s;
    min-width: 52px;
    width: 150px;
    border-radius: 25px;
    height: 40px;
    font-size: 20px;
    &:hover {
      background-color: rgb(19, 99, 152);
      cursor: pointer;
    }
  }

  #bot-side {
    padding-bottom: 16px;
  }
  #logoGrow {
    margin-top: 10px;
    margin-bottom: 30px;
  }

  a {
    text-decoration: none;

    div {
      display: flex;
      margin-bottom: 8px;
      align-items: baseline;

      img {
        margin-right: 10px;
        height: 16px;
      }
    }
  }

  #div-bota-sair{
    display: flex;
  justify-content: flex-end;

  #botao-sair {
  
    border: none;
    margin-top: 30px;
    font-size: 20px;
    margin-left: auto;
    background-color: black;
    
    &:hover{
      cursor: pointer;
    }
    
  }
  }
`;

export function LeftMenu() {
  return (
    <NavStyled>
      <div id="top-side">
        <div id="logoGrow">
          <Icons icon={logoGrowtwitter} />
        </div>
        <a href="#home">
          <div id="div-1">
            <div>
              <Icons icon={iconePaginaInicial} />
            </div>
            <div>
              <p>Pagina Inicial</p>
            </div>
          </div>
        </a>
        <a href="#explorar">
          <div>
            <div>
              <Icons icon={iconeExplorar} />
            </div>
            <div>
              <p>Explorar</p>
            </div>
          </div>
        </a>
        <a href="#perfil">
          <div>
            <div>
              <Icons icon={iconePerfil} />
            </div>
            <div>
              <p>Perfil</p>
            </div>
          </div>
        </a>
        <button id="button-tweetar">Tweetar</button>
      </div>

      <div id="bot-side">
        <div >
          <CardUsuario nome="batman" nickUsuario="@DarkKnight" />
        </div>
        <div id="div-bota-sair">
          <button id="botao-sair">Sair</button>
        </div>
      </div>
    </NavStyled>
  );
}
