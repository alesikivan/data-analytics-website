import { Outlet } from "react-router-dom"

import { Header } from "../components/particals/header/Header"
import { Cookies } from "../components/particals/cookie/Cookies"

export const HomePageLayout = () => (
  <>
    <main className="home-page">
      <Header />

      <Outlet />

      <Cookies />
    </main>
  </>
)
