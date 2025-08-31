import CheckoutForm from "@/components/pageComponents/Checkout/CheckoutForm"
import GoBack from "@/components/shared/GoBack"

const CheckoutPage = () => {
    return (
        <div className="section-setup-1200 mb-16 ">
            <div className="my-4">
                <GoBack />
            </div>
            <CheckoutForm />
        </div>
    )
}
export default CheckoutPage