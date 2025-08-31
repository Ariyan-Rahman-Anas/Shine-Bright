import { images } from "@/assets"
import Slideshow from "@/components/shared/Slideshow"

const ExclusiveCollections = () => {
  const sampleImages1 = [
    images.ExclusiveCollections1,
    images.Hero1,
    images.ExclusiveCollections1,
    images.Hero2,
    images.ExclusiveCollections1,
  ];

  return (
    <div className="section-setup-1400 ">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-6">

        <div className="w-full md:w-[30%] space-y-2">
          <h1 className="text-4xl font-semibold uppercase">
            Exclusive top collections
          </h1>
          <p className="text-gray-600 w-2/3 md:w-full mx-auto ">
            Collections of the products our customers liked the most
          </p>
        </div>

        <div className="w-full md:w-[70%]">
          <Slideshow
            images={sampleImages1}
          />
        </div>

      </div>
    </div>
  )
}
export default ExclusiveCollections