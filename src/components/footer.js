import React, { useContext } from "react"
import { ShareContext } from "../context/ShareContext"

const Footer = ({ siteTitle }) => {
  const { collapsedShare, toggleShare } = useContext(ShareContext)
  return (
    <>
      <header className="footer">
        <div onClick={toggleShare}>
          <h2>
            I am context in Footer. Click me to change context: collapsedShare
            is {String(collapsedShare)}
          </h2>
        </div>
      </header>
    </>
  )
}

export default Footer
