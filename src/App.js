import React, { useState } from "react";
import Header from "./contents/header";
import styled from "styled-components";
import Content from "./contents/content";
import Sci from "./contents/sci";
import Thumbs from "./contents/thumb";
import "../src/App.css";
import img1 from "./img/img1.png";
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
  const [img, setImg] = useState(img1);
  return (
    <Section>
      <Circle colors={bg} />
      <Header />
      <Content img={img} />
      <Thumbs setImg={setImg} setBg={setBg} />
      <Sci />
    </Section>
  );
}

export default App;
