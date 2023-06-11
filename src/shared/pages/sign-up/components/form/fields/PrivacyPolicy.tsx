import clsx from "clsx"
import React from "react"
import { Link } from "react-router-dom"

import { InformationProcessing, PrivacyTerms } from "../Form"
import { translater } from "../../../../../../utils/localization/localization"
import { images } from "../../../../../../assets/images/imgs"

type Props = {
  informationProcessing: InformationProcessing,
  setInformationProcessing: React.Dispatch<React.SetStateAction<InformationProcessing>>,
  privacyTerms: PrivacyTerms,
  setPrivacyTerms: React.Dispatch<React.SetStateAction<PrivacyTerms>>
}

export const PrivacyPolicy = (
  { 
    setPrivacyTerms, 
    privacyTerms,
    setInformationProcessing,
    informationProcessing
  }: Props
) => {
  return (
    <>
      <div className="policy-area">
        <div
          onClick={() => setPrivacyTerms(prev => ({ selected: !prev.selected, isTouched: true }))}
          className={
            clsx({
              "flag-area": true,
              "error": privacyTerms.isTouched && !privacyTerms.selected
            })
          }>
          {
            privacyTerms.selected ? (
              <img src={images.home.check} alt="check" className="flag" />
            ) : ''
          }
        </div>

        <span>
          {
            translater("introductionPageFormPrivacyPolicy")
          }

          <Link to="/privacy-policy">
            {
              translater("introductionPageFormPrivacyPolicyLink")
            }
          </Link>
        </span>
      </div>

      <div className="policy-area">
        <div
          onClick={() => setInformationProcessing(prev => ({ selected: !prev.selected, isTouched: true }))}
          className={
            clsx({
              "flag-area": true,
              "error": informationProcessing.isTouched && !informationProcessing.selected
            })
          }>
          {
            informationProcessing.selected ? (
              <img src={images.home.check} alt="check" className="flag" />
            ) : ''
          }
        </div>

        <span>
          {
            translater("introductionPageFormInformationProcessing")
          }
        </span>
      </div>
    </>
  )
}