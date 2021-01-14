import React, { useState } from "react";
import styled from "styled-components";

import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

import thumb1 from "../img/thumb1.png";
import thumb2 from "../img/thumb2.png";
import thumb3 from "../img/thumb3.png";

const Contents = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextBox = styled.div`
  position: relative;
  max-width: 600px;
`;
const H2 = styled.h2`
  color: #333;
  font-size: 4em;
  line-height: 1.4em;
  font-weight: 500;
`;
const Span = styled.span`
  color: #017143;
  font-size: 1.2em;
  font-weight: 900;
`;
const PlanText = styled.p`
  color: #333;
`;
const More = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 8px 20px;
  background: #017143;
  color: #fff;
  border-radius: 40px;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
`;
const ImgBox = styled.div`
  width: 600px;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  margin-top: 50px;
`;
const Starbucks = styled.img`
  max-width: 340px;
`;
const Thumbs = styled.ul`
  position: absolute;
  letter-spacing: 50%;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
`;
const List = styled.li`
  list-style: none;
  display: inline-block;
  margin: 0 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: translateY(-15px);
  }
`;

const Img = styled.img`
  max-width: 60px;
`;
function Content(props) {
  const [img, setImg] = useState(img1);
  return (
    <>
      <Contents>
        <TextBox>
          <H2>
            It's not just Coffee
            <br />
            It's <Span>Starbucks</Span>
          </H2>
          <PlanText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit provident, eaque dicta optio tempora tempore
            necessitatibus asperiores temporibus aperiam alias voluptas
            consectetur.
          </PlanText>
          <More href="#">Learn More</More>
        </TextBox>
        <ImgBox>
          <Starbucks src={img} />
        </ImgBox>
      </Contents>
      <Thumbs>
        <List>
          <Img
            src={thumb1}
            onClick={() => {
              setImg(img1);
              props.setBg("#017143");
            }}
          />
        </List>
        <List>
          <Img
            src={thumb2}
            onClick={() => {
              setImg(img2);
              props.setBg("#eb7495");
            }}
          />
        </List>
        <List>
          <Img
            src={thumb3}
            onClick={() => {
              setImg(img3);
              props.setBg("#d752b1");
            }}
          />
        </List>
      </Thumbs>
    </>
  );
}

export default Content;
