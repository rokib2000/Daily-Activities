import "./App.css";
import Activities from "./components/Activities/Activities";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Profile from "./components/Profile/Profile";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <Activities></Activities>
          </Col>
          <Col xs={12} md={4}>
            <Profile></Profile>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
