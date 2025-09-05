"use client"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart, updateQuantity, cartItems, CartItem, clearCart } from "@/redux/features/cartSlice"
import { toast } from "sonner"

const useManageCart = () => {
    const dispatch = useDispatch()
    const cartItemsAll = useSelector(cartItems)

    const addToCartHandler = (item: any) => {
        dispatch(addToCart(item))
        toast.success("Added to cart")
    }

    const removeFromCartHandler = (item: CartItem) => {
        dispatch(removeFromCart({ id: item.id, color: item.color, size: item.size }))
        toast.success("Removed from cart")
    }

    const toggleCart = (item: CartItem) => {
        const isItemInCart = cartItemsAll.some((cartItem: CartItem) => cartItem.id === item.id)
        if (isItemInCart) {
            removeFromCartHandler(item)
        } else {
            addToCartHandler(item)
        }
    }

    const updateQuantityHandler = (item: CartItem, delta: number) => {
        if (!item) return;

        const cartItem = cartItemsAll.find(
            (cartItem) =>
                cartItem.id === item.id &&
                cartItem.color === item.color &&
                cartItem.size === item.size
        );

        if (!cartItem) return;

        if (cartItem.quantity + delta <= 0) {
            dispatch(removeFromCart({ id: item.id, color: item.color, size: item.size }));
            toast.success("Item removed from cart");
        } else {
            dispatch(updateQuantity({ id: item.id, color: item.color, size: item.size, delta }));
            toast.success("Quantity updated");
        }
    };


    const clearCartHandler = () => {
        dispatch(clearCart())
        toast.success("Cart cleared")
    }

    return {
        addToCartHandler,
        removeFromCartHandler,
        toggleCart,
        updateQuantityHandler,
        clearCartHandler,
        cartItemsAll
    }
}

export default useManageCart