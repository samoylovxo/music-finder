import { createGlobalStyle } from 'styled-components';

type Radius =
  | 'radius-8'
  | 'radius-4'

const Radiuses = createGlobalStyle`
  :root {
    --radius-8: 8px;
    --radius-4: 4px;
  }
`;

export type { Radius };
export { Radiuses };
