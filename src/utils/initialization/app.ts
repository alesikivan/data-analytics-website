import { authInit } from "../auth/init"
import { initInterceptor } from "../axios/interceptor"
import { setLanguage } from "../axios/languages"
import { setLocalizations } from "../localization/localization"

export const appUnilsInit = async () => {
  await setLocalizations()
  authInit()
  initInterceptor()
  setLanguage()
}