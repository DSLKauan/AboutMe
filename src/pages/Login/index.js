import React from 'react';
import { useDispatch } from 'react-redux';

// CSS
import { Container } from '../../styles/GlobalStyles';
import { Paragrafo, Title } from './styled';

// Actions
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Testando</Paragrafo>
      <a href="./">Redirecionamento obsoleto</a>
      <button onClick={handleClick} type="button">
        Enviar
      </button>
    </Container>
  );
}
