import "./App.css";
import Activities from "./components/Activities/Activities";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar from "./components/SideBar/SideBar";
import QueAns from "./components/QueAns/QueAns";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }} className="bg-light">
            <Activities></Activities>
            <QueAns></QueAns>
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }}>
            <SideBar></SideBar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
