import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { authReduser } from '@/features/auth'
import { userReducer } from '@/entities/User'

export const createStore = () => {
  const rootRedusers: ReducersMapObject<StateSchema> = {
    auth: authReduser,
    user: userReducer
  }

  const store = configureStore({
    reducer: rootRedusers
  })
  return store
}

export type AppDispatch = ReturnType<typeof createStore>["dispatch"]
