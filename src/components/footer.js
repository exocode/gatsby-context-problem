import React, { useContext } from "react"
import { ShareContext } from "../context/ShareContext"

const Footer = ({ siteTitle }) => {
  const { collapsedShare, toggleShare } = useContext(ShareContext)
  return (
    <>
      <header className="footer">
        <div>
          <h2>
            I am context in Footer.{" "}
            <button onClick={toggleShare}>Click me to change context</button>:
            collapsedShare is {String(collapsedShare)}
          </h2>
        </div>
      </header>
    </>
  )
}

export default Footer
