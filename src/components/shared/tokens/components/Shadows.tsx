import { createGlobalStyle } from 'styled-components';

type Shadow =
  | 'shadow-small'
  | 'shadow-big'

const Shadows = createGlobalStyle`
  :root {
    --shadow-small: 0px 0px 12px rgba(31, 8, 98, 0.1);
    --shadow-big: 0px 4px 24px rgba(31, 8, 98, 0.16);
  }
`;

export type { Shadow };
export { Shadows };
