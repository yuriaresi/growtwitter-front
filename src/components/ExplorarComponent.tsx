import styled from "styled-components";

const MainStyled = styled.main`
  background-color: black;
  flex: 1;
  border: solid 1px gray;
  border-radius: 5px;
  border-top: none;
  border-bottom: none;
  display: flex;
  flex-direction: column;
  div {
    margin-top: 10px;
    padding: 10px;
  }
  #divHeader {
    display: flex;
    height: 50px;
    border: solid 1px gray;
    border-top: none;
    border-left: none;
    border-right: none;

    h1 {
      font-size: 25px;
    }
  }
`;

export function ExplorarComponent() {
  return (
    <MainStyled>
      <div id="divHeader">
        <h1>Explorar</h1>
      </div>
      <div>
        <p>Esporte - há 45 min</p>
        <h1>Assunto sobre esporte</h1>
        <br />
        <p>Assunto do momento em Brasil</p>
        <h1>Assunto do momento</h1>
        <br />
        <p>Música - Assunto do momento</p>
        <h1>Assunto sobre Música</h1>
        <br />
        <p>Cinema - Assunto do momento</p>
        <h1>Assunto sobre Filmes e Cinema</h1>
        <br />
        <p>Entreterimento - Assunto do momento</p>
        <h1>Assunto sobre Entreterimento</h1>
        <br />
        <p>Assunto do momento - Porto Alegre</p>
        <h1>Assunto do momento em Porto Alegre</h1>
        <br />
        <p>Internacional - Principal assunto do Momento</p>
        <h1>Assunto sobre Sport Club Internacional</h1>
        <br />
        <p>Borré - Principal assunto do momento</p>
        <h1>Assunto sobre Borré</h1>
      </div>
    </MainStyled>
  );
}
