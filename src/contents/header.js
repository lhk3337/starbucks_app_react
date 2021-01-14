import React from "react";
import logosImg from "../img/logo.png";
import styled from "styled-components";

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  position: relative;
  max-width: 80px;
`;
const Toggle = styled.div``;
const Nav = styled.ul`
  position: relative;
  display: flex;
`;
const List = styled.li`
  list-style: none;
`;
const Link = styled.a`
  display: inline-block;
  color: #333;
  font-weight: 400;
  margin-left: 40px;
  text-decoration: none;
`;
function header() {
  return (
    <Header>
      <a href="#">
        <Logo className="logo" alt="" src={logosImg} />
      </a>
      <Toggle className="toggle"></Toggle>
      <Nav className="navigation">
        <List>
          <Link href="#">Home</Link>
        </List>
        <List>
          <Link href="#">Menu</Link>
        </List>
        <List>
          <Link href="#">What's New</Link>
        </List>
        <List>
          <Link href="#">Contact</Link>
        </List>
      </Nav>
    </Header>
  );
}

export default header;
