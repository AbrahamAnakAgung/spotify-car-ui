import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import { MainContent } from "../components/MainContent/MainContent"
import { podcastData } from "../constants"

const Podcast = () => (
  <Layout>
    <SEO title="spotify podcast" />
    <MainContent data={podcastData} />
  </Layout>
)

export default Podcast
