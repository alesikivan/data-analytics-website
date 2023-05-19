import { useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"

type MenuItem = {
  path: string,
  title: string,
}

export const Menu = () => {
  const location = useLocation()
  
  const menuItems: MenuItem[] = [
    {
      path: '/',
      title: 'Introduction'
    },
    {
      path: '/students',
      title: 'Students'
    },
    {
      path: '/companies',
      title: 'Companies'
    },
    {
      path: '/muni',
      title: 'MUNI'
    },
  ]

  return (
    <>
      {
        location.pathname.includes('sign-up') 
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