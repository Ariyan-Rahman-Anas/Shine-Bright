const DeliveryPolicy = () => {

  const deliveryPolicy = [
    {
      id: 1,
      title: "Order Processing Time",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 2,
      title: "Shipping Addresses",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 3,
      title: "Shipping Restrictions",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 4,
      title: "Delivery Confirmation",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
        "If you’ve done all of this and still haven’t received your refund, please contact us at info@taupenotch.com.bd or (+880) 18383-31990."
      ]
    },
    {
      id: 5,
      title: "Shipping Delays",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 6,
      title: "Returns Due to Non-Delivery",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
    {
      id: 7,
      title: "Contact Information",
      terms: [
        "To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.",
        "Items that are damaged, used, or not in their original condition may not be eligible for a refund.",
      ]
    },
  ]

  return (
    <div className="text-sm text-bColor4">
      <h1 className="sub-heading" >Taupe Notch BD Delivery Policy</h1>
      <p className="mt-2" >Thank you for choosing Taupe Notch BD as your trusted online product or service provider. This Delivery Policy outlines the terms and conditions regarding the delivery of products and services purchased through our platform. By placing an order with us, you agree to comply with and be bound by the following policies:</p>

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