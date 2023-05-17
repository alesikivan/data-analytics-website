import '../../../assets/styles/css/pages/privacy-policy.css'

export const PrivacyPolicy = () => {

  const privacyPolicyLink = process.env.REACT_APP_SERVER + '/docs/privacy-policy'

  return (
    <>
      <article className='privacy-policy-page'>
        <h2 className='text-center'>
          Information Security Policy of the Faculty of Science of Masaryk University
        </h2>

        <p className='text-center'>
          Faculty of Science Masaryk University Directive No. 1/2023
        </p>

        <p className='text-center'>
          (version effective from 1 April 2023)
        </p>

        <p className='text-center'>
          Pursuant to Section 28 (1) of Act No. 111/1998 Coll., on higher education institutions and amending and supplementing other laws (Higher Education Institutions Act), as amended (hereinafter the “Act”), I hereby issue this Directive:
        </p>
        
        <section>
          <h3>
            Article 1
          </h3>
          <h4>Subject</h4>

          <p>
            <b>1.</b> Information Security Policy of the Faculty of Science of Masaryk University provides for secure and responsible access to various types of data and their use. It also describes the basics of secure communication between employees in order to prevent the loss or theft of data that are stored and processed in
            accordance with the applicable legislation.
          </p>

          <p>
            <b>2.</b> The obligations of information technology users are primarily regulated by Masaryk University Directive No. 10/2017. Directive No. 1/2023 specifies and extends legal regulations and the scope of duties of employees of the Faculty of Science of Masaryk University in the area of information technology.
          </p>

          <p>
            <b>3.</b> This Directive of the Faculty of Science of Masaryk University (hereinafter the “Faculty”) is issued to ensure effective operation, support and security of the Faculty in the area of ICT (Information and Communication Technologies), while respecting academic freedom of the University.
          </p>
        </section>

        <section>
          <h3>
            Article 2
          </h3>
          <h4>Definitions</h4>

          <p>
            <b>1.</b> ISP: Information Security Policy of the Faculty of Science of Masaryk University. The Policy consists of a set of accesses and rules governing secure access to the Employer’s data, software and hardware.
          </p>

          <p>
            <b>2.</b> ICT: Information and communications technologies
          </p>

          <p>
            <b>3.</b> OIKT: Office for Information and Communication Technologies of the Faculty of Science of Masaryk University
          </p>

          <p>
            <b>4.</b> ICT administrator: A person appointed by the department head or the head of the workplace responsible for management of hardware and software in the area of information technology.
          </p>

          <p>
            <b>5.</b> Data: Information recorded in digital form.
          </p>

          <p>
            <b>6.</b> Document: An electronic document governing management processes within the Faculty of Science of Masaryk University or establishing or in any way generally regulating the rights and obligations of employees.
          </p>
        </section>

        <a 
          href={privacyPolicyLink} 
          rel="noreferrer"
          target='_blank'>
            Full version of Privacy Policy
        </a>
      </article>
    </>
  )
}