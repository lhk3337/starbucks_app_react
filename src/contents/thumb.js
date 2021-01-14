import React from "react";
import Styled from "styled-components";
import thumb1 from "../img/thumb1.png";
import thumb2 from "../img/thumb2.png";
import thumb3 from "../img/thumb3.png";

import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

const Thumbs = Styled.ul`
  position: absolute;
  letter-spacing: 50%;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
`;
const List = Styled.li`
  list-style: none;
  display: inline-block;
  margin: 0 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: translateY(-15px);
  }
`;

const Img = Styled.img`
  max-width: 60px;
`;

function thumb() {
  return (
    <Thumbs>
      <List>
        <Img src={thumb1} />
      </List>
      <List>
        <Img src={thumb2} />
      </List>
      <List>
        <Img src={thumb3} />
      </List>
    </Thumbs>
  );
}

export default thumb;
