import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import { newData } from "../constants"
import { MainContent } from "../components/MainContent/MainContent"

const NewNoteworthy = () => (
  <Layout>
    <SEO title="spotify what's new" />
    <MainContent data={newData} />
  </Layout>
)

export default NewNoteworthy
