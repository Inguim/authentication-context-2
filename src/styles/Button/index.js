import styled from "styled-components";

export const Button = styled.button`
  border: 2px solid transparent;
  border-radius: 5px;
  width: 100%;
  background: var(${(props) => props.backgroundColor});
  padding: 10px;
  color: var(--light-white);
  text-transform: uppercase;
  font-weight: bold;

  :hover {
    cursor: pointer;
    color: var(${(props) => props.backgroundColor});
    border: 2px solid var(${(props) => props.backgroundColor});
    background-color: transparent;
  }
`;