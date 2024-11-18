import { Provider } from "react-redux"
import { createStore } from "../config/store"
import { type FC, type ReactNode } from "react"

interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = createStore()

  return (
        <Provider store={store}>
            {children}
        </Provider>
  )
}
