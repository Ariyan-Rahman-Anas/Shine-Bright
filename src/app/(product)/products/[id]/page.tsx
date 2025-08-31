"use client"

import DOMPurify from 'dompurify';
import ProductsWillLove from '@/components/pageComponents/Products/ProductsWillLove'
import FloatingThemeBtn from '@/components/shared/FloatingThemeBtn'
import GoBack from '@/components/shared/GoBack'
import PathIndicator from '@/components/shared/PathIndicator'
import SecondaryButton from '@/components/shared/SecondaryButton'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { LuHeart, LuMinus, LuPlus } from 'react-icons/lu'
import { useSelector } from 'react-redux'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useGetPhotosByProductIdAndAttributeIdQuery, useGetProductByIdQuery } from '@/redux/api/productsApi'
import { CartItem } from '@/redux/features/cartSlice'
import ProductDetailsSkeleton from '@/components/Skeletons/ProductDetailsSkeleton'
import { icons, images } from '@/assets'
import useManageWishlist from '@/hooks/useManageWishlist'
import { wishlistItems } from '@/redux/features/wishlistSlice'
import useManageCart from '@/hooks/useManageCart'
import { domPurifyAllowedAttributes, domPurifyAllowedTags } from '@/constant';
import SearchableDropdown from '@/components/shared/SearchableDropdown';
import { MdDoNotDisturbAlt } from 'react-icons/md';
import Reviews from '@/components/modules/home-page/Reviews';

// Safe HTML Content Component
const SafeHtmlContent: React.FC<{ htmlContent: string }> = ({ htmlContent }) => {
    const sanitizedHTML = useMemo(() =>
        DOMPurify.sanitize(htmlContent, {
            ALLOWED_TAGS: domPurifyAllowedTags,
            ALLOWED_ATTR: domPurifyAllowedAttributes,
        }), [htmlContent]
    );

    return (
        <div
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
            className="custom-rich-text"
        />
    );
};

