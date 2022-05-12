import { createGlobalStyle } from 'styled-components';

const Resets = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    outline: none;
  }

  body {
    margin: 0;

    font-family: var(--font-manrope);
  }

  button {
    padding: 0;
    border: 0;

    background: none;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export { Resets };
