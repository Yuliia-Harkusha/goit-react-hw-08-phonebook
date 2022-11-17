import { AuthList, Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthList>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="login">Log In</Link>
      </li>
    </AuthList>
  );
};
