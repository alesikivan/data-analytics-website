import clsx from 'clsx'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { translater } from '../../../utils/localization/localization'
import { images } from "../../../assets/images/imgs"
import { YouTubeVideo } from '../../components/particals/video/youtube/YouTubeVideo'

import '../../../assets/styles/scss/pages/students.scss'

export const Students = () => {
  const applicationSectionRef = useRef<HTMLHeadingElement>(null)

  const [appVisible, setAppVisible] = useState(false)

  // Функция для прокрутки
  const scrollToApplicationSection = () => {
    applicationSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const structuresList = [
    'studentsPageStructureBlockContent1',
    'studentsPageStructureBlockContent2',
    'studentsPageStructureBlockContent3',
    'studentsPageStructureBlockContent4',
    'studentsPageStructureBlockContent5',
    'studentsPageStructureBlockContent6',
    'studentsPageStructureBlockContent7',
  ]
  return (
    <>
      <h1 className="students-title app-header-color text-4xl text-center app-font-bold m-0 ms-auto">
        {
          translater("studentsPageTitle")
        }
      </h1>

      <article className="info-block">
        <section className="flex mt-5 gap-6 align-items-center justify-content-between">
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
              style={{ maxWidth: "350px" }}
              src={images.students.developer}
              alt="program-preview"></motion.img>
          </div>
        </section>
      </article>

      <div className='mt-5 flex justify-content-center'>
        <Link 
          to="#application-section" 
          className="app-button app-bg-color text-white px-5 mx-auto text-base cursor-pointer flex align-items-center gap-2"
          onClick={scrollToApplicationSection}>
            Move to Application
            <i className='pi pi-arrow-down text-sm font-bold'></i>
        </Link>
      </div>

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
                      {translater(content)}
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

      <article className="app-content flex flex-column justify-content-center align-items-center">
        <YouTubeVideo videoId={translater("studentPageYouTubeLinkId").toString()} />
      </article>

      <article className='flex flex-wrap gap-4 mt-7'>
        <h3 className="w-full flex flex-column justify-content-center align-items-center value-proposition m-0 app-header-color app-font-bold text-3xl">
          {translater("studentsPageValuePropositionTitle")}
        </h3>

        <Link
          className='app-button app-bg-color text-white px-4 mx-auto text-base mb-2 flex align-items-center gap-2 animated-button'
          to={'/sign-up'}>
          {translater("studentsPageValuePropositionButton")}
          <i className='pi pi-check-square text-sm font-bold'></i>
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

          <span className='app-gray-color'>
            {
              translater("studentsPageValuePropositionBlock3")
            }
          </span>

          <span className='app-gray-color'>
            {
              translater("studentsPageValuePropositionBlock4")
            }
          </span>
        </div>
      </article>

      <article className="ds-block">
        <section className="flex mt-5 gap-5 align-items-center justify-content-between">
          <div className="flex flex-column">
            <h3 className="w-full flex flex-column justify-content-center align-items-center value-proposition m-0 app-header-color app-font-bold text-3xl">
              {translater("studentsPageDataScienceBlockTitle")}
            </h3>

            <span className="app-gray-color app-line-height mt-4">
              {
                translater("studentsPageDataScienceBlockSpan1")
              }
            </span>

            <span className="app-gray-color app-line-height">
              {
                translater("studentsPageDataScienceBlockSpan2")
              }
            </span>
          </div>
        </section>
      </article>

      <h3 
        ref={applicationSectionRef}
        id="application-section"
        className="application-header w-full flex flex-column justify-content-center align-items-center value-proposition app-header-color app-font-bold text-3xl">

        {translater("studentPageApplicationBlockHeader")}
      </h3>

      <article className="phases-block">
        <section className="flex gap-5 align-items-center justify-content-between mt-5">
          <div className="flex flex-column result-block">
            <div className="flex align-items-start gap-3 mb-3">
              <span className="app-gray-color app-line-height">
                {translater('studentPageAdmissionProcedure')}
              </span>
            </div>

            <div className="flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                {translater('studentPageAdmissionProcedureSecondPart')}
              </span>
            </div>
          </div>
        </section>
      </article>

      <article className={clsx(
        'phases-block',
        {
          'hidden': !appVisible
        }
      )}>
        <section className="flex gap-5 align-items-center justify-content-between mt-5">
          <div className="flex flex-column result-block">
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bootcamp-header m-0 app-header-color app-font-bold">
              {translater("bootcampPageAdmissionProcedureTitle")}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-4 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                {translater('bootcampPageAdmissionProcedureDescription')}
              </span>
            </motion.div>

            {
              [
                'bootcampPageAdmissionProcedureItem1',
                'bootcampPageAdmissionProcedureItem2',
                'bootcampPageAdmissionProcedureItem3',
                'bootcampPageAdmissionProcedureItem4',
                'bootcampPageAdmissionProcedureItem5',
                'bootcampPageAdmissionProcedureItem6',
              ].map(translate => {
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mt-4 flex align-items-start gap-3">
                    <span className="app-gray-color app-line-height">
                      {translater(translate)}
                    </span>
                  </motion.div>
                )
              })
            }
          </div>
        </section>

        <section className="flex gap-5 align-items-center justify-content-between mt-5">
          <div className="flex flex-column result-block">
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bootcamp-header m-0 app-header-color app-font-bold">
              {translater("bootcampPageTimeLineTitle")}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-4 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                {translater('bootcampPageTimeLineDescription')}
              </span>
            </motion.div>
          </div>
        </section>

        <section className="flex gap-5 align-items-center justify-content-between mt-5">
          <div className="flex flex-column result-block">
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bootcamp-header m-0 app-header-color app-font-bold">
              {translater("bootcampPageFormalAdmissionTitle")}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-4 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                {translater('bootcampPageFormalAdmissionDescription')}
              </span>
            </motion.div>
          </div>
        </section>
      </article>

      <span
        onClick={() => setAppVisible(!appVisible)}
        className="show-more-info mt-3 flex gap-2 align-items-center">
        {
          appVisible
            ? translater("companiesPageSeeLessButton")
            : translater("companiesPageSeeAllButton")
        }

        <li className={clsx(
          'pi',
          {
            'pi-angle-down': !appVisible,
            'pi-angle-up': appVisible,
          }
        )}></li>
      </span>

      <article className="description-block m-0 mt-5">
        <section className="flex gap-5 align-items-center justify-content-between">

          <div className="flex flex-column w-full">

            <div className="flex align-items-center justify-content-center gap-3 w-full ">

              {/* <a
                // data-pr-tooltip={translater("studentPageApplicationBlockButton1Hint")}
                // data-pr-position="bottom"
                // data-pr-at="center bottom+6"
                target='_blank'
                href={translater("studentsPageApplicationButtonLink").toString()}
                className='custom-target-button app-button app-bg-color text-white px-4 text-base mb-2 cursor-pointer'>
                {translater("studentsPageApplicationButton")}
              </a> */}

              {/* <Tooltip target=".custom-target-button" /> */}

              <Link
                className='app-button app-bg-color text-white px-4 text-base mb-2'
                to={'/bootcamp'}>
                {translater("studentPageApplicationBlockButton2")}
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}