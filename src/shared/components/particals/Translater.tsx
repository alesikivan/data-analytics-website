import { CSSProperties } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/reducers/rootReducer"
import { setCzechLanguage, setEnglishLanguage,  } from "../../../redux/actions/languageActions"

export type ITranslater = {
  style?: CSSProperties,
  className?: string
}

export const Translater = () => {
  const { lang } = useSelector((state: RootState) => state.language)

  const changeLanguage = () => {
    if (lang === 'cs') return setEnglishLanguage()

    return setCzechLanguage()
  }

  return (
    <button
      onClick={changeLanguage}
      className="border-none uppercase app-font-bold text-sm app-color"
      style={{background: "none"}}>
        { lang }
    </button>
  )
}
