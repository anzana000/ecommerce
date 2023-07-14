import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Variants from "./Components/Variants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Container className="wrapper">
      <div className="wrapper-top">
        <h2>Stock</h2>
        <p>Optional if product has variants</p>
        <button>Set Stock</button>
      </div>
      <Variants />
    </Container>
  );
}

export default App;
