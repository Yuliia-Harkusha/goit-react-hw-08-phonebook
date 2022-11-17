import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthList = styled.ul`
  display: flex;
  gap: ${props => props.theme.spacing(2)};

  @media screen and (min-width: 768px) {
    gap: ${props => props.theme.spacing(4)};
  }
`;

export const Link = styled(NavLink)`
  padding: ${props => props.theme.spacing(1)};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 700;
  color: ${props => props.theme.colors.gray};
  :hover,
  :focus {
    color: ${props => props.theme.colors.hover};
  }
  &.active {
    color: ${props => props.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    padding: ${props => props.theme.spacing(2)};
  }
`;
