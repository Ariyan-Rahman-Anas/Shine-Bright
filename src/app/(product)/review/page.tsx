// "use client"

// import { images } from '@/assets'
// import ReviewProductModal from '@/components/pageComponents/Review/ReviewProductModal'
// import CheckBox from '@/components/shared/CheckBox'
// import FloatingThemeBtn from '@/components/shared/FloatingThemeBtn'
// import GoBack from '@/components/shared/GoBack'
// import Image from 'next/image'
// import { useState } from 'react'
// import { TbCurrencyTaka } from "react-icons/tb";

// interface Product {
//     id: string
//     name: string
//     price: number
//     originalPrice: number
//     shade: string
//     quantity: number
//     image: string
// }

// interface ReviewProductsProps {
//     orderId: string
//     products: Product[]
// }

// const ReviewProductPage = ({
//     orderId = "DFG34455DFG",
//     products = [
//         {
//             id: "1",
//             name: "MAYBELLINE INSTANT AGE REWIND ERASER MULTI-USE CONCEALER",
//             price: 1350.00,
//             originalPrice: 1650.00,
//             shade: "#220-Light",
//             quantity: 1,
//             image: images.P1
//         },
//         {
//             id: "2",
//             name: "MAYBELLINE INSTANT AGE REWIND ERASER MULTI-USE CONCEALER",
//             price: 1350.00,
//             originalPrice: 1650.00,
//             shade: "#220-Light",
//             quantity: 1,
//             image: images.P2
//         },
//         {
//             id: "3",
//             name: "MAYBELLINE INSTANT AGE REWIND ERASER MULTI-USE CONCEALER",
//             price: 1350.00,
//             originalPrice: 1650.00,
//             shade: "#220-Light",
//             quantity: 1,
//             image: images.P3
//         }
//     ]
// }: ReviewProductsProps) => {
//     const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set())
//     const [selectAll, setSelectAll] = useState(false)

//     const handleSelectAll = () => {
//         if (selectAll) {
//             setSelectedProducts(new Set())
//         } else {
//             setSelectedProducts(new Set(products.map(p => p.id)))
//         }
//         setSelectAll(!selectAll)
//     }

//     const handleProductSelect = (productId: string) => {
//         const newSelected = new Set(selectedProducts)
//         if (newSelected.has(productId)) {
//             newSelected.delete(productId)
//         } else {
//             newSelected.add(productId)
//         }
//         setSelectedProducts(newSelected)
//         setSelectAll(newSelected.size === products.length)
//     }

//     // const handleAddReview = (productId: string) => {
//     //     // Handle individual product review
//     //     console.log('Adding review for product:', productId)
//     // }

//     // const handleAddReviewForAll = () => {
//     //     if (selectedProducts.size === 0) {
//     //         alert('Please select at least one product to review')
//     //         return
//     //     }
//     //     // Handle bulk review
//     //     console.log('Adding review for products:', Array.from(selectedProducts))
//     // }

//     return (
//         <div className="page-setup ">
//             <div className='mb-6'>
//                 <FloatingThemeBtn />
//             </div>

//             <GoBack />

//             {/* Select All Header */}
//             <div className="flex flex-col md:flex-row items-start md:items-end justify-between space-y-4 md:space-y-0 my-6 w-full md:w-[73.6%] ">
//                 <div className="space-y-1 md:space-y-2">
//                     <h1 className="sub-heading">REVIEW PRODUCTS</h1>
//                     <p className="text-sm font-medium ">
//                         CHOOSE ITEMS YOU WANT TO REVIEW
//                     </p>
//                 </div>
//                 <CheckBox
//                     label="Select All To Review"
//                     onClick={handleSelectAll}
//                     checked={selectAll}
//                     selectedItems={selectedProducts}
//                 // productId=""
//                 />
//             </div>

