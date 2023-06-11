import { Link } from 'react-router-dom'

import { images } from '../../../../assets/images/imgs'
import { Translater } from '../Translater'
import { Menu } from './components/Menu'

import '../../../../assets/styles/scss/particles/header.scss'

export const Header = () => {
  const twitter = 'https://twitter.com/masarykuni?lang=cs'
  const facebook = 'https://www.facebook.com/ums.sci.muni'
  const linkedin = 'https://www.linkedin.com/school/masarykova-univerzita-brno'

  return (
    <header className='main-header app-width-limit mx-auto flex flex-column'>
      <div className='cover'>
        <Link to="/" className='logo app-hover'>
          <img src={images.logo} alt="logo" />
        </Link>

        <ul>
          <li
            className='app-color-border app-hover'
            style={{background: "none"}}>
              <Translater />
          </li>
          <li className='app-hover'>
            <a href={twitter} target='_blank'>
              <img src={images.particals.header.twitter} alt="twitter" />
            </a>
          </li>
          <li className='app-hover'>
            <a href={facebook} target='_blank'>
              <img src={images.particals.header.facebook} alt="facebook" />
            </a>
          </li>
          <li className='app-hover'>
            <a href={linkedin} target='_blank'>
              <img src={images.particals.header.linkedin} alt="linkedin" />
            </a>
          </li>
        </ul>
      </div>

      <Menu />
    </header>
  )
}
