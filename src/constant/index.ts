import { icons, images } from "@/assets";

export const siteName = "Shine Bright"
export const email = "info@shine-bright.com"
export const siteURL = "https://shine-bright.vercel.app"

export const domPurifyAllowedTags = [
    'p', 'strong', 'span', 'em', 'b', 'i', 'br', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'a', 'img', 'table', 'thead', 'tbody', 'tr', 'td', 'th'
]

export const domPurifyAllowedAttributes = [
    'style', 'class', 'href', 'src', 'alt', 'title', 'target'
]


export const paymentMethods = [
        { name: "mastercard", icon: icons.mastercard },
        { name: "amex", icon: icons.Amex },
        { name: "union", icon: icons.Union },
        { name: "bkash", icon: icons.bKash },
        { name: "rocket", icon: icons.rocket },
        { name: "nexus", icon: icons.nexus },
        { name: "qcash", icon: icons.qcash },
        { name: "nagad", icon: icons.nagad },
    ]

interface CountryCodeOption {
    value: string;
    label: string;
}
export const countryCodes: CountryCodeOption[] = [
    { value: "+880", label: "+880" },
    { value: "+966", label: "+966" },
    { value: "+1", label: "+1" },
    { value: "+44", label: "+44" },
    { value: "+91", label: "+91" },
    { value: "+86", label: "+86" },
] as const;


export const allItems = [
    {
        title: "All Products",
        items: [
            { name: "New Arrivals", route: "/products" },
            { name: "Best Seller", route: "/best-seller" },
            { name: "Top Picks", route: "/top-picks" },
            { name: "Top Picks", route: "/top-picks" },
            { name: "Top Picks", route: "/top-picks" },
            { name: "Trending", route: "/trending" },
            { name: "Personalized", route: "/personalized" },
            { name: "Personalizable", route: "/personalizable" },
        ]
    },
    {
        title: "All Categories",
        items: [
            { name: "New Arrivals", route: "/new-arrivals" },
            { name: "Best Seller", route: "/best-seller" },
            { name: "Top Picks", route: "/top-picks" },
            { name: "Top Picks", route: "/top-picks" },
            { name: "Trending", route: "/trending" },
            { name: "Trending", route: "/trending" },
            { name: "Personalized", route: "/personalized" },
            { name: "Personalizable", route: "/personalizable" },
        ]
    },
    {
        title: "All Brands",
        items: [
            { name: "New Arrivals", route: "/new-arrivals" },
            { name: "Best Seller", route: "/best-seller" },
            { name: "Top Picks", route: "/top-picks" },
            { name: "Top Picks", route: "/top-picks" },
            { name: "Top Picks", route: "/top-picks" },
            { name: "Trending", route: "/trending" },
            { name: "Personalized", route: "/personalized" },
            { name: "Personalizable", route: "/personalizable" },
        ]
    },
]

export  const teamMembers = [
        {
            img: images.T3,
            designation: "CEO & Founder",
            name: "Shaila Tabassum",
            details: `{the visionary leader Who has been the driving force behind ${siteName}'s extraordinary achievement. With 7 years of experience in the beauty industry , Shirin has a proven track record of advising appropriate products according to consumer’s concern. Under her leadership, ${siteName} has become popular in Bangladesh and favorite to beauty enthusiasts . She has launched ${siteName}'’s own glitter and highlighter.}`
        },
        {
            img: images.T2,
            designation: "COO & Co-Founder",
            name: "Tanjin Esha",
            details: `{the dynamic leader who have led ${siteName} to remarkable success. He had the original vision for this company, and his unwavering passion has been instrumental in its growth. Meanwhile, he has brought exceptional operational expertise and strategic thinking to the table, ensuring that our vision becomes a reality. He have created a powerful synergy that has propelled ${siteName} to the forefront of the beauty industry.}`
        },
        {
            img: images.T1,
            designation: "CPO & Co-Founder",
            name: "M.A. Atique",
            details: `{With a distinguished career spanning 4 years, He brings a wealth of experience and expertise to ${siteName}. He helps in developing and implementing the company's long-term strategy, setting goals, and making key decisions. Under his leadership, we're confident that ${siteName} will continue to thrive and innovate.}`
        }
    ]



