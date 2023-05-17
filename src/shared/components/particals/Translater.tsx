import { CSSProperties } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/reducers/rootReducer"
import { setCzechLanguage, setEnglishLanguage,  } from "../../../redux/actions/languageActions"

export type ITranslater = {
  style: CSSProperties,
  className: string
}

export const Translater = ({ style, className }: ITranslater) => {
  const { lang } = useSelector((state: RootState) => state.language)

  const primeReactUrl = 'https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png'

  const changeLanguage = () => {
    if (lang === 'cs') return setEnglishLanguage()

    return setCzechLanguage()
  }

  return (
    <img
      alt={'translater'}
      onClick={changeLanguage}
      src={primeReactUrl}
      className={`flag flag-${lang === 'cs' ? 'cs' : 'us'} shadow-3 cursor-pointer ${className}`}
      style={{
        width: '24px', height: '16px',
        ...style
      }} />
  )
}