import React from "react";
import Styled from "styled-components";
import Facebook from "../img/facebook.png";
import Twitter from "../img/twitter.png";
import Instagram from "../img/instagram.png";

const Scis = Styled.ul`
position: absolute;
top: 50%;
right: 30px;
transform: translateY(-50%);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const List = Styled.li`
  list-style: none;
`;

const Link = Styled.a`
display: inline-block;
margin: 5px 0;
transform: scale(0.8);
filter: invert(1);
&:hover{
  transition: 0.4s;
  transform: scale(1);
}
`;
function sci() {
  return (
    <Scis>
      <List>
        <Link href="https://www.facebook.com/starbuckskorea/">
          <img src={Facebook} alt="" />
        </Link>
      </List>
      <List>
        <Link href="https://twitter.com/starbuckskorea">
          <img src={Twitter} alt="" />
        </Link>
      </List>
      <List>
        <Link href="https://www.instagram.com/starbuckskorea/">
          <img src={Instagram} alt="" />
        </Link>
      </List>
    </Scis>
  );
}

export default sci;
