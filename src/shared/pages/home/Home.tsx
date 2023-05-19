import { Link } from "react-router-dom"
import { motion } from 'framer-motion/dist/framer-motion'

import { images } from "../../../assets/images/imgs"
import '../../../assets/styles/css/pages/home.css'
import { translater } from "../../../utils/localization/localization"

export const Home = () => {
  return (
    <main  className="flex flex-column justify-content-start pb-6">
      <article className="introduction mb-7">
        <div className="app-width-limit mx-auto flex gap-2 mt-3">
          <motion.section
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-column  align-items-start gap-5">
              <h1 className="app-header-color text-6xl app-font-bold m-0">
                {
                  translater("homePageTitle")
                }
              </h1>

              <span className="description text-lg app-gray-color">
                {
                  translater("homePageDescription")
                }
              </span>

              <Link
                className="get-started-button app-hover app-bg-color app-font-bold app-border-radius text-white"
                to={'/sign-up'}>
                  {
                    translater("homePageSignUpLink")
                  }
              </Link>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}>
              <img
                className="programme-preview"
                src={images.home.preview}
                alt="programme-preview"></img>
          </motion.section>
        </div>
      </article>

      <article className="app-bg-color flex flex-column align-item-center p-5">
        <h2 className="text-white mx-auto text-3xl app-font-bold m-0">
          {
            translater("homePageArticleTitle")
          }
        </h2>

        <span className="app-width-limit mx-auto pt-4 pb-0 text-center text-white text-base line-height-3">
          {
            translater("homePageArticleDescription")
          }
        </span>
      </article>

      <article className="app-content flex flex-column">
        <section>
          <div className="app-width-limit mx-auto flex mt-3">
            <div className="flex flex-column align-items-start gap-3">
              <h1 className="app-header-color text-3xl app-font-bold m-0">
                {
                  translater("homePageSectionStudentsTitle")
                }
              </h1>

              <span className="description text-base app-gray-color max-w-30rem">
                {
                  translater("homePageSectionStudentsDescription")
                }
              </span>

              <Link
                className="get-started-button app-hover app-bg-color app-font-bold app-border-radius text-white"
                to={'/students'}>
                  {
                    translater("homePageSectionStudentsLink").toString()
                  }
              </Link>
            </div>

            <div>
              <img
                className="programme-preview"
                src={images.home.students}
                alt="programme-preview"></img>
            </div>
          </div>
        </section>

        <section>
          <div className="app-width-limit mx-auto flex mt-3 reverse">
            <div className="flex flex-column align-items-start gap-3">
              <h1 className="app-header-color text-3xl app-font-bold m-0">
                {
                  translater("homePageSectionCompaniesTitle")
                }
              </h1>

              <span className="description text-base app-gray-color max-w-30rem">
                {
                  translater("homePageSectionCompaniesDescription")
                }
              </span>

              <Link
                className="get-started-button app-hover app-bg-color app-font-bold app-border-radius text-white"
                to={'/companies'}>
                  {
                    translater("homePageSectionCompaniesLink").toString()
                  }
              </Link>
            </div>

            <div>
              <img
                className="programme-preview"
                src={images.home.companies}
                alt="programme-preview"></img>
            </div>
          </div>
        </section>

        <section>
          <div className="app-width-limit mx-auto flex mt-3">
            <div className="flex flex-column align-items-start gap-3">
              <h1 className="app-header-color text-3xl app-font-bold m-0">
                {
                  translater("homePageSectionUniversityTitle")
                }
              </h1>

              <span className="description text-base app-gray-color max-w-30rem">
                {
                  translater("homePageSectionUniversityDescription")
                }
              </span>

              <Link
                className="get-started-button app-hover app-bg-color app-font-bold app-border-radius text-white"
                to={'/muni'}>
                  {
                    translater("homePageSectionUniversityLink")
                  }
              </Link>
            </div>

            <div>
              <img
                className="programme-preview"
                src={images.home.uni}
                alt="programme-preview"></img>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
