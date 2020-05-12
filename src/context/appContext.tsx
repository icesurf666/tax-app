import React, { createContext } from "react"
import RootStore from "../store/rootStore"


const AppContext = createContext({} as RootStore)

export const AppProvider: React.FC = ({ children }) => {
  const store = new RootStore()
  return (
    <AppContext.Provider value={store}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext