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

    ;

    h1 {
      font-size: 25px;
    }
  }

  #divCard {
    margin: 15px;
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
      font-size: 24px;
      outline: none;
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
    setTimeout(() => {
      ListarTweets();
    }, 500);
  }, []);

  const ListarTweets = async () => {
    try {
      const result = await axios.get("http://localhost:3333/tweets");
      setTweet(result.data.data.reverse());
    } catch (error: any) {
      setTweet([]);
      console.log(error);
      alert("Error na requisição");
    }
  };

  const CriarTweets = async (event: any) => {
    try {
      const body = { conteudo: event.target.criarTweet.value };
      console.log(!body);
      if (body.conteudo == "") {
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
        <h1>Página inicial</h1>
      </div>

      <main id="mainTeste">
        <div id="divTextArea">
          <div id="divCard">
            <CardUsuario tamanho="p" image={usuario?.image} />
          </div>
          <div id="divFormulario">
            <form onSubmit={CriarTweets}>
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
        <div>
          <ConteudoTweet tweets={tweet} />
        </div>
      </main>
    </MainStyled>
  );
}