export const AllProducts = [
    {
        id: 1,
        img: images.P1,
        media: [images.P1, images.P2, images.P3, images.AP1, images.P2, images.P3],
        category: "Hourglass",
        tags: ["Best Seller", "Value for Money", "Top Picks"],
        title: "Huda Beauty Easy Blur Natural Airbrush Foundation with Niacinamide",
        currentPrice: "12.99",
        previousPrice: "14.99",
        sizes:[10, 20, 25, 50, 100, 250, 500, 750],
        shades:["#FF0000", "#00FF00", "#0000FF", "#C68B59", "#DBA36B", "#EDBB94", "#F5C3A8", "#F8CFC0", "#F9D2C4", "#FADAD0", "#FFF1DC", "#00FF07", "#0000FF"],
    },
    {
        id: 2,
        img: images.P2,
        media: [images.P1, images.P2, images.P3, images.AP1, images.P2, images.P3],
        category: "Hourglass",
        tags: ["Best Seller", "Value for Money", "Top Picks"],
        title: "Huda Beauty Easy Blur Natural Airbrush Foundation with Niacinamide",
        shades: ["#FF0000", "#00FF00", "#0000FF", "#C68B59", "#DBA36B", "#EDBB94", "#F5C3A8", "#F8CFC0", "#F9D2C4", "#FADAD0", "#FFF1DC", "#00FF07", "#0000FF"],
        currentPrice: "12.99",
        previousPrice: "14.99",
        sizes:[10, 20, 25, 50, 100, 250, 500, 750],
    },
    {
        id: 3,
        img: images.P3,
        media: [images.P1, images.P2, images.P3, images.AP1, images.P2, images.P3],
        category: "Hourglass",
        tags: ["Best Seller", "Value for Money", "Top Picks"],
        title: "Huda Beauty Easy Blur Natural Airbrush Foundation with Niacinamide",
        currentPrice: "12.99",
        previousPrice: "14.99",
        sizes:[10, 20, 25, 50, 100, 250, 500, 750],
        shades:["#FF0000", "#00FF00", "#0000FF", "#C68B59", "#DBA36B", "#EDBB94", "#F5C3A8", "#F8CFC0", "#F9D2C4", "#FADAD0", "#FFF1DC", "#00FF07", "#0000FF"],
    },
    {
        id: 4,
        img: images.P3,
        media: [images.P1, images.P2, images.P3, images.AP1, images.P2, images.P3],
        category: "Hourglass",
        tags: ["Best Seller", "Value for Money", "Top Picks"],
        title: "Huda Beauty Easy Blur Natural Airbrush Foundation with Niacinamide",
        currentPrice: "12.99",
        previousPrice: "14.99",
        sizes:[10, 20, 25, 50, 100, 250, 500, 750],
        shades:["#FF0000", "#00FF00", "#0000FF", "#C68B59", "#DBA36B", "#EDBB94", "#F5C3A8", "#F8CFC0", "#F9D2C4", "#FADAD0", "#FFF1DC", "#00FF07", "#0000FF"],
    },
    {
        id: 5,
        img: images.P2,
        media: [images.P1, images.P2, images.P3, images.AP1, images.P2, images.P3],
        category: "Hourglass",
        tags: ["Best Seller", "Value for Money", "Top Picks"],
        title: "Huda Beauty Easy Blur Natural Airbrush Foundation with Niacinamide",
        currentPrice: "12.99",
        previousPrice: "14.99",
        sizes:[10, 20, 25, 50, 100, 250, 500, 750],
        shades:["#FF0000", "#00FF00", "#0000FF", "#C68B59", "#DBA36B", "#EDBB94", "#F5C3A8", "#F8CFC0", "#F9D2C4", "#FADAD0", "#FFF1DC", "#00FF07", "#0000FF"],
    },
    {
        id: 6,
        img: images.P1,
        media: [images.P1, images.P2, images.P3, images.AP1, images.P2, images.P3],
        category: "Hourglass",
        tags: ["Best Seller", "Value for Money", "Top Picks"],
        title: "Huda Beauty Easy Blur Natural Airbrush Foundation with Niacinamide",
        currentPrice: "12.99",
        previousPrice: "14.99",
        sizes:[10, 20, 25, 50, 100, 250, 500, 750],
        shades:["#FF0000", "#00FF00", "#0000FF", "#C68B59", "#DBA36B", "#EDBB94", "#F5C3A8", "#F8CFC0", "#F9D2C4", "#FADAD0", "#FFF1DC", "#00FF07", "#0000FF"],
    }
]


export   const refundPolicy = [
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
        "If you’ve done all of this and still haven’t received your refund, please contact us at info@shine-bright.com or (+880) 1610-195968."
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


  export   const deliveryPolicy = [
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
        "If you’ve done all of this and still haven’t received your refund, please contact us at info@shine-bright.com or (+880) 1610-195968."
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
  

export   const privacyPolicy = [
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
        "If you’ve done all of this and still haven’t received your refund, please contact us at info@shine-bright.com or (+880) 18383-31990."
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

  export const contactInfo = [
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
        "If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at info@shine-bright.com.",
        "This Privacy Policy was last updated on 10/07/2024."
      ]
    },
]
  

export const termsAndCondition = [
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
        "If you’ve done all of this and still haven’t received your refund, please contact us at info@shine-bright.com or (+880) 1610-195968."
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