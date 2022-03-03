import { createGlobalStyle } from 'styled-components';
import { ColorVars } from './variables';

const { dark } = ColorVars;

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

b {
  font-weight: inherit;
}

ul {
  list-style: none;
}

select {
  appearance: none;
}

a,
button,
input,
label,
select,
fieldset {
  border: none;
  border-style: none;
  background-color: transparent;
  outline: none;
  color: inherit;
  cursor: pointer;
}

body {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: ${dark};
}

#root {
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

h2 {
  margin-bottom: 16px;
}

label,
input {
  font-size: inherit;
  line-height: inherit;
}

input::placeholder {
  font-size: inherit;
  line-height: inherit;
}
`;
