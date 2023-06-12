import { motion } from 'framer-motion'
import { RootState } from '../../../redux/reducers/rootReducer'
import { store } from '../../../redux/store'
import { localeOption } from 'primereact/api'
import { translater } from '../../../utils/localization/localization'
import Parser from 'html-react-parser'

import { images } from '../../../assets/images/imgs'
import '../../../assets/styles/scss/pages/muni.scss'

type Blocks = {
  img: string,
  title: string,
  description: string
}

export const Muni = () => {
  const { language: { lang } }: RootState = store.getState()

  const blocks: Blocks[] = [
    {
      img: images.muni.prestigious,
      title: localeOption("muniPagePrestigiousTitle", lang).toString(),
      description: localeOption("muniPagePrestigiousDescription", lang).toString()
    },
    {
      img: images.muni.study,
      title: localeOption("muniPageStudyTitle", lang).toString(),
      description: localeOption("muniPageStudyDescription", lang).toString()
    },
    {
      img: images.muni.lang,
      title: localeOption("muniPageMultilanguageTitle", lang).toString(),
      description: localeOption("muniPageMultilanguageDescription", lang).toString()
    },
    {
      img: images.muni.city,
      title: localeOption("muniPageCityTitle", lang).toString(),
      description: localeOption("muniPageCityDescription", lang).toString()
    },
    {
      img: images.muni.rocket,
      title: localeOption("muniPageEducationTitle", lang).toString(),
      description: localeOption("muniPageEducationDescription", lang).toString()
    },
    {
      img: images.muni.accomodation,
      title: localeOption("muniPageAccomodationTitle", lang).toString(),
      description: localeOption("muniPageAccomodationDescription", lang).toString()
    },
  ]

  const website = 'https://www.muni.cz'

  return (
    <article className="muni flex flex-column">
      <section className="information flex flex-wrap gap-5 justify-content-between">
        <div 
          className="muni-info flex flex-column">
          <h1 className="app-color text-4xl app-font-bold m-0">
            {
              translater("muniPageTitle")
            }
          </h1>

          <span className="muni-description app-gray-color max-w-28rem mt-3">
            { translater("muniPageDescription") }
            <a className='officiall-link ml-1' target='_blank' href={website}>
              { translater("muniPageDescriptionLink") }
            </a>
          </span>
        </div>

        <div 
          className="statistic flex">
          <div className='flex flex-column align-items-center'>
            <b className='app-font-bold app-color text-3xl'>
              {
                translater("muniPageStudyProgramsNumber")
              }
            </b>
            <span className='max-w-5rem text-center muni-description mt-2 app-gray-color'>
              {
                translater("muniPageStudyPrograms")
              }
            </span>
          </div>

          <div className='flex flex-column align-items-center'>
            <b className='app-font-bold app-color text-3xl'>
              {
                translater("muniPageStudentsNumber")
              }
            </b>
            <span className='max-w-5rem text-center muni-description mt-2 app-gray-color'>
              {
                translater("muniPageStudents")
              }
            </span>
          </div>

          <div className='flex flex-column align-items-center'>
            <b className='app-font-bold app-color text-3xl'>
              {
                translater("muniPageGraduatesNumber")
              }
            </b>
            <span className='max-w-5rem text-center muni-description mt-2 app-gray-color'>
              {
                translater("muniPageGraduates")
              }
            </span>
          </div>
        </div>
      </section>

      <section className="w-full muni-content flex flex-wrap mt-3">
        {
          blocks.map((block: Blocks, index: number) => {
            return (
              <motion.section 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mt-5 flex align-items-start">
                <img src={ block.img } alt="business" />
                
                <div className='flex flex-column align-items-start'>
                  <h2 className="app-header-color app-font-bold">
                    { block.title }
                  </h2>

                  <span className="app-gray-color">
                    {
                      Parser(block.description)
                    }
                  </span>
                </div>
              </motion.section>
            )
          })
        }
      </section>
    </article>
  )
}