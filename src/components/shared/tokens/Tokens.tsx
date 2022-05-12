import { FC } from 'react';
import { Resets } from './components/Resets';
import { Color, Colors } from './components/Colors';
import { Fonts } from './components/Fonts';
import { Radiuses } from './components/Radiuses';
import { Shadows } from './components/Shadows';

const Tokens: FC = () => {
  return (
    <>
      <Resets />
      <Colors />
      <Radiuses />
      <Shadows />
      <Fonts />
    </>
  );
};

export type { Color };
export { Resets, Colors, Fonts, Tokens };
