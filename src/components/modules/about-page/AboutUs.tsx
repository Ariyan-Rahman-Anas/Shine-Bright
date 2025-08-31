import { images } from "@/assets"
import Image from "next/image"

const AboutUs = () => {

    const aboutus = [
        { id: 1, description: "TAUPE NOTCH's primary motive is to be a leading destination for beauty discovery and innovation. We aim to provide a curated selection of high-end and emerging beauty brands, offering a unique and personalized shopping experience." },
        { id: 2, description: "Trendsetter: We aim to be at the forefront of beauty trends, introducing new and innovative products to our customers." },
        { id: 3, description: "Experiential Retail: TAUPE NOTCH strives to create a unique and immersive shopping experience, with in-store beauty services, interactive displays, and knowledgeable beauty advisors." },
        { id: 4, description: "Personalized Service:We aim to provide personalized recommendations and beauty advice to our customers, helping them discover the perfect products for their needs." },
        { id: 5, description: "Curated Selection: We offer a carefully curated selection of high-end and emerging beauty brands, often featuring exclusive products and collaborations. This allows customers to discover new and innovative products they may not find elsewhere." },
        { id: 6, description: "Our combination of a curated selection, personalized service, innovative products, and community building has made it a favorite destination for beauty enthusiasts." },
    ]

    return (
        <div className="section-setup-1600 px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    aboutus.map(({ id, description }, index) => (
                        <div key={index} className="flex items-start">
                            <div className="w20 h24 relative">
                                <Image
                                    src={images.aboutNumberBg}
                                    alt="about number background"
                                    className="w-20 h-20  "
                                    width={80}
                                    height={96}
                                />
                                <h1 className="text-5xl font-semibold text-white absolute top-1/4 left-1/4">{id}</h1>
                            </div>
                            <p className="text-sm flex-1 mt-1.5">{description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default AboutUs