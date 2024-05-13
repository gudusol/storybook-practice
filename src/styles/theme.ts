import { css } from '@emotion/react';

export const theme = {
  colors: {
    primary01: '#39B46AFF',
    primary02: '#39B46ACC',
    primary03: '#39B46A99',
    primary04: '#39B46A66',
    primary05: '#39B46A33',
    grayGreen: '#759D85',

    black: '#000000',
    silver: '#C0C0C0',
    gray: '#808080',
    darkGray: '#A9A9A9',
    lightGray: '#D3D3D3',
    bgGray: '#F2F4EF',
    white: '#FFFFFF',
    maroon: '#800000',
    red: '#FF0000',
    purple: '#800080',
    fuchsia: '#FF00FF',
    green: '#008000',
    lime: '#00FF00',
    olive: '#808000',
    yellow: '#FFFF00',
    navy: '#000080',
    blue: '#0000FF',
    teal: '#008080',
    aqua: '#00FFFF',
  },
  generators: {
    flexGenerator: (flexDirection = 'row', justifyContent = 'center', alignItems = 'center') => css`
      display: flex;
      flex-direction: ${flexDirection};
      justify-content: ${justifyContent};
      align-items: ${alignItems};
    `,
    fontGenerator: (
      fontSize = '1.6rem',
      fontWeight = 'normal',
      lineHeight = 'normal',
      letterSpacing = 'normal',
      fontStyle = 'normal'
    ) => css`
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
      letter-spacing: ${letterSpacing};
      font-style: ${fontStyle};
    `,
  },
};
export type ColorsType = typeof theme.colors;
export type GeneratorsType = typeof theme.generators;

export default theme;
