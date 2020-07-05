import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import { MainContent } from "../components/MainContent/MainContent"
import SEO from "../components/SEO/SEO"
import { homeData } from "../constants"

const IndexPage = () => (
  <Layout>
    <SEO title="spotify" />
    <MainContent data={homeData} />
  </Layout>
)

export default IndexPage
