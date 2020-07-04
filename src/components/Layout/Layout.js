import React, { Fragment } from "react"
import { createGlobalStyle } from 'styled-components';

import Header from "../Header";

const Layout = () => (
  <Fragment>
    <Normalize />
    <Header />
  </Fragment>
);

const Normalize = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
  }
`;

export default Layout;
