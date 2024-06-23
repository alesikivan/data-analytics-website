import { NavLink } from "react-router-dom"

import { translater } from "../../../utils/localization/localization"
import '../../../assets/styles/scss/particles/header.scss'

type MenuItem = {
  path: string,
  title: string,
}

export const Menu = () => {
  const menuItems: MenuItem[] = [
    {
      path: '/panel',
      title: translater("serverHeaderMenuPanel").toString()
    },
    {
      path: '/news-list',
      title: translater("serverHeaderMenuNewsList").toString()
    }
  ]

  return (
    <div className="main-header">
      <ul className="menu flex m-0">
        {
          menuItems.map((item: MenuItem, index: number) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className="app-hover">
                  <span className="font-medium app-header-color font-bold cursor">
                    {item.title}
                  </span>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}