import { Title, Accent } from './Home.styled';
import { Container } from 'components/Container/Container';

export default function Home() {
  return (
    <Container>
      <Title>
        Phone<Accent>book</Accent>
      </Title>
    </Container>
  );
}
