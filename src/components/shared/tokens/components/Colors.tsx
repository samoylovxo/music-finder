import { createGlobalStyle } from 'styled-components';

type Color =
  | 'white'
  | 'black';

const Colors = createGlobalStyle`
  :root {
    --color-white: #FFFFFF;
    --color-black: #1F1C34;

    --color-gray-600: #6B6B7B;
    --color-gray-500: #B1B1BD;
    --color-gray-400: #E2E2EA;
    --color-gray-300: #F4F4F6;

    --color-violet-100: #672D88;

    --color-purple-400: #261499;
    --color-purple-300: #39299F;
    --color-purple-100: #F4F2FF;

    --color-grin-100: #59C3B2;
  }
`;

export type { Color };
export { Colors };
