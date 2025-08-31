// "use client"

// import { images } from '@/assets'
// import ReturnRequestForm from '@/components/pageComponents/Return/ReturnRequestForm'
// import CheckBox from '@/components/shared/CheckBox'
// import FloatingThemeBtn from '@/components/shared/FloatingThemeBtn'
// import GoBack from '@/components/shared/GoBack'
// import SearchableDropdown from '@/components/shared/SearchableDropdown'
// import SecondaryButton from '@/components/shared/SecondaryButton'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'
// import { LuMinus, LuPlus } from 'react-icons/lu'
// import { useSelector } from 'react-redux'

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

// const ProductReturnRequestPage = ({
//     // orderId = "DFG34455DFG",
//     // orderId = "101",
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
//     const router = useRouter()
//     const [selectAll, setSelectAll] = useState(false)
//     const [isOpenForm, setIsOpenForm] = useState(false)
//     const [reason, setReason] = useState<string>("")
//     const [quantity, setQuantity] = useState<number>(1)
//     const reasonOptions = [
//         { value: "Defective", label: "Defective" },
//         { value: "Damaged", label: "Damaged" },
//         { value: "Wrong Item", label: "Wrong Item" },
//         { value: "Other", label: "Other" }
//     ]

//     const { selected } = useSelector((state: any) => state.category)

//     // const handleSelectAll = () => {
//     //     if (selectAll) {
//     //         setSelectedProducts(new Set())
//     //     } else {
//     //         setSelectedProducts(new Set(products.map(p => p.id)))
//     //     }
//     //     setSelectAll(!selectAll)
//     // }
//     // handleSelectAll()

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
//     // handleAddReview("1")

//     // const handleAddReviewForAll = () => {
//     //     if (selectedProducts.size === 0) {
//     //         alert('Please select at least one product to review')
//     //         return
//     //     }
//     //     // Handle bulk review
//     //     console.log('Adding review for products:', Array.from(selectedProducts))
//     // }
//     // handleAddReviewForAll()

//     return (
//         <div className="page-setup">
//             <div className='mb-6'>
//                 <FloatingThemeBtn />
//             </div>

//             <GoBack />

//             {/* Select All Header */}
//             <div className="flex flex-col md:flex-row items-start md:items-end justify-between space-y-4 md:space-y-0 my-6 w-full md:w-[68.6%] ">
//                 <div className="space-y-1 md:space-y-2">
//                     <h1 className="sub-heading">Return Request</h1>
//                     <p className="text-sm font-medium ">
//                         {isOpenForm ? "Thank you for reaching out regarding your refund request. To help us process your request more efficiently,  provide us with a photo or video of the issue you're experiencing. This will allow us to better understand the situation and resolve it as quickly as possible." : "CHOOSE ITEMS YOU WANT TO RETURN"}
//                     </p>
//                 </div>
//                 {
//                     !isOpenForm
//                     &&
//                     <CheckBox
//                         label="Select All"
//                         onClick={() => setSelectAll(!selectAll)}
//                         checked={selectAll}
//                     />
//                 }
//             </div>

//             <div className="">
//                 {/* Main Content */}
//                 {
//                     isOpenForm
//                         ? <div> <ReturnRequestForm /></div>
//                         : <div className="flex flex-col md:flex-row gap-6">

//                             <div className="w-full md:w-[70%] space-y-2 ">
//                                 {products.map((product) => (
//                                     <div
//                                         key={product.id}
//                                         className="border border-bColor1/50 rounded-md p-3 hover:shadow transition-shadow"
//                                     >
//                                         <div className="flex items-start space-x-4">
//                                             {/* Checkbox */}
//                                             <div className="pt-2">
//                                                 <CheckBox
//                                                     onClick={() => handleProductSelect(product.id)}
//                                                     checked={selectedProducts.has(product.id)}
//                                                     selectedItems={selectedProducts}
//                                                     productId={product.id}
//                                                 />
//                                             </div>

//                                             {/* Product Image */}
//                                             <div className="w-20">
//                                                 <Image
//                                                     src={product.image}
//                                                     alt={product.name}
//                                                     className="w-full h-full rounded-lg border border-bColor1/50"
//                                                 />
//                                             </div>

