import { Link } from 'react-router-dom'

import '../../../../assets/styles/scss/particles/footer.scss'
import { ContactUsModalWindow } from '../../../pages/contact-us/ContactUsModalWindow'
import { useState } from 'react'
import { translater } from '../../../../utils/localization/localization'

export const dataProcessingConsent = process.env.SERVER_API + '/docs/data-processing-consent'

export const Footer = () => {
  const [dialogVisible, setDialogVisible] = useState(false)

  return (
    <div className='app-footer'>
      <div className="cover">
        <h3>MUNI Data Analytics</h3>

        <div className='links flex align-items-center flex-wrap'>
          <Link to={'/students'}>Students</Link>
          <Link to={'/companies'}>Companies</Link>
          <Link to={'/muni'}>Masaryk University</Link>
          <Link to={'/bootcamp'}>Bootcamp</Link>
          <Link to={'/'}>Introduction</Link>

          <span 
            onClick={() => {
              setDialogVisible(true)
            }}
            className='contact-us-button cursor-pointer'>
              Contact Us
          </span>

          <ContactUsModalWindow 
            dialogVisible={dialogVisible}
            setDialogVisible={setDialogVisible}/>
        </div>

        <ul className='social-nets'>
          <li className='app-hover'>
            <a href={translater("socialMediaLinkInstagram").toString()} target='_blank'>
              <i className='pi pi-instagram'></i>
            </a>
          </li>
          <li className='app-hover'>
            <a href={translater("socialMediaLinkFacebook").toString()} target='_blank'>
              <i className='pi pi-facebook'></i>
            </a>
          </li>
          <li className='app-hover'>
            <a href={translater("socialMediaLinkLinkedin").toString()} target='_blank'>
              <i className='pi pi-linkedin'></i>  
            </a>
          </li>
        </ul>

        <span className='rights'>
          All rights reserved | <Link to={'/privacy-policy'} target='_blank' >Privacy Policy</Link> – <a href={dataProcessingConsent} target='_blank'>Consent to Data Processing</a>
          <span className=''> – </span>
          <a 
            href={translater("privacyPolicyCookiesLink").toString()} 
            className="iubenda-white iubenda-noiframe privacy-policy-iubenda iubenda-embed iubenda-noiframe " 
            title="Privacy Policy ">
              Cookies Policy
          </a>
        </span>
      </div>
    </div>
  )
}