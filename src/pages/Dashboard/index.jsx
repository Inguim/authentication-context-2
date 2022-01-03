import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/Container";

const TextMessage = styled.h1`
  height: min-content;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
`;

export default function Dashboard() {
  return (
    <Container>
      <TextMessage>Oi 😳, so temos isso aqui!</TextMessage>
    </Container>
  );
}
