import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type ThunkExtraArg, type StateSchema } from './StateSchema'
import { authReduser } from '@/features/auth'
import { userReducer } from '@/entities/User'
import { $api } from '@/shared/api'
import { profileReduser } from '@/entities/Profile'

export const createStore = () => {
  const rootRedusers: ReducersMapObject<StateSchema> = {
    auth: authReduser,
    user: userReducer,
    profile: profileReduser
  }

  const extraArg: ThunkExtraArg = {
    api: $api
  }

  const store = configureStore({
    reducer: rootRedusers,
    devTools: !!DEV,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg
        }
      })
  })
  return store
}

export type AppDispatch = ReturnType<typeof createStore>["dispatch"]
