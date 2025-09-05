"use client"

import { setCategory } from "@/redux/features/categorySlice"
import { useDispatch, useSelector } from "react-redux"

const FloatingThemeBtn = () => {
    const { selected } = useSelector((state: any) => state.category)
    const dispatch = useDispatch()
    const setSelected = (value: string) => {
        dispatch(setCategory(value))
    }
    return (<div className="flex justify-center items-center mt-4 ">
        <div className="relative flex items-center w-60 md:w-72 h-7 md:h-10 bg-whiteCustom text-sm font-semibold rounded-full shadow-md">
            {/* Sliding Background */}
            <div
                className={`absolute h-full w-1/2 rounded-full transition-all duration-300 ease-in-out ${selected === 'makeup' ? 'left-0 bg- mBtn bggradient-to-r from-mColorBase to-mColorBase2' : 'left-1/2 sBtn bggradient-to-r from-sColorBase2 to-sColorBase3'
                    }`}
            />

            {/* Toggle Options */}
            <button
                onClick={() => setSelected('makeup')}
                className={`relative z-10 flex-1 h-full flex items-center justify-center ${selected === 'makeup' ? 'text-whiteCustom' : 'text-bColor3'
                    }`}
            >
                MAKEUP
            </button>

            <button
                onClick={() => setSelected('skincare')}
                className={`relative z-10 flex-1 h-full flex items-center justify-center ${selected === 'skincare' ? 'text-whiteCustom' : 'text-bColor3'
                    }`}
            >
                SKINCARE
            </button>
        </div>
    </div>
    )
}
export default FloatingThemeBtn