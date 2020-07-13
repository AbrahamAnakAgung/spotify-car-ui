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
    <p>{process.env.REPOSITORY_URL}</p>
  </Fragment>
)

export default Layout
