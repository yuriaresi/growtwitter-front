import { Container } from "../style/Container.styled";
import { Main } from "../components/Content";
import { LeftMenu } from "../components/LeftMenu";
import { RightMenu } from "../components/RightMenu";

export function PaginaInicial() {
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
