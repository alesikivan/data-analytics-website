import { Routes, Route } from "react-router-dom"

import { NotFound } from "./not-found/NotFound"
import { Home } from "./home/Home"
import { MainLayout } from "../layouts/MainLayout"
import { PrivacyPolicy } from "./privacy-policy/PrivacyPolicy"
import { Introduction } from "./introduction/Introduction"

export const Pages = () => {

  return (
    <Routes>

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
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
