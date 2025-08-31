"use client"

import SecondaryButton from '@/components/shared/SecondaryButton';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { RxCross2 } from 'react-icons/rx';

const TakingOTP = ({ setStep }: { setStep: (step: number) => void }) => {
    const router = useRouter();
    const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
    const [error, setError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Focus on first input when component mounts
    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index: number, value: string) => {
        // Only allow digits
        if (!/^\d*$/.test(value)) return;

        // Update the OTP array
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        setError(false);

        // Auto-focus to next input if current input is filled
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        // Move to previous input on backspace if current input is empty
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        if (!/^\d+$/.test(pastedData)) return;

        const digits = pastedData.slice(0, 6).split('');
        const newOtp = [...otp];

        digits.forEach((digit, index) => {
            if (index < 6) {
                newOtp[index] = digit;
            }
        });

        setOtp(newOtp);

        // Focus on appropriate input after paste
        if (digits?.length < 6) {
            inputRefs.current?.[digits?.length]?.focus();
        } else {
            // If all 6 digits were pasted, focus on the last input
            inputRefs.current[5]?.focus();
        }
    };

    const handleResend = () => {
        // Reset OTP fields
        setOtp(['', '', '', '', '', '']);
        setError(false);

        // Simulate OTP resend
        console.log("OTP resend requested");

        // Focus on first input
        inputRefs.current[0]?.focus();
    };

    const handleSubmit = () => {
        setIsSubmitting(true);

        // Validate OTP - all digits must be filled
        const otpString = otp.join('');

        if (otpString?.length !== 6) {
            setError(true);
            setIsSubmitting(false);
            return;
        }

        // Log the OTP data
        console.log("OTP Submitted:", otpString);

        // Here you would typically make an API call to verify the OTP
        // For now, just simulate a successful verification
        setTimeout(() => {
            setIsSubmitting(false);
            setStep(3);
        }, 1000);
    };

    return (
        <div className="w-full md:max-w-lg mx-auto space-y-2 mt-6 flex items-center justify-center flex-col">
            <div className="flex justify-between gap-2 mb-4">
                {otp.map((digit, index) => (
                    <div key={index} className="w-full">
                        <input
                            ref={(el) => {
                                inputRefs.current[index] = el;
                            }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={index === 0 ? handlePaste : undefined}
                            className={`w-full aspect-square text-center text-xl font-semibold border 
                                ${error ? 'border-red-500' : 'border-bColor1'} 
                                rounded-lg focus:outline-none focus:ring-2 focus:ring-mColor5`}
                            disabled={isSubmitting}
                        />
                    </div>
                ))}
            </div>

            {error && (
                <div className="flex items-center w-full text-red-500 mb-4">
                    <div>
                        <RxCross2 className="mr-1 border-[1.5px] border-red-500 text-red-500 rounded-full p-[1px] font-bold text-lg " />
                    </div>
                    <span>Please enter a valid 6-digit OTP</span>
                </div>
            )}

            <div className="text-center mb-6">
                <p>
                    Did not Receive OTP?{' '}
                    <button
                        onClick={handleResend}
                        className="ml-2 font-semibold hover:underline focus:outline-none"
                        disabled={isSubmitting}
                    >
                        Click To Resend
                    </button>
                </p>
            </div>

            <div className="flex items-center gap-2 w-full">
                <SecondaryButton
                    bType="submit"
                    title={isSubmitting ? "Processing..." : "Continue"}
                    className="w-full py-1.5 md:w-[80%] bg-mColor3/80 text-blackCustom text-base font-medium uppercase"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                />
                <SecondaryButton
                    bType="button"
                    title="Cancel"
                    className="w-full py-1.5 md:w-[80%] bg-whiteCustom text-blackCustom text-base font-medium uppercase border-2 border-bColor1"
                    onClick={() => router.replace("/")}
                    disabled={isSubmitting}
                />
            </div>
        </div>
    )
}

export default TakingOTP