import LoginPageHeader from '@/components/modules/auth/login-page/LoginPageHeader'
import LoginForm from '@/components/pageComponents/Login/LoginForm'
import React from 'react'

const Login = () => {
    return (
        <div className="space-y-5 my-6 md:my-10 section-setup ">
            <LoginPageHeader />
            <LoginForm />
        </div>
    )
}
export default Login