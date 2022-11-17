import { NavigLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavigLink to="/">Home</NavigLink>
      <NavigLink to="/contacts">Contacts</NavigLink>
    </nav>
  );
};
