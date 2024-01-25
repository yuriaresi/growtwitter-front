import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Usuario } from "../models/Usuario.model";

interface ModalProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}
const DivModal = styled.div`
  * {
    color: black;
  }
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

  #botaoCadastrar {
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

export function ModalEditarUsuario({ isOpen, setOpen }: ModalProps) {
  const [usuario, SetUsuario] = useState<Usuario>();
  const usuarioLogado = localStorage.getItem("usuario");
  useEffect(() => {
    if (!usuarioLogado) {
      alert("Sessão expirada, faça login novamente");

      return;
    }
    SetUsuario(JSON.parse(usuarioLogado));
  }, []);

  const AtualizarUsuario = async (event: any) => {
    event.preventDefault()

    const body = {
      nome: event.target.nome.value || usuario?.nome,
      nomeUsuario: event.target.nomeUsuario.value || usuario?.nomeUsuario,
      image: event.target.imagem.value || usuario?.image,
    };
   

    

    
    try {
      const result = await axios.put(
        `http://localhost:3333/usuario/${usuario?.id}`,
        body,
        { headers: { Authorization: usuario?.token } }
      );
      alert("Usuario Atualizado com sucesso");
    } catch (error: any) {
      console.log(error);
      alert("Error na requisição");
    }
  };

  if (isOpen) {
    return (
      <>
        <DivModal>
          <div id="modal">
            <div>
              <div>
                <form id="formDiv" onSubmit={AtualizarUsuario}>
                  <div>
                    <span>Nome:</span>
                    <input
                      type="text"
                      placeholder="Digite seu nome"
                      name="nome"
                      id="nome"
                    />
                  </div>
                  <div>
                    <span>Nome de Usuario:</span>
                    <input
                      type="text"
                      placeholder="Digite seu Nome de usuario"
                      name="nomeUsuario"
                      id="nomeUsuario"
                    />
                  </div>
                  <div>
                    <span>Imagem:</span>
                    <input
                      type="text"
                      placeholder="Link da imagem"
                      name="imagem"
                      id="imagem"
                    />
                  </div>
                  <div>
                    <br />
                    <button id="botaoCadastrar">Atualizar</button>
                    <div>
                      <button id="botaoSair" onClick={() => setOpen(!isOpen)}>
                        sair
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </DivModal>
      </>
    );
  } else {
    return <></>;
  }
}
