import logo from '../images/common/logo.png'

import facebook from '../images/pages/home/facebook.png'
import twitter from '../images/pages/home/twitter.png'
import linkedin from '../images/pages/home/linkedin.png'

import preview from '../images/pages/home/preview.png'
import companies from '../images/pages/home/companies.png'
import students from '../images/pages/home/students.png'
import uni from '../images/pages/home/uni.png'

import benefits from '../images/pages/companies/benefits.png'
import talant from '../images/pages/companies/talant.png'
import research from '../images/pages/companies/research.png'
import future from '../images/pages/companies/future.png'
import relationship from '../images/pages/companies/relationship.png'
import reputation from '../images/pages/companies/reputation.png'

import prestigious from '../images/pages/muni/prestigious.png'
import study from '../images/pages/muni/study.png'
import city from '../images/pages/muni/city.png'
import rocket from '../images/pages/muni/rocket.png'
import lang from '../images/pages/muni/lang.png'
import accomodation from '../images/pages/muni/accomodation.png'

import developer from '../images/pages/students/developer.png'
import idea from '../images/pages/students/lamp.png'
import structure from '../images/pages/students/structure.png'

import background from '../images/pages/home/background.png'
import unactiveSexMale from '../images/pages/home/unactive-sex-male.png'
import unactiveSexFemale from '../images/pages/home/unactive-sex-female.png'
import activeSexMale from '../images/pages/home/active-sex-male.png'
import activeSexFemale from '../images/pages/home/active-sex-female.png'
import check from '../images/pages/home/check.png'

import success from '../images/pages/home/success.png'

import notFound from '../images/pages/not-found/not-found.png'

export const images = {
  logo,
  particals: {
    header: {
      facebook,
      twitter,
      linkedin
    }
  },
  companies: {
    benefits,
    talant,
    research,
    future,
    relationship,
    reputation
  },
  muni: {
    prestigious,
    study,
    city,
    rocket,
    lang,
    accomodation
  },
  students: {
    developer,
    idea,
    structure
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
