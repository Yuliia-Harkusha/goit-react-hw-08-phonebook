import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: ${props => props.theme.spacing(5)};
  text-align: center;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;
  color: ${props => props.theme.colors.gray};
`;

export const Accent = styled.span`
  color: ${props => props.theme.colors.accent};
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
