import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

type FilterStoreType = {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export const useFilter = createWithEqualityFn<FilterStoreType>((set) => ({
  searchQuery: '',
  setSearchQuery: (query: string) => {
    set(() => ({ searchQuery: query }))
  },
  shallow,
}))
