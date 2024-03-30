import { FC, ReactNode, createContext } from 'react'
import { useAuth } from '../store/store'
import { Navigate } from 'react-router-dom'

type AuthProviderPropsType = {
  children: ReactNode
}

export const AuthContext = createContext(false)

export const AuthProvider: FC<AuthProviderPropsType> = ({ children }) => {
  const isLogin = useAuth((state) => state.isLogin)

  if (!isLogin) {
    return (
      <Navigate
        to={'/login'}
        replace
      />
    )
  }

  return <AuthContext.Provider value={isLogin}>{children}</AuthContext.Provider>
}
