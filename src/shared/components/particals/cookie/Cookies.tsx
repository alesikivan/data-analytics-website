import { Button } from 'primereact/button'
import { InputSwitch } from 'primereact/inputswitch'
import { useState } from 'react'
import { Dialog } from 'primereact/dialog'

import '../../../../assets/styles/scss/particles/cookies.scss'

export const Cookies = () => {
  const [visible, setVisible] = useState<boolean>(!false)

  return (
    <>
      <div className="cookies-area flex align-items-center gap-2">
        <div className='content-cookies-area'>
          <span>
            We use cookiess to provide a proactive support experience, enhance site navigation, analyze site usage, and assist in our marketing efforts.
            <span className='more' onClick={() => setVisible(true)}>Click here</span>
            to read about how we may use your personal data.
          </span>
        </div>

        <div className='buttons flex align-items-center gap-2'>
          <Button className='accept p-button-sm' label="Accept all" />
          <Button className='reject p-button-sm p-button-outlined p-button-secondary' label="Reject all" />
        </div>
      </div>

      <Dialog
        header="Cookies preferences"
        visible={visible}
        style={{ width: '50vw' }}
        onHide={() => setVisible(false)}>
        <div className='flex flex-column gap-3'>
          <div className='cookies-item'>
            <div className='w-full pt-1 mb-2 flex align-items-center justify-content-between'>
              <h4>Strictly Necessary Cookies</h4>

              <InputSwitch
                checked={true} onChange={(e) => { }} />
            </div>

            <span>
              These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
            </span>
          </div>

          <div className='cookies-item'>
            <div className='w-full pt-1 mb-2 flex align-items-center justify-content-between'>
              <h4>Strictly Necessary Cookies</h4>

              <InputSwitch
                checked={true} onChange={(e) => { }} />
            </div>

            <span>
              These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
            </span>
          </div>

          <div className='cookies-item'>
            <div className='w-full pt-1 mb-2 flex align-items-center justify-content-between'>
              <h4>Strictly Necessary Cookies</h4>

              <InputSwitch
                checked={true} onChange={(e) => { }} />
            </div>

            <span>
              These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
            </span>
          </div>

          <Button className='accept p-button-sm' label="Accept all" />
        </div>
      </Dialog>
    </>
  )
}