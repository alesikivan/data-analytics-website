import { Routes, Route } from "react-router-dom"

import { NotFound } from "./not-found/NotFound"
import { Home } from "./home/Home"
import { PrivacyPolicy } from "./privacy-policy/PrivacyPolicy"
import { SignUp } from "./sign-up/SignUp"
import { Muni } from "./muni/Muni"
import { Companies } from "./companies/Companies"
import { Students } from "./students/Students"

import { MainLayout } from "../layouts/MainLayout"
import { HomePageLayout } from "../layouts/HomePageLayout"

export const Pages = () => {

  return (
    <Routes>

      <Route path="/" element={<HomePageLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route path="sign-up" element={<SignUp />} />
        
        <Route path="privacy-policy" element={<PrivacyPolicy />} />

        <Route path="companies" element={<Companies />} />

        <Route path="Students" element={<Students />} />

        <Route path="muni" element={<Muni />} />
      </Route>

      <Route path="*" element={<NotFound />} />

      {/* <Route path='/' element={<AdminRoute />}>
        <Route path="/" element={<MainLayout />}>
          <Route path="users" element={<Users />} />
        </Route>
      </Route> */}

    </Routes>
  )
}
