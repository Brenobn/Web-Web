import { useNavigate } from 'react-router-dom';

import bannerImg from '../../assets/banner.png';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Container, TextContent, Title, TitleHighlight } from './styles';

const Home = () => {

  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login');
  }

  return(
    <>
     <Header />
     <Container>
      <div>
        <Title>
          <TitleHighlight>
            Implemente
            <br />
          </TitleHighlight>
          o seu futuro global agora!
        </Title>
        <TextContent>
          Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
        </TextContent>
        <Button title="Começar agora" variant="secondary" onClick={handleClickLogin} /> 
      </div>
      <div>
        <img src={bannerImg} alt="Imagem principal" />
      </div>
     </Container>
    </>
  );
}

export { Home }