const ProductDetailsPage: React.FC = () => {
    const { id } = useParams();
    const wishlistItemsAll = useSelector(wishlistItems);
    const { selected } = useSelector((state: any) => state.category);
    const { toggleWishlist } = useManageWishlist();
    const { addToCartHandler } = useManageCart();

    const [selectedThumbnail, setSelectedThumbnail] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [quantity, setQuantity] = useState(1);
    const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null);

    // page scroll to top when color is selected
    useEffect(() => {
        if (selectedColor) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [selectedColor]);

    const { data: productData, isLoading } = useGetProductByIdQuery(id);
    const { title, tags, attributes, product_type, pricing_groups, short_description, long_description, ingredients } = productData?.data || {}

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

    const queryParams = useMemo(() => {
        const params: any = { id };

        if (selectedSizeId) {
            params.sizeAttributeId = selectedSizeId;
        }

        if (selectedColorId) {
            params.colorAttributeId = selectedColorId;
        }

        return params;
    }, [id, selectedSizeId, selectedColorId]);

    console.log(selectedSizeId)
    console.log(selectedColorId)
    console.log(queryParams)

    const { data: photosData } = useGetPhotosByProductIdAndAttributeIdQuery(queryParams)
    console.log(photosData)

    const primaryPhoto = useMemo(() =>
        photosData?.data?.find((photo: any) =>
            photo?.is_primary === true
        ),
        [photosData]
    );

    const photosToShow = photosData?.data || [];

    const displayPhoto = useMemo(() => {
        if (selectedThumbnail) return selectedThumbnail;
        return primaryPhoto?.photoURL;
    }, [selectedThumbnail, primaryPhoto]);

    const isInWishlist = useMemo(() =>
        wishlistItemsAll?.some(item => item.id === id),
        [wishlistItemsAll, id]
    );

    const handleQuantityChange = useCallback((increment: boolean) => {
        setQuantity(prev => increment ? prev + 1 : Math.max(1, prev - 1));
    }, []);


    const handleSizeSelect = useCallback((size: string, sizeId?: string) => {
        setSelectedSize(size);
        setSelectedSizeId(sizeId || null);
    }, []);

    const processItems = [
        {
            title: "Details",
            description: long_description,
            isHtml: true
        },
        {
            title: "Ingredients",
            description: ingredients ?? "Not Provided",
            isHtml: true
        },
        {
            title: "Shipping Details",
            deliverWay: icons?.deliverWay,
            deliverWayTitle: "We Deliver All over BANGLADESH.",
            deliverWayDescription: "We value your time. That's why we offer fast shipping so you can enjoy your purchases sooner.",
            deliverCar: icons?.deliverCar,
            deliverCarTitle: "Fast Shipping, Fast Satisfaction",
            deliverCarDescription: "Inside Dhaka & Chattogram TAKA 80 and Outside TAKA 100",
            isHtml: false
        }
    ];

    const themeClasses = {
        primary: selected === "makeup" ? "text-mBtnBg" : "text-sBtnBg",
        secondary: selected === "makeup" ? "bg-mBtnBg" : "bg-sBtnBg",
        button: selected === "makeup" ? "mBtn" : "sBtn",
        border: selected === "makeup" ? "border-mBtnBg" : "border-sBtnBg"
    };

    // Enhanced pricing logic 
    const selectedPriceGroup = useMemo(() => {
        if (!pricing_groups || pricing_groups?.length === 0) return null;

        // If both color and size are selected, find exact match
        if (selectedColorId && selectedSizeId) {
            const exactMatch = pricing_groups.find((item: any) =>
                item?.colorAttribute?.id === selectedColorId &&
                item?.sizeAttribute?.id === selectedSizeId
            );
            if (exactMatch) return exactMatch;
        }

        // If only color is selected, find first match with that color
        if (selectedColorId && !selectedSizeId) {
            const colorMatch = pricing_groups.find((item: any) =>
                item?.colorAttribute?.id === selectedColorId
            );
            if (colorMatch) return colorMatch;
        }

        // If only size is selected, find first match with that size
        if (!selectedColorId && selectedSizeId) {
            const sizeMatch = pricing_groups.find((item: any) =>
                item?.sizeAttribute?.id === selectedSizeId
            );
            if (sizeMatch) return sizeMatch;
        }

        // Default: return first pricing group (index 0)
        return pricing_groups?.find((item: any) => item?.is_stockout === false)
    }, [pricing_groups, selectedColorId, selectedSizeId]);

    // Get available sizes for selected color
    const availableSizesForSelectedColor = useMemo(() => {
        if (!selectedColorId || !pricing_groups) return [];

        return pricing_groups
            .filter((item: any) => item?.colorAttribute?.id === selectedColorId)
            .map((item: any) => item?.size || item?.sizeAttribute)
            .filter((item: any) => item?.title !== "No Size");
    }, [pricing_groups, selectedColorId]);

    // Get available colors for selected size
    // const availableColorsForSelectedSize = useMemo(() => {
    //     if (!selectedSizeId || !pricing_groups) return [];

    //     return pricing_groups
    //         .filter((item: any) => item?.sizeAttribute?.id === selectedSizeId)
    //         .map((item: any) => item?.color || item?.colorAttribute)
    //         .filter(Boolean);
    // }, [pricing_groups, selectedSizeId]);


    const itemForCart: CartItem = {
        id: id as string,
        title,
        product_type: product_type,
        regular_price: selectedPriceGroup?.regular_price,
        sales_price: selectedPriceGroup?.discount_price > 0 ? selectedPriceGroup?.discount_price : selectedPriceGroup?.regular_price,
        discount_price: selectedPriceGroup?.discount_price,
        quantity: quantity,
        image: primaryPhoto?.photoURL ?? photosData?.data?.find((photo: any) => photo?.photoURL !== "")?.photoURL ?? images?.imgNotAvailable,
        color: selectedColor
            ? `${selectedColor} - ${selectedPriceGroup?.color?.title !== "No Shade"
                ? selectedPriceGroup?.color?.title
                : ""}`
            : `${selectedPriceGroup?.color?.title !== "No Shade"
                ? selectedPriceGroup?.color?.description
                : ""} - ${selectedPriceGroup?.color?.title !== "No Shade"
                    ? selectedPriceGroup?.color?.title
                    : ""}`,
        size: selectedSize ? selectedSize : selectedPriceGroup?.size?.title !== "No Size" ? selectedPriceGroup?.size?.title : "",
        discount_type: selectedPriceGroup?.discount_type,
        discount_value: selectedPriceGroup?.discount_value,
        size_attribute_id: selectedSizeId ? selectedSizeId : selectedPriceGroup?.size?.title !== "No Size" ? selectedPriceGroup?.size?.id : "",
        color_attribute_id: selectedColorId ? selectedColorId : selectedPriceGroup?.color?.title !== 'No Shade' ? selectedPriceGroup?.color?.id : "",
    }

    const photoTags = tags?.filter((tag: any) => tag?.photo_path !== null) || [];
    const withoutPhotoTags = tags?.filter((tag: any) => tag?.photo_path === null) || [];

    const stockOutShades = pricing_groups?.filter((item: any) => item?.is_stockout === true)
    const stockOutColorIds = stockOutShades?.map((item: any) => item?.colorAttribute?.id);

    if (isLoading) {
        return <ProductDetailsSkeleton />;
    }

    console.log(photosToShow)

    return (
        <div className='mb-16'>
            <div className='mb-6'>
                <FloatingThemeBtn />
            </div>

            <div className='md:hidden'>
                <GoBack />
            </div>

            <div className='section-setup-1600-p hidden md:block'>
                <PathIndicator path={`Shop All > Products > ${title}`} />
            </div>

            <div className='section-setup-1400-p md:mt-6 mb-6 md:mb-14'>
                <div className='flex flex-col md:flex-row items-start gap-x-10 space-y-6 md:space-y-0'>
                    {/* Product Media */}
                    <div className='w-full md:w-1/2'>
                        <div className='w-full h-full rounded-lg overflow-hidden'>
                            <Image
                                src={displayPhoto
                                    ? displayPhoto
                                    : photosToShow?.find((photo: any) => photo?.photoURL !== "")
                                        ? photosToShow?.find((photo: any) => photo?.photoURL !== "")?.photoURL
                                        : images?.imgNotAvailable}
                                alt={title || "Product image"}
                                loading="lazy"
                                height={1080}
                                width={1920}
                                className="w-full lg:w-[758px] h-full lg:h-[758px] object-cover rounded-lg"
                            />
                        </div>

                        <div className='flex items-center gap-1 flex-wrap mt-2'>
                            {photosToShow?.map((item: any, idx: number) => (
                                <div
                                    key={idx}
                                    className={`w-12 h-12 cursor-pointer roundedmd shadow border-2 ${displayPhoto === item?.photoURL ? themeClasses.border : "border-transparent"
                                        }`}
                                    onClick={() => setSelectedThumbnail(item?.photoURL)}
                                >
                                    <Image
                                        src={item?.photoURL}
                                        alt={`${title} thumbnail ${idx + 1}`}
                                        loading="lazy"
                                        height={1080}
                                        width={1920}
                                        className='w-full h-full roundedsm object-cover'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className='w-full md:w-1/2'>
                        <h1 className='text-lg font-semibold'>{title}</h1>

                        {/* without photo's tags and stock */}
                        <div className='flex items-center gap-2 my-6'>
                            <div>
                                {
                                    selectedPriceGroup?.is_stockout === false ? (
                                        <div className='flex items-center gap-1.5 rounded-full border px-2 w-fit'>
                                            <div className='h-2 w-2 rounded-full bg-green-500'></div>
                                            <span> In Stock</span>
                                        </div>

                                    ) : (
                                        <div className='flex items-center gap-1.5 rounded-full border px-2 w-fit'>
                                            <div className='h-2 w-2 rounded-full bg-error'></div>
                                            <span> Out of Stock</span>
                                        </div>
                                    )
                                }
                            </div>
                            {/* Tags without photo */}
                            {withoutPhotoTags && withoutPhotoTags?.length > 0 && (
                                <div className="flex items-center flex-wrap gap-1.5">
                                    {withoutPhotoTags.map(({ title }: any, index: number) => (
                                        <div key={index} className='flex items-center gap-1.5 rounded-full border px-2 w-fit'>
                                            <div className={`h-2 w-2 rounded-full ${selected === "makeup" ? "bg-mBtnBg" : "bg-sBtnBg"} `}></div>
                                            <span> {title}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Pricing */}
                        <div className='flex items-center gap-4 mb-6'>
                            {
                                selectedPriceGroup?.is_infinite === true && selectedPriceGroup?.discount_price > 0
                                    ? (
                                        <p className={`text-lg font-semibold ${themeClasses.primary}`}>
                                            {selectedPriceGroup?.discount_price}.00৳
                                        </p>
                                    )
                                    : selectedPriceGroup?.is_infinite === false && selectedPriceGroup?.discount_price > 0 ? (
                                        <p className={`text-lg font-semibold ${themeClasses.primary}`}>
                                            {selectedPriceGroup?.discount_price}.00৳
                                        </p>
                                    ) : (
                                        <p className={`text-lg font-semibold ${themeClasses.primary}`}>
                                            {selectedPriceGroup?.regular_price}.00৳
                                        </p>
                                    )
                            }

                            {selectedPriceGroup?.discount_price > 0 && <p className='line-through text-bColor3 font-normal'>
                                {selectedPriceGroup?.regular_price}.00৳
                            </p>}

                            {selectedPriceGroup?.discount_price > 0 && <p className={`border-2 py-[2px] text-sm px-4 rounded-full w-fit ${themeClasses.primary} ${themeClasses.border}`}>

                                Save {selectedPriceGroup?.discount_value}
                                {selectedPriceGroup?.discount_type === "PERCENTAGE" ? "%" : "৳"}
                            </p>}
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
                                selectedColor && availableSizesForSelectedColor?.length <= 0 && <p className='my-4' >No size available for this item</p>
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
                        {photoTags && photoTags?.length > 0 && (
                            <div className="flex items-center flex-wrap gap-6 my-6">
                                {photoTags?.map(({ title, photo_path }: any, index: number) => (
                                    <div key={index} className='flex items-center gap-1.5'>
                                        <div className='border border-black rounded-full'>
                                            <Image src={photo_path} alt={title} width={50} height={50} className='h-12 w-12 rounded-full' />
                                        </div>
                                        <span
                                            className={`text-sm uppercase rounded`}
                                        >
                                            {title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Details Accordion */}
                        <div className=''>
                            <Accordion type="single" collapsible>
                                {processItems?.map(({ title: itemTitle, description, isHtml, deliverWay, deliverWayTitle, deliverWayDescription, deliverCar, deliverCarTitle, deliverCarDescription }, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger>{itemTitle}</AccordionTrigger>
                                        <AccordionContent>
                                            <div className={`${itemTitle === "Details" ? "h-[350px]" : "h-fit"} overflow-y-auto`} >
                                                {deliverWay && (
                                                    <div className='min-w-full h-full space-y-4'>
                                                        <div className="flex items-center gap-4 w-full ">
                                                            <div className='w-12'>
                                                                <Image
                                                                    src={deliverWay}
                                                                    alt={itemTitle}
                                                                    loading="lazy"
                                                                    height={800}
                                                                    width={800}
                                                                    className="w-full h-full object-cover rounded-md"
                                                                />
                                                            </div>
                                                            <div className='w-full'>
                                                                <h3 className="text-base font-semibold">{deliverWayTitle}</h3>
                                                                <p className="text-sm">{deliverWayDescription}</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center gap-4 w-full">
                                                            <div className='w-12'>
                                                                <Image
                                                                    src={deliverCar}
                                                                    alt={itemTitle}
                                                                    loading="lazy"
                                                                    height={800}
                                                                    width={800}
                                                                    className="w-full h-full object-cover rounded-md"
                                                                />
                                                            </div>
                                                            <div className='w-full'>
                                                                <h3 className="text-base font-semibold  ">{deliverCarTitle}</h3>
                                                                <p className="text-sm">{deliverCarDescription}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                <div
                                                    className="w-full"
                                                >
                                                    {
                                                        description && (isHtml ? (
                                                            <SafeHtmlContent htmlContent={description} />
                                                            //  <div className="min-w-full"><SafeHtmlContent htmlContent={description} /></div>
                                                        ) : <p>{description}</p>)
                                                    }
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* Member Deals */}
                        <div className='relative'>
                            <Image
                                src={images.ProductDetailsBg}
                                alt="Product Details Background"
                                className="w-full h-28 md:h-44 object-cover rounded-md"
                            />
                            <div className={`absolute inset-0 flex items-center justify-center gap-4 rounded-md p-4 md:p-2 ${selected === "makeup"
                                ? "bg-mBtnBg/80 text-blackCustom"
                                : "bg-sBtnBg/80 text-whiteCustom"
                                }`}>
                                <div>
                                    <Image
                                        src={icons.HandshakeHeart}
                                        alt="Handshake Heart"
                                        className="w-20 h-20"
                                    />
                                </div>
                                <div>
                                    <h3 className='text-base font-semibold md:sub-heading'>
                                        Exclusive Member Deals: Grab Now!
                                    </h3>
                                    <p className='text-xs md:text-base'>
                                        Spend over ৳5000 and unlock exclusive member benefits.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='space-y-16'>
                <Reviews />
                <ProductsWillLove />
            </div>
        </div>
    );
};
export default ProductDetailsPage;