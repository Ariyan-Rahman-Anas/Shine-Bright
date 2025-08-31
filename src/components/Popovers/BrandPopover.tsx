// import { RxCross2 } from "react-icons/rx"
// import Image from "next/image"
// import { icons } from "@/assets"
// import { useState, useMemo } from "react"
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/components/ui/popover"
// import { useGetAllBrandsQuery } from "@/redux/api/brandsApi"
// import Link from "next/link"

// const BrandPopover = () => {
//     const [open, setOpen] = useState(false)
//     const [search, setSearch] = useState("")
//     const { data: brandsData } = useGetAllBrandsQuery("")

//     // Group brands by first letter and filter out empty groups
//     const groupedBrands = useMemo(() => {
//         if (!brandsData?.data) return {}
        
//         const groups = {}
//         const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
        
//         letters.forEach(letter => {
//             const brandsForLetter = brandsData?.data?.filter(
//                 (item: any) => item?.title?.toUpperCase().startsWith(letter)
//             )
            
//             // Only include groups that have brands
//             if (brandsForLetter.length > 0) {
//                 groups[letter] = brandsForLetter
//             }
//         })
        
//         return groups
//     }, [brandsData])

//     // Filter brands based on search
//     const filteredGroupedBrands = useMemo(() => {
//         if (!search) return groupedBrands
        
//         const filtered = {}
//         Object.entries(groupedBrands).forEach(([letter, brands]: any) => {
//             const filteredBrands = brands.filter((brand: any) => 
//                 brand?.title?.toLowerCase().includes(search.toLowerCase())
//             )
//             if (filteredBrands.length > 0) {
//                 filtered[letter] = filteredBrands
//             }
//         })
        
//         return filtered
//     }, [groupedBrands, search])

//     const availableLetters = Object.keys(filteredGroupedBrands).sort()

//     return (
//         <Popover open={open} onOpenChange={setOpen}>
//             <PopoverTrigger>BRAND</PopoverTrigger>
//             <PopoverContent className="w-full min-w-[100vw] max-w-1600 mx-auto py-8 px-4 sm:px-6 lg:px-8">
//                 <div className="section-setup-1600 relative">
//                     <RxCross2
//                         className="absolute top-0 right-0 cursor-pointer hover:opacity-70 transition-opacity"
//                         onClick={() => setOpen(false)}
//                         size={20}
//                     />
//                     <div className="flex items-center gap-10">
//                         <div className="">
//                             <h1 className="sub-heading">Brands</h1>
//                             <p>Collections of the products our customers liked the most</p>
//                         </div>
//                         <div className="flex items-center gap-2 border-2 border-bColor1 w-full max-w-2xl rounded-md px-2">
//                             <div className="w-fit">
//                                 <Image
//                                     src={icons.Search}
//                                     alt="Search"
//                                     className="w-6 h-6"
//                                 />
//                             </div>
//                             <div className="w-full">
//                                 <input
//                                     type="text"
//                                     placeholder="Search Brands"
//                                     className="w-full p-2 rounded focus:outline-none"
//                                     value={search}
//                                     onChange={(e) => setSearch(e.target.value)}
//                                 />
//                             </div>
//                             <div className="w-fit">
//                                 <RxCross2 
//                                     onClick={() => setSearch("")} 
//                                     className={`w-5 h-5 cursor-pointer text-bColor4 ${search ? 'block' : 'hidden'}`} 
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Show available letters */}
//                     <div className="flex items-center justify-between flex-wrap gap-8 mt-5 border-b border-bColor1">
//                         {availableLetters.map((letter) => (
//                             <p key={letter} className="text-sm">{letter}</p>
//                         ))}
//                     </div>

