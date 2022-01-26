import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { Container } from "../../styles/Container";
import { Button } from "../../styles/Button";
import { Content } from "./styles";
import { ButtonLink } from "../../styles/ButtonLink";

const Welcome = () => {
  const { Logout, user } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    Logout();
  }

  return (
    <Container>
      <Content>
        <h1>Welcome primo, {user.name} 🐵</h1>
        <ButtonLink onClick={() => navigate('/dashboard')}>Dashboard</ButtonLink>
        <Button backgroundColor="--red" onClick={() => handleLogout()}>Logout</Button>
      </Content>
    </Container>
  );
};

export default Welcome;
