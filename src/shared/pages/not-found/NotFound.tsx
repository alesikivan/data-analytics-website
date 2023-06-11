import { Link } from "react-router-dom"

import { translater } from "../../../utils/localization/localization"
import { images } from "../../../assets/images/imgs"

import '../../../assets/styles/scss/pages/not-found.scss'

export const NotFound = () => {
  return (
    <>
      <main>
        <div className='error_message'>
          <span className="text-7xl">
            <img className="not-found-img" src={images.notFound} alt="not-found" />
          </span>

          <p className="m-3 text-5xl mb-1">
            {
              translater("notFoundPageErrorMessage")
            }
          </p>
        </div>

        <div className='link-block'>
          <Link to='/'>
            {
              translater("notFoundPageLink")
            }
          </Link>
        </div>
      </main>
    </>
  )
}
