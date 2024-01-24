import { Container } from "../style/Container.styled";
import { LeftMenu } from "../components/LeftMenu";
import { RightMenu } from "../components/RightMenu";
import { PerfilComponent } from "../components/PerfilComponent";

export function Perfil() {
  return (
    <>
      <Container>
        <LeftMenu />
        <PerfilComponent />
        <RightMenu />
      </Container>
    </>
  );
}
