import { css } from '@emotion/react';

import Reset from './reset';

const GlobalStyle = css`
  ${Reset}
  * {
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }

  #root {
    width: 100%;
    min-width: 128rem;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
