import { refundPolicy, siteInfo } from "@/constant"

const RefundPolicy = () => {

  return (
    <div className="text-sm text-bColor4">
      <h1 className="sub-heading" >{`${siteInfo.name}'s Refund Policy`} </h1>

      <p className="mt-2" >Thank you for shopping at Shine Bright! We appreciate your business and want to ensure you’re happy with your purchase. Please read the following refund policy carefully.</p>

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