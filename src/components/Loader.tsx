import { FC } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

export const Loader: FC = () => {
  return (
    <div className="absolute z-10 left-0 top-0 w-full h-full flex items-center justify-center bg-indigo-200/50">
      <ClipLoader
        loading={true}
        color="#423BC7"
        size={60}
      />
    </div>
  )
}
