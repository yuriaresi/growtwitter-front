import styled from "styled-components";
import { CardUsuario } from "./CardUsuario";

const MainStyled = styled.main`
  background-color: black;
  flex: 1;
  border: solid 1px gray;
  border-radius: 5px;
  border-top: none;

  #divHeader {
    
    display: flex;
    border: solid 1px gray;
    border-top: none;
    height: 70px;
    align-items: center;
    padding: 0px 15px;
    border-left: none;
    border-right: none;

    h1{
      font-size: 25px;
    
    }
  }

  #divCard {
    margin: 15px;
    width:50px;
  }

  #divTextArea {
    display: flex;
    border: solid 1px gray;
    border-left: none;
    border-top: none;
    border-right: none;

    textarea {
      height: 50px;
      width: 100%;
      resize: none;
      background-color: black;
      border: none;
      margin-top: 25px;
      font-size:24px;
      outline:none;
    }
  }

  #divFormulario {
    flex: 1;
  }

  #div-Botao {
    display: flex;
    justify-content: end;
    margin-right: 15px;
    margin-bottom: 15px;
  }

  #botaoPostar {
    background-color: rgb(29, 155, 240);
    border-color: rgba(0, 0, 0, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 28px;
    transition-duration: 0.2s;
    min-width: 52px;
    width: 100px;
    border-radius: 25px;
    height: 40px;
    font-size: 16px;
    &:hover {
      background-color: rgb(19, 99, 152);
      cursor: pointer;
    }
  }
`;

export function Main() {
  return (
    <MainStyled>
      <header>
        <div id="divHeader">
          <h1>Página inicial</h1>
        </div>
      </header>
      <main>
        <div id="divTextArea">
          <div id="divCard">
            <CardUsuario tamanho="p" />
          </div>
          <div id="divFormulario">
            <form action="">
              <textarea
                placeholder="O que está acontecendo?"
                name="criarTweet"
                id="criarTweet"
                cols={10}
                rows={10}
              ></textarea>
              <div id="div-Botao">
                <button id="botaoPostar">Postar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </MainStyled>
  );
}
