import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return(
    <>
     <Header authenticated={true} />
     <Container>
      <Column flex={3} >
        <Title>Feed</Title>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Column>
      <Column flex={1} >
        <TitleHighlight># RANCKING 5 TOP DA SEMANA</TitleHighlight>
        <UserInfo percentual={77} name="Breno Braga" image="https://github.com/Brenobn.png" />
        <UserInfo percentual={55} name="Breno Braga" image="https://github.com/Brenobn.png" />
        <UserInfo percentual={50} name="Breno Braga" image="https://github.com/Brenobn.png" />
        <UserInfo percentual={37} name="Breno Braga" image="https://github.com/Brenobn.png" />
        <UserInfo percentual={23} name="Breno Braga" image="https://github.com/Brenobn.png" />
      </Column>
     </Container>
    </>
  );
}

export { Feed }