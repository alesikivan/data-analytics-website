import { Outlet } from "react-router-dom"

import { Header } from "../components/particals/header/Header"

export const HomePageLayout = () => (
  <>
    <main className="home-page">
      <Header />

      <Outlet />
    </main>
  </>
)
