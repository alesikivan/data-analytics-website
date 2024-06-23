import { useState } from "react"
import { motion } from 'framer-motion'

import { translater } from "../../../utils/localization/localization"
import { images } from "../../../assets/images/imgs"
import { FormModalWindow } from "./components/form/FormModalWindow"

import '../../../assets/styles/scss/pages/bootcamp.scss'
import { YouTubeVideo } from "../../components/particals/video/youtube/YouTubeVideo"

export const Bootcamp = () => {
  const [dialogVisible, setDialogVisible] = useState(false)

  return (
    <>
      <h1 className="bootcamp-title app-header-color text-4xl text-center app-font-bold m-0 ms-auto">
        {
          translater("bootcampPageTitle")
        }
      </h1>

      <h4 className="bootcamp-description app-header-color text-center mt-3 ms-auto w-9 mb-5">
        {
          translater("bootcampPageDescription")
        }
      </h4>

      <article className="phases-block">
        <section className="flex gap-5 align-items-center justify-content-between">
          <div className="flex flex-column result-block">
            <span className="app-gray-color app-line-height">
              {translater('bootcampPagePreviewInfo')}
            </span>
          </div>
        </section>
      </article>

      <article className="phases-block">
        <section className="flex gap-5 align-items-center justify-content-between">
          <div className="flex flex-column bootcamp-phases-block">
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bootcamp-header m-0 app-header-color app-font-bold">
              {translater("bootcampPageInfoBlockGeneralTitle")}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-4 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                {translater("bootcampPageInfoBlockGeneralItem1")}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-3 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                {translater("bootcampPageInfoBlockGeneralItem2")}
              </span>
            </motion.div>
          </div>

          <div className='bootcamp-picture'>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{ maxWidth: "280px" }}
              src={images.bootcamp.bootcamp}
              alt="program-preview"></motion.img>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-column gap-3 mt-3">

          <div
            onClick={() => setDialogVisible(true)}
            className="cursor-pointer flex flex-column resume-collection-text bootcamp-info-block text-center w-full">
            <img
              className='idea mx-auto'
              src={images.students.idea}
              style={{ position: "absolute", top: -15, left: "50%", transform: "translateX(-50%)" }}
              alt="lamp" />

            <span className="mt-4">
              {translater("bootcampPageAdmissionProcedureDate")}
            </span>
          </div>
        </motion.section>

        <section className="flex gap-5 align-items-center justify-content-between mb-5">
          <div className="flex flex-column result-block">
            {
              [
                'bootcampPageInfoBlock1',
                'bootcampPageInfoBlock2',
                'bootcampPageInfoBlock3',
                'bootcampPageInfoBlock4',
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

        <motion.section
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-column gap-3 mt-3">

          <span
            className='app-button app-bg-color text-white px-5 mx-auto text-lg mb-2 cursor-pointer'
            onClick={() => {
              setDialogVisible(true)
            }}>
            {translater("bootcampPageApplyButton")}
          </span>
        </motion.section>

        <article className="app-content flex flex-column justify-content-center align-items-center">
          <YouTubeVideo videoId={translater("bootcampPageYouTubeLinkId").toString()} />
        </article>

        <section className="flex gap-5 align-items-center justify-content-between mt-5">
          <div className="flex flex-column result-block">
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bootcamp-header m-0 app-header-color app-font-bold">
              {translater("bootcampPageResultBlockGeneralTitle")}
            </motion.h2>

            {
              [
                'bootcampPageResultBlockGeneralItem1',
                'bootcampPageResultBlockGeneralItem2',
                'bootcampPageResultBlockGeneralItem3',
                'bootcampPageResultBlockGeneralItem4',
                'bootcampPageResultBlockGeneralItem5'
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

        <section className="flex flex-column gap-5 align-items-center justify-content-center mt-6">
          <div className="resume-collection-text flex align-items-center gap-3">
            <img className='idea' src={images.students.idea} alt="lamp" />

            <span className="app-gray-color app-line-height">
              {translater("bootcampPageResumeCollectionText")}
            </span>
          </div>

          <div>
            <span
              className='app-button app-bg-color text-white px-5 mx-auto text-base mb-2 cursor-pointer'
              onClick={() => {
                setDialogVisible(true)
              }}>
              {translater("bootcampPageApplyButton")}
            </span>
          </div>
        </section>

        <div className="first-company mt-4">
          <img src={images.bootcamp.logolink} alt="company" />

          <span className="app-gray-color app-line-height">
            NPO_MUNI_MSMT-16606/2022
          </span>
        </div>

        <FormModalWindow
          dialogVisible={dialogVisible}
          setDialogVisible={setDialogVisible} />
      </article>
    </>
  )
}
