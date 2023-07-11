import { NavLink, useLocation } from "react-router-dom"
import { translater } from "../../../../../utils/localization/localization"

type MenuItem = {
  path: string,
  title: string,
}

export const Menu = () => {
  const location = useLocation()

  const menuItems: MenuItem[] = [
    {
      path: '/',
      title: translater("headerMenuIntroduction").toString()
    },
    {
      path: '/students',
      title: translater("headerMenuStudents").toString()
    },
    {
      path: '/companies',
      title: translater("headerMenuCompanies").toString()
    },
    {
      path: '/muni',
      title: translater("headerMenuMuni").toString()
    },
    {
      path: '/bootcamp',
      title: translater("headerMenuBootcamp").toString()
    },
  ]

  return (
    <>
      {
        ['/sign-up', '/privacy-policy', '/login', '/panel'].includes(location.pathname)
        ? ''
        : (
          <ul className="menu flex mt-5">
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
        )
      }
    </>
  )
}
