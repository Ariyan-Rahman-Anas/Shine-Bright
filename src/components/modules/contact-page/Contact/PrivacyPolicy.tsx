"use client"

import { contactInfo, privacyPolicy, siteInfo } from "@/constant"
import Link from "next/link"
import { useSelector } from "react-redux"

const PrivacyPolicy = () => {

  const { selected } = useSelector((state: any) => state.category)

  return (
    <div className="text-sm text-bColor4">
      <h1 className="sub-heading" >{`${siteInfo.name}'s Privacy Policy`} </h1>
      <p className="mt-2" >{`This Privacy Policy describes how ${siteInfo.name} (we, us, or our) collects, uses, shares, and protects the information obtained from users (you or your) of our e-commerce website `} <Link target="_blank" href={siteInfo.liveURL} className={`${selected === "makeup" ? "text-mBtnBg" : "text-sBtnBg"} underline`}>{siteInfo.name}</Link> </p>

      <div className="mt-6">
        {
          privacyPolicy.map(({ id, title, terms }, index) => (
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

      <div className="mt-12">
        {
          contactInfo.map(({ title, terms }, index) => (
            <div key={index} className="mt-5">
              <h2 className="font-semibold text-blackCustom ">{title}</h2>
              <ul>
                {terms.map((term, index) => (
                  <li key={index} className="mb-2 " >{term}</li>
                ))}
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default PrivacyPolicy