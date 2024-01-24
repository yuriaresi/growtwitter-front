import styled from "styled-components";
import { CardUsuario } from "./CardUsuario";
import { useEffect, useState } from "react";
import { Usuario } from "../models/Usuario.model";
import { Tweet } from "../models/Tweets.model";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ConteudoTweet } from "./ConteudoTweet";

const MainStyled = styled.main`
  background-color: black;
  flex: 1;
  border: solid 1px gray;
  border-radius: 5px;
  border-top: none;
  display: flex;
  flex-direction: column;

  #mainTeste {
    overflow: auto;
    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 6px;
    }
  }

  #divHeader {
    display: flex;
    border: solid 1px gray;
    border-top: none;
    height: 150px;
    backdrop-filter: blur(1px);
    width: 100%;
    align-items: center;
    padding: 0px 15px;
    border-left: none;
    border-right: none;

    h1 {
      font-size: 25px;
    }
  }

  #divCard {
    margin: 15px;
  }

  #divPerfilcard {
    display: flex;
    flex-direction: column;
    border: solid 1px gray;
    border-right: none;
    border-top: none;
    border-left: none;

    h1 {
      font-size: 25px;
      margin-left: 25px;
      margin-top: 25px;
    }
    p {
      font-size: 25px;
      margin-left: 25px;
      margin-bottom: 30px;
    }
  }
  #divImg {
    img {
      width: 100px;
      height: 100px;
      margin-top: 30px;
      margin-left: 25px;
    }
  }
`;

export function PerfilComponent() {
  const [usuario, setUsuario] = useState<Usuario>();
  const [tweet, setTweet] = useState<Tweet[]>([]);
  const usuarioLogado = localStorage.getItem("usuario");
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuarioLogado) {
      alert("Sessão expirada, faça login novamente");
      navigate("/login");
      setTweet([]);
      return;
    }
    setUsuario(JSON.parse(usuarioLogado));
  }, []);
  useEffect(() => {
    if (usuario) {
      setTimeout(() => {
        ListarTweets();
      }, 500);
    }
  }, [usuario]);

  const ListarTweets = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3333/usuario/${usuario?.id}/tweet`,
        { headers: { Authorization: usuario?.token } }
      );
      console.log(result.data.data);

      setTweet(result.data.data.reverse());
      console.log(result.data.data);
    } catch (error: any) {
      setTweet([]);
      console.log(error);
      alert("Error na requisição");
    }
  };

  const CriarTweets = async (event: any) => {
    try {
      const body = { conteudo: event.target.criarTweet.value };
      if (body.conteudo === "") {
        return alert("Preencha o campo vazio");
      }

      const result = await axios.post(
        `http://localhost:3333/usuario/${usuario?.id}/tweet`,
        body,
        { headers: { Authorization: usuario?.token } }
      );
      alert("Tweet Criado com sucesso!");
    } catch (error: any) {
      console.log(error);
      alert("Error na requisição");
    }
  };

  return (
    <MainStyled>
      <div id="divHeader">
        <h1>Perfil @{usuario?.nomeUsuario}</h1>
      </div>
      <div id="divPerfilcard">
        <div id="divImg">
          <CardUsuario image={usuario?.image} />
        </div>
        <div>
          <h1>{usuario?.nome}</h1>
          <p>@{usuario?.nomeUsuario}</p>
        </div>
      </div>

      <main id="mainTeste">
        <div>
          <ConteudoTweet tweets={tweet} />
        </div>
      </main>
    </MainStyled>
  );
}
