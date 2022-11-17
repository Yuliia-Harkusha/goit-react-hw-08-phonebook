import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: ${props => props.theme.spacing(5)};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;
  color: ${props => props.theme.colors.gray};
`;

export const Accent = styled.span`
  color: ${props => props.theme.colors.accent};
`;
