import { icons, images } from "@/assets";


export const siteInfo = {
  name: "Shine Bright",
  email: "info@shine-bright.com",
  userEmail: "user@shine-bright.com",
  password: "SB@Acc#123",
  number: "+880 1610-195968",
  liveURL: "https://shine-bright.vercel.app"
}

export const userInfo = {
  id: "UUID-SB-acc-Id-#1",
  firstName: "Shine",
  lastName: "Bright",
  email: "me@shine-bright.com",
  password: "SB@Acc#123",
  phone: "+880 1610-195968"
}

export const siteNumber = "+880 1610-195968"

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
      { name: "Best Seller", route: "/products" },
      { name: "Top Picks", route: "/products" },
      { name: "Top Picks", route: "/products" },
      { name: "Top Picks", route: "/products" },
      { name: "Trending", route: "/products" },
      { name: "Personalized", route: "/products" },
      { name: "Personalizable", route: "/products" }
    ]
  },
  {
    title: "All Categories",
    items: [
      { name: "New Arrivals", route: "/products" },
      { name: "Best Seller", route: "/products" },
      { name: "Top Picks", route: "/products" },
      { name: "Top Picks", route: "/products" },
      { name: "Top Picks", route: "/products" },
      { name: "Trending", route: "/products" },
      { name: "Personalized", route: "/products" },
      { name: "Personalizable", route: "/products" }
    ]
  },
  {
    title: "All Brands",
    items: [
     { name: "New Arrivals", route: "/products" },
      { name: "Best Seller", route: "/products" },
      { name: "Top Picks", route: "/products" },
      { name: "Top Picks", route: "/products" },
      { name: "Top Picks", route: "/products" },
      { name: "Trending", route: "/products" },
      { name: "Personalized", route: "/products" },
      { name: "Personalizable", route: "/products" }
    ]
  },
]

