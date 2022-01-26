import React, { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { Container } from "../../styles/Container";
import { Button } from "../../styles/Button";
import { useNavigate } from "react-router-dom";
import { MessageError } from "../../styles/MessageError";
import { FakeForm } from "../../styles/FakeForm";
import { Input } from "../../styles/Input";

const Register = () => {
  const context = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const [name, setName] = useState("");
  const history = useNavigate();

  async function handleRegister(name, password, email) {
    if (email !== "" || password !== "" || name !== "") {
      await context
        .Register({
          email: email,
          password: password,
          name: name,
        })
        .then(() => history("/"));
    } else {
      setMessageError("Informe todos os campos no cadastro 🙈")
    }
  }

  return (
    <Container>
      <FakeForm>
        <Input
          type="name"
          placeholder="Cesar"
          value={name}
          error={messageError}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          error={messageError}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="1234"
          value={password}
          error={messageError}
          onChange={(e) => setPassword(e.target.value)}
        />
        <MessageError>{messageError}</MessageError>
        <Button backgroundColor="--green" onClick={() => handleRegister(name, password, email)}>
          Cadastrar
        </Button>
      </FakeForm>
    </Container>
  );
};

export default Register;
