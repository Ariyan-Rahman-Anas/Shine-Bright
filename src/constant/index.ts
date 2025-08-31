import { icons, images } from "@/assets";


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
            details: "the visionary leader Who has been the driving force behind Taupe Notch's extraordinary achievement. With 7 years of experience in the beauty industry , Shirin has a proven track record of advising appropriate products according to consumer’s concern. Under her leadership, Taupe Notch has become popular in Bangladesh and favorite to beauty enthusiasts . She has launched Taupe Notch’s own glitter and highlighter."
        },
        {
            img: images.T2,
            designation: "COO & Co-Founder",
            name: "Tanjin Esha",
            details: "the dynamic leader who have led Taupe Notch to remarkable success. He had the original vision for this company, and his unwavering passion has been instrumental in its growth. Meanwhile, he has brought exceptional operational expertise and strategic thinking to the table, ensuring that our vision becomes a reality. He have created a powerful synergy that has propelled Taupe Notch to the forefront of the beauty industry."
        },
        {
            img: images.T1,
            designation: "CPO & Co-Founder",
            name: "M.A. Atique",
            details: "With a distinguished career spanning 4 years, He brings a wealth of experience and expertise to TAUPE NOTCH .He helps in developing and implementing the company's long-term strategy, setting goals, and making key decisions. Under his leadership, we're confident that TAUPE NOTCH will continue to thrive and innovate."
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