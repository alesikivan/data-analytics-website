import { images } from "../../../assets/images/imgs"
import '../../../assets/styles/css/pages/companies.css'

type companiesBlocks = {
  img: string,
  title: string,
  description: string
}

export const Companies = () => {
  const blocks: companiesBlocks[] = [
    {
      img: images.companies.benefits,
      title: 'Benefits',
      description: 'Access to funding and grants: Collaborating with universities can help a company access grants and funding for research projects or the development of ideas.'
    },
    {
      img: images.companies.talant,
      title: 'Talented students',
      description: 'To find and attract young professionals with large corporations and innovative initiatives that are valuable for business development for free.'
    },
    {
      img: images.companies.research,
      title: 'Research',
      description: 'Universities have access to academic resources and experts, enabling companies to conduct research and introduce new technologies or products.'
    },
    {
      img: images.companies.future,
      title: 'Future employees',
      description: 'The proposed development of courses across research programs and universities to better align their purpose with qualified employees and work plans requires the development of appropriate skills.'
    },
    {
      img: images.companies.relationship,
      title: 'Relationship',
      description: 'Collaborating with universities helps companies establish and maintain relationships with academic experts and stock teams that can enable a healthy exchange of food and experience.'
    },
    {
      img: images.companies.reputation,
      title: 'Reputation',
      description: 'Cooperation with universities can increase the credibility of the company, strengthen its innovative potential and attract additional investment from students, researchers.'
    }
  ]
  return (
    <>
      <h1 className="app-header-color text-4xl text-center app-font-bold m-0 ms-auto">
        Best Solutions & 
        <br />
        value for your business
      </h1>

      <article className="content flex flex-wrap align-items-center justify-content-space-around">
        {
          blocks.map((block: companiesBlocks) => {
            return (
              <section className="max-w-13rem">
                <img src={ block.img } alt="business" />
                
                <h2>
                  { block.title }
                </h2>

                <span>
                  { block.description }
                </span>
              </section>
            )
          })
        }
      </article>
    </>
  )
}