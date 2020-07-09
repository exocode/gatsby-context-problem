/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import Sidebar from "../components/sidebar"
import Footer from "../components/footer"
import { ShareContext } from "../context/ShareContext"

const MainLayout = props => {
  const { collapsedShare, toggleShare } = useContext(ShareContext)

  return (
    <>
      <div>
        <Sidebar title="Sidebar" />
        <h1>Main Layout</h1>
        <p onClick={toggleShare}>
          I am context in MainLayout an I am {String(collapsedShare)}
        </p>
        {props.children}
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