//                                             {/* Product Details */}
//                                             <div className="flex-1 min-w-0">
//                                                 <h3 className="text-sm font-medium text-blackCustom mb-2 leading-relaxed">
//                                                     {product.name}
//                                                 </h3>

//                                                 <div className="flex items-center space-x-4 mb-2">
//                                                     <div className="flex items-center space-x-2">
//                                                         <span className="text-lg font-bold text-blackCustom">
//                                                             {product.price.toFixed(2)}৳
//                                                         </span>
//                                                         <span className="text-sm text-bColor3 line-through">
//                                                             {product.originalPrice.toFixed(2)}৳
//                                                         </span>
//                                                     </div>
//                                                 </div>

//                                                 <div className="flex md:flex-col flex-row items-center md:items-start justify-between space-x-2 md:space-x-0 text-sm text-bColor3">
//                                                     <div className="flex items-center space-x-1 md:space-x-2">
//                                                         <div className="w-4 h-4 bg-warning/50 rounded border border-warning/50"></div>
//                                                         <span>{product.shade}</span>
//                                                     </div>

//                                                     <p className="hidden md:block text-sm text-bColor3 my-2">Quantity: {quantity}</p>

//                                                     <div className="flex items-center gap-2  ">
//                                                         <div onClick={() => setQuantity(quantity - 1)} className="border-2 border-bColor1 bg-transparent p-1 rounded cursor-pointer">
//                                                             <LuMinus size={20} />
//                                                         </div>
//                                                         <p className='w-8 md:w-32 rounded border-2 border-bColor1 text-center py-1' >{quantity}</p>
//                                                         <div onClick={() => setQuantity(quantity + 1)} className="border-2 border-bColor1 bg-transparent p-1 rounded cursor-pointer">
//                                                             <LuPlus size={20} />
//                                                         </div>
//                                                         <div className='hidden md:block'>
//                                                             <SearchableDropdown
//                                                                 options={reasonOptions}
//                                                                 value={reason}
//                                                                 onChange={(value) => setReason(value as string)}
//                                                                 placeholder="Select your reason"
//                                                                 isSearchable={false}
//                                                                 className='w-full min-w-full '
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                             </div>
//                                         </div>
//                                         <div className='block md:hidden mt-4'>
//                                             <SearchableDropdown
//                                                 options={reasonOptions}
//                                                 value={reason}
//                                                 onChange={(value) => setReason(value as string)}
//                                                 placeholder="Select your reason"
//                                                 isSearchable={false}
//                                                 className='w-full min-w-full '
//                                             />
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* Sidebar */}
//                             <div className="z-20 w-full md:w-[30%] text-bColor3  ">
//                                 <div className={`${selected === "makeup" ? "border-mColorBase" : "border-sColorBase2 "} border-2 rounded-xl md:rounded-lg p-4 fixed bottom-4 left-0 right-0 bg-mainBg md:bg-transparent md:sticky md:top-6 w-[96%] md:w-full mx-auto md:mx-0 `}>
//                                     <div className="text-sm">
//                                         <div className="font-medium">
//                                             ORDER IDx1x: <span className="text-blackCustom">{101}</span>
//                                         </div>

//                                         <div className="my-2">
//                                             Items Selected: <span className="font-medium text-blackCustom">
//                                                 {selectedProducts.size}/{products.length}
//                                             </span>
//                                         </div>

//                                         <p className="mb-6">Please note: Item must be returned unused and in their original Conditions (including all labels and tags intact). Product must not contain personal data or have been manufacturer-registered (mobile phones, tablets, computers). Read our <Link href="/about" className='underline text-blackCustom underline-offset-2 ' >Return Policy</Link> to find out more.</p>

//                                         <div className='flex items-center justify-between gap-3'>
//                                             <SecondaryButton onClick={() => setIsOpenForm(true)} title="Next" className={`w-full border py-1.5 ${selected === "makeup" ? "text-blackCustom border-mColor3/80 bg-mColor3/80" : "text-whiteCustom bg-sColor6 border-sColor6 "}`} />
//                                             <SecondaryButton onClick={() => router.replace("/user/orders")} title="Cancel" className='w-full border border-bColor1 py-1.5' />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                 }
//             </div>
//         </div>
//     )
// }

