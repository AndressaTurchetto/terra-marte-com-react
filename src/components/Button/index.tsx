import styled from "styled-components";

const Button = styled.button`
  background-color: var(--cor-destaque);
  border-radius: 8px;
  padding: 12px 16px;
  color: var(--branco);
  border: none;
  margin-top: 1em;
  font-weight: 600;
  line-height: 19px;
  width: 50%;
  cursor: pointer;
  font-size: 18px;
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s;

  &:hover {
    background-color: var(--cinza-escuro);
    color: var(--branco);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(100, 100, 250, 0.5);
  }

  &:active {
    background-color: var(--cinza-escuro);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }
`;

export default Button;
