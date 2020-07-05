import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { newData } from "../constants"
import { MainContent } from "../components/MainContent/MainContent"

const NewNoteworthy = () => (
  <Layout>
    <SEO title="spotify what's new" />
    <MainContent data={newData} />
  </Layout>
)

export default NewNoteworthy
