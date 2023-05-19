import { Outlet } from "react-router-dom"

import { Header } from "../components/particals/header/Header"

import { ScrollToTop } from "../../utils/components/ScrollToTop"

export const MainLayout = () => (
  <>
    <div className="application">
      <Header />
      
      <div className="app-container pb-6 mt-0 mb-2">
        <ScrollToTop />

        <Outlet />
      </div>
    </div>
  </>
)
