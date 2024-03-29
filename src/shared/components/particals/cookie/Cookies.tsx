import { Button } from 'primereact/button'
import { InputSwitch } from 'primereact/inputswitch'
import { useState } from 'react'
import { Dialog } from 'primereact/dialog'

import '../../../../assets/styles/scss/particles/cookies.scss'
import { HiddenText } from './components/HiddenText'
import { hideCookies } from '../../../../redux/actions/appActions'
import { images } from '../../../../assets/images/imgs'

export const defaultCookies = {
  strictlyNecessaryCookies: true,
  performanceCookies: true,
  functionalCookies: true,
  targetingCookies: true
}

export const Cookies = () => {
  const [cookies, setCookies] = useState<any>(defaultCookies)
  const [visible, setVisible] = useState<boolean>(false)

  const initialData = [
    { 
      title: "Strictly Necessary Cookies", 
      text: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.",
      key: 'strictlyNecessaryCookies'
    },{ 
      title: "Performance Cookies", 
      text: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.",
      key: 'performanceCookies'
    },{ 
      title: "Functional Cookies", 
      text: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.",
      key: 'functionalCookies'
    },{ 
      title: "Targeting Cookies", 
      text: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.",
      key: 'targetingCookies'
    }
  ]

  const saveCookies = () => {
    const data = JSON.stringify(cookies)

    localStorage.setItem('user-cookies', data)

    hideCookies()
  }

  const acceptAllCookies = () => {
    const data = JSON.stringify(defaultCookies)

    localStorage.setItem('user-cookies', data)

    hideCookies()
  }

  const rejectAllCookies = () => {
    const data = JSON.stringify({
      strictlyNecessaryCookies: true,
      performanceCookies: false,
      functionalCookies: false,
      targetingCookies: false
    })

    localStorage.setItem('user-cookies', data)

    hideCookies()
  }

  return (
    <>
      <div className="cookies-area flex align-items-center gap-2">
        <div className='content-cookies-area'>
          <img src={images.cookies} alt="cookies" />

          <span>
            We use cookiess to provide a proactive support experience, enhance site navigation, analyze site usage, and assist in our marketing efforts.
            <span className='more' onClick={() => setVisible(true)}>Click here</span>
            to read about how we may use your personal data.
          </span>
        </div>

        <div className='buttons flex align-items-center gap-2'>
          <Button 
            onClick={acceptAllCookies}
            className='accept p-button-sm' label="Accept all" />
          <Button 
            onClick={rejectAllCookies}
            className='reject p-button-sm p-button-outlined p-button-secondary' label="Reject all" />
        </div>
      </div>

      <Dialog
        header="Cookies preferences"
        visible={visible}
        className='cookies-dialog'
        onHide={() => setVisible(false)}>

        {
          initialData.map(({ title, text, key }, index) => (
            <HiddenText
              disableMode={key === 'strictlyNecessaryCookies'}
              toggleMode={Boolean(cookies[key])}
              toggleFunction={() => setCookies((prev: any) => ({ ...prev, [key]: !cookies[key] }))}
              key={index}
              title={title}
              text={text}
              id={index}
            />
          ))
        }

        <Button 
          onClick={() => saveCookies()}
          className='accept p-button-sm w-full mt-4' 
          label="Accept cookies" />
      </Dialog>
    </>
  )
}