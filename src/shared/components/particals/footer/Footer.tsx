import { Link } from 'react-router-dom'
import Parser from 'html-react-parser'

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
          {/* <li className='app-hover'>
            <a href={translater("socialMediaLinkInstagram").toString()} target='_blank'>
              <i className='pi pi-instagram'></i>
            </a>
          </li>
          <li className='app-hover'>
            <a href={translater("socialMediaLinkFacebook").toString()} target='_blank'>
              <i className='pi pi-facebook'></i>
            </a>
          </li> */}
          <li className='app-hover opacity-50'>
            {/* <a href={translater("socialMediaLinkInstagram").toString()} target='_blank'> */}
            <a href={'#'} className='cursor-default'>
              <i className='pi pi-instagram'></i>
            </a>
          </li>
          <li className='app-hover opacity-50'>
            {/* <a href={translater("socialMediaLinkFacebook").toString()} target='_blank'> */}
            <a href={'#'} className='cursor-default'>
              <i className='pi pi-facebook'></i>
            </a>
          </li>
          <li className='app-hover'>
            <a href={translater("socialMediaLinkLinkedin").toString()} target='_blank'>
              <i className='pi pi-linkedin'></i>  
            </a>
          </li>
        </ul>

        <span className='rights flex align-items-center gap-3'>
          { Parser(`<a href="https://www.iubenda.com/privacy-policy/56143986" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>`) }

          { Parser(`<a href="https://www.iubenda.com/privacy-policy/56143986/cookie-policy" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy ">Cookie Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>`) }

          { Parser(`<a href="https://www.iubenda.com/terms-and-conditions/56143986" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Terms and Conditions ">Terms and Conditions</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>`) }
          
        </span>
      </div>
    </div>
  )
}