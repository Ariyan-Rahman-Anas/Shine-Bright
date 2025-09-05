"use client"

import MemberDeals from "@/components/modules/product-details-page/MemberDeals"
import ProcessDetails from "@/components/modules/product-details-page/ProcessDetails"
import { WithOutPhotoTags, WithPhotoTags } from "@/components/modules/product-details-page/Tags"
import FloatingThemeBtn from "@/components/shared/FloatingThemeBtn"
import SearchableDropdown from "@/components/shared/SearchableDropdown"
import SecondaryButton from "@/components/shared/SecondaryButton"
import { SBProductsData } from "@/constant/pro"
import useManageCart from "@/hooks/useManageCart"
import useManageWishlist from "@/hooks/useManageWishlist"
import { wishlistItems } from "@/redux/features/wishlistSlice"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useMemo, useState, useEffect, useCallback } from "react"
import { LuHeart, LuMinus, LuPlus } from "react-icons/lu"
import { MdDoNotDisturbAlt } from "react-icons/md"
import { useSelector } from "react-redux"


const ProductDetailsPage = () => {
    const { slug } = useParams()
    const currentProduct = SBProductsData?.find(item => item.slug === slug)
    const { id, title, tags, attributes, product_type, pricing_groups, short_description, long_description, ingredients } = currentProduct || {}

    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null);

    const { toggleWishlist } = useManageWishlist();
    const { addToCartHandler } = useManageCart();


    // page scroll to top when color is selected
    useEffect(() => {
        if (selectedColor) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [selectedColor]);

    // Memoized attribute filtering
    const colorAttributes = useMemo(() =>
        attributes?.filter((item: any) => item?.attribute_type === "COLOR" && item?.title !== "No Shade") || [],
        [attributes]
    );

    const sizeAttributes = useMemo(() =>
        attributes?.filter((item: any) => item?.attribute_type === "SIZE") || [],
        [attributes]
    );

    //Compute IDs from attributes (no dependency loop)
    const selectedColorId = useMemo(() =>
        colorAttributes?.find((item: any) => item?.description === selectedColor)?.id,
        [colorAttributes, selectedColor]
    );

    // Memoized product images with color filtering
    const productImages = useMemo(() => {
        if (!selectedColorId) {
            // Show all images when no color is selected
            return colorAttributes.flatMap((attr: any) =>
                attr.photos?.map((photo: any) => photo.photoURL) || []
            ).filter(Boolean);
        } else {
            // Show only selected color's images
            return colorAttributes
                .flatMap((attr: any) => attr.photos || [])
                .filter((photo: any) => photo.color_attribute_id === selectedColorId)
                .map((photo: any) => photo.photoURL)
                .filter(Boolean);
        }
    }, [colorAttributes, selectedColorId]);

    // Reset selected image when product or color selection changes
    useEffect(() => {
        setSelectedImageIndex(0)
    }, [slug, selectedColorId])

    // Current display image with fallback
    const currentDisplayImage = useMemo(() =>
        productImages[selectedImageIndex] || productImages[0] || '/path/to/fallback-image.jpg',
        [productImages, selectedImageIndex]
    );

    const selectedPriceGroup = useMemo(() => {
        if (!pricing_groups || pricing_groups?.length === 0) return null;

        // If both color and size are selected, find exact match
        if (selectedColorId && selectedSizeId) {
            const exactMatch = pricing_groups.find((item: any) =>
                item?.color?.id === selectedColorId &&
                item?.size?.id === selectedSizeId
            );
            if (exactMatch) return exactMatch;
        }

        // If only color is selected, find first match with that color
        if (selectedColorId && !selectedSizeId) {
            const colorMatch = pricing_groups.find((item: any) =>
                item?.color?.id === selectedColorId
            );
            if (colorMatch) return colorMatch;
        }

        // If only size is selected, find first match with that size
        if (!selectedColorId && selectedSizeId) {
            const sizeMatch = pricing_groups.find((item: any) =>
                item?.size?.id === selectedSizeId
            );
            if (sizeMatch) return sizeMatch;
        }
        return pricing_groups?.find((item: any) => item?.is_stockout === false)
    }, [pricing_groups, selectedColorId, selectedSizeId]);

    // Helper functions for price handling with type safety
    const getNumericPrice = (price: string | null | undefined): number => {
        if (!price) return 0;
        const numPrice = typeof price === 'string' ? parseFloat(price) : price;
        return isNaN(numPrice) ? 0 : numPrice;
    };

    const hasDiscount = useMemo(() => {
        if (!selectedPriceGroup) return false;
        const discountPrice = getNumericPrice(selectedPriceGroup.discount_price);
        return discountPrice > 0;
    }, [selectedPriceGroup]);

    const displayPrice = useMemo(() => {
        if (!selectedPriceGroup) return 0;
        const discountPrice = getNumericPrice(selectedPriceGroup.discount_price);
        const regularPrice = getNumericPrice(selectedPriceGroup.regular_price);
        return hasDiscount ? discountPrice : regularPrice;
    }, [selectedPriceGroup, hasDiscount]);

    const regularPrice = useMemo(() => {
        if (!selectedPriceGroup) return 0;
        return getNumericPrice(selectedPriceGroup.regular_price);
    }, [selectedPriceGroup]);


    // Get available sizes for selected color
    const availableSizesForSelectedColor = useMemo(() => {
        if (!selectedColorId || !pricing_groups) return [];

        return pricing_groups
            .filter((item: any) => item?.color?.id === selectedColorId)
            .map((item: any) => item?.size || item?.size)
            .filter((item: any) => item?.title !== "No Size");
    }, [pricing_groups, selectedColorId]);

    const handleSizeSelect = useCallback((size: string, sizeId?: string) => {
        setSelectedSize(size);
        setSelectedSizeId(sizeId || null);
    }, []);


    const handleQuantityChange = useCallback((increment: boolean) => {
        setQuantity(prev => increment ? prev + 1 : Math.max(1, prev - 1));
    }, []);

    const stockOutShades = pricing_groups?.filter((item: any) => item?.is_stockout === true)
    const stockOutColorIds = stockOutShades?.map((item: any) => item?.color?.id);

    const wishlistItemsAll = useSelector(wishlistItems);
    const { selected } = useSelector((state: any) => state.category);
    const themeClasses = useMemo(() => ({
        primary: selected === "makeup" ? "text-mBtnBg" : "text-sBtnBg",
        secondary: selected === "makeup" ? "bg-mBtnBg" : "bg-sBtnBg",
        button: selected === "makeup" ? "mBtn" : "sBtn",
        border: selected === "makeup" ? "border-mBtnBg" : "border-sBtnBg"
    }), [selected]);


    const isInWishlist = useMemo(() =>
        wishlistItemsAll?.some(item => item.id === id),
        [wishlistItemsAll, id]
    );

    const itemForCart = {
        id: id as string,
        title: title || "Unknown Title",
        product_type: product_type || "UNKNOWN",
        regular_price: selectedPriceGroup?.regular_price || "0",
        sales_price: getNumericPrice(selectedPriceGroup?.discount_price) > 0
            ? selectedPriceGroup?.discount_price
            : selectedPriceGroup?.regular_price || "0",
        discount_price: selectedPriceGroup?.discount_price || "0",
        quantity: quantity,
        image: currentDisplayImage,
        color: selectedColor
            ? `${selectedColor} - ${selectedPriceGroup?.color?.title !== "No Shade"
                ? selectedPriceGroup?.color?.title
                : ""}`
            : `${selectedPriceGroup?.color?.description || ""} - ${selectedPriceGroup?.color?.title || ""}`,
        size: selectedSize || selectedPriceGroup?.size?.title || "",
        discount_type: selectedPriceGroup?.discount_type || null,
        discount_value: selectedPriceGroup?.discount_value || "0",
        size_attribute_id: selectedSizeId || selectedPriceGroup?.size?.id || "",
        color_attribute_id: selectedColorId || selectedPriceGroup?.color?.id || "",
    }

    return (
        <div>
            <FloatingThemeBtn />

            <section className="section-setup-1400-p md:mt-6 mb-6 md:mb-14 flex flex-col md:flex-row items-start gap-x-10 space-y-6 md:space-y-0">
                {/* Product Media */}
                <div id="product-media" className="w-full md:w-1/2">
                    <div className='w-full h-full rounded-lg overflow-hidden'>
                        <Image
                            src={currentDisplayImage}
                            alt={title || "Product image"}
                            loading="lazy"
                            height={1080}
                            width={1920}
                            className="w-full lg:w-[758px] h-full lg:h-[758px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Thumbnail Images */}
                    {productImages.length >= 1 && (
                        <div className='flex items-center gap-1.5 flex-wrap mt-2'>
                            {productImages.map((imageUrl: string, idx: number) => (
                                <div
                                    key={imageUrl}
                                    className={`w-12 h-12 cursor-pointer shadow border-2 rounded-md transition-colors
                                        ${selectedImageIndex === idx ? themeClasses.border : "border-transparent hover:border-gray-300"}`
                                    }
                                    onClick={() => setSelectedImageIndex(idx)}
                                >
                                    <Image
                                        src={imageUrl}
                                        alt={`${title} thumbnail ${idx + 1}`}
                                        loading="lazy"
                                        height={48}
                                        width={48}
                                        className='w-full h-full object-cover rounded'
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product info */}
                <div id="product-info" className="w-full md:w-1/2">
                    <h1 className='text-lg font-semibold'>{title}</h1>

                    {/* Stock status and tags */}
                    <div className='flex items-center gap-2 my-6'>
                        <div>
                            {selectedPriceGroup?.is_stockout === false ? (
                                <div className='flex items-center gap-1.5 rounded-full border px-2 w-fit'>
                                    <div className='h-2 w-2 rounded-full bg-green-500'></div>
                                    <span>In Stock</span>
                                </div>
                            ) : (
                                <div className='flex items-center gap-1.5 rounded-full border px-2 w-fit'>
                                    <div className='h-2 w-2 rounded-full bg-error'></div>
                                    <span>Out of Stock</span>
                                </div>
                            )}
                        </div>

                        {/* Tags without photo */}
                        <WithOutPhotoTags tags={tags} />
                    </div>

                    {/* Pricing */}
                    <div className='flex items-center gap-4 mb-6'>
                        {/* Display Price */}
                        <p className={`text-lg font-semibold ${themeClasses.primary}`}>
                            {displayPrice.toFixed(0)}৳
                        </p>

                        {/* Original Price (if there's a discount) */}
                        {hasDiscount && (
                            <p className='line-through text-bColor3 font-normal'>
                                {regularPrice.toFixed(0)}৳
                            </p>
                        )}

                        {/* Discount Badge */}
                        {hasDiscount && selectedPriceGroup && (
                            <p className={`border-2 py-[2px] text-sm px-4 rounded-full w-fit ${themeClasses.primary} ${themeClasses.border}`}>
                                Save {selectedPriceGroup.discount_value}
                                {selectedPriceGroup.discount_type === "PERCENTAGE" ? "%" : "৳"}
                            </p>
                        )}
                    </div>

                    <p className='text-sm mb-4'>{short_description}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mb-6">
                        <div
                            className='border-2 border-bColor1 w-8 h-8 flex items-center justify-center rounded cursor-pointer '
                            onClick={() => handleQuantityChange(false)}
                        >
                            <LuMinus size={20} />
                        </div>
                        <p className='w-32 h-8 rounded border-2 border-bColor1 text-center py-0.5'>{quantity}</p>
                        <div
                            className='border-2 border-bColor1 w-8 h-8 flex items-center justify-center rounded cursor-pointer '
                            onClick={() => handleQuantityChange(true)}
                        >
                            <LuPlus size={20} />
                        </div>
                    </div>

                    {/* shade Dropdown */}
                    {
                        product_type === "VARIABLE" && colorAttributes?.length > 0 && <SearchableDropdown
                            isLabel={false}
                            options={colorAttributes
                                ?.map((item: any) => ({
                                    value: item?.description,
                                    label: item?.title,
                                    disabled: stockOutColorIds?.includes(item?.id),
                                }))}
                            value={selectedColor}
                            onChange={(value) => setSelectedColor(value as string)}
                            placeholder="Shades: "
                            searchPlaceholder="Select Shades"
                            clearable={false}
                            required
                            maxHeight="250px"
                            isSearchable={false}
                            isShades={true}
                            className='border-2 border-bColor1 w-full md:w-2/3 min-w-32 mb-2 '
                        />
                    }


                    {/* Color Selection */}
                    {colorAttributes?.length > 0 && (
                        <div className="mb-2 space-y-1.5">
                            <div className='flex items-center flex-wrap gap-1'>
                                {colorAttributes?.map(({ title, description, id }: any, idx: number) => (
                                    <div key={idx} className='h-10 relative flex items-center justify-center'>
                                        <button
                                            onClick={() => setSelectedColor(title !== "No Shade" ? description : "")}
                                            style={{ backgroundColor: description }}
                                            className={`${selectedColor === description
                                                ? "border-2 border-blackCustom hover:border-blackCustom"
                                                : "border-2 border-dotted border-transparent shadow hover:border-blackCustom/60"
                                                } cursor-pointer transition-colors h-10 w-10 border-2 duration-300`}
                                            aria-label={`Select color ${description}`}
                                        >
                                        </button>
                                        {
                                            stockOutShades?.find((item: any) => item?.color?.id === id) && (
                                                <div
                                                    style={{ backgroundColor: `color-mix(in srgb, ${description} 5%, transparent)` }}
                                                    className={`absolute left-1/2 -translate-x-1/2 h-10 w-10 flex items-center justify-center cursor-not-allowed `}>
                                                    <MdDoNotDisturbAlt size={22} />
                                                </div>
                                            )
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}


                    {/* Size Selection */}
                    <div className=''>
                        {selectedColor && availableSizesForSelectedColor?.length > 0 && (
                            <div className="mb-6 space-y-1.5">
                                <div className='flex items-center flex-wrap gap-2'>
                                    {availableSizesForSelectedColor?.map((size: any, idx: number) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleSizeSelect(size?.title !== "No Size" ? size?.title : "", size?.id)}
                                            className={`px-5 py-1 bg-bColor1/20 ${selectedSize === size?.title
                                                ? `${themeClasses.button} bg-mColorBase2`
                                                : " hover:bg-bColor1/30"
                                                } cursor-pointer transition-colors duration-300`}
                                            aria-label={`Select size ${size?.title}`}
                                        >
                                            <span>{size?.title || ""}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )
                        }

                        {
                            selectedColor && availableSizesForSelectedColor?.length <= 0 && <p className='my-4' >Oops! Size not available</p>
                        }

                        {
                            !selectedColor && sizeAttributes?.length > 0 &&
                            <div className="mb-6 space-y-1.5">
                                <div className='flex items-center flex-wrap gap-2'>
                                    {sizeAttributes?.filter((item: any) => item?.description !== "No Size")?.map(({ id, description }: any, idx: number) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleSizeSelect(description, id)}
                                            className={`px-5 py-1 bg-bColor1/20 ${selectedSize === description
                                                ? `${themeClasses.button} bg-mColorBase2`
                                                : " hover:bg-bColor1/30"
                                                } cursor-pointer transition-colors duration-300`}
                                            aria-label={`Select size ${description}`}
                                        >
                                            <span>{description}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>

                    {/* Cart and Wishlist Buttons */}
                    <div className='w-fit mx-auto md:w-full bg-whiteCustom md:bg-transparent shadow-md md:shadow-none p-2 md:p-0 rounded-lg md:rounded-none fixed bottom-4 left-0 right-0 md:static z-20 flex items-center gap-2 mb-6'>
                        <SecondaryButton
                            onClick={() => addToCartHandler(itemForCart)}
                            title="Add to Cart"
                            className="py-2 w-full md:w-56 uppercase border-2 border-transparent"
                        />
                        <div
                            onClick={() => toggleWishlist(itemForCart)}
                            className='py-2 border-2 border-bColor2 rounded-sm w-10 flex items-center justify-center cursor-pointer'
                        >
                            {isInWishlist
                                ? <LuHeart size={20} fill='black' />
                                : <LuHeart size={20} />}
                        </div>
                    </div>

                    {/* Tags with photo */}
                    <WithPhotoTags tags={tags} />


                    {/* details */}
                    <ProcessDetails long_description={long_description as string} ingredients={ingredients as string} />

                    {/* Member Deals */}
                    <MemberDeals />
                </div>
            </section>
        </div>
    )
}
export default ProductDetailsPage