"use client"

import { icons } from "@/assets"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useMemo } from "react"
import { RxCross2 } from "react-icons/rx"
import Card from "../Atoms/Card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { SBProductsData } from "@/constant"

const SearchSheet = () => {
    const [open, setOpen] = useState(false)
    const [isLargeScreen, setIsLargeScreen] = useState(false)
    const [search, setSearch] = useState("")
    const [debouncedSearch, setDebouncedSearch] = useState("")
    const [loading, setLoading] = useState(false)

    const handleClose = () => {
        setOpen(false)
        setSearch("")
        setDebouncedSearch("")
    }

    const handleClearSearch = () => {
        setSearch("")
        setDebouncedSearch("")
    }

    const popularSearch = [
        "ARTIST FAVOURITE", "HOURGLASS", "CONCEALER", "LIPSTICK", "EYELINER"
    ]

    // Debounce logic
    useEffect(() => {
        if (!search.trim()) {
            setDebouncedSearch("")
            return
        }

        setLoading(true)
        const timer = setTimeout(() => {
            setDebouncedSearch(search.trim())
            setLoading(false)
        }, 800)

        return () => clearTimeout(timer)
    }, [search])

    // Filter search results
    const searchResult = useMemo(() => {
        if (!debouncedSearch) return []
        return SBProductsData.filter(product =>
            product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
    }, [debouncedSearch])

    // Handle screen size for animation
    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth > 1920)
        }
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    const productsData = search ? searchResult : SBProductsData

    return (
        <div className="relative">
            <Image
                onClick={() => setOpen(!open)}
                src={icons.Search}
                alt="Search"
                className="w-6 h-6 cursor-pointer"
            />

            {/* Overlay */}
            <div
                className={`bg-bColor7 fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={handleClose}
            />

            {/* Search Sheet */}
            <div className={`fixed z-50 bg-whiteCustom shadow-lg border-b-2 border-blackCustom rounded-b-md transition-all duration-500 ease-in-out
                ${isLargeScreen
                    ? `top-0 left-1/2 transform -translate-x-1/2 w-full h-[580px] ${open ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`
                    : `top-0 right-0 w-full h-[580px] ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`
                }`}>
                <div>
                    <div className="w-full max-w-1600 mx-auto flex items-center justify-between gap-3 p-2 md:p-4">
                        <Link onClick={handleClose} href="/" className="hidden md:block">
                            <Image src={icons.Logo2} alt="taupe-notch" className="cursor-pointer" />
                        </Link>

                        <div className="flex items-center gap-2 border-2 border-bColor1 w-full max-w-2xl rounded-lg px-2">
                            <Image src={icons.Search} alt="Search" className="w-6 h-6" />
                            <div className="w-full relative">
                                <input
                                    type="text"
                                    placeholder="Search Products ..."
                                    className="w-full p-2 focus:outline-none"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                {loading && search.trim() && (
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-bColor1"></div>
                                    </div>
                                )}
                            </div>
                            <RxCross2
                                onClick={handleClearSearch}
                                className={`w-6 h-6 cursor-pointer text-bColor4 ${search ? 'block' : 'hidden'}`}
                            />
                        </div>

                        <button onClick={handleClose} className="w-fit">
                            Close
                        </button>
                    </div>
                    <hr />

                    <div className="w-full max-w-1600 mx-auto p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {/* Popular Search */}
                        <div className="col-span-6 md:col-span-1">
                            <h1 className="font-semibold">POPULAR SEARCH</h1>
                            <div className="flex items-center gap-2 flex-wrap mt-2">
                                {popularSearch.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-1 border w-fit px-3 py-1 rounded-full cursor-pointer"
                                        onClick={() => setSearch(item)}
                                    >
                                        <Image src={icons.Search} alt="Search" className="w-4 h-4" />
                                        <p className="text-xs">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Search Results */}
                        <div className="col-span-6 md:col-span-5 overflow-x-hidden">
                            {!loading && debouncedSearch && searchResult.length === 0 && (
                                <div className="text-gray-500 text-center py-4">
                                    {`No products found for "${debouncedSearch}"`}
                                </div>
                            )}

                            <Carousel opts={{ align: "start" }} className="w-full">
                                <CarouselContent>
                                    {productsData.map((product: any, index: number) => (
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