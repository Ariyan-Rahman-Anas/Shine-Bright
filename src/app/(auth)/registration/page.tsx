import RegistrationForm from '@/components/pageComponents/Registration/RegistrationForm'
import Link from 'next/link'
import React from 'react'

const RegistrationPage = () => {
  return (
    <div className='space-y-5 my-6 md:my-10 section-setup '>
      <div className='text-center space-y-2 '>
        <h1 className='text-3xl font-semibold' >Create an account</h1>
        <p className="text-center mt-4 ">{`Already have an account? `}<Link href="/login" className="text-blackCustom font-semibold underline underline-offset-2 ">Login</Link></p>
      </div>

      <RegistrationForm />
    </div>
  )
}
export default RegistrationPage