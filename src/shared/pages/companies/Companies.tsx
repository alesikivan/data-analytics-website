import { useState } from "react"
import { motion } from 'framer-motion'
import clsx from "clsx"

import { images } from "../../../assets/images/imgs"
import { translater } from '../../../utils/localization/localization'

import '../../../assets/styles/scss/pages/companies.scss'
import { Link, useNavigate } from "react-router-dom"
import { YouTubeVideo } from "../../components/particals/video/youtube/YouTubeVideo"

type companiesBlocks = {
  img: string,
  title: string,
  description: string
}

export const Companies = () => {
  const navigate = useNavigate()
  const [tiers, setTiers] = useState({ collaborator: false, consortiumMember: false, generalSponsor: false })

  const countUsersClicks = () => {
    window.gtag('event', 'click', {
      'event_category': 'Companies',
      'event_label': 'Get it touch button'
    });

    navigate('/sign-up?type=company')
  }

  const blocks: companiesBlocks[] = [
    {
      img: images.companies.benefits,
      title: 'companiesPageBenefitsTitle',
      description: 'companiesPageBenefitsDescription'
    },
    {
      img: images.companies.talant,
      title: 'companiesPageTalentTitle',
      description: 'companiesPageTalentDescription'
    },
    {
      img: images.companies.research,
      title: 'companiesPageResearchTitle',
      description: 'companiesPageResearchDescription'
    },
    {
      img: images.companies.future,
      title: 'companiesPageFutureTitle',
      description: 'companiesPageFutureDescription'
    },
    {
      img: images.companies.relationship,
      title: 'companiesPageRelationshipTitle',
      description: 'companiesPageRelationshipDescription'
    },
    {
      img: images.companies.reputation,
      title: 'companiesPageReputationTitle',
      description: 'companiesPageReputationDescription'
    }
  ]

  const hybridExperientialLearning = [
    translater("companiesPageHybridExperientialLearningItem1"),
    translater("companiesPageHybridExperientialLearningItem2"),
    translater("companiesPageHybridExperientialLearningItem3"),
    translater("companiesPageHybridExperientialLearningItem4"),
    translater("companiesPageHybridExperientialLearningItem5"),
  ]

  const innovativeEnrollmentProgram = [
    translater("companiesPageInnovativeEnrollmentProgramItem1"),
    translater("companiesPageInnovativeEnrollmentProgramItem2"),
    translater("companiesPageInnovativeEnrollmentProgramItem3"),
  ]

  const accessToTalent = [
    translater("companiesPageAccessToTalentItem1"),
    translater("companiesPageAccessToTalentItem2"),
    translater("companiesPageAccessToTalentItem3"),
    translater("companiesPageAccessToTalentItem4"),
  ]

  const collabBenefits = [
    translater("companiesPageCollabBenefitsItem1"),
    translater("companiesPageCollabBenefitsItem2"),
    translater("companiesPageCollabBenefitsItem3"),
  ]

  const collabOfferings = [
    translater("companiesPageCollabOfferingsItem1"),
    translater("companiesPageCollabOfferingsItem2"),
  ]

  const consortiumMemberBenefits = [
    translater("companiesPageConsortiumMemberBenefitsItem1"),
    translater("companiesPageConsortiumMemberBenefitsItem2"),
    translater("companiesPageConsortiumMemberBenefitsItem3"),
  ]

  const consortiumMemberOfferings = [
    translater("companiesPageConsortiumMemberOfferingsItem1"),
    translater("companiesPageConsortiumMemberOfferingsItem2"),
  ]

  const generalSponsorBenefits = [
    translater("companiesPageGeneralSponsorBenefitsItem1"),
    translater("companiesPageGeneralSponsorBenefitsItem2"),
    translater("companiesPageGeneralSponsorBenefitsItem3"),
  ]

  const generalSponsorOfferings = [
    translater("companiesPageGeneralSponsorOfferingsItem1"),
    translater("companiesPageGeneralSponsorOfferingsItem2"),
  ]

  return (
    <>
      <h1 className="app-header-color text-4xl text-center app-font-bold m-0 ms-auto">
        {translater("companiesPageTitle")}
        <span className="app-font-bold app-color">
          {translater("companiesPageTitleSpecial")}
        </span>
      </h1>

      <article className="w-full content flex flex-wrap align-items-start justify-content-center mb-5">
        {
          blocks.map((block: companiesBlocks, index: number) => {
            return (
              <motion.section
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-18rem mt-5 flex flex-column align-items-center justify-content-start">
                <img src={block.img} alt="business" />

                <h2 className="text-center app-header-color app-font-bold text-xl m-0">
                  {translater(block.title)}
                </h2>

                <span className="text-center app-gray-color">
                  {translater(block.description)}
                </span>
              </motion.section>
            )
          })
        }
      </article>

      <article className="app-content flex flex-column justify-content-center align-items-center">
        <YouTubeVideo videoId={translater("companiesPageYouTubeLinkId").toString()} />
      </article>

      <div className="w-full flex align-items-center justify-content-center my-5">
        <a
          className="app-button app-bg-color text-white px-4 mx-auto text-base cursor-pointer"
          id="get-in-touch-company-page"
          onClick={countUsersClicks}>
          {
            translater("companiesPageButton")
          }
        </a>
      </div>

      <h1 className="app-header-color text-4xl text-center app-font-bold m-0 ms-auto">
        {translater("companiesPageCompanyOfferingTitle")}
      </h1>

      <article className="info-block">
        <section className="flex mt-5 gap-6 align-items-center justify-content-between">
          <div className="flex flex-column data-science-block">
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="m-0 app-header-color app-font-bold students-header">
              {translater("companiesPageHybridExperientialLearningTitle")}
            </motion.h2>

            {
              hybridExperientialLearning.map(content => {
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mt-4 flex align-items-start gap-3">
                    <img
                      src={images.home.check}
                      alt="check"
                      className="check" />

                    <span className="app-gray-color app-line-height">
                      {content}
                    </span>
                  </motion.div>
                )
              })
            }
          </div>

          <div className='data-science-picture'>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{ maxWidth: "350px" }}
              src={images.companies.experientiaLearning}
              alt="program-preview"></motion.img>
          </div>
        </section>
      </article>

      <article className="info-block">
        <section className="flex mt-5 gap-6 align-items-center justify-content-between">
          <div className="flex flex-column data-science-block">
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="m-0 app-header-color app-font-bold students-header">
              {translater("companiesPageInnovativeEnrollmentProgramTitle")}
            </motion.h2>

            {
              innovativeEnrollmentProgram.map(content => {
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mt-4 flex align-items-start gap-3">
                    <img
                      src={images.home.check}
                      alt="check"
                      className="check" />

                    <span className="app-gray-color app-line-height">
                      {content}
                    </span>
                  </motion.div>
                )
              })
            }
          </div>
        </section>
      </article>

      <article className="info-block">
        <section className="flex mt-5 gap-6 align-items-center justify-content-between">
          <div className="flex flex-column data-science-block">
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="m-0 app-header-color app-font-bold students-header">
              {translater("companiesPageAccessToTalentTitle")}
            </motion.h2>

            {
              accessToTalent.map(content => {
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mt-4 flex align-items-start gap-3">
                    <img
                      src={images.home.check}
                      alt="check"
                      className="check" />

                    <span className="app-gray-color app-line-height">
                      {content}
                    </span>
                  </motion.div>
                )
              })
            }
          </div>
        </section>
      </article>

      <article className="description-block">
        <section className="flex mt-5 gap-5 align-items-center justify-content-between">
          <div className="flex flex-column">
            <h2 className="m-0 app-header-color app-font-bold students-header">
              {translater("companiesPageCaseTitle")}
            </h2>

            <div className="mt-3 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                {translater("companiesPageCaseItem1")}
              </span>
            </div>

            <div className="mt-3 flex align-items-start gap-3">
              <span className="app-gray-color app-line-height">
                {translater("companiesPageCaseItem2")}
              </span>
            </div>
          </div>
        </section>
      </article>

      <h1 className="tiers-header app-header-color text-4xl text-center app-font-bold ms-auto">
        {translater("companiesPageParticipationTiers")}
      </h1>

      <div className="flex flex-column gap-3">
        <article className="ds-block tier">
          <section className="flex mt-1 gap-5 align-items-center justify-content-between">
            <div className="flex flex-column align-items-center">
              <span className="tier-circle">
                1
              </span>

              <h2 className="m-0 app-header-color app-font-bold students-header">
                {translater("companiesPageParticipationTiersCollaborator")}
              </h2>

              <span className="app-gray-color app-line-height mt-4 mb-3 w-10">
                {translater("companiesPageParticipationTiersCollaboratorItem1")}
              </span>

              <span className="app-gray-color app-line-height">
                {translater("companiesPageParticipationTiersCollaboratorItem2")}
              </span>

              <div className={clsx(
                'w-full flex flex-column align-items-start',
                {
                  'important-hidden': !tiers.collaborator
                }
              )}>

                <div className="w-full flex flex-column gap-1 my-3 align-items-center">
                  <span className="app-gray-color app-line-height">
                    <b className="text-base">
                      {translater("companiesPageParticipationTiersCollaboratorTasks")}
                    </b>
                  </span>

                  <span className="app-gray-color app-line-height">
                    {translater("companiesPageParticipationTiersCollaboratorTasksItem")}
                  </span>
                </div>

                <article className="info-block m-0">
                  <section className="flex gap-6 align-items-center justify-content-between">
                    <div className="flex flex-column data-science-block">
                      <motion.h2
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="m-0 app-header-color app-font-bold text-left p-0 companies-header pl-2">
                        {translater("companiesPageBenefits")}
                      </motion.h2>

                      {
                        collabBenefits.map(content => {
                          return (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6 }}
                              className="mt-4 flex align-items-start gap-3">
                              <img
                                src={images.home.check}
                                alt="check"
                                className="check" />

                              <span className="app-gray-color app-line-height text-left">
                                {content}
                              </span>
                            </motion.div>
                          )
                        })
                      }
                    </div>
                  </section>
                </article>

                <article className="info-block m-0 mt-5">
                  <section className="flex gap-6 align-items-center justify-content-between">
                    <div className="flex flex-column data-science-block">
                      <motion.h2
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="m-0 app-header-color app-font-bold text-left p-0 companies-header pl-2">
                        {translater("companiesPageOfferings")}
                      </motion.h2>

                      {
                        collabOfferings.map(content => {
                          return (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6 }}
                              className="mt-4 flex align-items-start gap-3">
                              <img
                                src={images.home.check}
                                alt="check"
                                className="check" />

                              <span className="app-gray-color app-line-height text-left">
                                {content}
                              </span>
                            </motion.div>
                          )
                        })
                      }
                    </div>
                  </section>
                </article>

                <article className="description-block mt-3">
                  <section className="flex gap-5 align-items-center justify-content-between">
                    <div className="flex flex-column">
                      <div className="mt-3 flex align-items-start gap-3">
                        <span className="app-gray-color app-line-height text-left">
                          {translater("companiesPageCostItem1")}
                        </span>
                      </div>
                    </div>
                  </section>
                </article>
              </div>

              <span
                onClick={() => setTiers((prev) => ({ ...prev, collaborator: !prev.collaborator }))}
                className="show-more-info flex gap-2 align-items-center mt-4">
                {
                  tiers.collaborator
                    ? translater("companiesPageSeeLessButton")
                    : translater("companiesPageSeeAllButton")
                }

                <li className={clsx(
                  'pi',
                  {
                    'pi-angle-down': !tiers.collaborator,
                    'pi-angle-up': tiers.collaborator,
                  }
                )}></li>
              </span>
            </div>
          </section>
        </article>

        <article className="ds-block tier">
          <section className="flex mt-1 gap-5 align-items-center justify-content-between">
            <div className="flex flex-column align-items-center">
              <span className="tier-circle">
                2
              </span>

              <h2 className="m-0 app-header-color app-font-bold students-header">
                {translater("companiesPageParticipationTiersConsortiumMember")}
              </h2>

              <span className="app-gray-color app-line-height mt-4 mb-3 w-10">
                {translater("companiesPageParticipationTiersConsortiumMemberItem1")}
              </span>

              <span className="app-gray-color app-line-height">
                {translater("companiesPageParticipationTiersConsortiumMemberItem2")}
              </span>

              <div className={clsx(
                'w-full flex flex-column align-items-start',
                {
                  'important-hidden': !tiers.consortiumMember
                }
              )}>

                <div className="w-full flex flex-column gap-1 my-3 align-items-center">
                  <span className="app-line-height">
                    <b className="text-base">
                      {translater("companiesPageParticipationTiersConsortiumMemberTasks")}
                    </b>
                  </span>

                  <span className="app-gray-color app-line-height">
                    {translater("companiesPageParticipationTiersConsortiumMemberTasksItem")}
                  </span>
                </div>

                <article className="info-block m-0">
                  <section className="flex gap-6 align-items-center justify-content-between">
                    <div className="flex flex-column data-science-block">
                      <motion.h2
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="m-0 app-header-color app-font-bold text-left p-0 companies-header pl-2">
                        {translater("companiesPageBenefits")}
                      </motion.h2>

                      {
                        consortiumMemberBenefits.map(content => {
                          return (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6 }}
                              className="mt-4 flex align-items-start gap-3">
                              <img
                                src={images.home.check}
                                alt="check"
                                className="check" />

                              <span className="app-gray-color app-line-height text-left">
                                {content}
                              </span>
                            </motion.div>
                          )
                        })
                      }
                    </div>
                  </section>
                </article>

                <article className="info-block m-0 mt-5">
                  <section className="flex gap-6 align-items-center justify-content-between">
                    <div className="flex flex-column data-science-block">
                      <motion.h2
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="m-0 app-header-color app-font-bold text-left p-0 companies-header pl-2">
                        {translater("companiesPageOfferings")}
                      </motion.h2>

                      {
                        consortiumMemberOfferings.map(content => {
                          return (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6 }}
                              className="mt-4 flex align-items-start gap-3">
                              <img
                                src={images.home.check}
                                alt="check"
                                className="check" />

                              <span className="app-gray-color app-line-height text-left">
                                {content}
                              </span>
                            </motion.div>
                          )
                        })
                      }
                    </div>
                  </section>
                </article>

                <article className="description-block mt-3">
                  <section className="flex gap-5 align-items-center justify-content-between">
                    <div className="flex flex-column">
                      <div className="mt-3 flex align-items-start gap-3">
                        <span className="app-gray-color app-line-height text-left">
                          {translater("companiesPageCostItem2")}
                        </span>
                      </div>
                    </div>
                  </section>
                </article>
              </div>

              <span
                onClick={() => setTiers((prev) => ({ ...prev, consortiumMember: !prev.consortiumMember }))}
                className="show-more-info flex gap-2 align-items-center mt-4">
                {
                  tiers.consortiumMember
                    ? translater("companiesPageSeeLessButton")
                    : translater("companiesPageSeeAllButton")
                }
                <li className={clsx(
                  'pi',
                  {
                    'pi-angle-down': !tiers.consortiumMember,
                    'pi-angle-up': tiers.consortiumMember,
                  }
                )}></li>
              </span>
            </div>
          </section>
        </article>

        <article className="ds-block tier">
          <section className="flex mt-1 gap-5 align-items-center justify-content-between">
            <div className="flex flex-column align-items-center">
              <span className="tier-circle">
                3
              </span>

              <h2 className="m-0 app-header-color app-font-bold students-header">
                {translater("companiesPageParticipationTiersGeneralsSponsor")}
              </h2>

              <span className="app-gray-color app-line-height mt-4 mb-3 w-10">
                {translater("companiesPageParticipationTiersGeneralsSponsorItem1")}
              </span>

              <span className="app-gray-color app-line-height">
                {translater("companiesPageParticipationTiersGeneralsSponsorItem2")}
              </span>

              <div className={clsx(
                'w-full flex flex-column align-items-start',
                {
                  'important-hidden': !tiers.generalSponsor
                }
              )}>

                <div className="w-full flex flex-column gap-1 my-3 align-items-center">
                  <span className="app-line-height">
                    <b className="text-base">
                      {translater("companiesPageParticipationTiersGeneralsSponsorTasks")}
                    </b>
                  </span>

                  <span className="app-gray-color app-line-height">
                    {translater("companiesPageParticipationTiersGeneralsSponsorTasksItem")}
                  </span>
                </div>

                <article className="info-block m-0">
                  <section className="flex gap-6 align-items-center justify-content-between">
                    <div className="flex flex-column data-science-block">
                      <motion.h2
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="m-0 app-header-color app-font-bold text-left p-0 companies-header pl-2">
                        {translater("companiesPageBenefits")}
                      </motion.h2>

                      {
                        generalSponsorBenefits.map(content => {
                          return (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6 }}
                              className="mt-4 flex align-items-start gap-3">
                              <img
                                src={images.home.check}
                                alt="check"
                                className="check" />

                              <span className="app-gray-color app-line-height text-left">
                                {content}
                              </span>
                            </motion.div>
                          )
                        })
                      }
                    </div>
                  </section>
                </article>

                <article className="info-block m-0 mt-5">
                  <section className="flex gap-6 align-items-center justify-content-between">
                    <div className="flex flex-column data-science-block">
                      <motion.h2
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="m-0 app-header-color app-font-bold text-left p-0 companies-header pl-2">
                        {translater("companiesPageOfferings")}
                      </motion.h2>

                      {
                        generalSponsorOfferings.map(content => {
                          return (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6 }}
                              className="mt-4 flex align-items-start gap-3">
                              <img
                                src={images.home.check}
                                alt="check"
                                className="check" />

                              <span className="app-gray-color app-line-height text-left">
                                {content}
                              </span>
                            </motion.div>
                          )
                        })
                      }
                    </div>
                  </section>
                </article>

                <article className="description-block mt-3">
                  <section className="flex gap-5 align-items-center justify-content-between">
                    <div className="flex flex-column">
                      <div className="mt-3 flex align-items-start gap-3">
                        <span className="app-gray-color app-line-height text-left">
                          {translater("companiesPageCostItem3")}
                        </span>
                      </div>
                    </div>
                  </section>
                </article>
              </div>

              <span
                onClick={() => setTiers((prev) => ({ ...prev, generalSponsor: !prev.generalSponsor }))}
                className="show-more-info flex gap-2 align-items-center mt-4">
                {
                  tiers.generalSponsor
                    ? translater("companiesPageSeeLessButton")
                    : translater("companiesPageSeeAllButton")
                }
                <li className={clsx(
                  'pi',
                  {
                    'pi-angle-down': !tiers.generalSponsor,
                    'pi-angle-up': tiers.generalSponsor,
                  }
                )}></li>
              </span>
            </div>
          </section>
        </article>
      </div>

    </>
  )
}