import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

import { Header } from "../components/particals/header/Header"
import { Cookies } from "../components/particals/cookie/Cookies"
import { RootState } from "../../redux/reducers/rootReducer"
import { Footer } from "../components/particals/footer/Footer"

export const HomePageLayout = () => {
  const { cookiesVisible } = useSelector((state: RootState) => state.app)

  return (
    <>
      <main className="home-page">
        <Header />
  
        <Outlet />
  
        { cookiesVisible && <Cookies /> }

        <Footer />
      </main>
    </>
  )
}
