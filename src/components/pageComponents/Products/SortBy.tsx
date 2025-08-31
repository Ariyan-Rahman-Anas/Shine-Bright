"use client"
import SearchableDropdown, { DropdownOption } from '@/components/shared/SearchableDropdown'
import React, { useState } from 'react'

const SortBy = () => {
    const [singleValue, setSingleValue] = useState<string | number>("");

    const categoryOptions: DropdownOption[] = [
        { value: "makeup", label: "Makeup" },
        { value: "skincare", label: "Skincare" },
        { value: "perfume", label: "Perfume" },
        { value: "cosmetics", label: "Cosmetics" },
        { value: "fragrance", label: "Fragrance" },
        { value: "cosmetics", label: "Cosmetics" },
    ];
    const sortByOptions: DropdownOption[] = [
        { value: "name", label: "Name" },
        { value: "price", label: "Price" },
        { value: "rating", label: "Rating" },
    ];
    const showOptions: DropdownOption[] = [
        { value: "10", label: "10" },
        { value: "20", label: "20" },
        { value: "30", label: "30" },
    ];

    return (
        <div className='flex items-start flex-wrap justify-between xl:gap-12 border-y-[1px] md:border-none w-full border-bColor2'>
            <div className='flex items-center gap-0.5'>
                <h1 className='hidden md:block'>Categories - </h1>
                <SearchableDropdown
                    isLabel={false}
                    options={categoryOptions}
                    value={singleValue}
                    onChange={(value) => setSingleValue(value as string)}
                    placeholder="Category"
                    searchPlaceholder="Select Category"
                    clearable
                    required
                    maxHeight="250px"
                    isSearchable={false}
                    className='border-none w-full min-w-32 '
                />
            </div>
            <div className='flex items-center gap-1'>
                <h1 className='hidden md:block'>Sort By - </h1>
                <SearchableDropdown
                    isLabel={false}
                    options={sortByOptions}
                    value={singleValue}
                    onChange={(value) => setSingleValue(value as string)}
                    placeholder="Sort By"
                    searchPlaceholder="Select Sort By"
                    clearable
                    required
                    maxHeight="250px"
                    isSearchable={false}
                    className='border-none'
                />
            </div>
            <div className='hidden md:flex items-center gap-1'>
                <h1>Show - </h1>
                <SearchableDropdown
                    isLabel={false}
                    options={showOptions}
                    value={singleValue}
                    onChange={(value) => setSingleValue(value as string)}
                    placeholder="Show"
                    searchPlaceholder="Select Show"
                    clearable
                    required
                    maxHeight="250px"
                    isSearchable={false}
                    className='border-none'
                />
            </div>
        </div>
    )
}

export default SortBy