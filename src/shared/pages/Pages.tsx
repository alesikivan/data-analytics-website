import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import ReactGA from 'react-ga'

import { NotFound } from "./not-found/NotFound"
import { Home } from "./home/Home"
import { PrivacyPolicy } from "./privacy-policy/PrivacyPolicy"
import { SignUp } from "./sign-up/SignUp"
import { Muni } from "./muni/Muni"
import { Companies } from "./companies/Companies"
import { Students } from "./students/Students"

import { MainLayout } from "../layouts/MainLayout"
import { HomePageLayout } from "../layouts/HomePageLayout"
import { Bootcamp } from "./bootcamp/Bootcamp"
import { AdminRoute } from "../components/particals/AdminRoute"
import { Editor } from "../admin/pages/editor/Editor"
import { Login } from "../admin/pages/login/Login"
import { RootState } from "../../redux/reducers/rootReducer"
import { News } from "./news/News"
import { NewsItem } from "./news/components/NewsItem"
import { NewsList } from "../admin/pages/news/news-list/NewsList"

export const Pages = () => {
  const {
    isAuthenticated: auth
  } = useSelector((state: RootState) => state.auth)

  return (
    <Routes>

      <Route path="/" element={<HomePageLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route path='login' element={auth ? <Navigate to='/' /> : <Login />} />

        <Route path="sign-up" element={<SignUp />} />
        
        <Route path="privacy-policy" element={<PrivacyPolicy />} />

        <Route path="companies" element={<Companies />} />

        <Route path="students" element={<Students />} />

        <Route path="muni" element={<Muni />} />

        <Route path="bootcamp" element={<Bootcamp />} />

        <Route path="news" element={<News />} />

        <Route path="current-news/:id" element={<NewsItem />} />
      </Route>


      <Route path='/' element={<AdminRoute />}>
        <Route path="/" element={<MainLayout />}>
          <Route path="panel" element={<Editor />} />

          <Route path="news-list" element={<NewsList />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  )
}
