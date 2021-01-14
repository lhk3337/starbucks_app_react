import React from "react";
import styled from "styled-components";

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

function Content(props) {
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
          <Starbucks src={props.img} />
        </ImgBox>
      </Contents>
    </>
  );
}

export default Content;
