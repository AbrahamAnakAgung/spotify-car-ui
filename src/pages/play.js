import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import { PlayUI } from "../components/PlayUI/PlayUI"

const Play = props => (
  <Layout>
    <SEO title="spotify what's new" />
    <Router>
      <PlayUI path="/play/:id" {...props} />
    </Router>
  </Layout>
)

export default Play
