import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { useSelector } from "react-redux"
import { LuHeart, LuMinus, LuPlus } from "react-icons/lu"
import React from 'react'
import { icons } from "@/assets"
import { wishlistItems, wishlistItemsCount } from "@/redux/features/wishlistSlice"
import useManageWishlist from "@/hooks/useManageWishlist"
import { CartItem, cartItems } from "@/redux/features/cartSlice"
import { FaRegTrashAlt } from "react-icons/fa"
import SecondaryButton from "../shared/SecondaryButton"
import useManageCart from "@/hooks/useManageCart"

const WishlistSheet = () => {
    const { selected } = useSelector((state: any) => state.category)
    const wishlistItemsLength = useSelector(wishlistItemsCount)
    const wishlistItemsAll = useSelector(wishlistItems)
        const cartItemsAll = useSelector(cartItems)

    const { removeFromWishlistHandler } = useManageWishlist()
    const {toggleCart} = useManageCart()


    return (
        <Sheet>
            <SheetTrigger>
                <div className="relative cursor-pointer">
                    <div>
                        <Image
                            src={icons.Favorite}
                            alt="Wishlist"
                            className="w-6 h-6"
                        />
                    </div>
                    {wishlistItemsLength > 0 && (
                        <div className={`${selected === "makeup" ? "bg-mColorBase2" : "bg-sColorBase3"} text-whiteCustom absolute -top-3 -right-2 text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full`}>
                            <p>{wishlistItemsLength}</p>
                        </div>
                    )}
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className="border-b border-bColor1">
                    <h1 className="text-sm font-semibold p-4 pb-2">WISHLIST</h1>
                </SheetHeader>

                <div className="h-full flex flex-col">
                    {/* Wishlist Content */}
                    <div className="flex-1 overflow-y-auto px-2">
                        {wishlistItemsAll?.length > 0 ? (
                            wishlistItemsAll.map((item: CartItem, index: number) => (
                                <div key={index} className="border border-mColor1 rounded-md p-2 my-2 flex items-start gap-2">
                                    <div className="w-[30%]">
                                        <Image
                                            src={item.image || '/placeholder-image.jpg'}
                                            alt={item.title || 'Product'}
                                            width={100}
                                            height={100}
                                            className="w-full h-full rounded-md object-cover"
                                        />
                                    </div>
                                    <div className="w-[70%] text-sm">
                                        <h1 className="font-medium mb-1">{item.title}</h1>
                                        <p className="text-xs font-semibold mb-2">
                                            Tk {item.sales_price}
                                            {/* Add previous price if available */}
                                            {/* <span className="ml-2 text-bColor3 font-medium line-through">Tk {item.previousPrice}</span> */}
                                        </p>

                                        {/* Display selected colors and sizes */}
                                        {item.color && (
                                            <div className="mb-2">
                                                <p className="text-xs text-gray-600">Colors:</p>
                                                <div className="flex gap-1 mt-1">
                                                    <div
                                                            key={item.color}
                                                            className="w-4 h-4 rounded-sm border border-gray-300"
                                                            style={{ backgroundColor: item.color }}
                                                        />
                                                </div>
                                            </div>
                                        )}

                                        {item.size && (
                                            <div className="mb-2">
                                                <p className="text-xs text-gray-600">Sizes: {item.size}</p>
                                            </div>
                                        )}

                                        <div className="flex items-center gap-2">
                                            <div className="cart-inside-icon">
                                                <LuMinus size={16} />
                                            </div>
                                            <p className='w-8 rounded border-2 border-bColor1 text-center py-1 text-xs'>
                                                {item.quantity}
                                            </p>
                                            <div className="cart-inside-icon">
                                                <LuPlus size={16} />
                                            </div>
                                            <div
                                                onClick={() => removeFromWishlistHandler(item)}
                                                className="cart-inside-icon-trash cursor-pointer hover:text-red-600"
                                            >
                                                <FaRegTrashAlt size={16} />
                                                <span className="ml-0.5" >Remove</span>
                                            </div>
                                        </div>
                                        <SecondaryButton
                                            onClick={()=>toggleCart(item)}
                                            title={cartItemsAll.find((i: any) => i.id === item.id) ? "Remove from Cart" : "Add to Cart"}
                                            className={`mt-2 py-2 w-full border-2 border-transparent `}
                                        />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <LuHeart size={48} className="text-gray-300 mb-4" />
                                <h2 className="text-lg font-medium text-gray-600 mb-2">Your wishlist is empty</h2>
                                <p className="text-sm text-gray-500">Add items you love to your wishlist</p>
                            </div>
                        )}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
export default WishlistSheet