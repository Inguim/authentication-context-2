import styled from "styled-components";
import { Button } from "../Button";


export const FakeForm = styled.div`
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Button} + ${Button} {
    margin-top: 10px;
  }
`;