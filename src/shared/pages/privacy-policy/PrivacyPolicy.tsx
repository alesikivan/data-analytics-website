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
          <i>(version effective from 1 April 2023)</i>
        </p>

        <p className='text-center'>
          <i>Pursuant to Section 28 (1) of Act No. 111/1998 Coll., on higher education institutions and amending and supplementing other laws (Higher Education Institutions Act),
          as amended (hereinafter the “Act”), I hereby issue this Directive:</i>
        </p>

        <section>
          <h3 className='privacy-policy-article'>
            Article 1
          </h3>

          <h4>Subject</h4>

          <p>
            <b>1.</b> Information Security Policy of the Faculty of Science of Masaryk University provides for secure and responsible access to various types of data and their use. It also describes the basics of secure communication between employees in order to prevent the loss or theft of data that are stored and processed in
            accordance with the applicable legislation.
          </p>

          <p>
            <b>2.</b> The obligations of information technology users are primarily regulated by Masaryk University Directive No. 10/2017.
            Directive No. 1/2023 specifies and extends legal regulations and the scope of duties of employees of the Faculty
            of Science of Masaryk University in the area of information technology.
          </p>

          <p>
            <b>3.</b> This Directive of the Faculty of Science of Masaryk University (hereinafter the “Faculty”) is issued to ensure effective operation, support and security of the Faculty in the area of ICT (Information and Communication Technologies),
            while respecting academic freedom of the University.
          </p>
        </section>

        <section>
          <h3 className='privacy-policy-article'>
            Article 2
          </h3>

          <h4>Definitions</h4>

          <p>
            <b>1.</b> ISP: Information Security Policy of the Faculty of Science of Masaryk University.
            The Policy consists of a set of accesses and rules governing secure access to the Employer’s data, software and hardware.
          </p>

          <p>
            <b>2.</b> ICT: Information and communications technologies.
          </p>

          <p>
            <b>3.</b> OIKT: Office for Information and Communication Technologies of the Faculty of Science of Masaryk University.
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

        <section>
          <h3 className='privacy-policy-article'>
            Article 3
          </h3>

          <h4>Organisation of ICT management</h4>

          <p>
            <b>1.</b> Each workplace (i.e. Departments, Institute of Physics of the Earth, Botanical
            Garden, Central Library, Dean’s Office) is obliged to appoint its own ICT
            Administrator (hereinafter the “Administrator”) and to communicate this fact,
            including identification of the Administrator, to the Office for Information and
            Communication Technologies (hereinafter also the “OICT”). If the workplace
            is unable to appoint the ICT Administrator from among its own staff, the
            workplace is obliged to arrange with the OICT the provision of these services
            by the OICT.
          </p>

          <p>
            <b>2.</b> Employees may contact the ICT Administrator responsible for the relevant
            workplace. The contacts are available at
            <a
              className='ml-1'
              href='https://it.muni.cz/en/sci/contacts'
              target='_blank'
              rel="contacts">
                https://it.muni.cz/en/sci/contacts
            </a>
            .
          </p>

          <p>
            <b>3.</b> Employee trainings in the area of ICT are available at the MU Portal at
            <a
              className='ml-1'
              href='https://portal.muni.cz/o-mne/osobni/profesni-rozvoj/skoleni'
              target='_blank'
              rel="profesni-rozvoj">
                https://portal.muni.cz/o-mne/osobni/profesni-rozvoj/skoleni
            </a>
            . The Portal provides the user with instructions and direct contact to employees responsible for the given area.
          </p>

          <p>
            <b>4.</b> Employees may also consult the website
            <a
              className='ml-1'
              href='https://it.muni.cz'
              target='_blank'
              rel="it-muni">
                https://it.muni.cz
            </a>
            , a portal dedicatedto ICT support at the University.
          </p>
        </section>

        <section>
          <h3 className='privacy-policy-article'>
            Article 4
          </h3>

          <h4>Naming convention</h4>

          <p>
            <b>1.</b> Naming Documents, the process of publishing Documents and ensuring access rights to the employer’s Documents, especially the employer’s regulations,
            must be consulted with the OICT, which has developed a uniform methodical procedure for the given processes.
            It is recommended to contact the OICT at it@sci.muni.cz
          </p>
        </section>

        <section>
          <h3 className='privacy-policy-article'>
            Article 5
          </h3>

          <h4>Data</h4>

          <p>
            <b>1.</b> Data means any and all information recorded in digital form that an employee receives, processes or creates within the performance of his/her work.
            Each employee should ensure appropriate storage and securing of data in a manner preventing their loss, damage or misuse.
            For working with documents and data, it is recommended to use Microsoft 365 applications for which the employer provides user support.
          </p>

          <p>
            <b>2.</b> The appropriate way of working with data is determined by their classification.
            A certain overview of data is provided by the Masaryk University Directives:
            <a
              className='ml-1'
              href='https://is.muni.cz/auth/do/mu/Uredni_deska/Predpisy_MU/Masarykova_univerzita/Smernice_MU/SM06-13/Smernice_MU_c.6_2013_-_Vyzkumna_data__ucinna_od_15.6.2020_.pdf?info=1'
              target='_blank'
              rel="muni-directive">
                Masaryk University Directive No. 6/2013
            </a>
            , as amended, and
            <a
              className='ml-1'
              href='https://is.muni.cz/auth/do/mu/Uredni_deska/Predpisy_MU/Masarykova_univerzita/Smernice_MU/SM01-18/'
              target='_blank'
              rel="muni-directive">
                Masaryk University Directive No. 1/2018 Personal Data Processing and Protection
            </a>
            . For the purposes of this Directive, data are classified as follows:
          </p>

          <p>
            <u>Public data:</u> Data are accessible to anyone without any restrictions, e.g., publicly displayed on the Internet. Their publication does not pose any threat to MUNI or other institutions/persons.
          </p>

          <p>
            <u>Internal data:</u> Data are intended only for internal needs of a generally defined group of persons, do not require special regulation or protection
            (by law, contract, etc.) and their disclosure outside the group will not cause direct damage (financial, moral, legal, etc.).
          </p>

          <p>
            <u>Discrete data:</u> Data are intended exclusively for the internal needs of a precisely defined group of persons (e.g., an employee and his/her immediate superior, an employee of the HR department and a job applicant, a group of IT system administrators with administrator rights to it);
            these data require regulation or protection by their nature; typically, the data is protected by law or under a contract/license (for example, personal data, data covered by trade secrets, etc.), where disclosure of such data outside the given group would most likely cause damage (financial, moral, legal, etc.).
          </p>

          <p>
            <u>Sensitive data:</u> Data are strictly intended only for the internal needs of a precisely defined group of people (e.g., a healthcare professional and his patient, project leaders with a security clearance of a certain level, etc.);
            these data require special regulation or special protection by their nature; typically, the data is strictly protected by law or under a contract/license
            (for example, precious data covered by trade secrets, sensitive personal data, etc.), where disclosure of such data outside the given group of authorized persons is likely to cause large-scale damage (financial, moral, legal, etc.) with serious/irreversible consequences.
          </p>

          <p>
            <b>3.</b> If the employee is not sure what type of data he/she is working with, the immediate supervisor or head of the workplace will decide on the type of data. Employees may also use a contact form available at
            <a
              className='ml-1'
              href='https://it.muni.cz/en/forms/consult-or-request-storage-solutions'
              target='_blank'
              rel="muni-directive">
                https://it.muni.cz/en/forms/consult-or-request-storage-solutions
            </a>
            .
          </p>
        </section>

        <section>
          <h3 className='privacy-policy-article'>
            Article 6
          </h3>

          <h4>Available data storage </h4>

          <p>
            <b>1.</b> The employer allows the use of various solutions for storing data. Different storages guarantee different levels of data security.
            Before storing the data, employees should evaluate which storage is appropriate for which types of data. In case of any doubts regarding an appropriate storage, employees may consult the matter at.
          </p>

          <p>
            <b>2.</b> The employer allows storing data on these storages:
          </p>

          <p>
            <u>Portable media:</u> External storage media that are not an integral part of any device and are used by users to transfer information between devices or to store data offline.
          </p>

          <p>
            <u>Local storage:</u> Data storage built into desktop computers/laptops (typically internal HDD/SSD, etc.) in employees’ offices, study rooms, etc. or data storage built into mobile devices, i.e., mobile phones, tablets, etc.
          </p>

          <p>
            <u>ICS Network and Cloud Storage:</u>
            <a
              className='mx-1'
              href={privacyPolicyLink}
              target='_blank'
              rel="muni-directive">
                Data repositories operated by ICS
            </a>
            and made available to end-users via the data network – the
            <a
              className='mx-1'
              href='https://it.muni.cz/media/3289535/technicka-dokumentace-standardni-uloziste_2021.pdf'
              target='_blank'
              rel="muni-directive">
                standard
            </a>
            and
            <a
              className='mx-1'
              href='https://it.muni.cz/media/3289543/technicka-dokumentace-stredni-uloziste_2021.pdf'
              target='_blank'
              rel="muni-directive">
                medium
            </a>
            network storage.
            <a
              className='mx-1'
              href='https://www.cerit-sc.cz/infrastructure/storage-capacity'
              target='_blank'
              rel="muni-directive">
                CERIT-SC data repositories
            </a>
            for highvolume research data also fall into this category.
          </p>

          <p>
            <u>IS MUNI Storage:</u> Document server, Depository and similar storage capacities integrated in the
            <a
              className='mx-1'
              href='https://is.muni.cz/'
              target='_blank'
              rel="muni-directive">
                IS MUNI
            </a>
            system.
          </p>

          <p>
            <u>CESNET Storage:</u> Data storage operated by the
            <a
              className='ml-1'
              href='https://du.cesnet.cz/'
              target='_blank'
              rel="muni">
                CESNET Storage Department
            </a>
            . This category also includes services that use these storages for the physical storage of data, e.g.
            <a
              className='ml-1'
              href='https://it.muni.cz/sluzby/owncloud'
              target='_blank'
              rel="muni">
                CESNET OwnCloud
            </a>
            ,
            <a
              className='ml-1'
              href='https://it.muni.cz/sluzby/filesender'
              target='_blank'
              rel="muni-directive">
                CESNET FileSender etc
            </a>
            .
          </p>

          <p>
            <u>External storage with MUNI contract:</u> Cloud data storage provided within the
            <a
              className='mx-1'
              href='https://it.muni.cz/sluzby/microsoft-office-365'
              target='_blank'
              rel="muni">
                Microsoft Office 365 service for Masaryk University
            </a>
            and cloud data storages provided within the
            <a
              className='ml-1'
              href='https://is.muni.cz/auth/extservices/#cloud-ga'
              target='_blank'
              rel="muni">
                Google Workspace for Education service for Masaryk University
            </a>
            .
          </p>

          <p>
            <u>External storage without MUNI contract:</u> This category includes storages, where MUNI has no (legal) relationship with the operators of these external services and is unable to guarantee anything regarding security/confidentiality or stored data policy.
          </p>

          <p>
            <u>Storage available at the individual departments:</u> Data may also be stored on departmental servers that meet the requirements.
          </p>

          <p>
            <b>3.</b> Annex 1 to this Directive provides a summary chart showing what types of data are appropriate to store at different storages.
          </p>

          <p>
            <b>4.</b> Employees will find further and more detailed information on data classification.
          </p>
        </section>

        <section>
          <h3 className='privacy-policy-article'>
            Article 7
          </h3>

          <h4>Data management and backup</h4>

          <p>
            <b>1.</b> For working with data, the employer provides employees especially with the following services: Supercomputing and storage infrastructure, Security tools to ensure secure work with data, Tools for effective collaboration, Consultation, support and training. Employees will find further information on these services at
            <a
              className='ml-1'
              href='https://it.muni.cz/skupiny/vedec'
              target='_blank'
              rel="muni-directive">
                https://it.muni.cz/en/skupiny/vedec
            </a>
            .
          </p>

          <p>
            <b>2.</b> Open Science principles are an integral part of the research process and service infrastructure of the Faculty of Science of Masaryk University.
          </p>

          <p>
            <b>3.</b> General methods of protection are data backup (storing multiple copies of the same files on different, independent storage) and long-term storage of their historical copies, using advanced storage with integrated data protection (e.g. cloud storage, storage on professional data servers using redundant storage), etc.
            Article 6 specifies the guidelines for choosing a suitable storage (storages), which may contain data loss prevention mechanisms, based on data classification set out in Article 5.
          </p>
        </section>

        <section>
          <h3 className='privacy-policy-article'>
            Article 8
          </h3>

          <h4>Email</h4>

          <p>
            <b>1.</b> The employer’s preferred and supported email is provided through Microsoft 365 applications or IS MUNI.
          </p>

          <p>
            <b>2.</b> Within the performance of their work for the employer, all employees are obliged to communicate through email accounts provided by the employer. Employees may not use email accounts provided by the employer for private purposes.
          </p>

          <p>
            <b>3.</b> If an employee installs his/her own mail server, the server must be located in the university network. The mail server must comply with all the existing security regulations of the National Cyber and Information Security Agency and the requirements of the European Data Protection Regulation.
          </p>

          <p>
            <b>4.</b> It is not recommended to forward email communication to email addresses not provided by Masaryk University.
          </p>
        </section>

        <section>
          <h3 className='privacy-policy-article'>
            Article 9
          </h3>

          <h4>Final provisions</h4>

          <p>
            <b>1.</b> Compliance with this Directive shall be checked by the Faculty Bursar.
          </p>

          <p>
            <b>2.</b> Any exemptions from the procedure under this Directive are granted by the Faculty Bursar.
          </p>

          <p>
            <b>3.</b> The Office for Information and Communication Technologies is authorised to interpret this Directive.
          </p>

          <p>
            <b>4.</b> This Directive enters into effect on 1 April 2023.
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
