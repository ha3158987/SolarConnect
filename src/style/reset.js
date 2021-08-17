import { css } from "@emotion/react";

const reset = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: rgb(249, 249, 249);
  }
  a {
    text-decoration: none;
    color: #333;
    cursor: pointer;
  }
  li {
    list-style: none;
  }
  button {
    border: none;
    background: none;
  }
  em {
    font-style: normal;
  }
  input: focus {
    outline: none;
  }

`;

export default reset;
