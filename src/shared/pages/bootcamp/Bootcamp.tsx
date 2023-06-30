import { useState } from "react"
import { translater } from "../../../utils/localization/localization"
import { motion } from 'framer-motion'

import '../../../assets/styles/scss/pages/bootcamp'
import { images } from "../../../assets/images/imgs"
import { FormModalWindow } from "./components/form/FormModalWindow"

export const Bootcamp = () => {
  const [dialogVisible, setDialogVisible] = useState(false)

  return (
    <>
      <h1 className="bootcamp-title app-header-color text-4xl text-center app-font-bold m-0 ms-auto">
        {
          translater("bootcampPageTitle")
        }
      </h1>

      <h4 className="bootcamp-description app-header-color text-center mt-3 ms-auto w-9">
        {
          translater("bootcampPageDescription")
        }
      </h4>

      <article className="phases-block mb-7">
        <section className="flex gap-5 align-items-center justify-content-between">
          <div className="flex flex-column bootcamp-phases-block">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bootcamp-header m-0 app-header-color app-font-bold">
                {translater("bootcampPageInfoBlockTitle")}
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-4 flex align-items-start gap-3">
                <span className="app-color app-line-height">
                  1.
                </span>
                <span className="app-gray-color app-line-height">
                  {translater("bootcampPageInfoBlockSpan1")}
                </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-3 flex align-items-start gap-3">
                <span className="app-color app-line-height">
                  2.
                </span>
                <span className="app-gray-color app-line-height">
                  {translater("bootcampPageInfoBlockSpan2")}
                </span>
            </motion.div>
          </div>

          <div className='bootcamp-picture'>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{maxWidth: "460px"}}
              src={images.bootcamp.bootcamp}
              alt="program-preview"></motion.img>
          </div>
        </section>

        <section className="flex gap-5 align-items-center justify-content-between mt-3">
          <div className="flex flex-column result-block">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bootcamp-header m-0 app-header-color app-font-bold">
                {translater("bootcampPageResultBlockTitle")}
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-4 flex align-items-start gap-3">
                <span className="app-gray-color app-line-height">
                  {translater("bootcampPageResultBlockSpan1")}
                </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-3 flex align-items-start gap-3">
                <span className="app-gray-color app-line-height">
                  {translater("bootcampPageResultBlockSpan2")}
                </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-3 flex align-items-start gap-3">
                <span className="app-gray-color app-line-height">
                  {translater("bootcampPageResultBlockSpan3")}
                </span>
            </motion.div>
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

        <FormModalWindow 
          dialogVisible={dialogVisible}
          setDialogVisible={setDialogVisible} />
      </article>
    </>
  )
}
