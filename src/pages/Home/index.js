import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";

import { Button, TextMain, Welcome, Complement, Projected } from "./styled";

export default function Home() {
  return (
    <Container>
      <TextMain>
        <Welcome>Bem vindo</Welcome>
        <Complement>ao meu portifólio.</Complement>
      </TextMain>
      <Link to="/landingpage">
        <Button>Entrar</Button>
      </Link>
      <Projected>Projetado com React</Projected>
    </Container>
  );
}
