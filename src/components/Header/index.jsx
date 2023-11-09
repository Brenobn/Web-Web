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
  Wrapper,
  UserPicture
} from './styles';

 const Header = ({authenticated}) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt='Logo da Dio' />
          {authenticated ? (
            <>
              <SearchInputContainer>
                <Input placeholder='Buscar...' />
              </SearchInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {authenticated ? (
            <UserPicture src="https://github.com/Brenobn.png" />
          ) : (
            <>
            <MenuRight href='#'>
              Home
            </MenuRight>
            <Button title="Entrar" />
            <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}

export { Header }
