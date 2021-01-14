import React, { useState } from "react";
import Header from "./contents/header";
import styled from "styled-components";
import Content from "./contents/content";
import Sci from "./contents/sci";
import "../src/App.css";

const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.colors};
  clip-path: circle(600px at right 800px);
`;
const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
`;

function App() {
  const [bg, setBg] = useState("#017143");
  return (
    <Section>
      <Circle colors={bg} />
      <Header />
      <Content setBg={setBg} />

      <Sci />
    </Section>
  );
}

export default App;
