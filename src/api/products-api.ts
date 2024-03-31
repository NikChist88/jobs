import axios from 'axios'
import { ProductType } from '../store/useProducts'

const localhost = 'http://localhost:8000/'
const mockAPI = 'https://65fd6f139fc4425c6531ee24.mockapi.io/data/'

export const instance = axios.create({
  baseURL: mockAPI,
})

export const productsAPI = {
  getProducts() {
    return instance.get<ProductType[]>('products')
  },
}
