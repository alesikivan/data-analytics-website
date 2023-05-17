import { useNavigate } from "react-router-dom"
import { Ripple } from "primereact/ripple"
import { Tooltip } from "primereact/tooltip"

import { logout } from "../../../../../redux/actions/authActions"
import { translater } from "../../../../../utils/localization/localization"

export const SignOutButton = () => {
  const navigate = useNavigate()

  const logOut = () => {
    logout()
    navigate('/login')
  }

  return (
    <>
      <span
        data-pr-tooltip={translater("LogOutHint")}
        data-pr-position="bottom"
        data-pr-at="center bottom+6"
        onClick={logOut}
        className="custom-target-icon-logout p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors w-full no-underline">
          <i className="pi pi-sign-out text-base lg:text-2xl mr-2 lg:mr-0"></i>
          
          <span className="block lg:hidden font-medium">
            { translater("LogOutButton") }
          </span>
          
          <Ripple />
      </span>

      <Tooltip target=".custom-target-icon-logout" />
    </>
  )
}
