import "./App.css";
import Activities from "./components/Activities/Activities";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Activities></Activities>
      </Container>
    </div>
  );
}

export default App;
