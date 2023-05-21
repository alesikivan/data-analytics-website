import { motion } from 'framer-motion/dist/framer-motion'

import '../../../../assets/styles/css/pages/successfully-saved.css'
import { translater } from '../../../../utils/localization/localization'
import { images } from '../../../../assets/images/imgs'

type Props = {
  hideDoneInterface: Function
}

export const SuccessfullySaved = ({ hideDoneInterface }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="successfully-saved">
      <img src={images.successfullySaved.success} alt="success" />

      <h3 className='title m-0'>
        {
          translater("introductionPageSuccessfullySaved")
        }
      </h3>

      <span className='message app-gray-color'>
        {
          translater("introductionPageSuccessfullySavedMessage")
        }
      </span>

      <button onClick={() => hideDoneInterface()}>
        {
          translater("introductionPageSuccessfullySavedButton")
        }
      </button>
    </motion.div>
  )
}
