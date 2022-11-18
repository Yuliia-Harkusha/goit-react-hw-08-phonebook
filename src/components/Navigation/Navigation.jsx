import { useAuth } from 'hooks';
import { NavigLink } from './Navigation.styled';

export const Navigation = () => {
  const { IsLoggedIn } = useAuth();
  return (
    <nav>
      <NavigLink to="/">Home</NavigLink>
      {IsLoggedIn && <NavigLink to="/contacts">Contacts</NavigLink>}
    </nav>
  );
};
