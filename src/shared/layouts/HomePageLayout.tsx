import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

import { Header } from "../components/particals/header/Header"
import { Cookies } from "../components/particals/cookie/Cookies"
import { RootState } from "../../redux/reducers/rootReducer"
import { Footer } from "../components/particals/footer/Footer"

export const HomePageLayout = () => {
  // const { cookiesVisible } = useSelector((state: RootState) => state.app)

  return (
    <>
      <main className="home-page">
        <h1 className='hidden'>Partner with MUNI's Data Analytic degree program and join future professionals on their journey to becoming Data Scientists. This unique partner program is designed to provide practitioners (including those already working in various IT industries) with the mathematical fundamentals, problem-solving skills, and mindset. At the same time, math-oriented students will gain practical skills and an applied vision in data analytics. Students will also develop data-driven thinking and problem-solving skills, and master the soft skills needed to successfully communicate data-driven quantitative insights to diverse professional and lay audiences.</h1>

        <Header />
  
        <Outlet />
  
        {/* { cookiesVisible && <Cookies /> } */}

        <Footer />
      </main>
    </>
  )
}
