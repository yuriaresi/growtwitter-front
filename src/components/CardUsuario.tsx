import styled from "styled-components";
import imagePerfil from "../assets/perfilteste.jpg";

const ImgCard = styled.img`
  width: 75px;
  border-radius: 50%;
  border: solid 2px gray;
  margin-right: 14px;
`;

const DivCard = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface CardProps {
  nome: string;
  nickUsuario: string;
}

export const ImageCard = imagePerfil;

export function CardUsuario(props: CardProps) {
  return (
    <DivCard>
      <ImgCard src={imagePerfil} alt="" />
      <div>
        <h1>{props.nome}</h1>
        <p>{props.nickUsuario}</p>
      </div>
    </DivCard>
  );
}
