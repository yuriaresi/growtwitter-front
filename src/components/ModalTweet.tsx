import styled, { keyframes } from "styled-components";
import { CardUsuario } from "./CardUsuario";
import { useEffect, useState } from "react";
import { Usuario } from "../models/Usuario.model";
import { Tweet } from "../models/Tweets.model";
import { api } from "../services/api,services";
import { useNavigate } from "react-router-dom";
interface ModalProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const animacaoModel = keyframes`
 
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const DivModal = styled.div`
 margin-bottom: 350px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.441);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  #modal {
    background-color: black;
    border-radius: 8px;
    width: 500px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    border: solid 2px gray;
    display: flex;
    flex-direction: row;
    animation: ${animacaoModel} 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55)
  }
  textarea {
    background-color: black;
    border: none;
    resize: none;
    height: 100px;
    outline: none;
    color: white;
    width: 380px;
    font-size: 20px;
  }

  form {
    display: grid;
    gap: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    font-weight: bold;
    margin-bottom: 5px;
    color: white !important;
  }

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }

  #botaoPostar {
    background-color: rgb(29, 155, 240);
    border-color: rgba(0, 0, 0, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 28px;
    transition-duration: 0.2s;
    min-width: 52px;
    width: 150px;
    border-radius: 25px;
    height: 40px;
    font-size: 20px;
    align-self: center;
    color: white;
    margin-right: 100px;
    &:hover {
      background-color: rgb(19, 99, 152);
      cursor: pointer;
    }
  }

  #botaoSair {
    border: none;
    margin-top: 30px;
    font-size: 20px;
    margin-left: auto;
    background-color: black;
    color: rgb(29, 155, 240);
    &:hover {
      color: rgb(19, 99, 152);
      cursor: pointer;
    }
  }
`;

export function ModalTweet({ isOpen, setOpen }: ModalProps) {
  if (isOpen) {
    const [usuario, setUsuario] = useState<Usuario>();
    const usuarioLogado = localStorage.getItem("usuario");
    const [_, setTweet] = useState<Tweet[]>([]);
    const navigate = useNavigate()
    useEffect(() => {
      if (!usuarioLogado) {
        alert("Sessão expirada, faça login novamente");

        setTweet([]);
        return;
      }
      setUsuario(JSON.parse(usuarioLogado));
    }, []);

    const CriarTweets = async (event: any) => {
      event.preventDefault()
      try {
        const body = { conteudo: event.target.criarTweet.value };
        console.log(!body);
        if (body.conteudo === "") {
          return alert("Preencha o campo vazio");
        }

       await api.post(
          `http://localhost:3333/usuario/${usuario?.id}/tweet`,
          body,
          { headers: { Authorization: usuario?.token } }
        );
        navigate('/')
        alert("Tweet Criado com sucesso!");
      } catch (error: any) {
        console.log(error);
        alert("Error na requisição");
      }
    };

    return (
      <DivModal>
        <div id="modal">
          <div id="divCard">
            <CardUsuario tamanho="p" image={usuario?.image} />
          </div>
          <div id="divFormulario">
            <form onSubmit={CriarTweets}>
              <textarea
                placeholder="O que está acontecendo?"
                name="criarTweet"
                id="criarTweet"
                cols={5}
                rows={5}
              ></textarea>
              <div id="div-Botao">
                <button id="botaoPostar">Postar</button>
              </div>
            </form>
            <div>
              <button id="botaoSair" onClick={() => setOpen(!isOpen)}>
                sair
              </button>
            </div>
          </div>
        </div>
      </DivModal>
    );
  } else {
    return <></>;
  }
}
