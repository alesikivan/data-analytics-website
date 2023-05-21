import Parser from 'html-react-parser'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion/dist/framer-motion'

import { images } from "../../../assets/images/imgs"
import '../../../assets/styles/css/pages/companies.css'

type companiesBlocks = {
  img: string,
  title: string,
  description: string
}

export const Companies = () => {
  const blocks: companiesBlocks[] = [
    {
      img: images.companies.benefits,
      title: 'Benefits',
      description: 'Access to funding and grants: collaborating with universities can help a company access <b>grants</b> and funding for <b>research projects</b> or the development of ideas.'
    },
    {
      img: images.companies.talant,
      title: 'Talented students',
      description: 'To find and attract <b>young professionals</b> with large corporations and innovative initiatives that are valuable for business development for free.'
    },
    {
      img: images.companies.research,
      title: 'Research',
      description: 'Universities have access to <b>academic resources and experts</b>, enabling companies to conduct research and introduce new technologies or products.'
    },
    {
      img: images.companies.future,
      title: 'Future employees',
      description: 'Promote the competition/program of study from the start with your self-created "problems" - and reap the benefits: <b>solve business problems</b> on the one hand, and attract new Data Scientists to your organization on the other. With the MDA program you create an easy entry into your company!'
    },
    {
      img: images.companies.relationship,
      title: 'Relationship',
      description: 'Collaborating with universities helps companies establish and <b>maintain relationships with academic experts</b> and stock teams that can enable a healthy exchange of food and experience.'
    },
    {
      img: images.companies.reputation,
      title: 'Reputation',
      description: 'Cooperation with universities can <b>increase the credibility of the company</b>, strengthen its innovative potential and attract additional investment from students, researchers.'
    }
  ]
  return (
    <>
      <h1 className="app-header-color text-4xl text-center app-font-bold m-0 ms-auto">
        Best Solutions & 
        <br />
        value for <span className="app-font-bold app-color">your business</span>
      </h1>

      <div className="w-full flex align-items-center justify-content-center mt-5">
        <Link 
          className="app-button app-bg-color text-white px-4 mx-auto text-base" 
          to="/sign-up">
            Get in touch!
        </Link>
      </div>

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
    </>
  )
}