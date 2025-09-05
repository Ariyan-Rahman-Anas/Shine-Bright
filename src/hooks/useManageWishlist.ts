import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, removeFromWishlist, wishlistItems } from '@/redux/features/wishlistSlice'
import { toast } from 'sonner'
import { CartItem } from '@/redux/features/cartSlice'

const useManageWishlist = () => {
    const dispatch = useDispatch()
    const wishlistItemsAll = useSelector(wishlistItems)
    
    const addToWishlistHandler = (item: CartItem) => {
        dispatch(addToWishlist(item))
        toast.success("Added to wishlist")
    }
    
    const removeFromWishlistHandler = (item: CartItem) => {
        dispatch(removeFromWishlist(item))
        toast.success("Removed from wishlist")
    }
    
    const toggleWishlist = (item: any) => {
        const isItemInWishlist = wishlistItemsAll.some((wishlistItem: CartItem) => wishlistItem.id === item.id)
        if (isItemInWishlist) {
            removeFromWishlistHandler(item)
        } else {
            addToWishlistHandler(item)
        }
    }
    
    const isInWishlist = (itemId: string) => {
        return wishlistItemsAll.some((item: CartItem) => item.id === itemId)
    }
    
    return {
        addToWishlistHandler,
        removeFromWishlistHandler,
        toggleWishlist,
        isInWishlist,
        wishlistItems: wishlistItemsAll
    }
}

export default useManageWishlist