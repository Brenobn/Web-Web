import { MdEmail, MdLock } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from '../../components/Input';

import { Container, CreateText, ForgotPassword, Row, SubtitleLogin, Title, TitleLogin, Wrapper, Column } from './styles';

const Login = () => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/feed');
  }

  return(
    <>
     <Header />
     <Container>
      <Column>
        <Title>
          A plataforma para você aprender com experts, dominar as pricipais tecnologias e entrar mais rapido nas empresas mais desejadas.
        </Title> 
      </Column>
      <Column>
        <Wrapper>
          <TitleLogin>Faça seu cadastro</TitleLogin>
          <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
          <form>
            <Input placeholder="E-mail" leftIcon={<MdEmail />} />
            <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
            <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="button" />
          </form>
          <Row>
            <ForgotPassword>Esqueci minha senha</ForgotPassword>
            <CreateText>Criar Conta</CreateText>
          </Row>
        </Wrapper>
      </Column>
     </Container>
    </>
  );
}

export { Login }