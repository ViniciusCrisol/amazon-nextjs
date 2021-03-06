import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin : 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  transition: ease;
}

*:focus{
  outline: 0;
}

html,body,#root{
  min-height: 100%;
  width: 100%;
}

body{
  background-color: var(--background);
  -webkit-font-smoothing: antialiased !important;
}

body,input,button,a{
  font-size: 16px;
  color: var(--secondary);
  font-family: --apple-system, sans-serif;
}

a{
  text-decoration: none;
  cursor: pointer;
}

button{
  cursor: pointer;
}

:root{
--background: #fff;
--primary: #F99924;
--secondary: #222F3E;
--light-gray: #F5F5F5;
--dark-gray: #C4C4C4;
}
`;
