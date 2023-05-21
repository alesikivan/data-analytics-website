import { motion } from 'framer-motion/dist/framer-motion'
import Parser from 'html-react-parser'

import { images } from '../../../assets/images/imgs'
import '../../../assets/styles/css/pages/muni.css'

type Blocks = {
  img: string,
  title: string,
  description: string
}

export const Muni = () => {
  const blocks: Blocks[] = [
    {
      img: images.muni.prestigious,
      title: 'Prestigious',
      description: 'Masaryk University is one of the renowned and prestigious higher education institutions in Central Europe, <b>located in Brno</b>, the second largest city in the Czech Republic.'
    },
    {
      img: images.muni.study,
      title: 'Study programms',
      description: 'The university offers a great variety of study programmes in <b>Czech and English</b>, ranging from medicine, computer science, economics and business, life and social sciences, education and much more.'
    },
    {
      img: images.muni.lang,
      title: 'Multilanguage',
      description: 'The university offers more than <b>80 full-degree programmes</b> taught in English and organizes exchanges throughout the continent.'
    },
    {
      img: images.muni.city,
      title: 'Student-friendly city',
      description: 'Brno is a modern, student-friendly city that offers a diverse cultural scene and a great student experience. It was voted as <b>the 6th most popular student city globally</b>. The city has a population of 380,000 and offers all the amenities and services of a bustling city without being too overcrowded.'
    },
    {
      img: images.muni.rocket,
      title: 'High-quility education',
      description: "Students come to Brno to experience <b>high-quality education, cultural events, and excellent food and drinks</b>. Furthermore, Brno is a great starting point for exploring the nearby cities of Vienna, Budapest, and Prague, which can be reached in just three hours. Don't forget to check out the UNESCO site and learn more about its intriguing history!"
    },
    {
      img: images.muni.accomodation,
      title: 'Accomodation',
      description: 'The MU Accommodation and Catering Services (SKM MU) are tasked with the administration of a total of 10 accommodation facilities, which provide facilities such as <b>gyms and other sports facilities, computer rooms, TV and common rooms</b>, table tennis halls and services such as internet access.'
    },
  ]

  const website = 'https://www.muni.cz'

  return (
    <article className="muni flex flex-column">
      <section className="information flex flex-wrap gap-5 justify-content-between">
        <div 
          className="flex flex-column">
          <h1 className="app-color text-4xl app-font-bold m-0">
            Masaryk University
          </h1>

          <span className="muni-description app-gray-color max-w-28rem mt-3">
            We believe that education is not just a matter of age or social status. We actively support research. We are open-minded and dedicated to influencing the lives of people around us.
            
            <a className='officiall-link ml-1' target='_blank' href={website}>Officiall website.</a>
          </span>
        </div>

        <div 
          className="statistic flex">
          <div className='flex flex-column align-items-center'>
            <b className='app-font-bold app-color text-3xl'>400</b>
            <span className='max-w-5rem text-center muni-description mt-2 app-gray-color'>Study programms</span>
          </div>

          <div className='flex flex-column align-items-center'>
            <b className='app-font-bold app-color text-3xl'>30K</b>
            <span className='max-w-5rem text-center muni-description mt-2 app-gray-color'>Students</span>
          </div>

          <div className='flex flex-column align-items-center'>
            <b className='app-font-bold app-color text-3xl'>7K</b>
            <span className='max-w-5rem text-center muni-description mt-2 app-gray-color'>Graduates a year</span>
          </div>
        </div>
      </section>

      <section className="w-full muni-content flex flex-wrap align-items-start justify-content-between mt-3">
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