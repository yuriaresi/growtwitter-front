import "./index.css";
import { Container } from "./style/Container.styled";
import { LeftMenu } from "./components/LeftMenu";
import { Main } from "./components/Content";
import { RightMenu } from "./components/RightMenu";

function App() {
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

export default App;
