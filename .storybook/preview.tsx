import type { Preview } from '@storybook/react';
import { Global, ThemeProvider } from '@emotion/react';
import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/global';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyle} />
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
