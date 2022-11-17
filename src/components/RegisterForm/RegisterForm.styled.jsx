import { Field, Form } from 'formik';
import styled from 'styled-components';
import { FaUserPlus, FaPuzzlePiece, FaAt } from 'react-icons/fa';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 320px;
`;
export const Icon = styled(FaUserPlus, FaPuzzlePiece, FaAt)`
  color: ${props => props.theme.colors.accent};
  /* margin-right: ${props => props.theme.spacing(2)}; */
`;

export const FormItem = styled.div`
  display: flex;
  justify-content: baseline;
  gap: ${props => props.theme.spacing(2)};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(3)};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  color: ${props => props.theme.colors.gray};
`;

export const Input = styled(Field)`
  padding: ${props => props.theme.spacing(1)};
  :focus-visible {
    outline-color: ${props => props.theme.colors.gray};
  }
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${props => props.theme.spacing(3)};
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

export const ErrorText = styled.p`
  font-weight: 400;
  color: ${props => props.theme.colors.orange};
`;
