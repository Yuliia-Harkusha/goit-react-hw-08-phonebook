import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${props => props.theme.spacing(4)};
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(4)};
  box-shadow: ${props => props.theme.shadows.small};

  @media screen and (min-width: 768px) {
    width: auto;
    padding: ${props => props.theme.spacing(5)};
    padding-left: ${props => props.theme.spacing(8)};
    padding-right: ${props => props.theme.spacing(8)};
  }
`;
