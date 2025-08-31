import { icons } from "@/assets"
import SecondaryButton from "./SecondaryButton"

const SocialLogin = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-center text-lg ">or, Sign in with</h2>
            <div className="flex flex-col md:flex-row items-center gap-3">
                <SecondaryButton
                    bType="button"
                    title="Sign in with Google"
                    className="w-full text-blackBase text-base font-medium py-2 border-2 "
                    icon={icons.Google?.src}
                    style={{
                        background: "transparent",
                        color: "black",
                    }}
                />
                <SecondaryButton
                    bType="button"
                    title="Sign in with Facebook"
                    className="w-full text-blackBase text-base font-medium py-2 border-2 "
                    icon={icons.Facebook?.src}
                    style={{
                        background: "transparent",
                        color: "black",
                    }}
                />
            </div>
        </div>
    )
}
export default SocialLogin