// export default ProductReturnRequestPage











"use client"

import { images } from '@/assets'
import ReturnRequestForm from '@/components/pageComponents/Return/ReturnRequestForm'
import CheckBox from '@/components/shared/CheckBox'
import FloatingThemeBtn from '@/components/shared/FloatingThemeBtn'
import GoBack from '@/components/shared/GoBack'
import SearchableDropdown from '@/components/shared/SearchableDropdown'
import SecondaryButton from '@/components/shared/SecondaryButton'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { LuMinus, LuPlus } from 'react-icons/lu'
import { useSelector } from 'react-redux'

interface Product {
    id: string
    name: string
    price: number
    originalPrice: number
    shade: string
    quantity: number
    image: string
}

// Proper Next.js page props interface
interface PageProps {
    params: { [key: string]: string | string[] }
    searchParams: { [key: string]: string | string[] | undefined }
}

// Mock data - replace with actual data fetching
const mockProducts: Product[] = [
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

// Next.js page component with proper props
export default function ProductReturnRequestPage({ params, searchParams }: PageProps) {
    const orderId = searchParams?.orderId as string || "101"
    console.log(params)
    
    const [products, setProducts] = useState<Product[]>([])
    const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set())
    const router = useRouter()
    const [selectAll, setSelectAll] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [reason, setReason] = useState<string>("")
    const [quantity, setQuantity] = useState<number>(1)
    
    const reasonOptions = [
        { value: "Defective", label: "Defective" },
        { value: "Damaged", label: "Damaged" },
        { value: "Wrong Item", label: "Wrong Item" },
        { value: "Other", label: "Other" }
    ]

    const { selected } = useSelector((state: any) => state.category)

    // Fetch products based on orderId
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Replace this with actual API call
                // const response = await fetch(`/api/orders/${orderId}/products`)
                // const data = await response.json()
                // setProducts(data.products)
                
                // For now, using mock data
                setProducts(mockProducts)
            } catch (error) {
                console.error('Error fetching products:', error)
                setProducts(mockProducts) // Fallback to mock data
            }
        }

        fetchProducts()
    }, [orderId])

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

    return (
        <div className="page-setup">
            <div className='mb-6'>
                <FloatingThemeBtn />
            </div>

            <GoBack />

            {/* Select All Header */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between space-y-4 md:space-y-0 my-6 w-full md:w-[68.6%] ">
                <div className="space-y-1 md:space-y-2">
                    <h1 className="sub-heading">Return Request</h1>
                    <p className="text-sm font-medium ">
                        {isOpenForm ? "Thank you for reaching out regarding your refund request. To help us process your request more efficiently,  provide us with a photo or video of the issue you're experiencing. This will allow us to better understand the situation and resolve it as quickly as possible." : "CHOOSE ITEMS YOU WANT TO RETURN"}
                    </p>
                </div>
                {
                    !isOpenForm
                    &&
                    <CheckBox
                        label="Select All"
                        onClick={handleSelectAll}
                        checked={selectAll}
                    />
                }
            </div>

            <div className="">
                {/* Main Content */}
                {
                    isOpenForm
                        ? <div> <ReturnRequestForm /></div>
                        : <div className="flex flex-col md:flex-row gap-6">

                            <div className="w-full md:w-[70%] space-y-2 ">
                                {products.map((product: Product) => (
                                    <div
                                        key={product.id}
                                        className="border border-bColor1/50 rounded-md p-3 hover:shadow transition-shadow"
                                    >
                                        <div className="flex items-start space-x-4">
                                            {/* Checkbox */}
                                            <div className="pt-2">
                                                <CheckBox
                                                    onClick={() => handleProductSelect(product.id)}
                                                    checked={selectedProducts.has(product.id)}
                                                    selectedItems={selectedProducts}
                                                    productId={product.id}
                                                />
                                            </div>

                                            {/* Product Image */}
                                            <div className="w-20">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full rounded-lg border border-bColor1/50"
                                                />
                                            </div>

                                            {/* Product Details */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-sm font-medium text-blackCustom mb-2 leading-relaxed">
                                                    {product.name}
                                                </h3>

                                                <div className="flex items-center space-x-4 mb-2">
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-lg font-bold text-blackCustom">
                                                            {product.price.toFixed(2)}৳
                                                        </span>
                                                        <span className="text-sm text-bColor3 line-through">
                                                            {product.originalPrice.toFixed(2)}৳
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex md:flex-col flex-row items-center md:items-start justify-between space-x-2 md:space-x-0 text-sm text-bColor3">
                                                    <div className="flex items-center space-x-1 md:space-x-2">
                                                        <div className="w-4 h-4 bg-warning/50 rounded border border-warning/50"></div>
                                                        <span>{product.shade}</span>
                                                    </div>

                                                    <p className="hidden md:block text-sm text-bColor3 my-2">Quantity: {quantity}</p>

                                                    <div className="flex items-center gap-2  ">
                                                        <div onClick={() => setQuantity(Math.max(1, quantity - 1))} className="border-2 border-bColor1 bg-transparent p-1 rounded cursor-pointer">
                                                            <LuMinus size={20} />
                                                        </div>
                                                        <p className='w-8 md:w-32 rounded border-2 border-bColor1 text-center py-1' >{quantity}</p>
                                                        <div onClick={() => setQuantity(quantity + 1)} className="border-2 border-bColor1 bg-transparent p-1 rounded cursor-pointer">
                                                            <LuPlus size={20} />
                                                        </div>
                                                        <div className='hidden md:block'>
                                                            <SearchableDropdown
                                                                options={reasonOptions}
                                                                value={reason}
                                                                onChange={(value) => setReason(value as string)}
                                                                placeholder="Select your reason"
                                                                isSearchable={false}
                                                                className='w-full min-w-full '
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='block md:hidden mt-4'>
                                            <SearchableDropdown
                                                options={reasonOptions}
                                                value={reason}
                                                onChange={(value) => setReason(value as string)}
                                                placeholder="Select your reason"
                                                isSearchable={false}
                                                className='w-full min-w-full '
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Sidebar */}
                            <div className="z-20 w-full md:w-[30%] text-bColor3  ">
                                <div className={`${selected === "makeup" ? "border-mColorBase" : "border-sColorBase2 "} border-2 rounded-xl md:rounded-lg p-4 fixed bottom-4 left-0 right-0 bg-mainBg md:bg-transparent md:sticky md:top-6 w-[96%] md:w-full mx-auto md:mx-0 `}>
                                    <div className="text-sm">
                                        <div className="font-medium">
                                            ORDER ID: <span className="text-blackCustom">{orderId}</span>
                                        </div>

                                        <div className="my-2">
                                            Items Selected: <span className="font-medium text-blackCustom">
                                                {selectedProducts.size}/{products?.length}
                                            </span>
                                        </div>

                                        <p className="mb-6">Please note: Item must be returned unused and in their original Conditions (including all labels and tags intact). Product must not contain personal data or have been manufacturer-registered (mobile phones, tablets, computers). Read our <Link href="/about" className='underline text-blackCustom underline-offset-2 ' >Return Policy</Link> to find out more.</p>

                                        <div className='flex items-center justify-between gap-3'>
                                            <SecondaryButton 
                                                onClick={() => {
                                                    if (selectedProducts.size === 0) {
                                                        alert('Please select at least one product to return')
                                                        return
                                                    }
                                                    setIsOpenForm(true)
                                                }} 
                                                title="Next" 
                                                className={`w-full border py-1.5 ${selected === "makeup" ? "text-blackCustom border-mColor3/80 bg-mColor3/80" : "text-whiteCustom bg-sColor6 border-sColor6 "}`} 
                                            />
                                            <SecondaryButton onClick={() => router.replace("/user/orders")} title="Cancel" className='w-full border border-bColor1 py-1.5' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}