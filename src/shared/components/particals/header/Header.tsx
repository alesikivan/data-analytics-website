import { Link } from 'react-router-dom'

import '../../../../assets/styles/css/particles/header.css'
import { images } from '../../../../assets/images/imgs'

export const Header = () => {
  const twitter = 'https://twitter.com/masarykuni?lang=cs'
  const facebook = 'https://www.facebook.com/ums.sci.muni'
  const linkedin = 'https://www.linkedin.com/school/masarykova-univerzita-brno'

  return (
    <header className='main-header'>
      <div className='cover'>
        <Link to="/" className='logo'>
          <img src={images.logo} alt="logo" />
        </Link>

        <ul>
          <li>
            <a href={twitter}>
              <img src={images.particals.header.twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href={facebook}>
              <img src={images.particals.header.facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href={linkedin}>
              <img src={images.particals.header.linkedin} alt="linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}