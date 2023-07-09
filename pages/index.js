import { Container } from "@chakra-ui/react";
import Sidebar from "./components/sidebar";

const Index = () => {
  return (
    <Container color="red.400">
      <div>
        <h2>Home page</h2>
        <div>
          <h1>This is testing</h1>
        </div>
      </div>
      <Sidebar />
    </Container>
  );
};
export default Index;
