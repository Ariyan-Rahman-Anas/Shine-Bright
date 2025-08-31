import LoginForm from "@/components/pageComponents/Login/LoginForm"

const LoginPage = () => {
  return (
    <div className="space-y-5 my-6 md:my-10 section-setup ">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">WELCOME TO <span className="text-sBtnBg" >TAUPE NOTCH</span></h1>
        <p className="text-bColor4 w-full md:max-w-sm mx-auto text-sm ">join us for more offers, Exclusive discount, regular updates and so much more</p>
      </div>

      <LoginForm />
    </div>
  )
}
export default LoginPage