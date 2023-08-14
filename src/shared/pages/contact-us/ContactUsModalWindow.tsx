import { Dialog } from 'primereact/dialog'

import { translater } from '../../../utils/localization/localization'
import { Form } from './components/form/Form'

type Props = {
  dialogVisible: boolean,
  setDialogVisible: Function,
}

export const ContactUsModalWindow = ({ dialogVisible, setDialogVisible }: Props) => {
  return (
    <div className="card">
      <Dialog
        header={translater("contactUsDialogFormTitle")}
        visible={dialogVisible}
        modal
        maximizable
        resizable={false}
        contentStyle={{ height: '400px', minWidth: '470px' }}
        onHide={() => setDialogVisible(false)}>

          <Form
            hideModal={() => setDialogVisible(false)} />

      </Dialog>
    </div>
  )
}
