import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import { MainContent } from "../components/MainContent/MainContent"
import { playlistData } from "../constants"

const Playlist = () => (
  <Layout>
    <SEO title="spotify playlist" />
    <MainContent data={playlistData} />
  </Layout>
)

export default Playlist
