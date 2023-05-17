
import { images } from '../../../../assets/images/imgs'

import '../../../../assets/styles/css/pages/successfully-saved.css'

type Props = {
  hideDoneInterface: Function
}

export const SuccessfullySaved = ({ hideDoneInterface }: Props) => {
  return (
    <div className="successfully-saved">
      <img src={images.successfullySaved.success} alt="success" />
      
      <h3 className='title'>Success</h3>
      
      <span className='message'>
        Stay in touch with us. When the program starts we will notify you by email.
      </span>
      
      <button onClick={() => hideDoneInterface()}>Complete sign up</button>
    </div>
  )
}
