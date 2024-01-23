import styled from "styled-components";
import imagePerfil from "../assets/perfilteste.jpg";

const ImgCard = styled.img<{$tamanho?: string}>`
  width:60px;
  height:60px;
  border-radius: 50%;
  border: solid 2px gray;
  margin-right: 14px;
  /* width: ${props => props.$tamanho == "p" ? '50px' : '50px'}; */
  
`;

const DivCard = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface CardProps {
  image?: string
  nome?: string;
  nickUsuario?: string;
  tamanho?: string
}

export const ImageCard = imagePerfil;

export function CardUsuario(props: CardProps) {
  return (
    <DivCard>
      <ImgCard $tamanho={props.tamanho} src={props.image} alt="" />
      <div>
        <h1>  {props.nome}</h1>
        <p>{props.nickUsuario}</p>
      </div>
    </DivCard>
  );
}
