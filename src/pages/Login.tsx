import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Teste = styled.input`
  color: black;
  * {
    color: black;
  }
`;

export function Login() {
  const navigate = useNavigate();

  const fazerLogin = async (event: any) => {
    try {
      event.preventDefault();
      const body = {
        email: event.target.email.value,
        senha: event.target.senha.value,
      };

      const result = await axios.post("http://localhost:3333/login", body);

      console.log(result.data.data);
      alert("Login realizado com sucesso!");

      localStorage.setItem("usuario", JSON.stringify(result.data.data));
      navigate("/");
    } catch (error: any) {
      console.log(error.response.data.message);
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={fazerLogin}>
        <div>
          <span>Email:</span>
          <Teste type="email" name="email" required />
        </div>
        <div>
          <span>Senha:</span>
          <Teste type="password" name="senha" required />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
}
