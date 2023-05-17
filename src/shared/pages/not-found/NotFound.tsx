import { Link } from "react-router-dom"

import '../../../assets/styles/css/pages/not-found.css'

export const NotFound = () => {
  return <>
    <main>
      <div className='error_message'>
        <span>#404</span>
        <p>Page Not Found</p>
      </div>

      <div className='link-block'>
        <Link to='/'>Home</Link>
      </div>
    </main>
  </>
}
