import React, { useState, createContext } from "react"
const defaultState = {
  collapsedShare: false,
  toggleShare: () => {},
}
const ShareContext = createContext(defaultState)
const ShareContextProvider = props => {
  const [collapsedShare, setCollapsedShare] = useState(false)
  const toggleShare = () => setCollapsedShare(!collapsedShare)

  return (
    <ShareContext.Provider value={{ collapsedShare, toggleShare: toggleShare }}>
      {props.children}
    </ShareContext.Provider>
  )
}

export { ShareContextProvider, ShareContext }
