import styled from "styled-components";

export const Input = styled.input`
  height: calc(1.6em + 0.75rem + 2px);
  padding: 0 5px;
  width: 100%;
  font-weight: 400;
  line-height: 1.6;
  color: ${ props => props?.error ? `var(--red)` :  '#495057' };
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid ${ props => props.error !== '' ? `var(--red)` :  '#ced4da' };
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  margin-bottom: 10px;
`;