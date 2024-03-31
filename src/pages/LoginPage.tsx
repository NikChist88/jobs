import { FC } from 'react'
import { useFormik } from 'formik'
import { AuthDataType, useAuth } from '../store/useAuth'
import { useNavigate } from 'react-router-dom'

export const LoginPage: FC = () => {
  const login = useAuth((state) => state.login)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values: AuthDataType) => {
      login(values)
      navigate('/', { replace: true })
    },
  })

  return (
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 shadow-md p-10 max-w-[500px] w-full">
      <form
        className="flex flex-col items-center"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-3xl mb-5">Welcome</h1>
        <p className="mb-5">Please login to your account</p>
        <div className="w-full h-10 mb-5">
          <input
            className="w-full h-full p-2 border-solid border-2 rounded-lg border-indigo-500"
            id="email"
            type="email"
            placeholder="Email"
            required
            {...formik.getFieldProps('email')}
          />
        </div>
        <div className="w-full h-10 mb-5">
          <input
            className="w-full h-full p-2 border-solid border-2 rounded-lg border-indigo-500"
            id="password"
            type="password"
            autoComplete="password"
            placeholder="Password"
            required
            {...formik.getFieldProps('password')}
          />
        </div>
        {/* <label className="mb-4 self-start">
          <input
            className="mr-1"
            type="checkbox"
            checked={formik.values.rememberMe}
            {...formik.getFieldProps('rememberMe')}
          />
          Remember me
        </label> */}
        <button
          className="h-[40px] w-full bg-indigo-500 transition-colors duration-300 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  )
}
