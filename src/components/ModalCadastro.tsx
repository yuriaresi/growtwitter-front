import styled, { keyframes } from "styled-components";
import { api } from "../services/api,services";

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
    animation: ${animacaoModel} 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
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

export function Modal({ isOpen, setOpen }: ModalProps) {
  const CriarUsuario = async (event: any) => {
    event.preventDefault();
    const body = {
      nome: event.target.nome.value,
      nomeUsuario: event.target.nomeUsuario.value,
      email: event.target.email.value,
      senha: event.target.senha.value,
      image: event.target.imagem.value,
    };

    try {
      await api.post("/usuario", body);

      alert("Usuario criado com sucesso");
    } catch (error: any) {
      if (
        body.email == "" ||
        body.nome == "" ||
        body.nomeUsuario ||
        body.senha == ""
      ) {
        return alert("Preencha todos os campos.");
      }
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
                <form id="formDiv" onSubmit={CriarUsuario}>
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
                    <span>Email:</span>
                    <input
                      type="email"
                      placeholder="Digite seu email"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div>
                    <span>Senha:</span>
                    <input
                      type="password"
                      placeholder="Digite sua senha"
                      name="senha"
                      id="senha"
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
                    <button id="botaoCadastrar">Cadastrar</button>
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
