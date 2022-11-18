import { Title, Accent } from './Home.styled';
import { Container } from 'components/Container/Container';
import clipart from 'img/clipart.png';
import { Image } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Title>
        Phone<Accent>book</Accent>
      </Title>
      <Image src={clipart} alt="notebook" />
    </Container>
  );
}
