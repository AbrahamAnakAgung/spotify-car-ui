import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MainContent } from "../components/MainContent/MainContent"
import { podcastData } from "../constants"

const Podcast = () => (
  <Layout>
    <SEO title="spotify podcast" />
    <MainContent data={podcastData} />
  </Layout>
)

export default Podcast
