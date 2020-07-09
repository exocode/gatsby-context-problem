/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { ShareContextProvider } from "../context/ShareContext"

import SlimLayout from "../layouts/slim"
import MainLayout from "../layouts/main"

const Layout = props => {
  const slim = <SlimLayout children={props.children} />
  const main = <MainLayout children={props.children} />
  const current_layout = props.layout === "main" ? main : slim
  return (
    <ShareContextProvider>
      <h1>Layout file</h1>
      {current_layout}
    </ShareContextProvider>
  )
}

export default Layout
