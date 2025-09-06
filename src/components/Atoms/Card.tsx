"use client"

import Image from "next/image"
import ColorPicker from "./ColorPicker"
import { useSelector } from "react-redux"
import { CartItem } from "@/redux/features/cartSlice"
import Link from "next/link"
import useManageWishlist from "@/hooks/useManageWishlist"
import { wishlistItems } from "@/redux/features/wishlistSlice"
import { LuHeart } from "react-icons/lu"
import PrimaryButton from "@/components/shared/PrimaryButton"
import SecondaryButton from "@/components/shared/SecondaryButton"

const Card = ({ product, isBtn = true, isColorPicker = true }: { product: any, isBtn?: boolean, isColorPicker?: boolean }) => {
    const { toggleWishlist } = useManageWishlist()
    const wishlistItemsAll = useSelector(wishlistItems)
    const { selected } = useSelector((state: any) => state.category)

    const { id, slug, title, tags, pricing_groups, attributes, productCategories } = product || {}
    // Flatten all photos from all attributes and find the thumbnail
    const allPhotos = attributes?.flatMap((attr: any) => attr.photos || []) || []
    const thumbnailPhoto = allPhotos.find((photo: any) => photo?.is_thumbnail === true)
    const colorAttributes = attributes?.filter((item: any) => item?.attribute_type === "COLOR")
    const sizeAttributes = attributes?.filter((item: any) => item?.attribute_type === "SIZE")
    const allShades = colorAttributes?.filter((item: any) => item?.title !== "No Shade")?.map((item: any) => item?.description)
    const allSizes = sizeAttributes?.map((item: any) => item?.description)

    const itemForCart: CartItem = {
        id: id as string,
        title,
        quantity: 1,
        image: thumbnailPhoto?.photoURL,
        color: allShades?.[0],
        size: allSizes?.[0],
        sales_price: pricing_groups?.[0]?.regular_price
    }

    const firstAvailableProduct = pricing_groups?.find((item: any) => item?.is_stockout === false)
    const regular_price = firstAvailableProduct?.regular_price
    const discount_price = firstAvailableProduct?.discount_price

    const stockoutProducts = pricing_groups?.filter((item: any) => item?.is_stockout === true)
    const checkingAvailability = pricing_groups?.length === stockoutProducts?.length

    return (
        <div className="relative max-w-[368px] h-full max-h-[583px] text-sm flex flex-col justify-between">
            <div id="product-card" >
                <div id="product photo" className="relative max-h-72 overflow-hidden">
                    <div className="h-full w-full max-h-72 md:h-72 overflow-hidden">
                        <Image
                            src={thumbnailPhoto?.photoURL ?? "https://placehold.co/368x366"}
                            alt="Product's Thumbnail (thumbnail or primary photo not found) "
                            className="w-full h-full object-cover rounded"
                            loading="lazy"
                            height={1080}
                            width={1080}
                        />
                    </div>

                    <div className="absolute top-2 left-0 pl-2 flex items-start justify-between gap-2 w-full ">
                        <div className="w-2/3">
                            {tags && (
                                <div className="flex items-center flex-wrap gap-1">
                                    {tags?.slice(0, 3)?.map(({ title }: any, index: number) => (
                                        <span key={index} className="px-2 py-1 text-xs font-semibold bg-whiteCustom text-blackCustom uppercase rounded shadow-md shadow-bColor2 ">
                                            {title}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        {
                            checkingAvailability === false && <div className="w-fit pr-1.5 flex items-center justify-end cursor-pointer">
                                <div
                                    onClick={() => toggleWishlist(itemForCart)}
                                    className="">
                                    {
                                        wishlistItemsAll?.find(item => item.id === id)
                                            ? <LuHeart size={24} fill='black' />
                                            : <LuHeart size={24} />
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>

                <div className="flex flex-col items-start justify-between h-[185px] mt-1.5 w-full">
                    <div className="w-full">
                        <h1 className="text-bColor3 uppercase text-xs my-1 ">{productCategories?.[0]?.categories?.title ?? "Category"}</h1>
                        {
                            checkingAvailability
                                ? <>
                                    <p className="block md:hidden font-semibold my-2 cursor-not-allowed ">{title?.slice(0, 40)} </p>
                                    <p className="hidden md:block font-semibold my-2 cursor-not-allowed ">{title?.slice(0, 65)} </p>
                                </>
                                : <>
                                    <Link href={`/products/${slug}`} className="block md:hidden font-semibold my-2">{title?.slice(0, 40)} </Link>
                                    <Link href={`/products/${slug}`} className="hidden md:block font-semibold my-2">{title?.slice(0, 65)} </Link>
                                </>
                        }
                    </div>

                    <div className="w-full">
                        {
                            isColorPicker && allShades?.length >= 1 && (
                                <ColorPicker shades={allShades} />
                            )
                        }

                        <div className="flex items-end my-2">
                            <p className={`${selected === "makeup" ? "text-mBtnBg" : "text-sBtnBg"} text-sm font-semibold `}>
                                TK {discount_price > 0
                                    ? discount_price
                                    : regular_price}
                            </p>
                            {
                                discount_price > 0 && (
                                    <span className="ml-2 text-bColor3 font-medium line-through text-xs ">TK {regular_price} </span>
                                )
                            }
                        </div>
                        {
                            isBtn && checkingAvailability === true ? (
                                <SecondaryButton
                                    title="Out of Stock"
                                    className={`py-2 w-full font-semibold uppercase`}
                                    disabled={checkingAvailability}
                                />
                            ) : (
                                <PrimaryButton
                                    title="Add to Cart"
                                    to={`/products/${slug}`}
                                    className={`py-2 w-full font-semibold uppercase`}
                                    disabled={checkingAvailability}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card