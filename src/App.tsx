import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from '@styles/global';
import theme from '@styles/theme';
import { Button, Form } from '@components';
import styled from '@emotion/styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <H1>Storybook 실습! 숨심스 화이팅~!</H1>
      <MainContainer>
        <Button label={'버튼입니다.'} onClick={() => alert('야호')} />
      </MainContainer>
      <Form />
    </ThemeProvider>
  );
}

export default App;

const H1 = styled.h1`
  margin-top: 4rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const MainContainer = styled.div`
  display: flex;
  width: 15rem;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem;
`;
