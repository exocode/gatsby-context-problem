import React, { useContext } from "react"
import { ShareContext } from "../context/ShareContext"

const Sidebar = ({ siteTitle }) => {
  const { collapsedShare, toggleShare } = useContext(ShareContext)
  return (
    <>
      <header className="main-header">
        <div onClick={toggleShare}>
          <h2>
            I am context in Sidebar. Click me to change context: collapsedShare
            is {String(collapsedShare)}
          </h2>
        </div>
      </header>
    </>
  )
}

export default Sidebar
