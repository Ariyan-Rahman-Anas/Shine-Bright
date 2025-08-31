"use client"

import { icons } from "@/assets"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useMemo } from "react"
import { RxCross2 } from "react-icons/rx"
import Card from "../Atoms/Card"
import { useGetAllProductsQuery } from "@/redux/api/productsApi"
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"

const SearchSheet = () => {
    const [open, setOpen] = useState(false)
    const [isLargeScreen, setIsLargeScreen] = useState(false)
    const [search, setSearch] = useState("")
    const [debouncedSearch, setDebouncedSearch] = useState("")

    const hanldeClose = () => {
        setOpen(false)
        setSearch("")
        setDebouncedSearch("")
    }

    // Debounce search term to avoid too many API calls
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search)
        }, 500)
        return () => clearTimeout(timer)
    }, [search])

    // Prepare query parameters
    const queryParams = useMemo(() => {
        if (debouncedSearch.trim()) {
            return {
                searchTerm: debouncedSearch,
            }
        }
        return {}
    }, [debouncedSearch])

    // RTK Query hook - always runs, shows all products by default
    const {
        data: searchResults,
        isLoading,
        error,
        isFetching
    } = useGetAllProductsQuery(queryParams)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth > 1920)
        }
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    // Determine what products to show
    const productsToShow = useMemo(() => {
        if (searchResults?.data || searchResults) {
            return searchResults?.data
        }
        return []
    }, [searchResults])

    const handleClearSearch = () => {
        setSearch("")
        setDebouncedSearch("")
    }

    const popularSearch = [
        "ARTIST FAVOURITE", "HOURGLASS", "CONCELAR", "LIPTSTICK", "EYE-LINER"
    ]

    return (
        <div className="relative">
            <div>
                <Image
                    onClick={() => setOpen(!open)}
                    src={icons.Search}
                    alt="Search"
                    className="w-6 h-6 cursor-pointer"
                />
            </div>

            {/* Overlay */}
            <div
                className={`bg-bColor7 fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setOpen(false)}
            />

            {/* Sheet */}
            <div className={`fixed z-50 bg-whiteCustom shadow-lg border-b-2 border-blackCustom rounded-b-md transition-all duration-500 ease-in-out ${isLargeScreen
                ? // Large screen (>1920px) - centered
                `top-0 left-1/2 transform -translate-x-1/2 w-full h-[580px] ${open ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                }`
                : // Small screen (≤1920px) - from top-right corner
                `top-0 right-0 w-full h-[580px] ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`
                }`}>
                <div>
                    <div className="w-full max-w-1600 mx-auto flex items-center justify-between gap-3 p-2 md:p-4">
                        <Link onClick={() => setOpen(false)} href="/" className="hidden md:block" >
                            <Image src={icons.Logo2} alt="taupe-notch" className="cursor-pointer" />
                        </Link>

                        <div className="flex items-center gap-2 border-2 border-bColor1 w-full max-w-2xl rounded-lg px-2">
                            <div className="w-fit">
                                <Image
                                    src={icons.Search}
                                    alt="Search"
                                    className="w-6 h-6"
                                />
                            </div>

                            <div className="w-full relative">
                                <input
                                    type="text"
                                    placeholder="Search Products ..."
                                    className="w-full p-2 focus:outline-none"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                {(isLoading || isFetching) && search.trim() && (
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-bColor1"></div>
                                    </div>
                                )}
                            </div>

                            <div className="w-fit">
                                <RxCross2
                                    onClick={handleClearSearch}
                                    className={`w-6 h-6 cursor-pointer text-bColor4 ${search ? 'block' : 'hidden'}`}
                                />
                            </div>
                        </div>

                        <button
                            onClick={hanldeClose}
                            className="w-fit"
                        >
                            Close
                        </button>
                    </div>
                    <hr />

                    <div className="w-full max-w-1600 mx-auto p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <div className="col-span-6 md:col-span-1">
                            <h1 className="font-semibold">POPULAR SEARCH</h1>
                            <div className="flex items-center gap-2 flex-wrap">
                                {
                                    popularSearch?.map((item, idx) => <div key={idx} className="flex items-center gap-1 border w-fit px-3 py1 rounded-full ">
                                        <div className="w-4">
                                            <Image
                                                src={icons.Search}
                                                alt="Search"
                                                className="w-6 h-6"
                                            />
                                        </div>
                                        <p className="text-xs">{item}</p>
                                    </div>)
                                }
                            </div>
                        </div>

                        <div className="col-span-6 md:col-span-5 overflow-x-hidden">
                            {error && search.trim() && (
                                <div className="text-red-500 text-center py-4">
                                    Error loading search results. Please try again.
                                </div>
                            )}

                            {search.trim() && !isLoading && !isFetching && productsToShow?.length === 0 && (
                                <div className="text-gray-500 text-center py-4">
                                    No products found for {search}
                                </div>
                            )}

                            <Carousel
                                opts={{
                                    align: "start",
                                }}
                                className="w-full"
                            >
                                <CarouselContent>
                                    {productsToShow?.map((product: any, index: any) => (
                                        <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                                            <Card product={product} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchSheet