import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigLink = styled(NavLink)`
  padding: ${props => props.theme.spacing(2)};
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
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 650;
  }
`;
