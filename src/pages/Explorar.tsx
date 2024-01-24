import { ExplorarComponent } from "../components/ExplorarComponent";
import { LeftMenu } from "../components/LeftMenu";
import { RightMenu } from "../components/RightMenu";
import { Container } from "../style/Container.styled";

export function Explorar() {
  return (
    <>
      <Container>
        <LeftMenu />
        <ExplorarComponent />
        <RightMenu />
      </Container>
    </>
  );
}
