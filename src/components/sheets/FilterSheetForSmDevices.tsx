"use client"

import { useEffect, useState } from "react"
import { RxCross2 } from "react-icons/rx"
import { useSelector } from "react-redux"
import SecondaryButton from "../shared/SecondaryButton"
import { IoFilterOutline } from "react-icons/io5"
import IsFilter from "../pageComponents/Products/IsFilter"

const FilterSheetForSmDevices = () => {

    const [open, setOpen] = useState(false)
    const [isLargeScreen, setIsLargeScreen] = useState(false)

    const { selected } = useSelector((state: any) => state.category)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth > 1920)
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    return (
        <div>
            <div>
                <SecondaryButton
                    title="Filter"
                    icon={<IoFilterOutline size={20} />}
                    onClick={() => setOpen(!open)}
                    style={{
                        color: "#fff",
                        backgroundColor: selected === "makeup" ? "#5B2C72" : "#C8996D",
                    }}
                    className="px-6 py-2 "
                />
            </div>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-40 transition-opacity duration-500 bg-bColor7 bg-opacity-50 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setOpen(false)}
            />

            {/* Side Sheet */}
            <div className={`fixed top-0 right-0 z-50 bg-whiteCustom shadow-lg h-full transition-all duration-500 ease-in-out ${isLargeScreen
                ? // Large screen (>1920px) - wider side panel from right
                `w-[450px] ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`
                : // Small screen (≤1920px) - responsive width side panel from right
                `w-[90%] md:w-[390px] ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`
                }`}>
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="flex justify-end items-center p-4 pb-2">
                        <RxCross2 className="w-6 h-6 text-bColor4 cursor-pointer" onClick={() => setOpen(false)} />
                    </div>

                    {/* Cart Content */}
                    <div className="flex-1 overflow-y-auto p-3">
                        <IsFilter />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterSheetForSmDevices