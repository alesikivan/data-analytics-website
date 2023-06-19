import Parser from 'html-react-parser'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

import { images } from "../../../assets/images/imgs"
import '../../../assets/styles/scss/pages/companies.scss'
import { RootState } from '../../../redux/reducers/rootReducer'
import { store } from '../../../redux/store'
import { localeOption } from 'primereact/api'
import { translater } from '../../../utils/localization/localization'

type companiesBlocks = {
  img: string,
  title: string,
  description: string
}

export const Companies = () => {
  const { language: { lang } }: RootState = store.getState()

  const blocks: companiesBlocks[] = [
    {
      img: images.companies.benefits,
      title: localeOption("companiesPageBenefitsTitle", lang).toString(),
      description: localeOption("companiesPageBenefitsDescription", lang).toString()
    },
    {
      img: images.companies.talant,
      title: localeOption("companiesPageTalentTitle", lang).toString(),
      description: localeOption("companiesPageTalentDescription", lang).toString()
    },
    {
      img: images.companies.research,
      title: localeOption("companiesPageResearchTitle", lang).toString(),
      description: localeOption("companiesPageResearchDescription", lang).toString()
    },
    {
      img: images.companies.future,
      title: localeOption("companiesPageFutureTitle", lang).toString(),
      description: localeOption("companiesPageFutureDescription", lang).toString()
    },
    {
      img: images.companies.relationship,
      title: localeOption("companiesPageRelationshipTitle", lang).toString(),
      description: localeOption("companiesPageRelationshipDescription", lang).toString()
    },
    {
      img: images.companies.reputation,
      title: localeOption("companiesPageReputationTitle", lang).toString(),
      description: localeOption("companiesPageReputationDescription", lang).toString()
    }
  ]
  return (
    <>
      <h1 className="app-header-color text-4xl text-center app-font-bold m-0 ms-auto">
        { translater("companiesPageTitle") } 
          <span className="app-font-bold app-color">
            { translater("companiesPageTitleSpecial") } 
          </span>
      </h1>

      <article className="w-full content flex flex-wrap align-items-start justify-content-center">
        {
          blocks.map((block: companiesBlocks, index: number) => {
            return (
              <motion.section 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-18rem mt-5 flex flex-column align-items-center justify-content-start">
                <img src={ block.img } alt="business" />
                
                <h2 className="text-center app-header-color app-font-bold text-xl m-0">
                  { block.title }
                </h2>

                <span className="text-center app-gray-color">
                  {
                    Parser(block.description)
                  }
                </span>
              </motion.section>
            )
          })
        }
      </article>

      <div className="w-full flex align-items-center justify-content-center mt-5">
        <Link 
          className="app-button app-bg-color text-white px-4 mx-auto text-base" 
          to="/sign-up">
            {
              translater("companiesPageButton")
            }
        </Link>
      </div>
    </>
  )
}