//             <div className="flex flex-col lg:flex-row gap-8 ">
//                 {/* Main Content */}
//                 {/* Product List */}
//                 <div className="w-full md:w-[75%] space-y-2">
//                     {products.map((product) => (
//                         <div
//                             key={product.id}
//                             className="border border-bColor1/50 rounded p-3 6 hover:shadow transition-shadow"
//                         >
//                             <div className="flex flex-col md:flex-row items-end justify-between space-x-4 ">
//                                 <div className='flex items-start'>
//                                     {/* Checkbox */}
//                                     <CheckBox
//                                         onClick={() => handleProductSelect(product.id)}
//                                         checked={selectedProducts.has(product.id)}
//                                         selectedItems={selectedProducts}
//                                         productId={product.id}
//                                     />

//                                     {/* Product Image */}
//                                     <div className="w-20">
//                                         <Image
//                                             src={product.image}
//                                             alt={product.name}
//                                             className="w-full h-full rounded-lg border border-bColor1/50"
//                                         />
//                                     </div>

//                                     {/* Product Details */}
//                                     <div className="flex-1 ml-2">
//                                         <h3 className="text-sm font-medium text-blackCustom mb-2 leading-relaxed">
//                                             {product.name}
//                                         </h3>

//                                         <div className="flex items-center space-x-4 mb-2">
//                                             <div className="flex items-center space-x-2">
//                                                 <span className="text-base font-bold text-blackCustom flex items-center">
//                                                     {product.price.toFixed(2)}<TbCurrencyTaka /> 
//                                                 </span>
//                                                 <span className="text-sm text-bColor3 line-through">
//                                                     {product.originalPrice.toFixed(2)}৳
//                                                 </span>
//                                             </div>
//                                         </div>

//                                         <div className="flex items-center space-x-6 text-sm text-bColor3">
//                                             <div className="flex items-center space-x-2">
//                                                 <div className="w-4 h-4 bg-warning/50 rounded border border-warning/50"></div>
//                                                 <span>{product.shade}</span>
//                                             </div>
//                                             <span>Quantity: {product.quantity}</span>
//                                         </div>
//                                         {/* Add Review Button */}
//                                         <div className="md:hidden mt-4">
//                                             <ReviewProductModal />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Add Review Button */}
//                                 <div className="hidden md:block">
//                                     <ReviewProductModal />
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Sidebar */}
//                 <div className="w-full md:w-[25%] text-bColor3 ">
//                     <div className="border-2 border-bColor1/50 rounded-lg p-4 sticky top-6">
//                         <div className="text-center space-y-4">
//                             <div className="text-sm font-medium">
//                                 ORDER ID: <span className="text-blackCustom">{orderId}</span>
//                             </div>

//                             <div className="text-sm ">
//                                 Items Selected: <span className="font-medium text-blackCustom">
//                                     {selectedProducts.size}/{products.length}
//                                 </span>
//                             </div>

//                             <ReviewProductModal is_single={false} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ReviewProductPage













"use client"

import { images } from '@/assets'
import ReviewProductModal from '@/components/pageComponents/Review/ReviewProductModal'
import CheckBox from '@/components/shared/CheckBox'
import FloatingThemeBtn from '@/components/shared/FloatingThemeBtn'
import GoBack from '@/components/shared/GoBack'
import Image from 'next/image'
import { useState } from 'react'
import { TbCurrencyTaka } from "react-icons/tb";

interface Product {
    id: string
    name: string
    price: number
    originalPrice: number
    shade: string
    quantity: number
    image: string
}

