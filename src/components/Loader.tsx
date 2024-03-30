import { FC } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

type LoaderPropsType = {
  loading?: boolean
  size?: number
  color?: string
}

export const Loader: FC<LoaderPropsType> = ({
  loading = true,
  size = 60,
  color = '#423BC7',
}) => {
  return (
    <div className="absolute z-10 left-0 top-0 w-full h-full flex items-center justify-center bg-indigo-200/50">
      <ClipLoader
        loading={loading}
        size={size}
        color={color}
      />
    </div>
  )
}
