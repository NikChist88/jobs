import { toast } from 'react-toastify'
import { compareObjects } from '../utils/compareObjects'
import { persist, createJSONStorage } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

export type AuthDataType = {
  email: string
  password: string
}
type AuthStoreType = {
  authData: AuthDataType
  isLogin: boolean
  login: (data: AuthDataType) => void
  logout: () => void
}

export const useAuth = createWithEqualityFn<AuthStoreType>()(
  persist(
    (set, get) => ({
      authData: {
        email: 'samsepiol@gmail.com',
        password: 'swordfish',
      },
      isLogin: false,
      login: (data: AuthDataType) => {
        const authData = get().authData
        if (compareObjects(authData, data)) {
          set({ isLogin: true })
        } else {
          toast.error('Wrond email or password!')
        }
      },
      logout: () => {
        set({ isLogin: false })
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ isLogin: state.isLogin }),
    }
  ),
  shallow
)