// Next.js App Router page component props
interface PageProps {
    params: { [key: string]: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const ReviewProductPage = ({ params, searchParams }: PageProps) => {
    // Get orderId from URL params or searchParams
    const orderId = params?.orderId || searchParams?.orderId || "DFG34455DFG"
    
    // In a real app, you would fetch products based on orderId
    // For now, using the default products
    const products: Product[] = [
        {
            id: "1",
            name: "MAYBELLINE INSTANT AGE REWIND ERASER MULTI-USE CONCEALER",
            price: 1350.00,
            originalPrice: 1650.00,
            shade: "#220-Light",
            quantity: 1,
            image: images.P1
        },
        {
            id: "2",
            name: "MAYBELLINE INSTANT AGE REWIND ERASER MULTI-USE CONCEALER",
            price: 1350.00,
            originalPrice: 1650.00,
            shade: "#220-Light",
            quantity: 1,
            image: images.P2
        },
        {
            id: "3",
            name: "MAYBELLINE INSTANT AGE REWIND ERASER MULTI-USE CONCEALER",
            price: 1350.00,
            originalPrice: 1650.00,
            shade: "#220-Light",
            quantity: 1,
            image: images.P3
        }
    ]

    const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set())
    const [selectAll, setSelectAll] = useState(false)

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedProducts(new Set())
        } else {
            setSelectedProducts(new Set(products.map(p => p.id)))
        }
        setSelectAll(!selectAll)
    }

    const handleProductSelect = (productId: string) => {
        const newSelected = new Set(selectedProducts)
        if (newSelected.has(productId)) {
            newSelected.delete(productId)
        } else {
            newSelected.add(productId)
        }
        setSelectedProducts(newSelected)
        setSelectAll(newSelected.size === products?.length)
    }

    // const handleAddReview = (productId: string) => {
    //     // Handle individual product review
    //     console.log('Adding review for product:', productId)
    // }

    // const handleAddReviewForAll = () => {
    //     if (selectedProducts.size === 0) {
    //         alert('Please select at least one product to review')
    //         return
    //     }
    //     // Handle bulk review
    //     console.log('Adding review for products:', Array.from(selectedProducts))
    // }

    return (
        <div className="page-setup ">
            <div className='mb-6'>
                <FloatingThemeBtn />
            </div>

            <GoBack />

            {/* Select All Header */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between space-y-4 md:space-y-0 my-6 w-full md:w-[73.6%] ">
                <div className="space-y-1 md:space-y-2">
                    <h1 className="sub-heading">REVIEW PRODUCTS</h1>
                    <p className="text-sm font-medium ">
                        CHOOSE ITEMS YOU WANT TO REVIEW
                    </p>
                </div>
                <CheckBox
                    label="Select All To Review"
                    onClick={handleSelectAll}
                    checked={selectAll}
                    selectedItems={selectedProducts}
                // productId=""
                />
            </div>

            <div className="flex flex-col lg:flex-row gap-8 ">
                {/* Main Content */}
                {/* Product List */}
                <div className="w-full md:w-[75%] space-y-2">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="border border-bColor1/50 rounded p-3 6 hover:shadow transition-shadow"
                        >
                            <div className="flex flex-col md:flex-row items-end justify-between space-x-4 ">
                                <div className='flex items-start'>
                                    {/* Checkbox */}
                                    <CheckBox
                                        onClick={() => handleProductSelect(product.id)}
                                        checked={selectedProducts.has(product.id)}
                                        selectedItems={selectedProducts}
                                        productId={product.id}
                                    />

                                    {/* Product Image */}
                                    <div className="w-20">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full rounded-lg border border-bColor1/50"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-1 ml-2">
                                        <h3 className="text-sm font-medium text-blackCustom mb-2 leading-relaxed">
                                            {product.name}
                                        </h3>

                                        <div className="flex items-center space-x-4 mb-2">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-base font-bold text-blackCustom flex items-center">
                                                    {product.price.toFixed(2)}<TbCurrencyTaka /> 
                                                </span>
                                                <span className="text-sm text-bColor3 line-through">
                                                    {product.originalPrice.toFixed(2)}৳
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-6 text-sm text-bColor3">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-4 bg-warning/50 rounded border border-warning/50"></div>
                                                <span>{product.shade}</span>
                                            </div>
                                            <span>Quantity: {product.quantity}</span>
                                        </div>
                                        {/* Add Review Button */}
                                        <div className="md:hidden mt-4">
                                            <ReviewProductModal />
                                        </div>
                                    </div>
                                </div>

                                {/* Add Review Button */}
                                <div className="hidden md:block">
                                    <ReviewProductModal />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sidebar */}
                <div className="w-full md:w-[25%] text-bColor3 ">
                    <div className="border-2 border-bColor1/50 rounded-lg p-4 sticky top-6">
                        <div className="text-center space-y-4">
                            <div className="text-sm font-medium">
                                ORDER ID: <span className="text-blackCustom">{orderId}</span>
                            </div>

                            <div className="text-sm ">
                                Items Selected: <span className="font-medium text-blackCustom">
                                    {selectedProducts.size}/{products?.length}
                                </span>
                            </div>

                            <ReviewProductModal is_single={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewProductPage