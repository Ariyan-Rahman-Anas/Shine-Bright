import React, { useState, useCallback, useMemo } from 'react';
import { IoCheckmark, IoChevronDownOutline, IoChevronUpOutline, IoStar } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';

const IsFilter = () => {
    const { selected } = useSelector((state: any) => state.category)
    const [activeFilters, setActiveFilters] = useState({
        brands: ['ANASTASIA BEVERLY HILLS'],
        colors: ['Red'],
        priceRanges: ['0-199 BDT'],
        ratings: ['5 Stars']
    });

    const [expandedSections, setExpandedSections] = useState({
        brands: false,
        price: true,
        color: true,
        ratings: true
    });

    const [selectedPriceRange, setSelectedPriceRange] = useState('0-199 BDT');
    const [selectedRating, setSelectedRating] = useState(5);

    const filterData = {
        brands: [
            'ANASTASIA BEVERLY HILLS',
            'Huda Beauty',
            'Fenty Beauty',
            'MAC Cosmetics',
            'Urban Decay',
            'Too Faced',
            'Charlotte Tilbury'
        ],
        priceRanges: [
            { label: 'All', value: 'all', count: 0 },
            { label: '0 - 199 BDT', value: '0-199 BDT', count: 7 },
            { label: '200 - 399 BDT', value: '200-399 BDT', count: 5 },
            { label: '400 - 599 BDT', value: '400-599 BDT', count: 12 },
            { label: '600 - 799 BDT', value: '600-799 BDT', count: 12 },
            { label: 'Over 799', value: 'over-799', count: 12 }
        ],
        colors: [
            '#D2691E', '#CD853F', '#DEB887', '#F5DEB3',
            '#FFB6C1', '#FFC0CB', '#FFD700', '#FFEFD5'
        ],
        ratings: [5, 4, 3, 2, 1]
    };

    const toggleSection = useCallback((section: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [section as keyof typeof prev]: !prev[section as keyof typeof prev]
        }));
    }, []);

    const removeFilter = useCallback((category: string, filter: string) => {
        setActiveFilters(prev => ({
            ...prev,
            [category as keyof typeof prev]: prev[category as keyof typeof prev].filter(item => item !== filter)
        }));
    }, []);

    const clearAllFilters = useCallback(() => {
        setActiveFilters({
            brands: [],
            colors: [],
            priceRanges: [],
            ratings: []
        });
        setSelectedPriceRange('all');
        setSelectedRating(0);
    }, []);

    const addFilter = useCallback((category: string, filter: string) => {
        setActiveFilters(prev => ({
            ...prev,
            [category as keyof typeof prev]: [...prev[category as keyof typeof prev], filter]
        }));
    }, []);

    const toggleBrandFilter = useCallback((brand: string) => {
        if (activeFilters.brands.includes(brand)) {
            removeFilter('brands', brand);
        } else {
            addFilter('brands', brand);
        }
    }, [activeFilters.brands, removeFilter, addFilter]);

    const handlePriceRangeChange = useCallback((range: { label: string, value: string }) => {
        setSelectedPriceRange(range.value);
        if (range.value !== 'all') {
            setActiveFilters(prev => ({
                ...prev,
                priceRanges: [range.label]
            }));
        } else {
            setActiveFilters(prev => ({
                ...prev,
                priceRanges: []
            }));
        }
    }, []);

    const handleRatingChange = useCallback((rating: number) => {
        setSelectedRating(rating);
        setActiveFilters(prev => ({
            ...prev,
            ratings: [`${rating} Stars`]
        }));
    }, []);

    const toggleColorFilter = useCallback((color: string) => {
        const colorName = getColorName(color);
        if (activeFilters.colors.includes(colorName)) {
            removeFilter('colors', colorName);
        } else {
            addFilter('colors', colorName);
        }
    }, [activeFilters.colors, removeFilter, addFilter]);

    const getColorName = (hex: string) => {
        const colorMap = {
            '#D2691E': 'Brown',
            '#CD853F': 'Tan',
            '#DEB887': 'Beige',
            '#F5DEB3': 'Wheat',
            '#FFB6C1': 'Light Pink',
            '#FFC0CB': 'Pink',
            '#FFD700': 'Gold',
            '#FFEFD5': 'Cream'
        };
        return colorMap[hex as keyof typeof colorMap] || 'Red';
    };

    const allActiveFilters = useMemo(() => {
        return [
            ...activeFilters.brands.map(brand => ({ type: 'brands', value: brand })),
            ...activeFilters.colors.map(color => ({ type: 'colors', value: color })),
            ...activeFilters.priceRanges.map(price => ({ type: 'priceRanges', value: price })),
            ...activeFilters.ratings.map(rating => ({ type: 'ratings', value: rating }))
        ];
    }, [activeFilters]);

    const renderStars = (count: number, filled = true) => {
        return Array.from({ length: 5 }, (_, i) => (
            <IoStar
                key={i}
                size={14}
                className={`${i < count
                    ? filled && selected === "makeup"
                        ? 'text-mBtnBg fill-mBtnBg'
                        : filled && selected === "skincare" ? 'text-sBtnBg fill-sBtnBg' : ''
                    : 'text-bColor1'
                    }`}
            />
        ));
    };

    const FilterSection = ({ title, children, isExpanded, onToggle }: { title: string, children: React.ReactNode, isExpanded: boolean, onToggle: () => void }) => (
        <div className="border-b border-gray-200 pb-4">
            <button
                onClick={onToggle}
                className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded px-2 transition-colors duration-200"
            >
                <h3 className="font-semibold text-sm text-gray-900">{title}</h3>
                {isExpanded ? (
                    <IoChevronUpOutline size={20} className="text-bColor4" />
                ) : (
                    <IoChevronDownOutline size={20} className="text-bColor4" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                    }`}
            >
                {children}
            </div>
        </div>
    );

    return (
        <div className="">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">FILTERS</h2>
                <button
                    onClick={clearAllFilters}
                    className="text-sm text-gray-600 hover:text-gray-900 underline transition-colors duration-200"
                >
                    Clear All
                </button>
            </div>

            {/* Active Filters */}
            {allActiveFilters?.length > 0 && (
                <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                        {allActiveFilters.map((filter, index) => (
                            <span
                                key={`${filter.type}-${filter.value}-${index}`}
                                className={`${selected === "makeup" ? "bg-mBtnBg " : "bg-sBtnBg "} text-whiteCustom inline-flex items-center gap-1 px-3 py-1 rounded text-sm font-medium animate-fadeIn`}
                            >
                                {filter.value}
                                <button
                                    onClick={() => removeFilter(filter.type, filter.value)}
                                    className="hover:bg-error rounded-full p-0.5 transition-colors duration-200"
                                >
                                    <RxCross2 size={12} />
                                </button>
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Brands Filter */}
            <FilterSection
                title="Brands"
                isExpanded={expandedSections.brands}
                onToggle={() => toggleSection('brands')}
            >
                <div className="space-y-2 max-h-60 overflow-y-auto">
                    {filterData.brands.map((brand) => (
                        <label
                            key={brand}
                            className="flex items-center space-x-2 cursor-pointer hover:bg-bColor1/20 p-2 rounded transition-colors duration-200"
                        >
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={activeFilters.brands.includes(brand)}
                                    onChange={() => toggleBrandFilter(brand)}
                                    className="sr-only"
                                />
                                <div
                                    className={`w-4 h-4 border-2 rounded transition-all duration-200 ${activeFilters.brands.includes(brand) && selected === "makeup"
                                        ? 'bg-mBtnBg border-mBtnBg'
                                        : activeFilters.brands.includes(brand) && selected === "skincare" ? 'bg-sBtnBg border-sBtnBg' : 'border-bColor1'
                                        }`}
                                >
                                    {activeFilters.brands.includes(brand) && (
                                        <IoCheckmark size={12} className="text-whiteCustom absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
                                    )}
                                </div>
                            </div>
                            <span className="text-sm text-gray-700">{brand}</span>
                        </label>
                    ))}
                </div>
            </FilterSection>

            {/* Price Filter */}
            <FilterSection
                title="Price"
                isExpanded={expandedSections.price}
                onToggle={() => toggleSection('price')}
            >
                <div className="space-y-2">
                    {filterData.priceRanges.map((range) => (
                        <label
                            key={range.value}
                            className="flex items-center justify-between cursor-pointer hover:bg-bColor1/20 p-2 rounded transition-colors duration-200"
                        >
                            <div className="flex items-center space-x-2">
                                <div className="relative">
                                    <input
                                        type="radio"
                                        name="priceRange"
                                        checked={selectedPriceRange === range.value}
                                        onChange={() => handlePriceRangeChange(range)}
                                        className="sr-only"
                                    />
                                    <div
                                        className={`w-4 h-4 border-2 rounded-full transition-all duration-200 ${selectedPriceRange === range.value && selected === "makeup"
                                            ? 'bg-mBtnBg border-mBtnBg'
                                            : selectedPriceRange === range.value && selected === "skincare" ? 'bg-sBtnBg border-sBtnBg' : 'border-bColor1'
                                            }`}
                                    >
                                        {selectedPriceRange === range.value && (
                                            <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                        )}
                                    </div>
                                </div>
                                <span className="text-sm text-gray-700">{range.label}</span>
                            </div>
                            {range.count > 0 && (
                                <span className="text-xs text-gray-500">({range.count})</span>
                            )}
                        </label>
                    ))}
                </div>
            </FilterSection>

            {/* Color Filter */}
            <FilterSection
                title="Color"
                isExpanded={expandedSections.color}
                onToggle={() => toggleSection('color')}
            >
                <div className="flex items-center justify-between gap-2 px-1 py-2 ">
                    {filterData.colors.map((color, index) => {
                        const colorName = getColorName(color);
                        const isSelected = activeFilters.colors.includes(colorName);
                        return (
                            <button
                                key={index}
                                onClick={() => toggleColorFilter(color)}
                                className={`w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-110 ${isSelected  
                                    ? 'border-blackCustom ring-2 ring-blackCustom'
                                    : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                style={{ backgroundColor: color }}
                                title={colorName}
                            />
                        );
                    })}
                </div>
            </FilterSection>

            {/* Ratings Filter */}
            <FilterSection
                title="Ratings"
                isExpanded={expandedSections.ratings}
                onToggle={() => toggleSection('ratings')}
            >
                <div className="space-y-2">
                    {filterData.ratings.map((rating) => (
                        <label
                            key={rating}
                            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors duration-200"
                        >
                            <div className="relative">
                                <input
                                    type="radio"
                                    name="rating"
                                    checked={selectedRating === rating}
                                    onChange={() => handleRatingChange(rating)}
                                    className="sr-only"
                                />
                                <div
                                    className={`w-4 h-4 border-2 rounded-full transition-all duration-200 ${selectedRating === rating && selected === "makeup"
                                        ? 'bg-mBtnBg border-mBtnBg'
                                        : selectedRating === rating && selected === "skincare" ? 'bg-sBtnBg border-sBtnBg' : 'border-bColor1'
                                        }`}
                                >
                                    {selectedRating === rating && (
                                        <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center space-x-1">
                                {renderStars(rating)}
                            </div>
                        </label>
                    ))}
                </div>
            </FilterSection>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
        </div>
    );
};

export default IsFilter;