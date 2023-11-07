import React from 'react';
import logo from '../../assets/logo-dio.png'
import { Button } from '../Button';

import {
  Container,
  Row,
  Input,
  SearchInputContainer,
  Menu,
  MenuRight,
  Wrapper
} from './styles';

 const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt='Logo da Dio' />
          <SearchInputContainer>
            <Input placeholder='Buscar...' />
          </SearchInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href='#'>
            Home
          </MenuRight>
          <Button title="Entrar" />
          <Button title="Cadastrar" />
        </Row>
      </Container>
    </Wrapper>
  );
}

export { Header }
