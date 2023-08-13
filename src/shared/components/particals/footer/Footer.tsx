import { Link } from 'react-router-dom'

import '../../../../assets/styles/scss/particles/footer.scss'
import { facebook, linkedin, insta } from '../header/Header'
import { privacyPolicyLink } from '../../../pages/privacy-policy/PrivacyPolicy'

export const dataProcessingConsent = process.env.SERVER_API + '/docs/data-processing-consent'

export const Footer = () => {
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
        </div>

        <ul className='social-nets'>
          <li className='app-hover'>
            <a href={insta} target='_blank'>
              <i className='pi pi-instagram'></i>
            </a>
          </li>
          <li className='app-hover'>
            <a href={facebook} target='_blank'>
              <i className='pi pi-facebook'></i>
            </a>
          </li>
          <li className='app-hover'>
            <a href={linkedin} target='_blank'>
              <i className='pi pi-linkedin'></i>  
            </a>
          </li>
        </ul>

        <span className='rights'>
          All rights reserved | <Link to={'/privacy-policy'} target='_blank' >Privacy Policy</Link> – <a href={dataProcessingConsent} target='_blank'>Consent to Data Processing</a>
          <span className=''> – </span>
          <a 
            href="https://www.iubenda.com/privacy-policy/79801931" 
            className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " 
            title="Privacy Policy ">
              Cookies Policy
          </a>
        </span>
      </div>
    </div>
  )
}