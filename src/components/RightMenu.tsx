import styled from "styled-components";

const AsideStyled = styled.aside`
  
  min-width: 250px;
  
`;

export function RightMenu() {
  return (
    <AsideStyled>
      <div>
        <h1>O que está acontecendo?</h1>
        <br />
        <p>Esporte - há 45 min</p>
        <h1>Assunto sobre esporte</h1>
        <br />
        <p>Assunto do momento em Brasil</p>
        <h1>Assunto do momento</h1>
        <br />
        <p>Música - Assunto do momento</p>
        <h1>Assunto sobre Música</h1>
        <p>Cinema - Assunto do momento</p>
        <h1>Assunto sobre Filmes e Cinema</h1>
        br

       <a href="http://">Mostrar Mais</a>
      </div>
    </AsideStyled>
  );
}
