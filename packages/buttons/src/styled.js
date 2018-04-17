import styled from 'styled-components';
import { Button } from './';

export const ButtonStyled = styled(Button)`
  cursor: pointer;
  display: ${props => (props.hasIcon ? 'flex' : 'inline-block')};
  text-decoration: none;
  text-align: center;
  height: 48px;
  box-shadow: none;
  font-size: 16px;
  font-weight: 300;
  font-family: 'PT Sans';
  padding: 0 24px;
  border-radius: 0;
  border: 1px solid #b2b2b2;
  background: #e5e5e5;
  color: #000000;
  text-transform: none;
  transition: background 0.25s ease;

  &:hover {
    background: #b2b2b2;
    border: 1px solid #7f7f7f;
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
  ${props => (props.fluid ? 'width: 100%;' : '')};
  ${props =>
    props.iconText
      ? `
    [data-icon] {
      padding-right: 10px;
    }
  `
      : ''};
`;
