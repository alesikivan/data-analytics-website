import { Dialog } from 'primereact/dialog'

import { Form } from './components/Form'
import { translater } from '../../../../../utils/localization/localization'

type Props = {
  dialogVisible: boolean,
  setDialogVisible: Function,
}

export const FormModalWindow = ({ dialogVisible, setDialogVisible }: Props) => {
  return (
    <div className="card">
      <Dialog
        header={translater("bootcampPageResumeFormTitle")}
        visible={dialogVisible}
        modal
        maximizable
        contentStyle={{ height: '400px', minWidth: '470px' }}
        onHide={() => setDialogVisible(false)}>

          <Form
            hideModal={() => setDialogVisible(false)} />

      </Dialog>
    </div>
  )
}
