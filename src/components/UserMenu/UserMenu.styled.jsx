import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

export const UserBar = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled(FaUser)`
  margin-right: ${props => props.theme.spacing(1)};
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.light};
  padding: ${props => props.theme.spacing(2)};
  border-radius: 50%;
`;

export const Text = styled.p`
  margin-right: ${props => props.theme.spacing(2)};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  color: ${props => props.theme.colors.gray};
`;

export const UserName = styled.span`
  color: ${props => props.theme.colors.accent};
`;

export const Button = styled.button`
  display: block;
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};
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
`;
