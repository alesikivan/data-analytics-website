import { Link } from "react-router-dom"

import '../../../assets/styles/css/pages/not-found.css'
import { translater } from "../../../utils/localization/localization"

export const NotFound = () => {
  return (
    <>
      <main>
        <div className='error_message'>
          <span className="text-7xl">
            {
              translater("notFoundPageError")
            }
          </span>

          <p className="m-3 text-5xl">
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
