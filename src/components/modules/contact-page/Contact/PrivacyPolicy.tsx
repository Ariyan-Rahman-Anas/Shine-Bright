import Link from "next/link"

const PrivacyPolicy = () => {

  const privacyPolicy = [
    {
      id: 1,
      title: "Information We Collect",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 2,
      title: "We collect this information when you",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 3,
      title: "How We Use Your Information",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 4,
      title: "Information Sharing",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
        "If you’ve done all of this and still haven’t received your refund, please contact us at info@taupenotch.com.bd or (+880) 18383-31990."
      ]
    },
    {
      id: 5,
      title: "Your Rights",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
  ]

  const contactInfo = [
    {
      id: 1,
      title: "Cookies",
      terms: [
       "Our website uses cookies and similar technologies to enhance your browsing experience. You can manage your cookie preferences through your browser settings."
      ]
    },
    {
      id: 1,
      title: "Changes to This Privacy Policy",
      terms: [
       "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website."
      ]
    },
    {
      id: 1,
      title: "Contact Us",
      terms: [
        "If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at info@taupenotch.com.bd.",
        "This Privacy Policy was last updated on 10/07/2024."
      ]
    },
  ]

  return (
    <div className="text-sm text-bColor4">
      <h1 className="sub-heading" >Taupe Notch BD Privacy Policy</h1>
      <p className="mt-2" >This Privacy Policy describes how Taupe Notch BD (we, us, or our) collects, uses, shares, and protects the information obtained from users (you or your) of our e-commerce website <Link href="https://www.taupenotch.com.bd" className="text-mColor6 underline ">www.taupenotch.com.bd</Link> </p>

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