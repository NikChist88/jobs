import { NavLink } from 'react-router-dom'
import { useProducts } from '../store/useProducts'
import { Filter } from '@components/Filter'

export const ProductsPage = () => {
  const products = useProducts((state) => state.products)

  return (
    <>
      <Filter />
      <section className="bg-blue-50 px-4 pt-6 pb-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {products.length ? 'All Products' : 'No Products'}
          </h2>
          <div className={'grid grid-cols-1 md:grid-cols-3 gap-6'}>
            {products.map((product) => (
              <div
                key={product.uuid}
                className="bg-white rounded-xl shadow-md relative p-5 overflow-hidden"
              >
                <div className="mb-3">
                  <div className="text-gray-600 my-2">{product.department}</div>
                  <h3 className="text-xl font-bold">{product.title}</h3>
                </div>
                <div>{product.description}</div>
                <h3 className="text-indigo-500 my-3">${product.price}</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between">
                  <NavLink
                    to={`/products/${product.id}`}
                    className="h-[36px] bg-indigo-500 transition-colors duration-300 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
