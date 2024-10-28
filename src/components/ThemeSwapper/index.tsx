import { useEffect, useState } from "react";
import { ReactThemeToggleButton } from "../../utils/ThemeSettings.tsx";
import "../../index.css";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const light = { background: "lightGray" };
const dark = { background: "black" };

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
    transition: background 0.4s;
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  padding: 0.5em;
`;

export const ThemeSwitch = () => {
  const [isDark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const theme = isDark ? dark : light;
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  console.log(isDark);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <ReactThemeToggleButton
          isDark={isDark}
          invertedIconLogic
          onChange={() => setDark((prev) => !prev)}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
