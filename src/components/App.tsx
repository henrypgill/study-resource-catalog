import { Container } from "@chakra-ui/react";
import AppRouter from "./AppRouter";

function App() {
  return (
    <Container maxW="100vw" height="100vh">
      <AppRouter />
    </Container>
  );
}

export default App;
