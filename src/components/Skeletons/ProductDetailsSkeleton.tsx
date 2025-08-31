const ProductDetailsSkeleton = () => {
  return (
    <div className='mb-16 animate-pulse'>
      <div className='mb-6'>
        {/* FloatingThemeBtn placeholder */}
        <div className="fixed top-4 right-4 w-12 h-12 bg-gray-200 rounded-full"></div>
      </div>
      
      <div className='md:hidden mb-4'>
        {/* GoBack button placeholder */}
        <div className="w-20 h-8 bg-gray-200 rounded"></div>
      </div>

      <div className='section-setup-1600-p hidden md:block mb-4'>
        {/* PathIndicator placeholder */}
        <div className="w-64 h-4 bg-gray-200 rounded"></div>
      </div>

      <div className='section-setup-1400-p md:mt-6 mb-6 md:mb-14'>
        <div className='flex flex-col md:flex-row items-start gap-x-10 space-y-6 md:space-y-0'>
          
          {/* Product Media Skeleton */}
          <div id="product-media" className='w-full md:w-1/2 overflow-hidden'>
            {/* Main image skeleton */}
            <div className='w-full lg:w-[758px] h-64 lg:h-[758px] bg-gray-200 rounded-lg'></div>
            
            {/* Thumbnail images skeleton */}
            <div className='flex items-center gap-2 flex-wrap mt-2'>
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="w-16 h-16 bg-gray-200 rounded-md"></div>
              ))}
            </div>
          </div>

          {/* Product Info Skeleton */}
          <div id="product-info" className='w-full md:w-1/2'>
            {/* Tags skeleton */}
            <div className="flex items-center flex-wrap gap-1 mb-4">
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="w-16 h-6 bg-gray-200 rounded"></div>
              ))}
            </div>

            {/* Title skeleton */}
            <div className="w-3/4 h-6 bg-gray-200 rounded mb-4"></div>

            {/* Price section skeleton */}
            <div className='flex items-center gap-4 mb-6'>
              <div className="w-20 h-6 bg-gray-200 rounded"></div>
              <div className="w-16 h-5 bg-gray-200 rounded"></div>
              <div className="w-24 h-8 bg-gray-200 rounded-full"></div>
            </div>

            {/* Quantity selector skeleton */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gray-200 rounded border-2"></div>
              <div className="w-32 h-10 bg-gray-200 rounded border-2"></div>
              <div className="w-10 h-10 bg-gray-200 rounded border-2"></div>
            </div>

            {/* Add to cart buttons skeleton */}
            <div className='flex items-center gap-2 mb-6'>
              <div className="w-56 h-10 bg-gray-200 rounded"></div>
              <div className="w-10 h-10 bg-gray-200 rounded"></div>
            </div>

            {/* Colors section skeleton */}
            <div className="mb-6">
              <div className="w-16 h-4 bg-gray-200 rounded mb-2"></div>
              <div className='flex items-center flex-wrap gap-1'>
                {[...Array(6)].map((_, idx) => (
                  <div key={idx} className="w-8 h-8 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>

            {/* Sizes section skeleton */}
            <div className="mb-6">
              <div className="w-12 h-4 bg-gray-200 rounded mb-2"></div>
              <div className='flex items-center flex-wrap gap-2'>
                {[...Array(4)].map((_, idx) => (
                  <div key={idx} className="w-12 h-8 bg-gray-200 rounded-md"></div>
                ))}
              </div>
            </div>

            {/* Accordion skeleton */}
            <div className='mb-6'>
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="border-b border-gray-200 py-4">
                  <div className="w-24 h-5 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>

            {/* Bottom banner skeleton */}
            <div className='w-full h-28 md:h-44 bg-gray-200 rounded-md'></div>
          </div>
        </div>
      </div>

      {/* Reviews and Products sections skeleton */}
      <div className='space-y-16'>
        {/* Reviews skeleton */}
        <div className="space-y-4">
          <div className="w-32 h-8 bg-gray-200 rounded mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="p-4 border rounded-lg">
                <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
                <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Products you'll love skeleton */}
        <div className="space-y-4">
          <div className="w-48 h-8 bg-gray-200 rounded mx-auto"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="space-y-2">
                <div className="w-full h-48 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsSkeleton