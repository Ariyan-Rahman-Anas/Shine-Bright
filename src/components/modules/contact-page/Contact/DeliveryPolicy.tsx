import { deliveryPolicy, siteInfo } from "@/constant"

const DeliveryPolicy = () => {


  return (
    <div className="text-sm text-bColor4">
      <h1 className="sub-heading" >{`${siteInfo.name}'s Delivery Policy`} </h1>
      <p className="mt-2" >{`Thank you for choosing ${siteInfo.name} as your trusted online product or service provider. This Delivery Policy outlines the terms and conditions regarding the delivery of products and services purchased through our platform. By placing an order with us, you agree to comply with and be bound by the following policies:`}</p>

      <div className="mt-6">
        {
          deliveryPolicy.map(({ id, title, terms }, index) => (
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
export default DeliveryPolicy