"use client"

import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"

const ColorPicker = ({ shades }: { shades: string[] }) => {
    const { selected } = useSelector((state: any) => state.category)
    const [selectedColor, setSelectedColor] = useState(shades?.[0])
    const [startIndex, setStartIndex] = useState(0)
    const [visibleColors, setVisibleColors] = useState(9)
    const containerRef = useRef<HTMLDivElement>(null)

    // Calculate how many colors can fit in available space
    useEffect(() => {
        const calculateVisibleColors = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth
                const colorWidth = 16 + 6 // w-4 (16px) + gap-2 (8px)
                const maxColors = Math.floor(containerWidth / colorWidth)
                setVisibleColors(Math.max(1, Math.min(maxColors, shades?.length || 0)))
            }
        }

        calculateVisibleColors()
        window.addEventListener('resize', calculateVisibleColors)
        return () => window.removeEventListener('resize', calculateVisibleColors)
    }, [shades?.length])

    // Handle color selection
    const handleColorSelect = (color: string) => {
        setSelectedColor(color)
    }

    // Navigate colors left
    const navigateLeft = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1)
        }
    }

    // Navigate colors right
    const navigateRight = () => {
        if (startIndex < shades?.length - visibleColors) {
            setStartIndex(startIndex + 1)
        }
    }

    return (
        <div className="flex items-center justify-start space-x-1 py-1 w-full">
            {/* Left arrow */}
            <button
                onClick={navigateLeft}
                disabled={startIndex === 0}
                className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-blackCustom cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            {/* Color options with dynamic fitting */}
            <div ref={containerRef} className="flex items-center justify-center gap-1.5 h-7 flex-1 overflow-hidden">
                {shades?.slice(startIndex, startIndex + visibleColors).map((color, index) => (
                    <button
                        key={index}
                        onClick={() => handleColorSelect(color)}
                        className={`w-4 h-4 shadow-md rounded-full transition-transform ${
                            selectedColor === color && selected === "makeup" 
                                ? 'ring-2 ring-mBtnBg ring-offset-2 scale-100' 
                                : selectedColor === color && selected === "skincare" 
                                ? 'ring-2 ring-sBtnBg ring-offset-2 scale-100' 
                                : ''
                        }`}
                        style={{ backgroundColor: color }}
                        aria-label={`Select color ${index + 1}`}
                    />
                ))}
            </div>

            {/* Right arrow */}
            <button
                onClick={navigateRight}
                disabled={startIndex >= shades?.length - visibleColors}
                className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-blackCustom cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>
        </div>
    )
}

export default ColorPicker