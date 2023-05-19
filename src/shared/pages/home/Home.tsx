import { Link } from "react-router-dom"
import { motion } from 'framer-motion/dist/framer-motion'

import { images } from "../../../assets/images/imgs"
import '../../../assets/styles/css/pages/home.css'

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
              Data Analytics Programme
            </h1>

            <span className="description text-lg app-gray-color">
              Data Analytics Programme helps connecting (young) professionals and (well known) companies (show companies which are part of program).
            </span>
            
            <Link 
              className="get-started-button app-hover app-bg-color app-font-bold app-border-radius text-white" 
              to={'/sign-up'}>Get started the programm!</Link>
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
          What it about?
        </h2>

        <span className="app-width-limit mx-auto pt-4 pb-0 text-center text-white text-base line-height-3">
          Partner with MUNI's Data Analytic degree program and join future professionals on their journey to becoming Data Scientists. This unique partner program is designed to provide practitioners (including those already working in various IT industries) with the mathematical fundamentals, problem-solving skills, and mindset. At the same time, math-oriented students will gain practical skills and an applied vision in data analytics. The programme, students will also develop data-driven thinking and problem-solving skills and master soft skills needed to successfully communicate data-driven quantitative insights to various professional and lay audiences. 
        </span>
      </article>

      <article className="app-content flex flex-column">
        <section>        
          <div className="app-width-limit mx-auto flex mt-3">
            <div className="flex flex-column align-items-start gap-3">
              <h1 className="app-header-color text-3xl app-font-bold m-0">
                Student's benefits
              </h1>

              <span className="description text-base app-gray-color max-w-28rem">
                Data Science is a rapidly growing field, and demand for data analysts is skyrocketing. Starting salaries of Data Analyts in USA range from 60.000 to 100.000+/year and in Europe - from 45.000-65.000 Euro. We are offering a unique elite hybrid bachelors program in Data Analytics, taugh in English, remotely with bi-annual in-person sessions. 
              </span>
              
              <Link 
                className="get-started-button app-hover app-bg-color app-font-bold app-border-radius text-white" 
                to={'/students'}>Apply now!</Link>
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
                Companies Integration
              </h1>

              <span className="description text-base app-gray-color max-w-28rem">
                More and more companies are integrating Data Science into their business units. As a result of these investments in digital transformation and integration of digital technologies, numerous data science tasks have emerged. Regardless of sources, formats, use cases, and challenges, they want to extract maximum value from the world of data - with the support of Data Scientists. But a supply of Data Scientists in particular is still low, and finding new professionals can be exhausting and expensive.
              </span>
              
              <Link 
                className="get-started-button app-hover app-bg-color app-font-bold app-border-radius text-white" 
                to={'/companies'}>Get in touch!</Link>
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
                Masaryk University
              </h1>

              <span className="description text-base app-gray-color max-w-28rem">
                At this point we’re inviting interested prospective applicants for an introductory hybrid workshop (online first round with an in-person final round) to work on the company-sponsored trial projects under faculty supervision, get to know our industrial partners and professors, and get a sense what this program would be about. - 
              </span>
              
              <Link 
                className="get-started-button app-hover app-bg-color app-font-bold app-border-radius text-white" 
                to={'/muni'}>Learn more!</Link>
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
