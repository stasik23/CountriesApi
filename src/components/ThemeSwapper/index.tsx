// import { useState } from "react";
// import { ReactThemeToggleButton } from "../../utils/ThemeSettings.tsx";
// import "../../index.css";
// import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// const light = { background: "lightGray" };
// const dark = { background: "black" };

// const GlobalStyle = createGlobalStyle`
//   body {
//     background: ${(props) => props.theme.background};
//     transition: background 0.4s;
//   }
// `;

// const Wrapper = styled.div`
//   display: inline-block;
//   padding: 0.5em;
// `;

// export const ThemeSwitch = () => {
//   const [isDark, setDark] = useState(false);
//   const theme = isDark ? dark : light;

//   return (
//     <ThemeProvider theme={theme}>
//       <Wrapper>
//         <GlobalStyle />
//         <ReactThemeToggleButton
//           isDark={isDark}
//           invertedIconLogic
//           onChange={() => setDark((prev) => !prev)}
//         />
//       </Wrapper>
//     </ThemeProvider>
//   );
// };
import { useEffect, useState } from "react";
import "../../index.css";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="p-4">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-primary text-text rounded transition duration-300"
      >
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

