import styled from "styled-components";
import { Tweet } from "../models/Tweets.model";
interface CardTweetProps {
  tweet: Tweet;
}

const DivPrincipal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: solid 1px gray;
  border-top: none;
  border-right: none;
  border-left: none;
  height: fit-content;

  #divImage {
    align-self: baseline;
    padding-left: 10px;
  }

  div {
    
    padding-top:10px;
    
    margin-bottom: 25px;
    h1 {
      margin-top: 10px;
    }
  }

  #divIcones {
    display: block;
  }
`;

const ImagePerfil = styled.img`
  width: 60px;
  height:60px;
  border-radius: 50%;
  border: solid 2px gray;
  margin-right: 14px;
  margin-top:10px;
`;

export function CardTweet(props: CardTweetProps) {
  return (
    <>
      <DivPrincipal>
        <div id="divImage">
          <ImagePerfil
            src={props.tweet.usuarioId.image}
            alt="Foto de Perfil do usuario"
          />
        </div>
        <div>
          <h1>@{props.tweet.usuarioId.nomeUsuario}</h1>
          <br />
          <p>{props.tweet.conteudo}</p>
        </div>
      </DivPrincipal>
    </>
  );
}
