"use client"

import { siteInfo, termsAndCondition } from "@/constant"
import Link from "next/link"
import { useSelector } from "react-redux"

const TermsAndCondition = () => {
  const { selected } = useSelector((state: any) => state.category)
  
  return (
    <div className="text-sm text-bColor4">
      <h1 className="sub-heading" >{`${siteInfo.name}'s Terms & Conditions`} </h1>
      <p className="mt-2" >{`Welcome to  ${siteInfo.name}.  These Terms and Conditions outline the rules and regulations for the use of our website, located at `} <Link target="_blank" href={siteInfo.liveURL} className={`${selected === "makeup" ? "text-mBtnBg" : "text-sBtnBg"} underline`}>{siteInfo.name}</Link>. By accessing or using our site, you agree to be bound by these terms. If you do not agree to all the terms, please refrain from using our website. </p>

      <div className="mt-6">
        {
          termsAndCondition.map(({ id, title, terms }, index) => (
            <div key={index} className="mt-5">
              <h2 className="font-semibold text-blackCustom ">{id}. {title}: </h2>
              <ul className="list-disc list-inside">
                {terms.map((term, index) => (
                  <li key={index} className="ml-5 mb-2 " >{term}</li>
                ))}
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default TermsAndCondition