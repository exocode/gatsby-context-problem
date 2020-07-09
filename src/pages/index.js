import React, { useContext } from "react"
import Layout from "../components/layout"
import { ShareContext } from "../context/ShareContext"

const IndexPage = () => {
  const { collapsedShare, toggleShare } = useContext(ShareContext)
  console.log(collapsedShare)
  return (
    <Layout>
      <h3>
        I am the page where a context should update, when it's set outside
      </h3>
      <p>collapsedShare in index page is {String(collapsedShare)} </p>
      <button onClick={toggleShare}>
        I am in the page: Click me to change
      </button>
    </Layout>
  )
}

export default IndexPage
