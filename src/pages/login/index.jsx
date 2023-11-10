import { MdEmail, MdLock } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from '../../components/Input';

import { Container, CreateText, ForgotPassword, Row, SubtitleLogin, Title, TitleLogin, Wrapper, Column } from './styles';

const schema = yup.object({
  email: yup.string().email('email não é valido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {

  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  console.log(isValid, errors);

  const onSubmit = data => console.log(data);

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
            <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="submit" />
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