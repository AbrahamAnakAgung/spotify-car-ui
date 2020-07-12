import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
