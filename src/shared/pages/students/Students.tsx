import Parser from 'html-react-parser'
import { translater } from '../../../utils/localization/localization'
import { RootState } from '../../../redux/reducers/rootReducer'
import { store } from '../../../redux/store'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { images } from "../../../assets/images/imgs"
import '../../../assets/styles/scss/pages/students.scss'
import { localeOption } from 'primereact/api'

export const Students = () => {
  const { language: { lang } }: RootState = store.getState()

  const structuresList = [
    localeOption("studentsPageStructureBlockContent1", lang).toString(),
    localeOption("studentsPageStructureBlockContent2", lang).toString(),
    localeOption("studentsPageStructureBlockContent3", lang).toString(),
    localeOption("studentsPageStructureBlockContent4", lang).toString(),
    localeOption("studentsPageStructureBlockContent5", lang).toString(),
    localeOption("studentsPageStructureBlockContent6", lang).toString(),
    localeOption("studentsPageStructureBlockContent7", lang).toString(),
  ]
  return (
    <>
      <h1 className="students-title app-header-color text-4xl text-center app-font-bold m-0 ms-auto">
        {
          translater("studentsPageTitle")
        }
      </h1>

      <article className="info-block">
        <section className="flex mt-5 gap-5 align-items-center justify-content-between">
          <div className="flex flex-column data-science-block">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="m-0 app-header-color app-font-bold students-header">
                {translater("studentsPageInfoBlockTitle")}
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-4 flex align-items-start gap-3">
                <img
                  src={images.home.check}
                  alt="check"
                  className="check" />

                <span className="app-gray-color app-line-height">
                  {translater("studentsPageInfoBlockSpan1")}
                </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-3 flex align-items-start gap-3">
                <img
                  src={images.home.check}
                  alt="check"
                  className="check" />

                <span className="app-gray-color app-line-height">
                  {translater("studentsPageInfoBlockSpan2")}
                </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-3 flex align-items-start gap-3">
                <img
                  src={images.home.check}
                  alt="check"
                  className="check" />

                <span className="app-gray-color app-line-height">
                  {translater("studentsPageInfoBlockSpan3")}
                </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-3 flex align-items-start gap-3">
                <img
                  src={images.home.check}
                  alt="check"
                  className="check" />

                <span className="app-gray-color app-line-height">
                  {translater("studentsPageInfoBlockSpan4")}
                </span>
            </motion.div>
          </div>

          <div className='data-science-picture'>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{maxWidth: "350px"}}
              src={images.students.developer}
              alt="program-preview"></motion.img>
          </div>
        </section>
      </article>

      <article className="structure-block">
        <section className="structure-block-info flex mt-5 gap-5 align-items-center justify-content-between">
          <div className="flex flex-column">
            <h2 className="mt-0 mb-1 app-header-color app-font-bold students-header">
              {translater("studentsPageStructureBlockTitle")}
            </h2>

            {
              structuresList.map((content: string, index: number) => {
                return (
                  <div key={index} className="mt-3 flex align-items-start gap-3">
                    <span className="app-gray-color app-line-height">
                      {
                        Parser(content)
                      }
                    </span>
                  </div>
                )
              })
            }

            <div className="mt-4 flex align-items-center gap-3">
              <img className='idea' src={images.students.idea} alt="lamp" />
              <span className="app-gray-color app-line-height program-finish">
                {
                  translater("studentsPageStructureBlockHelp")
                } 
              </span>
            </div>
          </div>

          <div className='flex flex-column align-items-center'>
            <img
              className="analytics-img"
              src={images.students.structure}
              alt="analytics-img"></img>

            <span className='app-header-color'>
              {
                translater("studentsPageStructureBlockAnalytics")
              }
            </span>
          </div>
        </section>
      </article>

      <article className="description-block">
        <section className="flex mt-5 gap-5 align-items-center justify-content-between">
          <div className="flex flex-column">
            <h2 className="m-0 app-header-color app-font-bold students-header">
              {translater("studentsPageDescriptionBlockTitle")}
            </h2>

            <div className="mt-4 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                <Link to={'/muni'} className='app-link-color'>
                  {translater("studentsPageDescriptionBlockSpan1Link")}
                </Link> 
                {translater("studentsPageDescriptionBlockSpan1")}
              </span>
            </div>

            <div className="mt-3 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                {
                  translater("studentsPageDescriptionBlockSpan2")
                }
              </span>
            </div>

            <div className="mt-3 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                {
                  translater("studentsPageDescriptionBlockSpan3")
                }
              </span>
            </div>

            <div className="mt-3 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                {
                  translater("studentsPageDescriptionBlockSpan4")
                }
              </span>
            </div>

            <div className="mt-3 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                {
                  translater("studentsPageDescriptionBlockSpan5")
                }
              </span>
            </div>

            <div className="mt-3 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                {
                  translater("studentsPageDescriptionBlockSpan6")
                }
              </span>
            </div>
          </div>
        </section>
      </article>

      <article className='flex flex-wrap gap-4 mt-7'>
        <h3 className="w-full flex flex-column justify-content-center align-items-center value-proposition m-0 app-header-color app-font-bold text-3xl">
          {translater("studentsPageValuePropositionTitle")}
        </h3>

        <Link 
          className='app-button app-bg-color text-white px-4 mx-auto text-base mb-2'
          to={'/sign-up'}>
            {translater("studentsPageValuePropositionButton")}
        </Link>

        <div className='flex flex-wrap value-proposition-content'>
          <span className='app-gray-color'>
            {
              translater("studentsPageValuePropositionBlock1")
            }
          </span>

          <span className='app-gray-color'>
            {
              translater("studentsPageValuePropositionBlock2")
            }
          </span>

          <span className='app-gray-color' style={{minHeight: "184px"}}>
            {
              translater("studentsPageValuePropositionBlock3")
            }
          </span>

          <span className='app-gray-color' style={{minHeight: "184px"}}>
            {
              translater("studentsPageValuePropositionBlock4")
            }
          </span>
        </div>
      </article>

      <article className="ds-block">
        <section className="flex mt-5 gap-5 align-items-center justify-content-between">
          <div className="flex flex-column">
            <h2 className="m-0 app-header-color app-font-bold students-header">
              {
                translater("studentsPageDataScienceBlockTitle")
              }
            </h2>

            <span className="app-gray-color app-line-height mt-4">
              {
                translater("studentsPageDataScienceBlockSpan1")
              }
            </span>

            <span className="app-gray-color app-line-height mt-3">
              {
                translater("studentsPageDataScienceBlockSpan2")
              }
            </span>
          </div>
        </section>
      </article>
    </>
  )
}