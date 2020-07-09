import React, { useContext } from "react"
import { ShareContext } from "../context/ShareContext"

const Sidebar = ({ siteTitle }) => {
  const { collapsedShare, toggleShare } = useContext(ShareContext)
  return (
    <>
      <header className="main-header">
        <div>
          <h2>
            I am context in Sidebar.
            <button onClick={toggleShare}>Click me to change context</button>
            collapsedShare: is
            {String(collapsedShare)}
          </h2>
        </div>
      </header>
    </>
  )
}

export default Sidebar
