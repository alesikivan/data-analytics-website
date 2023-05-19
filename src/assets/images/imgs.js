import logo from '../images/common/logo.svg'

import facebook from '../images/pages/home/facebook.svg'
import twitter from '../images/pages/home/twitter.svg'
import linkedin from '../images/pages/home/linkedin.svg'

import preview from '../images/pages/home/preview.svg'
import companies from '../images/pages/home/companies.svg'
import students from '../images/pages/home/students.svg'
import uni from '../images/pages/home/uni.svg'

import background from '../images/pages/home/background.svg'
import unactiveSexMale from '../images/pages/home/unactive-sex-male.svg'
import unactiveSexFemale from '../images/pages/home/unactive-sex-female.svg'
import activeSexMale from '../images/pages/home/active-sex-male.svg'
import activeSexFemale from '../images/pages/home/active-sex-female.svg'
import check from '../images/pages/home/check.svg'

import success from '../images/pages/home/success.svg'

import notFound from '../images/pages/not-found/not-found.svg'

export const images = {
  logo,
  particals: {
    header: {
      facebook,
      twitter,
      linkedin
    }
  },
  home: {
    preview,
    background,
    companies,
    students,
    uni,
    check,
    sex: {
      male: {
        active: activeSexMale,
        unactive: unactiveSexMale,
      },
      female: {
        active: activeSexFemale,
        unactive: unactiveSexFemale,
      }
    }  
  },
  successfullySaved: {
    success
  },
  notFound
}