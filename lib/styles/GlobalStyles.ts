import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

html, body, #__next{
    height: 100%;
}

body {
    margin: 0;
    padding: 0;
}
`;

export default GlobalStyles;
