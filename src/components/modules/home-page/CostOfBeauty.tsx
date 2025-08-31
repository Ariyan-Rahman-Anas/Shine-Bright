"use client"

import { icons } from "@/assets"
import PrimaryButton from "@/components/shared/PrimaryButton"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { AllProducts } from "@/constant"

const CostOfBeauty = () => {

    const { selected } = useSelector((state: any) => state.category)

    const [currentSlide, setCurrentSlide] = useState(0)
    const [itemsPerSlide, setItemsPerSlide] = useState(3)
    const [isAnimating, setIsAnimating] = useState(false)
    const sliderRef = useRef<HTMLDivElement>(null)

    // Handle window resize and set items per slide
    useEffect(() => {
        const handleResize = () => {
            setItemsPerSlide(window.innerWidth < 768 ? 1 : 3)
        }

        // Set initial value
        handleResize()

        // Add event listener
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Calculate total number of slides
    const totalSlides = Math.ceil(AllProducts?.length / itemsPerSlide)

    // Handle next slide with animation
    const nextSlide = () => {
        if (isAnimating || !sliderRef.current) return

        setIsAnimating(true)

        // Apply outgoing animation
        sliderRef.current.classList.add('animate-slide-out-left')

        // Change slide after animation
        setTimeout(() => {
            setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))

            // Reset and apply incoming animation
            if (sliderRef.current) {
                sliderRef.current.classList.remove('animate-slide-out-left')
                sliderRef.current.classList.add('animate-slide-in-right')

                // Remove animation class after it completes
                setTimeout(() => {
                    if (sliderRef.current) {
                        sliderRef.current.classList.remove('animate-slide-in-right')
                        setIsAnimating(false)
                    }
                }, 300)
            } else {
                setIsAnimating(false)
            }
        }, 300)
    }

    // Handle previous slide with animation
    const prevSlide = () => {
        if (isAnimating || !sliderRef.current) return

        setIsAnimating(true)

        // Apply outgoing animation
        sliderRef.current.classList.add('animate-slide-out-right')

        // Change slide after animation
        setTimeout(() => {
            setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))

            // Reset and apply incoming animation
            if (sliderRef.current) {
                sliderRef.current.classList.remove('animate-slide-out-right')
                sliderRef.current.classList.add('animate-slide-in-left')

                // Remove animation class after it completes
                setTimeout(() => {
                    if (sliderRef.current) {
                        sliderRef.current.classList.remove('animate-slide-in-left')
                        setIsAnimating(false)
                    }
                }, 300)
            } else {
                setIsAnimating(false)
            }
        }, 300)
    }

    // Go to specific slide with animation
    const goToSlide = (slideIndex: number) => {
        if (isAnimating || slideIndex === currentSlide) return

        if (slideIndex > currentSlide) {
            nextSlide()
        } else {
            prevSlide()
        }
    }

    // Get visible products for current slide
    const visibleProducts = () => {
        const startIndex = currentSlide * itemsPerSlide
        return AllProducts.slice(startIndex, startIndex + itemsPerSlide)
    }

    return (
        <div className="section-setup-1600-p overflow-x-hidden flex flex-col md:flex-row items-start justify-between py-6 gap-8">
            <div className="w-full md:max-w-md ">
                <h1 className="text-3xl md:text-4xl font-semibold uppercase mt-3 text-center md:text-left ">In cost of Beauty the hype worth every penny</h1>
                <div className="hidden md:flex items-center justify-center mt-16">
                    <button
                        onClick={prevSlide}
                        disabled={isAnimating}
                        className="p-2 hover:bg-bColor1 rounded-full transition-colors disabled:opacity-50"
                    >
                        <Image src={icons.Left} alt="Left" className="h-6 w-6" />
                    </button>

                    {/* Slider indicator dots */}
                    <div className="flex space-x-2 mx-1">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                disabled={isAnimating}
                                className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index && selected === "makeup" ? "bg-mColor8" : currentSlide === index && selected === "skincare" ? "bg-sColor8" : "bg-bColor1"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        disabled={isAnimating}
                        className="p-2 hover:bg-bColor1 rounded-full transition-colors disabled:opacity-50"
                    >
                        <Image src={icons.Right} alt="Right" className="w-6 h-6" />
                    </button>
                </div>
            </div>


            <div className="md:hidden w-full  ">
                <Carousel
                    opts={{
                        align: "center",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {AllProducts.map(({ title, img }, index) => (
                            <CarouselItem key={index} className="basis-full ">
                                <div
                                    key={`product-${currentSlide}-${index}`}
                                    className="p-3 shadow-lg rounded-md"
                                >
                                    <div className="w-full h-full " >
                                        <Image
                                            src={img}
                                            alt="Product"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-lg font-medium mb-4 line-clamp-2">{title}</h3>
                                    <PrimaryButton
                                        to="/"
                                        title="SHOP NOW"
                                        className={`py-2 w-full font-semibold uppercase ${selected === "makeup"
                                            // ? "bg-mColor3/80 "
                                            ? "bg-mBtn "
                                            // : "text-whiteCustom bg-gradient-to-r from-sColorBase to-sColor9"
                                            : "text-whiteCustom bg-sBtn gradient-to-r from-sColorBase to-sColor9"
                                            }`}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>




            <div className="hidden md:block w-full">
                {/* Use Tailwind classes for animations instead of custom styles */}
                <div
                    ref={sliderRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {visibleProducts().map((product, index) => (
                        <div
                            key={`product-${currentSlide}-${index}`}
                            className="p-3 shadow-lg rounded-md"
                        >
                            <div className="mb-4">
                                <Image
                                    src={product.img}
                                    alt="Product"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-medium mb-4 line-clamp-2">{product.title}</h3>
                            <PrimaryButton
                                to="/"
                                title="SHOP NOW"
                                className={`py-2 w-full font-semibold uppercase ${selected === "makeup"
                                    // ? "bg-mColor3/80 "
                                    ? "bg-mBtn "
                                    // : "text-whiteCustom bg-gradient-to-r from-sColorBase to-sColor9"
                                    : "text-whiteCustom bg-sBtn gradient-to-r from-sColorBase to-sColor9"
                                    }`}
                            />
                        </div>
                    ))}
                </div>

                {/* Define animations in a more TypeScript-friendly way */}
                <style jsx>{`
                    @keyframes slideOutLeft {
                        from { transform: translateX(0); opacity: 1; }
                        to { transform: translateX(-30px); opacity: 0; }
                    }
                    
                    @keyframes slideInRight {
                        from { transform: translateX(30px); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    
                    @keyframes slideOutRight {
                        from { transform: translateX(0); opacity: 1; }
                        to { transform: translateX(30px); opacity: 0; }
                    }
                    
                    @keyframes slideInLeft {
                        from { transform: translateX(-30px); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    
                    :global(.animate-slide-out-left) {
                        animation: slideOutLeft 300ms ease-in-out forwards;
                    }
                    
                    :global(.animate-slide-in-right) {
                        animation: slideInRight 300ms ease-in-out forwards;
                    }
                    
                    :global(.animate-slide-out-right) {
                        animation: slideOutRight 300ms ease-in-out forwards;
                    }
                    
                    :global(.animate-slide-in-left) {
                        animation: slideInLeft 300ms ease-in-out forwards;
                    }
                `}</style>
            </div>
        </div>
    )
}

export default CostOfBeauty