import Link from "next/link"

const TermsAndCondition = () => {
  const termsAndCondition = [
    {
      id: 1,
      title: "Acceptance of Terms",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 2,
      title: "Amendments",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 3,
      title: "Eligibility",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 4,
      title: "Accounts and Registration",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
        "If you’ve done all of this and still haven’t received your refund, please contact us at info@taupenotch.com.bd or (+880) 18383-31990."
      ]
    },
    {
      id: 5,
      title: "Use of the Website",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 6,
      title: "Product Information",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 7,
      title: "Pricing",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 8,
      title: "Orders and Payments",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 9,
      title: "Shipping and Delivery",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 10,
      title: "Return and Refund Policy",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 11,
      title: "Limitation of Liability",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 12,
      title: "Intellectual Property",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 13,
      title: "Governing Law",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 14,
      title: "Contact Us",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
  ]
  return (
    <div className="text-sm text-bColor4">
      <h1 className="sub-heading" >Taupe Notch BD Terms & Conditions</h1>
      <p className="mt-2" >Welcome to Taupe Notch BD. These Terms and Conditions outline the rules and regulations for the use of our website, located at <Link href="www.taupenotchbd.com" className="text-mColor6 underline">www.taupenotchbd.com</Link>. By accessing or using our site, you agree to be bound by these terms. If you do not agree to all the terms, please refrain from using our website.</p>

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