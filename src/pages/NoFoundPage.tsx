import { Header } from '@components/Header'
import { NavLink } from 'react-router-dom'
import '@styles/error-page.css'

export const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>
              4<span>0</span>4
            </h1>
          </div>
          <p>
            Oops! Something went wrong. The page you are looking for was not
            found. please return to home.
          </p>
          <NavLink to="/">Home</NavLink>
        </div>
      </div>
    </>
  )
}
