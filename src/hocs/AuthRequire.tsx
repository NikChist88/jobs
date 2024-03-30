import { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../store/store'

type RequireAuthPropsType = {
  children: ReactNode
}

export const AuthRequire: FC<RequireAuthPropsType> = ({ children }) => {
  const isLogin = useAuth((state) => state.isLogin)

  if (!isLogin) {
    return (
      <Navigate
        to={'/login'}
        replace
      />
    )
  }

  return children
}
