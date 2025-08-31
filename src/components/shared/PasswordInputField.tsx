import { useState, useCallback } from "react";
import { BsEye } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";

interface PasswordInputProps {
    id: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    error?: {
        message?: string;
        type?: string;
    };
    register: any;
    name: string;
    className?: string;
    isLabel?: boolean;
    disabled?: boolean;
    autoComplete?: string;
}

const PasswordInputField: React.FC<PasswordInputProps> = ({
    id,
    label,
    placeholder = "Enter Password",
    required = false,
    error,
    register,
    name,
    className = "",
    isLabel = true,
    disabled = false,
    autoComplete = "current-password",
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = useCallback(() => {
        setShowPassword(prev => !prev);
    }, []);

    const inputId = id || `password-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={`flex flex-col w-full ${className}`}>
            {isLabel && (
                <label 
                    htmlFor={inputId}
                    className="block text-sm font-medium text-gray-700"
                >
                    {label}
                    {required && <span className="text-error text-lg">*</span>}
                </label>
            )}
            
            <div className="relative">
                <input
                    id={inputId}
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    disabled={disabled}
                    autoComplete={autoComplete}
                    className={`
                       input-field 
                        
                        
                     
                    `}
                    aria-invalid={!!error}
                    aria-required={required}
                    aria-describedby={error ? `${inputId}-error` : undefined}
                    {...register(name, { required })}
                />
                
                <button
                    type="button"
                    className={`
                        absolute right-3 top-1/2 transform -translate-y-1/2 
                        p-1 text-bColor5 hover:text-blackCustom 
                        transition-colors duration-200
                        ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
                        focus:outline-none focus:ring-1 focus:ring-blackCustom focus:ring-offset-2 rounded-sm
                    `}
                    onClick={togglePasswordVisibility}
                    disabled={disabled}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    tabIndex={disabled ? -1 : 0}
                >
                    {showPassword ? (
                        <FiEyeOff size={18} />
                    ) : (
                        <BsEye size={18} />
                    )}
                </button>
            </div>
            
            {error && (
                <p 
                    id={`${inputId}-error`}
                    className="text-error text-sm mt-1" 
                    role="alert"
                >
                    {error.message}
                </p>
            )}
        </div>
    );
};

export default PasswordInputField;