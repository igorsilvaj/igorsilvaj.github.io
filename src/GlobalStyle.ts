import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
}

a:visited {
  color: white;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
  font-family: 'Roboto', sans-serif;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

::-webkit-scrollbar {
  width: 16px;
  border: 5px solid white;

}

::-webkit-scrollbar-thumb {
  background-color: #b0b0b0;
  background-clip: padding-box;
  border: 0.05em solid #eeeeee;
}

::-webkit-scrollbar-track {
  background-color: #bbbbbb;
}
/* Buttons */
::-webkit-scrollbar-button:single-button {
  background-color: #bbbbbb;
  display: block;
  border-style: solid;
  height: 13px;
  width: 16px;
}
/* Up */
::-webkit-scrollbar-button:single-button:vertical:decrement {
  border-width: 0 8px 8px 8px;
  border-color: transparent transparent #555555 transparent;
}

::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
  border-color: transparent transparent #777777 transparent;
}
/* Down */
::-webkit-scrollbar-button:single-button:vertical:increment {
  border-width: 8px 8px 0 8px;
  border-color: #555555 transparent transparent transparent;
}

::-webkit-scrollbar-button:vertical:single-button:increment:hover {
  border-color: #777777 transparent transparent transparent;
}
`

export const constants = {
  HEADER_HEIGHT: '45px',
  HEADER_HEIGHT_NUMBER: 45
}

export default GlobalStyle
