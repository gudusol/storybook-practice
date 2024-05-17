import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from '@styles/global';
import theme from '@styles/theme';
import { Button } from '@components';
import styled from '@emotion/styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <MainContainer>
        <Button label="primary" variant={'primary'} />
        <Button label="outline" variant={'outline'} />
        <Button label="disable" variant={'disable'} />
        <Button label="small" size={'small'} />
        <Button label="medium" size={'medium'} />
        <Button label="large" size={'large'} />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  width: 15rem;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem;
`;
