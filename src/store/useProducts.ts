import { productsAPI } from '../api/products-api'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { persist, createJSONStorage } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

export type ProductType = {
  id: string
  uuid: string
  title: string
  description: string
  price: string
  department: string
}
type ProductsStoreType = {
  products: ProductType[]
  product: ProductType
  fetchProducts: () => void
}

export const useProducts = createWithEqualityFn<ProductsStoreType>()(
  persist(
    (set, get) => ({
      products: [],
      product: {
        id: '',
        uuid: '',
        title: '',
        description: '',
        price: '',
        department: '',
      },
      fetchProducts: () => {
        productsAPI
          .getProducts()
          .then((res) => {
            set({ products: res.data })
          })
          .catch((err: AxiosError) =>
            toast.error(err.message, { autoClose: false })
          )
      },
    }),
    {
      name: 'products-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ products: state.products }),
    }
  ),
  shallow
)
