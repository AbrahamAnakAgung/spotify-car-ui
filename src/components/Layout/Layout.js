import React, { Fragment } from "react"
import { LeftMenu } from "../LeftMenu/LeftMenu"
import { TopNav } from "../TopNav/TopNav"
import { GlobalStyle } from "../GlobalStyle/GlobalStyle"

const Layout = props => (
  <Fragment>
    <GlobalStyle />
    <LeftMenu />
    <TopNav />
    {props.children}
  </Fragment>
)

export default Layout
