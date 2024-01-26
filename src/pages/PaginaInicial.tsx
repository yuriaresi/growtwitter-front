import { Container } from "../style/Container.styled";
import { Main } from "../components/Content";
import { LeftMenu } from "../components/LeftMenu";
import { RightMenu } from "../components/RightMenu";
import { useEffect, useState } from "react";
import { Usuario } from "../models/Usuario.model";
import { useNavigate } from "react-router-dom";

export function PaginaInicial() {
  const [usuario, setUsuario] = useState<Usuario>();
  const navigate = useNavigate();
  useEffect(() => {
    const usuarioLogado = localStorage.getItem("usuario");

    if (!usuarioLogado) {
      navigate("/login");
      return;
    }
    setUsuario(JSON.parse(usuarioLogado));
  }, [usuario]);
  return (
    <>
      <Container>
        <LeftMenu />
        <Main />
        <RightMenu />
      </Container>
    </>
  );
}
