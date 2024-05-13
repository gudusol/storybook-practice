import { Global, ThemeProvider } from '@emotion/react';
import Main from '@pages/main';
import GlobalStyle from '@styles/global';
import theme from '@styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Main />
    </ThemeProvider>
  );
}

export default App;
