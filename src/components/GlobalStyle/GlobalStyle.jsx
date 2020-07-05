import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: 'Oswald', 'Oxygen', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  letter-spacing: 0.378px;
}

body {
  margin: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

ul, ol {
  list-style-type: none;
}

a, img {
  display: block;
}
`
