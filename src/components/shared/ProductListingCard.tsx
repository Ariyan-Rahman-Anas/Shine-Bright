import { useGetPhotosByProductIdAndAttributeIdQuery } from "@/redux/api/productsApi"
import Image from "next/image"

const ProductListingCard = ({ item }: { item: any }) => {
    const {
        id,
        product_title,
        regular_price,
        discount_price,
        sales_price,
        shades,
        // color_attribute_id,
        // size_attribute_id,
        duplicateItems,
        quantity = 1
    } = item || {}

    const { data: photosData } = useGetPhotosByProductIdAndAttributeIdQuery({
        id: duplicateItems?.[0]?.product_id,
    })

    return (
        <div className="w-full md:w-[70%] space-y-2 my-2 ">
            <div
                key={id}
                className="border border-bColor1/50 rounded-md p-3 hover:shadow transition-shadow"
            >
                <div className="flex items-start space-x-4">
                    {/* Product Image */}
                    <div className="w-20">
                        <Image
                            src={photosData?.data?.[0]?.photoURL}
                            alt="product image"
                            className="w-full h-full rounded-lg border border-bColor1/50"
                            width={80}
                            height={80}
                        />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-blackCustom mb-2 leading-relaxed">
                            {product_title}
                        </h3>

                        <div className="flex items-center space-x-4 mb-2">
                            <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold text-blackCustom">
                                    {(discount_price ? discount_price : sales_price) * quantity}৳
                                </span>
                                {regular_price && regular_price !== sales_price && (
                                    <span className="text-sm text-bColor3 line-through">
                                        {(regular_price * quantity)}৳
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex md:flex-col flex-row items-center md:items-start justify-between space-x-2 md:space-x-0 text-sm text-bColor3">
                            {shades?.[0] && (
                                <div className="flex items-center space-x-1 md:space-x-2">
                                    <div className="w-4 h-4 bg-warning/50 rounded border border-warning/50"></div>
                                    <span>{shades[0]}</span>
                                </div>
                            )}

                            <p className="hidden md:block text-sm text-bColor3 my-2">
                                Quantity: {quantity}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListingCard