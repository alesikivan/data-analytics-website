import { useEffect } from "react"
import { Ripple } from "primereact/ripple"
import { useSelector } from "react-redux"

import { setDarkMode } from "../../../../../redux/actions/themeActions"
import { translater } from "../../../../../utils/localization/localization"
import { RootState } from "../../../../../redux/reducers/rootReducer"

export const ToggleModeButton = () => {
  const { isDarkMode: darkMode } = useSelector((state: RootState) => state.theme)

  useEffect(() => {
    const element: any = document.getElementById('theme-link')

    if (element) {
      const { href: path } = element

      // Меняем значение подключаемого скрипта стилей
      const mode = darkMode ? path.replace('light', 'dark') : path.replace('dark', 'light')
      element.href = mode
    }
  }, [darkMode])

  return (
    <a
      onClick={() => setDarkMode(!darkMode)}
      className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors w-full">
      <i className={`pi pi-${darkMode ? `sun` : `moon`} text-base lg:text-2xl mr-2 lg:mr-0`}></i>

      <span className="block lg:hidden font-medium">
        mode
      </span>

      <Ripple />
    </a>
  )
}

