import { Outlet } from "react-router-dom"

import { Header } from "../components/particals/header/Header"
import { useSelector } from "react-redux"

import { ScrollToTop } from "../../utils/components/ScrollToTop"
import { Cookies } from "../components/particals/cookie/Cookies"
import { RootState } from "../../redux/reducers/rootReducer"
import { Footer } from "../components/particals/footer/Footer"

export const MainLayout = () => {
  const { cookiesVisible } = useSelector((state: RootState) => state.app)

  return (
    <div className="application">
      <Header />
      
      <div className="app-container pb-6 mt-0 mb-2">
        <ScrollToTop />

        <Outlet />
      </div>

      { cookiesVisible && <Cookies /> }

      <Footer />
    </div>
  )
}
