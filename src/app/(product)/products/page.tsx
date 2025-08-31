"use client"
import Card from '@/components/Atoms/Card'
import IsFilter from '@/components/pageComponents/Products/IsFilter'
import SortBy from '@/components/pageComponents/Products/SortBy'
import FloatingThemeBtn from '@/components/shared/FloatingThemeBtn'
import PathIndicator from '@/components/shared/PathIndicator'
import SecondaryButton from '@/components/shared/SecondaryButton'
import FilterSheetForSmDevices from '@/components/sheets/FilterSheetForSmDevices'
import { useGetAllProductsQuery } from '@/redux/api/productsApi'
import React, { useState } from 'react'
import { BsEye } from 'react-icons/bs'
import { FiEyeOff } from 'react-icons/fi'
import { useSelector } from 'react-redux'

const ProductsPage = () => {
    const [filter, setFilter] = useState(true)
    const [showOnSale, setShowOnSale] = useState(false)
    const [visibleItems, setVisibleItems] = useState(8)
    const [loading, setLoading] = useState(false)
    const { selected } = useSelector((state: any) => state.category)

    const { data: productsData } = useGetAllProductsQuery("")

    const handleLoadMore = () => {
        setLoading(true)
        setTimeout(() => {
            setVisibleItems(prev => prev + 8)
            setLoading(false)
        }, 1000)
    }

    const hasMoreItems = visibleItems < productsData?.data?.length
    const displayedProducts = productsData?.data?.slice(0, visibleItems)

    return (
        <div className='page-setup'>
            <div className='mb-8'>
                <FloatingThemeBtn />
            </div>
            <PathIndicator path="Products" />
            <h1 className='sub-heading my-4' >Makeup(10 Items)</h1>

            <div className='flex md:flex-row flex-col-reverse items-center justify-between mb-6 '>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" className="sr-only" />
                    <div onClick={() => setShowOnSale(!showOnSale)} className={`${showOnSale && selected === "makeup" ? "bg-mColor20 border-mColor20" : showOnSale && selected === "skincare" ? "bg-sColorBase3 border-sColorBase3" : "bg-transparent border-bColor1"} w-[.88rem] h-[.88rem] border-2 rounded transition-all duration-200`} />
                    <label onClick={() => setShowOnSale(!showOnSale)}>Show Products On Sale</label>
                </div>

                <div className='flex items-center gap-4 xl:gap-12 w-full md:w-fit mb-4 md:mb-0 '>
                    <div className="hidden md:flex items-center gap-1 min-w-fit">
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setFilter(!filter)}>
                            {filter ? <FiEyeOff /> : <BsEye />}
                            <span>{filter ? 'Hide Filter' : 'Show Filter'}</span>
                        </div>
                    </div>
                    <SortBy />
                </div>
            </div>

            <div className='flex items-start gap-10 '>
                <div className={`w-full ${filter ? "hidden md:block md:w-[20%] sticky top-28" : "hidden"}`}>
                    {filter && <IsFilter />}
                </div>

                <div className={`w-full ${filter ? "w-full md:w-[80%]" : "md:w-full"}`}>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {
                            displayedProducts?.map((item: any, index: number) => (
                                <Card product={item} key={index} />
                            ))
                        }
                    </div>

                    {/* Load More Button */}
                    {hasMoreItems && (
                        <div className="flex justify-center mt-8">
                            <SecondaryButton
                                title={loading ? "Loading..." : "Load More"}
                                onClick={handleLoadMore}
                                disabled={loading}
                                className={`px-6 py-3`}
                            />
                        </div>
                    )}

                    {/* End Message */}
                    {!hasMoreItems && productsData?.data?.length > 8 && (
                        <div className="text-center mt-8 p-6 bg-gray-50 rounded-lg">
                            <p className="text-gray-600 text-lg">
                                You have reached the end. Do a search to keep exploring!
                            </p>
                            <SecondaryButton
                                title={"Show Less"}
                                onClick={() => setVisibleItems(8)}
                                className={`px-6 py-3 w-fit mx-auto`}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* filter btn for sm screens */}
            <div className='md:hidden fixed z-50 bottom-2 right-2'>
                <FilterSheetForSmDevices />
            </div>
        </div>
    )
}
export default ProductsPage