import { Outlet } from "react-router-dom"

import { Header } from "../components/particals/header/Header"

import { ScrollToTop } from "../../utils/components/ScrollToTop"
import { Cookies } from "../components/particals/cookie/Cookies"

export const MainLayout = () => {
  return (
    <div className="application">
      <Header />
      
      <div className="app-container pb-6 mt-0 mb-2">
        <ScrollToTop />

        <Outlet />
      </div>

      <Cookies />
    </div>
  )
}
