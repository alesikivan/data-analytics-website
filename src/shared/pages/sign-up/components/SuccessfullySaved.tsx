
import { images } from '../../../../assets/images/imgs'

import '../../../../assets/styles/css/pages/successfully-saved.css'
import { translater } from '../../../../utils/localization/localization'

type Props = {
  hideDoneInterface: Function
}

export const SuccessfullySaved = ({ hideDoneInterface }: Props) => {
  return (
    <div className="successfully-saved">
      <img src={images.successfullySaved.success} alt="success" />

      <h3 className='title m-0'>
        {
          translater("introductionPageSuccessfullySaved")
        }
      </h3>

      <span className='message'>
        {
          translater("introductionPageSuccessfullySavedMessage")
        }
      </span>

      <button onClick={() => hideDoneInterface()}>
        {
          translater("introductionPageSuccessfullySavedButton")
        }
      </button>
    </div>
  )
}
