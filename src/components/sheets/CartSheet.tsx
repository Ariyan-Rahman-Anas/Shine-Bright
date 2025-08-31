"use client"
import { icons } from "@/assets"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CartItem, cartItems, cartItemsCount, cartTotal } from "@/redux/features/cartSlice"
import Image from "next/image"

import { useSelector } from "react-redux"
import PrimaryButton from "../shared/PrimaryButton"
import { LuHeart, LuMinus, LuPlus, LuTrash } from "react-icons/lu"
import useManageWishlist from "@/hooks/useManageWishlist"
import { wishlistItems } from "@/redux/features/wishlistSlice"
import useManageCart from "@/hooks/useManageCart"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"

const CartSheet = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { selected } = useSelector((state: any) => state.category)
    const cartItemsLength = useSelector(cartItemsCount)
    const cartItemsAll = useSelector(cartItems)
    const cartTotalAmount = useSelector(cartTotal)
    const { toggleWishlist } = useManageWishlist()
    const wishlistItemsAll = useSelector(wishlistItems)
    const { removeFromCartHandler, updateQuantityHandler } = useManageCart()

    const handleCheckoutClick = () => {
        setIsOpen(false) // Close the sheet
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
                <div
                    className="relative cursor-pointer ">
                    <div>
                        <Image
                            src={icons.FavoriteCart}
                            alt="Cart"
                            className="w-6 h-6 "
                        />
                    </div>
                    {/* // ${selected === "makeup" ? "bg-mBtnBg" : "bg-sBtnBg"} */}
                    {cartItemsLength > 0 && <div className={`
                         bg-blackCustom text-whiteCustom absolute -top-3 -right-2 text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full`}><p> {cartItemsLength}</p> </div>}
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className="border-b border-bColor1 ">
                    <h1 className="text-sm font-semibold p-4 pb-2 ">YOUR CART</h1>
                </SheetHeader>

                <div className="h-full flex flex-col">
                    {/* Cart Content */}
                    <div className="flex-1 overflow-y-auto px-2">
                        {
                            cartItemsAll?.length > 0
                                ? cartItemsAll?.map(({ id, product_type, regular_price, image, title, quantity, color, size, sales_price }: CartItem, index: number) => (
                                    <div key={index} className="border border-bColor1 rounded-md p-2 my-2 flex items-start gap-2 ">
                                        <div className="w-[30%] ">
                                            <Image src={image ?? ""} height={1080} width={1080} alt={"Product name"} className="w-full h-full rounded-md object-cover " />
                                        </div>
                                        <div className="w-[70%] text-sm ">
                                            <h1>{title?.length > 80 ? title.slice(0, 80) + "..." : title}</h1>
                                            <div className="flex items-end gap-4 my-1">
                                                <p className={`font-semibold ${selected === "makeup" ? "text-mBtnBg" : "text-sBtnBg"}`}>
                                                    {sales_price}.00৳
                                                </p>

                                                <p className='line-through text-bColor3 font-normal'>
                                                    {regular_price}.00৳
                                                </p>
                                            </div>


                                            {
                                                product_type === "VARIABLE" && <p className="text-xs font-semibold my-1 flex items-end gap-2 ">
                                                    {color !== " - "
                                                        && <div className="space-y-1">
                                                            <p className="flex items-center gap-1">
                                                                <span>Color: </span> <div style={{ backgroundColor: color?.split("-")[0] }} className="mr-2 w-4 h-4 shadow " ></div>
                                                            </p>
                                                            <p>{color?.split("-")[1]}</p>
                                                        </div>
                                                    }
                                                    {size && <p>Size: {size}</p>}
                                                </p>

                                            }

                                            <div className="flex items-center gap-2  ">
                                                <button
                                                    onClick={() => updateQuantityHandler({ id, quantity, color, size, title, sales_price }, -1)}
                                                    className="cart-inside-icon">
                                                    <LuMinus size={16} />
                                                </button>
                                                <p className='w-8 rounded border-2 border-bColor1 text-center py-1' >{quantity}</p>
                                                <button
                                                    onClick={() => updateQuantityHandler({ id, quantity, color, size, title, sales_price }, 1)}
                                                    className="cart-inside-icon">
                                                    <LuPlus size={16} />
                                                </button>
                                                <div
                                                    onClick={() => toggleWishlist({ id, title, sales_price, image, quantity, color, size })}
                                                    className="cart-inside-icon">
                                                    {
                                                        wishlistItemsAll?.find((item: any) => item.id === id)
                                                            ? <LuHeart size={16} fill='black' />
                                                            : <LuHeart size={16} />
                                                    }
                                                </div>
                                                <div
                                                    onClick={() => removeFromCartHandler({ id, title, sales_price, image, quantity, color, size })}
                                                    className="cart-inside-icon-trash ">
                                                    <LuTrash size={16} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                : <div className="flex flex-col items-center justify-center py-16 text-center">
                                    <ShoppingCart size={48} className="text-gray-300 mb-4" />
                                    <h2 className="text-lg font-medium text-gray-600 mb-2">Your cart is empty</h2>
                                    <p className="text-sm text-gray-500">Add items you love to your cart</p>
                                </div>
                        }
                    </div>

                    {/* Footer */}
                    <div className={`m-2 p-2 rounded-md ${selected === "makeup" ? "bg-mBtnBg/30" : "bg-sBtnBg/30"}`}>
                        <div className="flex justify-between items-center font-semibold mb-4">
                            <span className="">Total:</span>
                            <span className="">{cartTotalAmount}</span>
                        </div>
                        <PrimaryButton
                            to={cartItemsLength > 0 ? "/checkout" : "/products"}
                            title={cartItemsLength > 0 ? "CHECKOUT" : "Continue Shopping"}
                            className={`w-full py-2 font-semibold`}
                            onClick={handleCheckoutClick}
                             />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
export default CartSheet