export const allItemsCommon = [
  {
    title: "New Trending",
    items: [
      { name: "New Arrivals", route: "/new-arrivals" },
      { name: "Best Seller", route: "/best-seller" },
      { name: "Top Picks", route: "/top-picks" },
      { name: "Top Picks", route: "/top-picks" },
      { name: "Top Picks", route: "/top-picks" },
      { name: "Trending", route: "/trending" },
      { name: "Personalized", route: "/personalized" },
      { name: "Personalizable", route: "/personalizable" },
      { name: "Personalizable", route: "/personalizable" },
      { name: "Personalizable", route: "/personalizable" },
      { name: "Personalizable", route: "/personalizable" },
      { name: "Personalizable", route: "/personalizable" },
      { name: "Personalizable", route: "/personalizable" },
      { name: "Personalizable", route: "/personalizable" },
      { name: "Personalizable", route: "/personalizable" },
      { name: "Personalizable", route: "/personalizable" },
    ]
  },
  {
    title: "Serum",
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
    title: "Cream",
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
  {
    title: "Facewash",
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
  }
]


export const allBrands = [
  { id: 1, title: "Dr.Althea" },
  { id: 2, title: "Glow Recipe" },
  { id: 3, title: "Kiko Milano" },
  { id: 4, title: "Laneige" },
  { id: 5, title: "Mac Cosmetics" },
  { id: 6, title: "Maybelline" },
  { id: 7, title: "Nyx Cosmetics" },
  { id: 8, title: "Patrick Ta Beauty" },
  { id: 9, title: "Revolution" },
  { id: 10, title: "Sheglam" },
  { id: 11, title: "ELF" },
  { id: 12, title: "ELF-cD" },
  { id: 13, title: "Blowf" },
  { id: 14, title: "Chaif" },
  { id: 15, title: "Giana" },
]


export const teamMembers = [
  {
    img: images.T3,
    designation: "CEO & Founder",
    name: "Shaila Tabassum",
    details: `{the visionary leader Who has been the driving force behind ${siteInfo.name}'s extraordinary achievement. With 7 years of experience in the beauty industry , Shirin has a proven track record of advising appropriate products according to consumer’s concern. Under her leadership, ${siteInfo.name} has become popular in Bangladesh and favorite to beauty enthusiasts . She has launched ${siteInfo.name}'’s own glitter and highlighter.}`
  },
  {
    img: images.T2,
    designation: "COO & Co-Founder",
    name: "Tanjin Esha",
    details: `{the dynamic leader who have led ${siteInfo.name} to remarkable success. He had the original vision for this company, and his unwavering passion has been instrumental in its growth. Meanwhile, he has brought exceptional operational expertise and strategic thinking to the table, ensuring that our vision becomes a reality. He have created a powerful synergy that has propelled ${siteInfo.name} to the forefront of the beauty industry.}`
  },
  {
    img: images.T1,
    designation: "CPO & Co-Founder",
    name: "M.A. Atique",
    details: `{With a distinguished career spanning 4 years, He brings a wealth of experience and expertise to ${siteInfo.name}. He helps in developing and implementing the company's long-term strategy, setting goals, and making key decisions. Under his leadership, we're confident that ${siteInfo.name} will continue to thrive and innovate.}`
  }
]



export const cosOfBeautyProducts = [
  {
    id: 1,
    img: images.product1.pi1,
    category: "Hourglass",
    tags: ["Best Seller", "Value for Money", "Top Picks"],
    title: "Huda Beauty Easy Blur Airbrush Foundation",
    currentPrice: "12.99",
    previousPrice: "14.99",
    sizes: [10, 20, 25, 50, 100, 250, 500, 750],
    shades: ["#FF0000", "#00FF00", "#0000FF", "#C68B59", "#DBA36B", "#EDBB94", "#F5C3A8", "#F8CFC0", "#F9D2C4", "#FADAD0", "#FFF1DC", "#00FF07", "#0000FF"],
  },
  {
    id: 2,
    img: images.product1.pi2,
    title: "Huda Beauty Easy Blur Swatches Foundation",
  },
  {
    id: 3,
    img: images.product1.pi3,
    title: "Huda Beauty Easy Blur Blur Foundation Shades",
  },
  {
    id: 4,
    img: images.product1.pi4,
    title: "Huda Beauty Easy Blur Natural Airbrush Foundation with Niacinamide",
  },
  {
    id: 5,
    img: images.product1.pi5,
    title: "Huda Beauty Easy Blur Natural Airbrush Foundation with Niacinamide",
  },
  {
    id: 6,
    img: images.product1.pi6,
    title: "Huda Beauty Easy Blur Natural Airbrush Foundation with Niacinamide",
  }
]


export const ordersData = [
  {
    orderId: "Order-1001",
    invoiceId: "Inv-1001",
    orderDate: "1st Aug - 2025",
    phone: "+8801712345678",
    amount: 1500,
    numberOfProducts: 2,
    paymentStatus: "Paid",
    orderStatus: "Delivered",
    address: "House 12, Road 3, Dhanmondi, Dhaka"
  },
  {
    orderId: "Order-1002",
    invoiceId: "Inv-1002",
    orderDate: "3rd Aug - 2025",
    phone: "+8801912345678",
    amount: 2450,
    numberOfProducts: 4,
    paymentStatus: "Paid",
    orderStatus: "Shipped",
    address: "23/A, North Road, Mohammadpur, Dhaka"
  },
  {
    orderId: "Order-1003",
    invoiceId: "Inv-1003",
    orderDate: "5th Aug - 2025",
    phone: "+8801811122233",
    amount: 980,
    numberOfProducts: 1,
    paymentStatus: "Unpaid",
    orderStatus: "Cancelled",
    address: "Flat 5B, Green City, Chittagong"
  },
  {
    orderId: "Order-1004",
    invoiceId: "Inv-1004",
    orderDate: "8th Aug - 2025",
    phone: "+8801512345678",
    amount: 3200,
    numberOfProducts: 3,
    paymentStatus: "Pending",
    orderStatus: "Processing",
    address: "House 7, Road 9, Uttara, Dhaka"
  },
  {
    orderId: "Order-1005",
    invoiceId: "Inv-1005",
    orderDate: "10th Aug - 2025",
    phone: "+8801719988776",
    amount: 1750,
    numberOfProducts: 2,
    paymentStatus: "Paid",
    orderStatus: "ORDERED",
    address: "92, Station Road, Khulna"
  },
  {
    orderId: "Order-1006",
    invoiceId: "Inv-1006",
    orderDate: "12th Aug - 2025",
    phone: "+8801300123456",
    amount: 2100,
    numberOfProducts: 5,
    paymentStatus: "Paid",
    orderStatus: "Delivered",
    address: "Plot 16, Block B, Bashundhara, Dhaka"
  },
  {
    orderId: "Order-1007",
    invoiceId: "Inv-1007",
    orderDate: "15th Aug - 2025",
    phone: "+8801600987654",
    amount: 890,
    numberOfProducts: 1,
    paymentStatus: "Pending",
    orderStatus: "Shipped",
    address: "Sector 3, Agrabad, Chittagong"
  },
  {
    orderId: "Order-1008",
    invoiceId: "Inv-1008",
    orderDate: "18th Aug - 2025",
    phone: "+8801400123123",
    amount: 1340,
    numberOfProducts: 3,
    paymentStatus: "Unpaid",
    orderStatus: "Cancelled",
    address: "Jhawtola, Sylhet"
  }
]



export const returnRefundData = [
  {
    returnId: "A001",
    requestDate: "20th May, 2025",
    phone: "+8801722222222",
    amount: "1850 ",
    address: "23/A, 3rd floor, house no 211/A, Road no 234, Paterbag, jatrabari, Dhaka 1240",
    status: "Approved",
  },
  {
    returnId: "A002",
    requestDate: "20th May, 2025",
    phone: "+8801722222222",
    amount: "2400 ",
    address: "23/A, 3rd floor, house no 211/A, Road no 234, Paterbag, jatrabari, Dhaka 1240",
    status: "Processing",
  },
  {
    returnId: "A003",
    requestDate: "20th May, 2025",
    phone: "+8801722222222",
    amount: "950 ",
    address: "23/A, 3rd floor, house no 211/A, Road no 234, Paterbag, jatrabari, Dhaka 1240",
    status: "Rejected",
  },
  {
    returnId: "A004",
    requestDate: "20th May, 2025",
    phone: "+8801722222222",
    amount: "8200 ",
    address: "23/A, 3rd floor, house no 211/A, Road no 234, Paterbag, jatrabari, Dhaka 1240",
    status: "Approved",
  },
  {
    returnId: "A005",
    requestDate: "20th May, 2025",
    phone: "+8801722222222",
    amount: "3600 ",
    address: "23/A, 3rd floor, house no 211/A, Road no 234, Paterbag, jatrabari, Dhaka 1240",
    status: "Rejected",
  },
]


export const refundPolicy = [
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


export const deliveryPolicy = [
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


export const privacyPolicy = [
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


export const SBProductsData = [
  {
    "id": "p-1",
    "title": "Maybelline Lifter Gloss with Hyaluronic Acid",
    "product_code": "250904143126675",
    "product_type": "VARIABLE",
    "ingredients": "<p><span style=\"color: rgb(0, 0, 0)\">Acid Triglyceride, Bis-Diglyceryl Polyacyladipate-2, Pentaerythrityl Tetraisostearate, Polybutene, Tridecyl Trimellitate, Diisostearyl Malate, Silica Dimethyl Silylate, Phenoxyethanol, Ethylhexyl Palmitate, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Ethylhexylglycerin, Calcium Sodium Borosilicate, Sorbic Acid, Calcium Aluminum Borosilicate, Tocopheryl Acetate, Sodium Saccharin, Alumina, Synthetic Fluorphlogopite, Silica, Polybutylene Terephthalate, Trihydroxystearin, Cocos Nucifera Oil / Coconut Oil, Aluminum Hydroxide, Ethylene/Va Copolymer, Acrylates Copolymer, Tin Oxide, Magnesium Silicate, Sodium Hyaluronate, Tocopherol, Glucomannan, Parfum / Fragrance.</span></p>",
    "other": null,
    "barcode": null,
    "slug": "maybelline-lifter-gloss-with-hyaluronic-acid",
    "price_type": "COMMON",
    "stock_type": "COMMON",
    "short_description": "Lifter Gloss is formulated with Hyaluronic Acid that visibly smooths lip surface and enhances lip contour with high shine for fuller looking lips.",
    "long_description": "<p><span>Lifter Gloss is formulated to help your lips look hydrated and shiny while being packed with benefits.<br><br><strong>Key Features:</strong><br><br></span></p><ul><li><p><span>Hydrating formula made with Hyaluronic Acid</span></p></li><li><p><span>20 modern shades from clear, pinks, nudes, and more</span></p></li><li><p><span>Non-sticky</span></p></li><li><p><span>High-shine finish for a fuller, lifted lip look</span></p></li><li><p><span>Allergy tested</span></p></li><li><p><span>Dermatologist tested</span></p></li><li><p><span>Suitable for sensitive skin.</span></p></li></ul>",
    "status": "PUBLISHED",
    "attributes": [
      {
        "id": "c-1",
        "attribute_type": "COLOR",
        "title": "002-Ice-1",
        "description": "#ffb8bd",
        "photos": [
          {
            "id": "i-1",
            "product_id": "p-1",
            "size_attribute_id": "s-1",
            "color_attribute_id": "c-1",
            "is_primary": true,
            "is_thumbnail": false,
            "photoURL": images.product1.pi1
          },
          {
            "id": "i-2",
            "product_id": "p-1",
            "size_attribute_id": "s-1",
            "color_attribute_id": "c-1",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL": images.product1.pi2
          }
        ]
      },
      {
        "id": "c-2",
        "attribute_type": "COLOR",
        "title": "002Ice-2",
        "description": "#F75270",
        "photos": [
          {
            "id": "i-3",
            "product_id": "p-1",
            "size_attribute_id": "s-2",
            "color_attribute_id": "c-2",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL": images.product1.pi3
          }
        ]
      },
      {
        "id": "c-3",
        "attribute_type": "COLOR",
        "title": "002Ice-3",
        "description": "#E62727",
        "photos": [
          {
            "id": "i-4",
            "product_id": "p-1",
            "size_attribute_id": "s-2",
            "color_attribute_id": "c-3",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL": images.product1.pi4
          }
        ]
      },
      {
        "id": "c-4",
        "attribute_type": "COLOR",
        "title": "002Ice-4",
        "description": "#9A3F3F",
        "photos": [
          {
            "id": "i-5",
            "product_id": "p-1",
            "size_attribute_id": "s-3",
            "color_attribute_id": "c-4",
            "is_primary": false,
            "is_thumbnail": true,
            "photoURL": images.product1.pi5
          }
        ]
      },
      {
        "id": "c-5",
        "attribute_type": "COLOR",
        "title": "002Ice-5",
        "description": "#F08787",
        "photos": [
          {
            "id": "i-6",
            "product_id": "p-1",
            "size_attribute_id": "s-3",
            "color_attribute_id": "c-5",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL": images.product1.pi6
          }
        ]
      },
      {
        "id": "s-1",
        "attribute_type": "SIZE",
        "title": "170 ML",
        "description": "170 ML"
      },
      {
        "id": "s-2",
        "attribute_type": "SIZE",
        "title": "250 ML",
        "description": "250 ML"
      },
      {
        "id": "s-3",
        "attribute_type": "SIZE",
        "title": "300 ML",
        "description": "300 ML"
      }
    ],
    "tags": [
      {
        "title": "Best Seller",
        "photo_path": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/TAG_MASTER/64db1648-IMG_1528.png"
      },
      {
        "title": "Trending",
        "photo_path": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/TAG_MASTER/trending.png"
      },
      {
        "title": "New Arrival",
        "photo_path": null
      }
    ],
    "pricing_groups": [
      {
        "id": "pg-1",
        "product_id": "p-1",
        "discount_price": null,
        "discount_start": null,
        "discount_end": null,
        "grouped_id": "1",
        "is_infinite": true,
        "is_stockout": false,
        "is_discounted": false,
        "regular_price": "1450",
        "discount_type": null,
        "discount_value": "0",
        "color": {
          "id": "c-1",
          "title": "002Ice-1",
          "description": "#ffb8bd"
        },
        "size": {
          "id": "s-1",
          "title": "170 ML",
          "description": "170 ML"
        }
      },
      {
        "id": "pg-2",
        "product_id": "p-1",
        "discount_price": null,
        "discount_start": null,
        "discount_end": null,
        "grouped_id": "2",
        "is_infinite": true,
        "is_stockout": false,
        "is_discounted": false,
        "regular_price": "1680",
        "discount_type": null,
        "discount_value": "0",
        "color": {
          "id": "c-2",
          "title": "002Ice-2",
          "description": "#F75270"
        },
        "size": {
          "id": "s-2",
          "title": "250 ML",
          "description": "250 ML"
        }
      },
      {
        "id": "pg-3",
        "product_id": "p-1",
        "discount_price": null,
        "discount_start": null,
        "discount_end": null,
        "grouped_id": "3",
        "is_infinite": true,
        "is_stockout": false,
        "is_discounted": false,
        "regular_price": "1850",
        "discount_type": null,
        "discount_value": "0",
        "color": {
          "id": "c-3",
          "title": "002Ice-3",
          "description": "#E62727"
        },
        "size": {
          "id": "s-3",
          "title": "300 ML",
          "description": "300 ML"
        }
      }
    ],
    "categories": [
      {
        "category_type": "LEVEL_1",
        "description": null,
        "discount_type": null,
        "discount_value": "0",
        "show_in_nav": false,
        "is_showcase": false,
        "show_in_sidebar": false,
        "is_active": true,
        "title": "Makeup"
      }
    ],
    "brands": [
      {
        "id": "b-1",
        "description": "Maybelline – New York's iconic beauty brand, bringing trendy, high-performance makeup at affordable prices.",
        "title": "Maybelline",
        "discount_type": null,
        "discount_value": "0"
      }
    ]
  },
  {
    "id": "p-2",
    "title": "L'Oreal Paris True Match Foundation",
    "product_code": "250904143126676",
    "product_type": "VARIABLE",
    "ingredients": "<p><span style=\"color: rgb(0, 0, 0)\">Aqua/Water, Cyclopentasiloxane, Nylon-12, Isododecane, Alcohol Denat., Cyclohexasiloxane, PEG-10 Dimethicone, Sodium Chloride, Phenoxyethanol, Magnesium Sulfate, Disteardimonium Hectorite, Ethylhexylglycerin, Tocopherol, Parfum/Fragrance, Propylene Carbonate, Aluminum Hydroxide, Titanium Dioxide, Iron Oxides.</span></p>",
    "other": null,
    "barcode": null,
    "slug": "loreal-paris-true-match-foundation",
    "price_type": "COMMON",
    "stock_type": "COMMON",
    "short_description": "True Match Foundation blends seamlessly into skin for a natural, weightless feel with buildable coverage.",
    "long_description": "<p><span>Perfect match foundation that adapts to your skin tone for a flawless finish.<br><br><strong>Key Features:</strong><br><br></span></p><ul><li><p><span>45 shades to match every skin tone</span></p></li><li><p><span>Buildable medium coverage</span></p></li><li><p><span>Natural finish</span></p></li><li><p><span>Long-lasting 24HR wear</span></p></li><li><p><span>Non-comedogenic</span></p></li><li><p><span>Suitable for all skin types</span></p></li></ul>",
    "status": "PUBLISHED",
    "attributes": [
      {
        "id": "c-1",
        "attribute_type": "COLOR",
        "title": "1N-Ivory",
        "description": "#f5deb3",
        "photos": [
          {
            "id": "i-1",
            "product_id": "p-2",
            "size_attribute_id": "s-1",
            "color_attribute_id": "c-1",
            "is_primary": false,
            "is_thumbnail": true,
            "photoURL": images.product2.p2i1
          },
          {
            "id": "i-2",
            "product_id": "p-2",
            "size_attribute_id": "s-1",
            "color_attribute_id": "c-1",
            "is_primary": false,
            "is_thumbnail": true,
            "photoURL": images.product2.p2i2
          },
        ]
      },
      {
        "id": "c-2",
        "attribute_type": "COLOR",
        "title": "2N-Vanilla",
        "description": "#f4e4c9",
        "photos": [
          {
            "id": "i-3",
            "product_id": "p-2",
            "size_attribute_id": "s-1",
            "color_attribute_id": "c-2",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL":images.product2.p2i3
          },
          {
            "id": "i-4",
            "product_id": "p-2",
            "size_attribute_id": "s-1",
            "color_attribute_id": "c-2",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL":images.product2.p2i4
          },
        ]
      },
      {
        "id": "c-3",
        "attribute_type": "COLOR",
        "title": "3N-Creamy-Beige",
        "description": "#e6d3b5",
        "photos": [
          {
            "id": "i-5",
            "product_id": "p-2",
            "size_attribute_id": "s-2",
            "color_attribute_id": "c-3",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL": images.product2.p2i5
          },
          {
            "id": "i-6",
            "product_id": "p-2",
            "size_attribute_id": "s-2",
            "color_attribute_id": "c-3",
            "is_primary": true,
            "is_thumbnail": false,
            "photoURL": images.product2.p2i6
          }
        ]
      },
      {
        "id": "c-4",
        "attribute_type": "COLOR",
        "title": "Creamy-Beige",
        "description": "#F75270",
        "photos": [
          {
            "id": "i-7",
            "product_id": "p-2",
            "size_attribute_id": "s-2",
            "color_attribute_id": "c-4",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL":images.product2.p2i7
          },
           {
            "id": "i-8",
            "product_id": "p-2",
            "size_attribute_id": "s-2",
            "color_attribute_id": "c-4",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL":images.product2.p2i8
          }
        ]
      },
      {
        "id": "s-1",
        "attribute_type": "SIZE",
        "title": "30 ML",
        "description": "30 ML"
      },
      {
        "id": "s-2",
        "attribute_type": "SIZE",
        "title": "50 ML",
        "description": "50 ML"
      },
      {
        "id": "s-3",
        "attribute_type": "SIZE",
        "title": "150 ML",
        "description": "150 ML"
      }
    ],
    "tags": [
      {
        "title": "New Arrival",
        "photo_path": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/TAG_MASTER/new-arrival.png"
      },
      {
        "title": "Award Winner",
        "photo_path": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/TAG_MASTER/award-winner.png"
      }
    ],
    "pricing_groups": [
      {
        "id": "pg-1",
        "product_id": "p-2",
        "discount_price": "1800",
        "discount_start": "2024-01-01",
        "discount_end": "2024-12-31",
        "grouped_id": "1",
        "is_infinite": true,
        "is_stockout": false,
        "is_discounted": true,
        "regular_price": "2200",
        "discount_type": "PERCENTAGE",
        "discount_value": "18",
        "color": {
          "id": "c-1",
          "title": "1N-Ivory",
          "description": "#f5deb3"
        },
        "size": {
          "id": "s-1",
          "title": "30 ML",
          "description": "30 ML"
        }
      },
      {
        "id": "pg-2",
        "product_id": "p-2",
        "discount_price": "2400",
        "discount_start": "2024-01-01",
        "discount_end": "2024-12-31",
        "grouped_id": "2",
        "is_infinite": true,
        "is_stockout": false,
        "is_discounted": true,
        "regular_price": "2800",
        "discount_type": "PERCENTAGE",
        "discount_value": "14",
        "color": {
          "id": "c-2",
          "title": "2N-Vanilla",
          "description": "#f4e4c9"
        },
        "size": {
          "id": "s-2",
          "title": "50 ML",
          "description": "50 ML"
        }
      },
       {
        "id": "pg-3",
        "product_id": "p-2",
        "discount_price": "3200",
        "discount_start": "2024-01-01",
        "discount_end": "2024-12-31",
        "grouped_id": "3",
        "is_infinite": true,
        "is_stockout": false,
        "is_discounted": true,
        "regular_price": "3800",
        "discount_type": "PERCENTAGE",
        "discount_value": "15",
        "color": {
          "id": "c-4",
          "title": "Creamy-Beige",
          "description": "#F75270"
        },
        "size": {
          "id": "s-3",
          "title": "150 ML",
          "description": "150 ML"
        }
      }
    ],
    "categories": [
      {
        "category_type": "LEVEL_1",
        "description": null,
        "discount_type": null,
        "discount_value": "0",
        "show_in_nav": true,
        "is_showcase": true,
        "show_in_sidebar": true,
        "is_active": true,
        "title": "Face"
      }
    ],
    "brands": [
      {
        "id": "b-1",
        "description": "L'Oreal Paris - Because you're worth it. Premium beauty products for everyone.",
        "title": "L'Oreal Paris",
        "discount_type": null,
        "discount_value": "0"
      }
    ]
  },
  {
    "id": "p-3",
    "title": "MAC Ruby Woo Lipstick",
    "product_code": "250904143126677",
    "product_type": "SIMPLE",
    "ingredients": "<p><span style=\"color: rgb(0, 0, 0)\">Ricinus Communis Seed Oil, Ethylhexyl Palmitate, Tridecyl Trimellitate, Ozokerite, Caprylic/Capric Triglyceride, Euphorbia Cerifera Wax, Copernicia Cerifera Wax, Tocopheryl Acetate, Phenyl Trimethicone, Vanilla Planifolia Fruit Extract, Red 7 Lake, Red 6, Titanium Dioxide.</span></p>",
    "other": null,
    "barcode": null,
    "slug": "mac-ruby-woo-lipstick",
    "price_type": "PREMIUM",
    "stock_type": "LIMITED",
    "short_description": "Iconic matte red lipstick with intense color payoff and long-lasting formula.",
    "long_description": "<p><span>The legendary Ruby Woo - MAC's most iconic red lipstick with a classic matte finish.<br><br><strong>Key Features:</strong><br><br></span></p><ul><li><p><span>Intense matte finish</span></p></li><li><p><span>High-impact color</span></p></li><li><p><span>Long-wearing formula</span></p></li><li><p><span>Smooth application</span></p></li><li><p><span>Iconic red shade</span></p></li><li><p><span>Professional quality</span></p></li></ul>",
    "status": "PUBLISHED",
    "attributes": [
      {
        "id": "c-1",
        "attribute_type": "COLOR",
        "title": "Ruby-Woo",
        "description": "#d2232a",
        "photos": [
          {
            "id": "i-1",
            "product_id": "p-3",
            "size_attribute_id": "s-1",
            "color_attribute_id": "c-1",
            "is_primary": true,
            "is_thumbnail": true,
            "photoURL": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/product-photos/mac-ruby-woo.jpg"
          }
        ]
      },
      {
        "id": "c-2",
        "attribute_type": "COLOR",
        "title": "Velvet-Teddy",
        "description": "#a67c73",
        "photos": [
          {
            "id": "i-2",
            "product_id": "p-3",
            "size_attribute_id": "s-1",
            "color_attribute_id": "c-2",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/product-photos/mac-velvet-teddy.jpg"
          }
        ]
      },
      {
        "id": "s-1",
        "attribute_type": "SIZE",
        "title": "3g",
        "description": "Standard Size"
      }
    ],
    "tags": [
      {
        "title": "Limited Edition",
        "photo_path": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/TAG_MASTER/limited-edition.png"
      },
      {
        "title": "Best Seller",
        "photo_path": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/TAG_MASTER/64db1648-IMG_1528.png"
      }
    ],
    "pricing_groups": [
      {
        "id": "pg-1",
        "product_id": "p-3",
        "discount_price": null,
        "discount_start": null,
        "discount_end": null,
        "grouped_id": "1",
        "is_infinite": false,
        "is_stockout": false,
        "is_discounted": false,
        "regular_price": "3200",
        "discount_type": null,
        "discount_value": "0",
        "color": {
          "id": "c-1",
          "title": "Ruby-Woo",
          "description": "#d2232a"
        },
        "size": {
          "id": "s-1",
          "title": "3g",
          "description": "Standard Size"
        }
      },
      {
        "id": "pg-2",
        "product_id": "p-3",
        "discount_price": null,
        "discount_start": null,
        "discount_end": null,
        "grouped_id": "2",
        "is_infinite": false,
        "is_stockout": false,
        "is_discounted": false,
        "regular_price": "3200",
        "discount_type": null,
        "discount_value": "0",
        "color": {
          "id": "c-2",
          "title": "Velvet-Teddy",
          "description": "#a67c73"
        },
        "size": {
          "id": "s-1",
          "title": "3g",
          "description": "Standard Size"
        }
      }
    ],
    "categories": [
      {
        "category_type": "LEVEL_1",
        "description": null,
        "discount_type": null,
        "discount_value": "0",
        "show_in_nav": true,
        "is_showcase": true,
        "show_in_sidebar": false,
        "is_active": true,
        "title": "Lips"
      }
    ],
    "brands": [
      {
        "id": "b-1",
        "description": "MAC Cosmetics - Professional makeup artistry for all ages, races, and sexes.",
        "title": "MAC",
        "discount_type": null,
        "discount_value": "0"
      }
    ]
  },
  {
    "id": "p-4",
    "title": "Urban Decay Naked Heat Eyeshadow Palette",
    "product_code": "250904143126678",
    "product_type": "SIMPLE",
    "ingredients": "<p><span style=\"color: rgb(0, 0, 0)\">Talc, Zinc Stearate, Dimethicone, Boron Nitride, Lauroyl Lysine, Magnesium Myristate, Caprylic/Capric Triglyceride, Phenoxyethanol, Caprylyl Glycol, Dimethiconol, Tocopheryl Acetate, Mica, Titanium Dioxide, Iron Oxides, Ultramarines.</span></p>",
    "other": null,
    "barcode": null,
    "slug": "urban-decay-naked-heat-palette",
    "price_type": "PREMIUM",
    "stock_type": "COMMON",
    "short_description": "12 amber-hued neutral eyeshadows in matte and metallic finishes for versatile warm-toned looks.",
    "long_description": "<p><span>Naked Heat Palette featuring 12 gorgeous warm-toned eyeshadows perfect for creating sultry, smoky looks.<br><br><strong>Key Features:</strong><br><br></span></p><ul><li><p><span>12 warm amber and bronze shades</span></p></li><li><p><span>Mix of matte and metallic finishes</span></p></li><li><p><span>Highly pigmented formula</span></p></li><li><p><span>Buttery smooth application</span></p></li><li><p><span>Includes double-ended brush</span></p></li><li><p><span>Long-lasting wear</span></p></li></ul>",
    "status": "PUBLISHED",
    "attributes": [
      {
        "id": "c-1",
        "attribute_type": "COLOR",
        "title": "Naked-Heat",
        "description": "#b8860b",
        "photos": [
          {
            "id": "i-1",
            "product_id": "p-4",
            "size_attribute_id": "s-1",
            "color_attribute_id": "c-1",
            "is_primary": true,
            "is_thumbnail": true,
            "photoURL": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/product-photos/naked-heat-palette.jpg"
          }
        ]
      },
      {
        "id": "s-1",
        "attribute_type": "SIZE",
        "title": "Full Size",
        "description": "Standard Palette Size"
      }
    ],
    "tags": [
      {
        "title": "Trending",
        "photo_path": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/TAG_MASTER/trending.png"
      },
      {
        "title": "Limited Edition",
        "photo_path": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/TAG_MASTER/limited-edition.png"
      }
    ],
    "pricing_groups": [
      {
        "id": "pg-1",
        "product_id": "p-4",
        "discount_price": "4500",
        "discount_start": "2024-08-01",
        "discount_end": "2024-09-30",
        "grouped_id": "1",
        "is_infinite": true,
        "is_stockout": false,
        "is_discounted": true,
        "regular_price": "5200",
        "discount_type": "FIXED",
        "discount_value": "700",
        "color": {
          "id": "c-1",
          "title": "Naked-Heat",
          "description": "#b8860b"
        },
        "size": {
          "id": "s-1",
          "title": "Full Size",
          "description": "Standard Palette Size"
        }
      }
    ],
    "categories": [
      {
        "category_type": "LEVEL_1",
        "description": null,
        "discount_type": null,
        "discount_value": "0",
        "show_in_nav": true,
        "is_showcase": true,
        "show_in_sidebar": true,
        "is_active": true,
        "title": "Eyes"
      }
    ],
    "brands": [
      {
        "id": "b-1",
        "description": "Urban Decay - Beauty with an edge. Edgy, innovative makeup for fearless self-expression.",
        "title": "Urban Decay",
        "discount_type": null,
        "discount_value": "0"
      }
    ]
  },
]