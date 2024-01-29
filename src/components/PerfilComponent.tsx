import styled from "styled-components";
import { CardUsuario } from "./CardUsuario";
import { useEffect, useState } from "react";
import { Usuario } from "../models/Usuario.model";
import { Tweet } from "../models/Tweets.model";
import { useNavigate } from "react-router-dom";
import { ConteudoTweet } from "./ConteudoTweet";
import { ModalEditarUsuario } from "./ModalEditarComponent";
import { api } from "../services/api,services";

const MainStyled = styled.main`
  background-color: black;
  flex: 1;
  border: solid 1px gray;
  border-radius: 5px;
  border-top: none;
  border-bottom: none;
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
    height: 0px;
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
  #divBotao {
    display: flex;
    align-self: flex-end;
  }

  #botaoEditar {
    border: none;
    background-color: black;
    display: flex;
    margin-bottom: 10px;
    margin-right: 10px;
    font-size: 18px;
    border: 1px solid white;
    border-radius: 15px;
    padding: 5px 15px;;
    &:hover{
      cursor: pointer;
      background-color: #ffffff26;
      
    }
  }

  #divCard {
    margin: 15px;
  
  }

  #divPerfilcard {
    display: flex;
    justify-content: space-between;
    border: solid 1px gray;
    border-right: none;
    border-top: none;
    border-left: none;

    h1 {
      font-size: 25px;
      margin-top: 30px;
    }
    p {
      font-size: 25px;
    }
  }
  #divImg {
    display:flex;
    img {
      width: 100px;
      height: 100px;
      margin: 15px;
      
    }
  }
`;

export function PerfilComponent() {
  const [usuario, setUsuario] = useState<Usuario>();
  const [tweet, setTweet] = useState<Tweet[]>([]);
  const usuarioLogado = localStorage.getItem("usuario");
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

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
      const result = await api.get(
        `http://localhost:3333/usuario/${usuario?.id}/tweet`,
        { headers: { Authorization: usuario?.token } }
      );

      setTweet(result.data.data.reverse());
      console.log(result.data.data);
    } catch (error: any) {
      setTweet([]);
      console.log(error);
      alert("Error na requisição");
    }
  };

  

  return (
    <MainStyled>
      <div id="divHeader">
        <h1>Perfil {usuario?.nomeUsuario}</h1>
      </div>
      <div id="divPerfilcard">
        <div id="divImg">
          <CardUsuario image={usuario?.image} />
          <div>
            <h1>{usuario?.nome}</h1>
            <p>{usuario?.nomeUsuario}</p>
          </div>
        </div>

        <div id="divBotao">
          <button onClick={() => setOpen(!open)} id="botaoEditar">Editar Perfil</button>
          <ModalEditarUsuario isOpen={open} setOpen={setOpen} />
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
