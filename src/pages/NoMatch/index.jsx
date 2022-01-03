import React from "react";
import { Container } from "../../styles/Container";
import bigestMouse from "../../assets/bigestMouse.png";
import { Content } from "./styles";

export default function NoMatch() {
  return (
    <Container>
      <Content>
        <p>Era para ter algo aqui?</p>
        <img src={bigestMouse} alt="? 😎 ?" />
      </Content>
    </Container>
  );
}
