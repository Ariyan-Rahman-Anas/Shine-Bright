"use client"

import TakingNewPassword from '@/components/pageComponents/ResetPassword/TakingNewPassword'
import TakingOTP from '@/components/pageComponents/ResetPassword/TakingOTP'
import TakingPhoneNumber from '@/components/pageComponents/ResetPassword/TakingPhoneNumber'
import { useState } from 'react'

const ResetPasswordPage = () => {
    const [step, setStep] = useState(1)

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center space-y-4 w-full ">
            <div className='text-center space-y-2'>
                <h1 className='uppercase text-2xl font-semibold ' >Reset Your password</h1>
                <p className='w-full md:max-w-[350px] mx-auto text-sm text-black40  '>
                    {
                        step === 1 ? (
                            <span>Kindly input your phone number. We will send you a code to reset your password</span>
                        ) : (
                            step === 2 ? (
                                <span>We have sent you a 4 digit otp, kindly input the otp to reset your password</span>
                            ) : (
                                <span>You can now reset your password. Kindly follow the instruction for strong password</span>
                            )
                        )
                    }
                </p>
            </div>

            {step === 1 && <TakingPhoneNumber setStep={setStep} />}
            {step === 2 && <TakingOTP setStep={setStep} />}
            {step === 3 && <TakingNewPassword />}
        </div>
    )
}
export default ResetPasswordPage