const RefundPolicy = () => {

  const refundPolicy = [
    {
      id: 1,
      title: "Eligibility for Refund",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 2,
      title: "We offer two refund windows",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 3,
      title: "Refund Process",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 4,
      title: "Late or Missing Refunds",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
        "If you’ve done all of this and still haven’t received your refund, please contact us at info@taupenotch.com.bd or (+880) 18383-31990."
      ]
    },
    {
      id: 5,
      title: "No Refund or Cancellation Policy (if applicable)",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 6,
      title: "Changes to this Refund Policy",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
  ]

  return (
    <div className="text-sm text-bColor4">
        <h1 className="sub-heading" >Taupe Notch BD Refund Policy</h1>

        <p className="mt-2" >Thank you for shopping at Taupe Notch BD! We appreciate your business and want to ensure you’re happy with your purchase. Please read the following refund policy carefully.</p>

        <div className="mt-6">
          {
            refundPolicy.map(({ id, title, terms }, index) => (
              <div key={index} className="mt-5">
                <h2 className="font-semibold text-blackCustom ">{id}. {title}:</h2>
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
export default RefundPolicy