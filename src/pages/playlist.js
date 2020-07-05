import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MainContent } from "../components/MainContent/MainContent"
import { playlistData } from "../constants"

const Playlist = () => (
  <Layout>
    <SEO title="spotify playlist" />
    <MainContent data={playlistData} />
  </Layout>
)

export default Playlist
