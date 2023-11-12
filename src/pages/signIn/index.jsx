import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Wrapper, Column, Row, Title, TitleSignIn, SubtitleSignIn, Text, TextLink } from './styles';

const SignIn = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();


  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as pricipais tecnologias e entrar mais rapido nas empresas mais desejadas.
          </Title>
        </Column>
          <Wrapper>
            <TitleSignIn>Comece agora grátis</TitleSignIn>
            <SubtitleSignIn>Crie sua conta e make the change._</SubtitleSignIn>
            <form >
              <Input name="Nome completo" type="text" placeholder="Nome completo" control={control} leftIcon={MdPerson()} />
              <Input name="email" placeholder="E-mail" type="text" control={control} leftIcon={MdEmail()} />
              <Input name="password" placeholder="Password" type="password" control={control} leftIcon={MdLock()}  />
              <Button title="Ciar minha conta" variant="secondary" type="submit" />
            </form>
            <Row>
              <Text>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Text>
              <TextLink>Já tenho conta. <Link to="/login">Fazer login</Link> </TextLink>
            </Row>
          </Wrapper>
      </Container>
    </>
  );
}

export { SignIn }
