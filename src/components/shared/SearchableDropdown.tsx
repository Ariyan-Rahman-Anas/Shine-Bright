"use client";

import { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

export interface DropdownOption {
  [key: string]: any;
}

interface SearchableDropdownProps {
  options: DropdownOption[];
  value?: string | number | (string | number)[];
  onChange: (value: string | number | (string | number)[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  multiple?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  maxHeight?: string;
  className?: string;
  error?: string;
  label?: string;
  required?: boolean;
  isLabel?: boolean;
  isSearchable?: boolean;
  isShades?: boolean
  getOptionLabel?: (option: DropdownOption) => string;
  getOptionValue?: (option: DropdownOption) => string | number;
}

const SearchableDropdown = ({
  options,
  value,
  onChange,
  placeholder = "Select option...",
  searchPlaceholder = "Search options...",
  multiple = false,
  disabled = false,
  clearable = true,
  maxHeight = "200px",
  className = "",
  error = "",
  label = "",
  required = false,
  isLabel = true,
  isSearchable = true,
  isShades = false,
  getOptionLabel = (opt) => opt.label ?? opt.district,
  getOptionValue = (opt) => opt.value ?? opt.id ?? opt.district,
}: SearchableDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listboxId = `dropdown-listbox-${Math.random().toString(36).substr(2, 9)}`;
  const { selected } = useSelector((state: any) => state.category)


  // Filtered options
  const filteredOptions = options?.filter((option) =>
    getOptionLabel(option)?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedOptions = multiple && Array.isArray(value)
    ? options.filter((opt) => value.includes(getOptionValue(opt)))
    : value !== undefined && value !== null && value !== ""
      ? options.find((opt) => getOptionValue(opt) === value)
      : null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm("");
        setFocusedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (["Enter", " ", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : filteredOptions.length - 1));
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
          handleOptionClick(filteredOptions[focusedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setSearchTerm("");
        setFocusedIndex(-1);
        break;
    }
  };

  const handleOptionClick = (option: DropdownOption) => {
    if (option.disabled) return;

    const selectedValue = getOptionValue(option);
    if (multiple) {
      const currentValues = Array.isArray(value) ? value : [];
      const newValues = currentValues.includes(selectedValue)
        ? currentValues.filter((v) => v !== selectedValue)
        : [...currentValues, selectedValue];
      onChange(newValues);
    } else {
      onChange(selectedValue);
      setIsOpen(false);
      setSearchTerm("");
    }

    setFocusedIndex(-1);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(multiple ? [] : "");
  };

  const handleRemoveTag = (optionValue: string | number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (multiple && Array.isArray(value)) {
      onChange(value.filter((v) => v !== optionValue));
    }
  };

  const renderSelectedValue = () => {
    if (multiple && Array.isArray(selectedOptions)) {
      if (selectedOptions.length === 0) {
        return <span className="text-gray-500">{placeholder}</span>;
      }

      return (
        <div className="flex flex-wrap gap-1">
          {selectedOptions.map((option) => (
            <span
              key={getOptionValue(option)}
              className="inline-flex items-center gap-1 px-2 py-1 bg-success/15 text-success rounded-md text-sm"
            >
              {getOptionLabel(option)}
              <RxCross2
                size={14}
                className="cursor-pointer hover:text-success"
                onClick={(e) => handleRemoveTag(getOptionValue(option), e)}
              />
            </span>
          ))}
        </div>
      );
    }

    if (selectedOptions && !Array.isArray(selectedOptions)) {
      return <span>{getOptionLabel(selectedOptions)}</span>;
    }

    return <span className="text-gray-500">{placeholder}</span>;
  };

  const hasValue = multiple
    ? Array.isArray(value) && value.length > 0
    : value !== undefined && value !== null && value !== "";

  return (
    <div className={`relative text-sm`} ref={dropdownRef}>
      {isLabel && label && (
        <label className="block text-sm font-medium">
          {label}
          {required && <span className="text-error">*</span>}
        </label>
      )}

      <div
        className={`
          relative w-full px-3 py-2.5 rounded cursor-pointer
          transition-all duration-200 ease-in-out
          ${isOpen && "border-bColor6"}
          ${disabled && "bg-bColor1 cursor-not-allowed"}
          ${error ? "border-error outline-error" : ""}
          flex items-center justify-between gap-2 ${className}
        `}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-haspopup="listbox"
      >
        <div className="flex-1 flex items-center min-w-0">{renderSelectedValue()}</div>

        <div className="flex items-center gap-1 flex-shrink-0">
          {clearable && hasValue && !disabled && (
            <RxCross2
              size={16}
              className="text-bColor4 hover:text-error cursor-pointer"
              onClick={handleClear}
            />
          )}
          <IoChevronDown
            size={16}
            className={`text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {error && <p className="mt-1 text-sm text-error">{error}</p>}

      <div
        id={listboxId}
        role="listbox"
        aria-multiselectable={multiple}
        className={`
          absolute z-50 w-full mt-1 bg-whiteCustom border border-bColor2 rounded-lg shadow-lg
          transition-all duration-200 ease-in-out transform origin-top
          ${isOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"}
        `}
      >
        {isSearchable && (
          <div className="p-3 border-b border-bColor2">
            <div className="relative">
              <IoIosSearch
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bColor3"
              />
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setFocusedIndex(-1);
                }}
                placeholder={searchPlaceholder}
                className="w-full pl-10 pr-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-bColor2 focus:border-transparent"
              />
            </div>
          </div>
        )}

        <div className="overflow-y-auto" style={{ maxHeight }}>
          {filteredOptions?.length === 0 ? (
            <div className="px-3 py-4 text-bColor4 text-center">No options found</div>
          ) : (
            filteredOptions.map((option, index) => {
              const isSelected = multiple && Array.isArray(value)
                ? value.includes(getOptionValue(option))
                : getOptionValue(option) === value;
              const isFocused = index === focusedIndex;

              return (
                <div
                  key={getOptionValue(option)}
                  className={`
                    px-4 py-2 cursor-pointer flex items-center text-left justify-between
                    transition-colors duration-150 m-2 rounded-md
                    ${isFocused ? "bg-bColor1/15" : ""}
                    ${isSelected && selected === "makeup" ? "bg-mBtnBg text-blackCustom" : isSelected && selected === "skincare" ? "bg-sBtnBg text-blackCustom" : "text-bColor3 hover:bg-bColor1/15"}
                    ${option.disabled ? "cursor-not-allowed" : ""}
                  `}
                  onClick={() => handleOptionClick(option)}
                  role="option"
                  aria-selected={isSelected}
                >
                  <div
                    className={`flex-1 flex items-center gap-4 ${option?.disabled && isShades && "cursor-not-allowed"}`}
                  >
                    <p className={`text-blackCustom ${option?.disabled && "opacity-50"}`}>
                    {getOptionLabel(option)}
                    </p>
                  {
                    option?.disabled &&   <MdDoNotDisturbAlt size={22} />
                  }
                  </div>
                  <div style={{
                    backgroundColor: option?.value
                  }} className={`h-4 w-4 ${option?.label == "White" && "shadow"} `} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchableDropdown;