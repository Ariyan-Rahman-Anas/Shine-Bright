import RegistrationPageHeader from "@/components/modules/auth/registration-page/RegistrationPageHeader"
import RegistrationForm from "@/components/pageComponents/Registration/RegistrationForm"
import Link from "next/link"

const Registration = () => {
    return (
        <div className='space-y-5 my-6 md:my-10 section-setup '>
            <RegistrationPageHeader />
            <RegistrationForm />
            <p className="text-center mt-4 ">{`Already have an account? `}<Link href="/login" className="text-blackCustom font-semibold underline underline-offset-2 ">Login</Link></p>
        </div>
    )
}
export default Registration