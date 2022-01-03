import styled from "styled-components";

export const Content = styled.section`
  margin-left: auto;
  margin-right: auto;
  align-self: center;

  p {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10px;
    animation: changeColor 3s infinite;

    @keyframes changeColor {
      0% {
        color: red;
      }
      25% {
        color: yellow;
      }
      50% {
        color: blue;
      }
      100% {
        color: green;
      }
    }
  }

  img {
    width: 700px;
    max-width: 100%;
  }
`;
