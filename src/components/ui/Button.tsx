import styled, { css } from 'styled-components';


type Variant =
  | 'primary'
  | 'secondary';

interface IButton {
  variant?: Variant;
  isBlock?: boolean;
}

interface IButtonAttrs {
  variant: Variant;
}


const Button = styled.button.attrs<IButton, IButtonAttrs>((props) => {
  const { variant, type } = props;

  return {
    variant: variant || 'primary',
    type: type || 'button'
  };
})<IButton>`
  ${({ isBlock }) => isBlock && css`width: 100%;`}
  border-radius: 2px;
  padding: 16px;

  font-family: var(--font-manrope);
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  transition: background-color 0.4s, color 0.4s, border-color 0.4s;

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: var(--color-purple-300);
          color: var(--color-white);

          &:hover,
          &:focus {
            background-color: var(--color-purple-100);
            color: var(--color-black);
          }

          &:active {
            background-color: var(--color-purple-400);
          }
        `;

      case 'secondary':
        return css`
          background-color: var(--color-gray-300);
          border: 1px solid var(--color-gray-500);
          color: var(--color-black);

          &:hover,
          &:focus,
          &:active {
            background-color: var(--color-gray-400);
            border-color: var(--color-gray-600);
          }
        `;
    }
  }}

  &:disabled {
    background-color: var(--color-gray-400);
    color: var(--color-gray-600);
  }
`;

export { Button };
