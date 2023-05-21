import Parser from 'html-react-parser'
import { motion } from 'framer-motion/dist/framer-motion'

import { images } from "../../../assets/images/imgs"
import '../../../assets/styles/css/pages/students.css'
import { Link } from 'react-router-dom'

export const Students = () => {
  const structuresList = [
    '<b class="title" style="color: #E76161">Essential Analyst\'s Soft Skills</b> (project management, communication etc) <b>- 10 credits</b>.',
    '<b class="title" style="color: #B71375">Applied Data Analytics</b> <b>- 12 credits</b>.',
    '<b class="title" style="color: #19A7CE">Probability and Statistics</b> <b>- 20 credits</b>.',
    '<b class="title" style="color: #576CBC">Programming for Data Analytics</b> (script and object-oriented languages) <b>- 30 credits</b>.',
    '<b class="title" style="color: #F97B22">Professional practice</b> (capstone project) <b>- 30 credits</b>.',
    'Two out of three specialization modules <b class="title" style="color: #B46060">(Complexity, Machine Learning, and AI, Data-driven applications)</b> <b>- 2x24 credits</b>.',
    '<b class="title" style="color: #D25380">Mathematical foundations of Data Analytics</b>, including advanced electives (optimization, modeling, geometry tracks) <b>- 60 credits</b>.',
  ]
  return (
    <>
      <h1 className="app-header-color text-4xl text-center app-font-bold m-0 ms-auto">
        Suggestion for the
        <br />
        students
      </h1>

      <article className="ds-block">
        <section className="flex mt-5 gap-5 align-items-center justify-content-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-column">
            <h2 className="m-0 app-header-color app-font-bold students-header">
              What is Data Science?
            </h2>

            <span className="app-gray-color app-line-height mt-4">
              Data Science is a rapidly growing field, and demand for data analysts is skyrocketing. Starting salaries of Data Analyts in USA range from 60.000 to 100.000+/year and in Europe - from 45.000-65.000 Euro. We are offering a <b>unique elite hybrid</b> bachelors program in Data Analytics, taugh in English, remotely with bi-annual in-person sessions.
            </span>

            <span className="app-gray-color app-line-height mt-3">
              It shall equip the students with <b>the diverse skillset for developing data-driven analytics and solutions</b> in a variety of applied domains, and prepare them to meet rising expectations of a competitive but rewarding job market in Europe, US and worldwide.
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}>
            <img
              className="data-science-img"
              src={images.students.developer}
              alt="programme-preview"></img>
          </motion.div>
        </section>
      </article>

      <article className="info-block">
        <section className="flex mt-5 gap-5 align-items-center justify-content-between">
          <div className="flex flex-column">
            <h2 className="m-0 app-header-color app-font-bold students-header">
              Main facts about Study Program
            </h2>

            <div className="mt-4 flex align-items-start gap-3">
              <img
                src={images.home.check}
                alt="check"
                className="check" />

              <span className="app-gray-color app-line-height">
                7 semester, 210 credit professional Bachelor program taught in English, mainly online. For foreign and domestic students, laying out the <b>mathematical foundations of data analytics, machine learning, and appropriate technology</b>, including at least one-semester practicum with private or public sector companies.
              </span>
            </div>

            <div className="mt-3 flex align-items-start gap-3">
              <img
                src={images.home.check}
                alt="check"
                className="check" />

              <span className="app-gray-color app-line-height">
                Students with strong prior programming or mathematical background could reduce their course load by up to 30 credits, <b>replacing select introductory courses with qualification exams/tests</b>.  This way the program schedule can be shortened down to 5 semesters.
              </span>
            </div>

            <div className="mt-3 flex align-items-start gap-3">
              <img
                src={images.home.check}
                alt="check"
                className="check" />

              <span className="app-gray-color app-line-height">
                Future study - The Bachelor program can be followed by a 3-semester, <b>90 credit Masters program</b>, focusing on Data Analytics applications within a select subject area (offering specialization in Urban Analytics, Digital Sensing, Machine Learning and AI, Big Data technology).
              </span>
            </div>

            <div className="mt-3 flex align-items-start gap-3">
              <img
                src={images.home.check}
                alt="check"
                className="check" />

              <span className="app-gray-color app-line-height">
                Networking with companies looking for data analytics talent throughout the program - <b>hackathons, workshops, tutorials every semester</b>.
              </span>
            </div>
          </div>
        </section>
      </article>

      <article className="structure-block">
        <section className="flex mt-5 gap-5 align-items-center justify-content-between">
          <div className="flex flex-column">
            <h2 className="mt-0 mb-1 app-header-color app-font-bold students-header">
              Study Structure
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
                The program is concluded with a <b>thesis</b> or <b>project report</b> and the <b>final state exam</b>. 
              </span>
            </div>
          </div>

          <div className='flex flex-column align-items-center'>
            <img
              className="analytics-img"
              src={images.students.structure}
              alt="analytics-img"></img>

            <span className='app-header-color'>Credits amount</span>
          </div>
        </section>
      </article>

      <article className="description-block">
        <section className="flex mt-5 gap-5 align-items-center justify-content-between">
          <div className="flex flex-column">
            <h2 className="m-0 app-header-color app-font-bold students-header">
              Program description
            </h2>

            <div className="mt-4 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                <Link to={'/muni'} className='app-link-color'>Masaryk University</Link> in Brno (one of the top ones in Czech Republic) offers <b> a unique elite hybrid bachelors program</b> in Data Analytics (see below).  
              </span>
            </div>

            <div className="mt-3 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                At this point we’re inviting interested prospective applicants for an introductory hybrid workshop (online first round with an in-person final round) to work on <b>the company-sponsored trial projects</b> under faculty supervision, get to know our industrial partners and professors, and get a sense what this program would be about.
              </span>
            </div>

            <div className="mt-3 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                <b>The best participants</b> may get support from the companies for their future study, or even hired right away if they already possess necessary skills and background for practical work - this way they may work and study at the same time, as the program is perfectly suited for such a mode.
              </span>
            </div>

            <div className="mt-3 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                It shall equip the students with the diverse skillset for developing data-driven analytics and solutions in a variety of applied domains. The students will get <b>solid mathematical foundations, programming skills, understanding of machine learning and computer science</b>, as well as data analytics thinking, as well as soft-skills necessary for efficient communication of data-driven solutions.
              </span>
            </div>

            <div className="mt-3 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                Furthermore, the students from the first day of the program will <b>be in touch with a network of industrial companies</b>, interested in growing data analytics talent. They can get a chance to work with the companies, one of which may become their future employer through <b>hackathons, workshops, company-sponsored study projects</b>, and other networking events offered every semester. 
              </span>
            </div>

            <div className="mt-3 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                The program is <b>delivered in English</b> in a hybrid form - most of the study happens online with bi-annual in-person exam/tutorial/networking sessions. <b>The best students</b> may get a stipend to cover their tuition and/or living costs.
              </span>
            </div>
          </div>
        </section>
      </article>
          
      <div className='w-full flex flex-column justify-content-center align-items-center value-proposition'>
        <h3 className="m-0 app-header-color app-font-bold text-3xl">
          Value proposition
        </h3>

        <Link 
          className='app-button app-bg-color text-white px-4 mx-auto text-base mt-3'
          to={'/sign-up'}>Try it now!</Link>
      </div>

      <article className='flex flex-wrap value-proposition-content align-items-start justify-content-between'>
        <span className='app-gray-color'>
          The students will get solid mathematical foundations, programming skills, understanding of machine learning and computer science, develop data analytics thinking, and soft-skills necessary for efficient communication of data-driven solutions. The students will also acquire <b>a deep understanding of algorithms and data structures</b>, enabling them to design efficient solutions to complex problems. 
        </span>

        <span className='app-gray-color'>
          The students from the first day of the program will be in touch with <b>a network of industrial companies</b>, interested in growing data analytics talent. They can get a chance to work with the companies, one of which may become their future employer through hackathons, workshops, <b>company-sponsored study</b> projects, and other networking events offered every semester. 
        </span>

        <span className='app-gray-color'>
          At this point we're inviting interested prospective applicants for an introductory hybrid workshop (online first round with an in-person final round) to work on <b>the company-sponsored trial projects under faculty supervision</b>, get to know our industrial partners and professors, and get a sense what this program would be about. 
        </span>

        <span className='app-gray-color'>
          The best participants may get support from the companies for their future study, or even hired right away if they already possess necessary skills and background for practical work - <b>this way they may work and study at the same time</b>, as the program is perfectly suited for such a mode.
        </span>
      </article>
    </>
  )
}