//                     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5 text-xs h-[280px] overflow-y-scroll">
//                         {availableLetters.map((letter: string) => (
//                             <div key={letter}>
//                                 <h3 className="font-semibold">{letter}</h3>
//                                 <div className="text-bColor3 text-xs mt-2 mb-5">
//                                     {filteredGroupedBrands[letter as keyof typeof filteredGroupedBrands].map((brand: any, idx: number) => (
//                                         <div key={idx} className="flex flex-col">
//                                             <Link 
//                                                 href={`/brand/${brand?.id}`} 
//                                                 className="hover:underline"
//                                             >
//                                                 {brand?.title}
//                                             </Link>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </PopoverContent>
//         </Popover>
//     )
// }
// export default BrandPopover










import { RxCross2 } from "react-icons/rx"
import Image from "next/image"
import { icons } from "@/assets"
import { useState, useMemo } from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useGetAllBrandsQuery } from "@/redux/api/brandsApi"
import Link from "next/link"

const BrandPopover = () => {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const { data: brandsData } = useGetAllBrandsQuery("")

    // Group brands by first letter and filter out empty groups
    const groupedBrands = useMemo(() => {
        if (!brandsData?.data) return {}
        
        const groups: Record<string, any[]> = {}
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
        
        letters.forEach(letter => {
            const brandsForLetter = brandsData?.data?.filter(
                (item: any) => item?.title?.toUpperCase().startsWith(letter)
            )
            
            // Only include groups that have brands
            if (brandsForLetter?.length > 0) {
                groups[letter] = brandsForLetter
            }
        })
        
        return groups
    }, [brandsData])

    // Filter brands based on search
    const filteredGroupedBrands = useMemo(() => {
        if (!search) return groupedBrands
        
        const filtered: Record<string, any[]> = {}
        Object.entries(groupedBrands).forEach(([letter, brands]: any) => {
            const filteredBrands = brands.filter((brand: any) => 
                brand?.title?.toLowerCase().includes(search.toLowerCase())
            )
            if (filteredBrands?.length > 0) {
                filtered[letter] = filteredBrands
            }
        })
        
        return filtered
    }, [groupedBrands, search])

    const availableLetters = Object.keys(filteredGroupedBrands).sort()

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>BRAND</PopoverTrigger>
            <PopoverContent className="w-full min-w-[100vw] max-w-1600 mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="section-setup-1600 relative">
                    <RxCross2
                        className="absolute top-0 right-0 cursor-pointer hover:opacity-70 transition-opacity"
                        onClick={() => setOpen(false)}
                        size={20}
                    />
                    <div className="flex items-center gap-10">
                        <div className="">
                            <h1 className="sub-heading">Brands</h1>
                            <p>Collections of the products our customers liked the most</p>
                        </div>
                        <div className="flex items-center gap-2 border-2 border-bColor1 w-full max-w-2xl rounded-md px-2">
                            <div className="w-fit">
                                <Image
                                    src={icons.Search}
                                    alt="Search"
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="w-full">
                                <input
                                    type="text"
                                    placeholder="Search Brands"
                                    className="w-full p-2 rounded focus:outline-none"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <div className="w-fit">
                                <RxCross2 
                                    onClick={() => setSearch("")} 
                                    className={`w-5 h-5 cursor-pointer text-bColor4 ${search ? 'block' : 'hidden'}`} 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Show available letters */}
                    <div className="flex items-center justify-between flex-wrap gap-8 mt-5 border-b border-bColor1">
                        {availableLetters.map((letter) => (
                            <p key={letter} className="text-sm">{letter}</p>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5 text-xs h-[280px] overflow-y-scroll">
                        {availableLetters.map((letter: string) => (
                            <div key={letter}>
                                <h3 className="font-semibold">{letter}</h3>
                                <div className={`text-bColor3 grid grid-cols-1 text-xs mt-2 mb-5  ${filteredGroupedBrands[letter]?.length > 10 ? "grid-cols-2" : ""}`}>
                                    {filteredGroupedBrands[letter].map((brand: any, idx: number) => (
                                        <div key={idx} className="">
                                            <Link 
                                                href={`/brand/${brand?.id}`} 
                                                className="hover:underline"
                                            >
                                                {brand?.title}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
export default BrandPopover