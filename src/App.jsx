import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects"
import "bootstrap/dist/css/bootstrap.css";
import "./stylesheet/styles.css";
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
      <Header />
      <Container>
        <About />
        <Projects />
      </Container>
    </>
  );
}

export default App;
