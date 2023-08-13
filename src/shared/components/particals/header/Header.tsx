import { Link } from 'react-router-dom'

import { images } from '../../../../assets/images/imgs'
import { Translater } from '../Translater'
import { Menu } from './components/Menu'

import '../../../../assets/styles/scss/particles/header.scss'

export const insta = 'https://www.instagram.com/muni_data_analytics/'
export const facebook = 'https://www.facebook.com/muni.data.analytics/'
export const linkedin = 'https://www.linkedin.com/school/masarykova-univerzita-brno'

export const Header = () => {
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
            <a href={insta} target='_blank'>
              <img src={images.particals.header.insta} alt="insta" />
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
