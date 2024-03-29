import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AsideStyled = styled.aside`
  min-width: 250px;

  div {
    padding: 10px;
    background-color: rgb(29, 31, 35);
    border-radius: 10px;
    width: 350px;
    margin: 50px;
    display: inline-block;
    

    h1 {
      color: rgb(220, 223, 224);
    }
    p {
      color: rgb(113, 118, 123);
    }
    a {
      color: rgb(29, 148, 228);
      text-decoration: none;
      &:hover {
    text-decoration: underline;
    color:rgb(12, 101, 161);
    cursor: pointer;
  }
    }
  }
`;

export function RightMenu() {
  const navigate = useNavigate()
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
        <br />
        <p>Cinema - Assunto do momento</p>
        <h1>Assunto sobre Filmes e Cinema</h1>
        <br />
        <a onClick={()=>{navigate('/explorar')}}>Mostrar Mais</a>
        <br />
      </div>
    </AsideStyled>
  );
}
