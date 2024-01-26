import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "../components/ModalCadastro";
import { api } from "../services/api,services";

const Input = styled.input`
  color: black;
  padding: 5px;
`;
const BotaoConta = styled.button`
  background-color: rgba(8, 8, 8, 0.707);
  color: rgb(26, 140, 216);
  border: none;
  margin-left: 4px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const BotaoLogin = styled.button`
  background-color: rgb(29, 155, 240);
  border-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 28px;
  transition-duration: 0.2s;
  min-width: 52px;
  width: 150px;
  border-radius: 25px;
  height: 40px;
  font-size: 20px;
  &:hover {
    background-color: rgb(19, 99, 152);
    cursor: pointer;
  }
`;

const DivPrincipal = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid 1px black;
  border-radius: 50px;

  #DivTexto {
    background-color: rgb(29, 155, 240);
    width: 600px;
    height: 400px;
    text-align: start;
    display: block;
    justify-content: center;
    border-radius: 10px;
    border-right: none;
    h1 {
      margin-top: 50px;
      margin-left: 50px;

      font-size: 40px;
    }
    p {
      margin-right:30px;
      margin-left: 30px;
      font-size: 20px;
    }
  }

  #divFormulario {
    display: grid;
    background-color:rgba(8, 8, 8, 0.707);
    width: 400px;
    height: 400px;
    text-align: center;
    align-items: center;
    border-radius:10px;

    #h1Login{
      color: white;
      font-size: 50px;
      margin-bottom: 50px;
    }
    span{
      margin-right: 10px;
      margin-left: 10px;
    }

   input{
    border-radius: 30px;
    height: 30px;
    margin-bottom: 30px;
  
   }
  }
`;

export function Login() {
  const navigate = useNavigate();

  const usuarioLogado = localStorage.getItem("usuario");
  useEffect(() => {
    if (usuarioLogado) {
      navigate("/");
      return;
    }
  }, []);

  const fazerLogin = async (event: any) => {
    try {
      event.preventDefault();
      const body = {
        email: event.target.email.value,
        senha: event.target.senha.value,
      };

      const result = await api.post("https://api-growtwitter-qxnp.onrender.com", body);

      console.log(result.data.data);
      alert("Login realizado com sucesso!");

      localStorage.setItem("usuario", JSON.stringify(result.data.data));
      navigate("/");
    } catch (error: any) {
      
      alert(error.response.data.message);
    }
  };

  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <DivPrincipal>
        <div id="DivTexto">
          <h1>GrowTwitter</h1>
          <br />
          <p>Trabalho final do bloco intermediario</p>
          <br />
          <p>
            O Growtwitter é a plataforma definitiva para todos osapaixonados por
            redes sociais que buscam umaexperiência familiar e poderosa,
            semelhante ao Twitter,mas com um toque único. Seja parte
            destacomunidade que valoriza a liberdade de expressão, aconexão com
            pessoas de todo o mundo e adisseminação de ideias.
          </p>
        </div>
        <div id="divFormulario">
          <form onSubmit={fazerLogin}>
            <h1 id="h1Login">Login</h1>
            <div>
              <span>Email:</span>
              <Input type="email" name="email" required />
            </div>
            <div>
              <span>Senha:</span>
              <Input type="password" name="senha" required />
            </div>
            <div>
              <BotaoLogin>Login</BotaoLogin>
            </div>
          </form>
          <div>
            <h1>
              Não tem uma conta?{" "}
              <BotaoConta onClick={() => setOpen(!open)}>
                {" "}
                Criar Conta
              </BotaoConta>
            </h1>
            <Modal isOpen={open} setOpen={setOpen} />
          </div>
        </div>
      </DivPrincipal>
    </>
  );
}
