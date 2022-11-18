import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

export const UserBar = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled(FaUser)`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    margin-right: ${props => props.theme.spacing(2)};
    padding: ${props => props.theme.spacing(2)};
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.light};
    border-radius: 50%;
  }
`;

export const Text = styled.p`
  margin-right: ${props => props.theme.spacing(1)};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 400;
  color: ${props => props.theme.colors.gray};

  @media screen and (min-width: 768px) {
    margin-right: ${props => props.theme.spacing(4)};
    /* padding: ${props => props.theme.spacing(7)}; */
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 500;
  }
`;

export const UserName = styled.span`
  color: ${props => props.theme.colors.accent};
`;

export const Button = styled.button`
  display: block;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(1)};
  cursor: pointer;
  border: none;
  border-radius: ${props => props.theme.radii.primary}px;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.light};
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.small};
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.hover};
    box-shadow: ${props => props.theme.shadows.small};
  }

  @media screen and (min-width: 768px) {
    padding: ${props => props.theme.spacing(2)}
      ${props => props.theme.spacing(4)};
  }
`;
