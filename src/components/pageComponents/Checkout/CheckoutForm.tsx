"use client"

interface UserContact {
    address: string;
    address_type: string | number;
    // thana: string | number;
    city: string | number;
    // country: string | number;
    countryCode: string;
    is_primary: boolean;
    // area?: string;
    // zone?: string;
    // postal_code?: number;
}

interface CustomerPayload {
    firstName: string;
    countryCode: string;
    phone: string;
    password: string;
    user_contacts: UserContact[];
    lastName?: string;
    email?: string;
}


import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/shared/InputField";
import SecondaryButton from "@/components/shared/SecondaryButton";
import SearchableDropdown from "@/components/shared/SearchableDropdown";
import Image from "next/image";
import { icons } from "@/assets";
import Link from "next/link";
import { useSelector } from "react-redux";
import { loggedInUser } from "@/redux/features/authSlice";
import { cartItems, clearCart } from "@/redux/features/cartSlice";
import { countryCodes, paymentMethods } from "@/constant";
import { addressTypes, zones } from "@/constant/locations";
import { useCreateCustomerMutation } from "@/redux/api/authApi";
import { useApiResponseEffects } from "@/hooks/useApiResponseEffects";
import { useCreateOrderMutation } from "@/redux/api/orderApi";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setCustomer } from "@/redux/features/customerCreateSlice";
import CheckBox from "@/components/shared/CheckBox";
import InputFieldLabel from "@/lib/InputFieldLabel";
import { useGetCustomerByIdQuery } from "@/redux/api/authApi";

const CheckoutForm = () => {
    const dispatch = useDispatch()
    const { selected } = useSelector((state: any) => state.category)
    const loggedInUserSelector = useSelector(loggedInUser)
    const { id, firstName, lastName, phone, email, countryCode } = loggedInUserSelector || {}
    const { data: customerData } = useGetCustomerByIdQuery(id)
    const userPrimaryAddress = customerData?.data?.userProfile?.find((item: any) => item.is_primary == true)
    // const {address, area, thana:loggedInUserThana, city:loggedInUserCity, country:loggedInUserCountry, postal_code, zone} = userPrimaryAddress || {}
    const { address, city: loggedInUserCity } = userPrimaryAddress || {}


    console.log("loggedInUserSelector", customerData)
    console.log("address", address)

    const {
        register,
        handleSubmit,
        setValue,
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            is_primary: true,
            countryCode: countryCode ? countryCode : "+880",
            address_type: "HOME",
            // country: loggedInUserCountry ? loggedInUserCountry : "Bangladesh",
            address: address ? address : "",
            // thana: loggedInUserThana ? loggedInUserThana : "",
            city: loggedInUserCity ? loggedInUserCity : "",
            // postal_code: postal_code ? postal_code : "",
            // zone: zone ? zone : "",
            // area: area ? area : "",
        }
    })


    const [city, setCity] = useState<string | number>("");
    // const [thana, setThana] = useState<string | number>("");
    const [paymentMethod, setPaymentMethod] = useState<string>("");
    const [paymentGateway, setPaymentGateway] = useState<string>("");
    const [selectedCountryCode, setSelectedCountryCode] = useState<string>("+880");
    const [addressType, setAddressType] = useState<string | number>("HOME");
    // const [country, setCountry] = useState<string | number>("Bangladesh");
    const [terms, setTerms] = useState<boolean>(true);
    const [reviewTick, setReviewTick] = useState<boolean>(false);
    const [primaryAddress, setPrimaryAddress] = useState<boolean>(true);
    const [deliveryLocation, setDeliveryLocation] = useState<string>("STORE_PICKUP");



    const cartItemsAll = useSelector(cartItems)

    const { clientId } = useSelector((state: any) => state.customerCreate)

    const uniqueDistricts = Array.from(new Set(zones.map((z) => z.district))).map((d) => ({
        label: d,
        value: d,
    }));

    // const filteredThanas = zones.filter((i) => i.district === city);

    // customer create API
    const [createCustomer, { data: customerCreatedData, isLoading: isCreating, isSuccess: isCreated, isError: isCreatingError, error: customerCreateError }] = useCreateCustomerMutation()


    const onSubmit = async (data: any) => {
        // Validate required fields
        if (!data.firstName?.trim()) {
            toast.error("Please enter first name");
            return;
        }
        if (!data.phone?.toString().trim()) {
            toast.error("Please enter phone number");
            return;
        }
        if (!data.address?.trim()) {
            toast.error("Please enter full address");
            return;
        }
        if (!selectedCountryCode) {
            toast.error("Please select country code");
            return;
        }
        if (!addressType) {
            toast.error("Please select address type");
            return;
        }
        // if (!country) {
        //     toast.error("Please select country");
        //     return;
        // }
        if (!city) {
            toast.error("Please select district");
            return;
        }
        // if (!thana) {
        //     toast.error("Please select thana");
        //     return;
        // }

        // Base payload with required fields - create with proper typing
        const baseContact: UserContact = {
            address: data.address.trim(),
            address_type: addressType,
            // thana: thana,
            city: city,
            // country: country,
            countryCode: selectedCountryCode,
            // is_primary: data.is_primary || false,
            is_primary: primaryAddress,
        };

        // Conditionally add optional fields to contact
        // if (data.area && data.area.trim()) {
        //     baseContact.area = data.area.trim();
        // }

        // if (data.zone && data.zone.trim()) {
        //     baseContact.zone = data.zone.trim();
        // }

        // if (data.postal_code && data.postal_code.toString().trim()) {
        //     baseContact.postal_code = Number(data.postal_code);
        // }

        const payload: CustomerPayload = {
            firstName: data.firstName.trim(),
            countryCode: selectedCountryCode,
            phone: data.phone.length === 10 ? `0${data.phone}` : data.phone,
            password: data.phone.toString().trim(),
            user_contacts: [baseContact]
        };

        // Conditionally add optional fields to main payload
        if (data.lastName && data.lastName.trim()) {
            payload.lastName = data.lastName.trim();
        }

        if (data.email && data.email.trim()) {
            payload.email = data.email.trim();
        }

        try {
            const result = await createCustomer(payload).unwrap();
            if (result?.data?.id) {
                dispatch(setCustomer({ clientId: result?.data?.id }))
            }
        } catch (error) {
            console.error('Error creating customer:', error);
        }
    }

    useApiResponseEffects({
        isSuccess: isCreated,
        isError: isCreatingError,
        errorData: customerCreateError,
        successData: customerCreatedData,
        // redirectTo: '/checkout'
    })

    const generateUniqueId = (prefix?: string) => {
        const timestamp = Date.now();
        const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
        return `${prefix ? prefix : "101"}-${timestamp}-${randomStr}`;
    };


    // order create API
    const [createOrder, { data: orderCreatedData, isSuccess: isCreatedOrder, isError: isCreatedOrderError, error: orderCreateError }] = useCreateOrderMutation()
    const finalClientId = clientId ? clientId : loggedInUserSelector

    const handlePlaceOrder = async () => {
        if (!paymentMethod) {
            toast.error("Please select a payment method");
            return;
        }
        if (paymentMethod === "ONLINE" && !paymentGateway) {
            toast.error("Please select a payment gateway");
            return;
        }
        const orderData = {
            client_id: finalClientId,
            order_id: generateUniqueId("TX"),
            invoice_id: generateUniqueId("IV"),
            order_date: new Date().toISOString().split("T")[0],
            order_amount: cartItemsAll.reduce((t, i) => t + i.sales_price! * i.quantity, 0),
            total_order_qty: cartItemsAll.reduce((t, i) => t + i.quantity, 0),
            current_status: "ORDERED",
            payment_status: "UNPAID",
            payment_type: paymentMethod,
            delivery_charge: deliveryLocation === "STORE_PICKUP" ? 0 : deliveryLocation === "INSIDE_CITY" ? 70 : deliveryLocation === "OUTSIDE_CITY" ? 100 : 0,
            delivery_agent: "uk",
            delivery_location: deliveryLocation,
            order_details: cartItemsAll.map((item) => ({
                product_id: item.id,
                regular_price: Number(item.regular_price),
                sales_price: Number(item.sales_price),
                discount_price: Number(item.discount_price),
                discount_value: Number(item.discount_value),
                discount_type: "FLAT",
                size_attribute_id: item.size_attribute_id,
                color_attribute_id: item.color_attribute_id,
                quantity: item.quantity,
            })),
        };

        const result = await createOrder(orderData).unwrap();
        if (result?.data?.id) {
            dispatch(setCustomer({ clientId: "" }))
            dispatch(clearCart())
        }
    };

    useApiResponseEffects({
        isSuccess: isCreatedOrder,
        isError: isCreatedOrderError,
        errorData: orderCreateError,
        successData: orderCreatedData,
        redirectTo: '/user/orders'
    })

    const totalAmount = cartItemsAll.reduce((t, i) => t + i.sales_price! * i.quantity, 0);
    const totalDeliveryCharge = deliveryLocation === "STORE_PICKUP" ? 0 : deliveryLocation === "INSIDE_CITY" ? 70 : deliveryLocation === "OUTSIDE_CITY" ? 100 : 0;
    const finalTotal = totalAmount + totalDeliveryCharge;

    return (
        <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Form */}
            <div className="w-full lg:w-[60%] space-y-6">
                <h1 className="sub-heading">CHECKOUT</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Contact Details */}
                    <section>
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-sm font-semibold">CONTACT DETAILS</h2>
                            {
                                !loggedInUserSelector &&
                                <Link href="/login" className="font-semibold underline underline-offset-2 ">Log in</Link>
                            }
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <InputFieldLabel label="First Name" isRequired={true} />
                                <InputField
                                    type="text"
                                    id="firstName"
                                    placeholder="First Name"
                                    register={register}
                                    name="firstName"
                                    className=""
                                    value={firstName}
                                    isRequired={true}
                                />
                            </div>

                            <div>
                                <InputFieldLabel label="Last Name" />
                                <InputField
                                    type="text"
                                    id="lastName"
                                    placeholder="Last Name"
                                    register={register}
                                    name="lastName"
                                    value={lastName}
                                />
                            </div>

                            <div>
                                <InputFieldLabel label="Email" />
                                <InputField
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    register={register}
                                    name="email"
                                    value={email}
                                />
                            </div>

                            {/* Phone with Country Code */}
                            <div className="flex items-center gap-2 w-full ">
                                <SearchableDropdown
                                    isLabel={true}
                                    label="Country Code"
                                    options={countryCodes}
                                    value={selectedCountryCode}
                                    onChange={(value) => {
                                        setSelectedCountryCode(value as string);
                                        setValue('countryCode', value as string);
                                    }}
                                    placeholder="Code"
                                    searchPlaceholder="Search Country Code"
                                    clearable
                                    required={true}
                                    maxHeight="250px"
                                    isSearchable={true}
                                    className={`w-full mt-1 border border-bColor2 h-full min-w-24 `}
                                />

                                <div>
                                    <InputFieldLabel label="Phone" isRequired={true} />
                                    <InputField
                                        type="number"
                                        id="phone"
                                        placeholder="Enter Phone"
                                        register={register}
                                        name="phone"
                                        value={phone}
                                        isRequired={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Shipping Address */}
                    <section>
                        <h2 className="text-sm font-semibold mb-2">ADDRESS</h2>
                        <div className="space-y-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                                <div>
                                    <InputFieldLabel label="Address type" isRequired={true} />
                                    <SearchableDropdown
                                        options={addressTypes}
                                        value={addressType}
                                        onChange={(value) => {
                                            setAddressType(value as string);
                                            setValue("address_type", value as string);
                                        }}
                                        clearable
                                        placeholder="Address type"
                                        className={`w-full p-3 border border-bColor2 rounded-md`}
                                        isSearchable={false}
                                    />
                                </div>

                                {/* <div>
                                    <InputFieldLabel label="Country" isRequired={true} />
                                    <SearchableDropdown
                                        options={countries}
                                        value={country}
                                        onChange={(value) => {
                                            setCountry(value as string);
                                            setValue("country", value as string);
                                        }}
                                        clearable
                                        placeholder="Country"
                                        className={`w-full p-3 border border-bColor2 rounded-md`}
                                        isSearchable={true}
                                    />
                                </div> */}

                                <div>
                                    <InputFieldLabel label="District" isRequired={true} />
                                    <SearchableDropdown
                                        options={uniqueDistricts}
                                        value={city}
                                        onChange={(value) => {
                                            setCity(value as string);
                                        }}
                                        clearable
                                        placeholder="District"
                                        className={`w-full p-3 border border-bColor2 rounded-md`}
                                        isSearchable
                                    />
                                </div>

                                {/* <div>
                                    <InputFieldLabel label="Thana" isRequired={true} />
                                    <SearchableDropdown
                                        options={filteredThanas}
                                        value={thana}
                                        onChange={(value) => {
                                            setThana(value as string);
                                        }}
                                        clearable
                                        placeholder="Thana"
                                        className={`w-full p-3 border border-bColor2 rounded-md`}
                                        isSearchable
                                        getOptionLabel={(opt) => `${opt.district} - ${opt.thana}`}
                                        getOptionValue={(opt) => opt?.thana}
                                    />
                                </div> */}

                                {/* <div>
                                    <InputFieldLabel label="Area" />
                                    <InputField
                                        type="text"
                                        id="area"
                                        placeholder="Area"
                                        register={register}
                                        name="area"
                                    />
                                </div> */}

                                {/* <div>
                                    <InputFieldLabel label="Zone" />
                                    <InputField
                                        type="text"
                                        id="zone"
                                        placeholder="Zone"
                                        register={register}
                                        name="zone"
                                    />
                                </div> */}

                                {/* <div>
                                    <InputFieldLabel label="Postal Code" />
                                    <InputField
                                        type="number"
                                        id="postal_code"
                                        placeholder="Postal Code"
                                        register={register}
                                        name="postal_code"
                                    />
                                </div> */}
                            </div>

                            <div className="flex flex-col w-full">
                                <InputFieldLabel label="Full Address" isRequired={true} />
                                <textarea
                                    id="address"
                                    placeholder="Full Address"
                                    rows={3}
                                    value={address}
                                    className={`input-field w-full p-3 border border-bColor2 rounded-md`}
                                    {...register('address', { required: true })}
                                />
                            </div>

                            <CheckBox
                                isCenter={true}
                                checked={primaryAddress}
                                onClick={() => setPrimaryAddress(!primaryAddress)}
                                label="Primary Address"
                            />

                            <div className="flex items-center flex-wrap gap-6">
                                <CheckBox
                                    isCenter={true}
                                    checked={deliveryLocation === "STORE_PICKUP"}
                                    onClick={() => setDeliveryLocation("STORE_PICKUP")}
                                    label="Store Pickup"
                                />
                                <CheckBox
                                    isCenter={true}
                                    checked={deliveryLocation === "INSIDE_CITY"}
                                    onClick={() => setDeliveryLocation("INSIDE_CITY")}
                                    label="Inside City"
                                />
                                <CheckBox
                                    isCenter={true}
                                    checked={deliveryLocation === "OUTSIDE_CITY"}
                                    onClick={() => setDeliveryLocation("OUTSIDE_CITY")}
                                    label="Outside City"
                                />
                            </div>
                        </div>
                    </section>

                    {
                        finalClientId
                            ? (
                                <div className="text-sm text-bColor3">
                                    <p className="text-center font-semibold uppercase " >Place the order and enjoy your items!</p>

                                    <div className="mb-2">
                                        <p className="font-semibold text-blackCustom">Account Credentials:</p>
                                        <p>Username: {email ?? phone}</p>
                                        <p>Password: {phone}</p>
                                    </div>
                                    <p><span className="font-semibold text-blackCustom">Note:</span> Please remember your account credentials</p>
                                </div>
                            )
                            : (
                                <SecondaryButton
                                    title={isCreating ? "Saving..." : "Save & Continue"} bType="submit" disabled={isCreating || finalClientId ? true : false}
                                    className={`w-fit py-2 px-6 text-base ${isCreating && "cursor-not-allowed"}  ${selected === "makeup" ? 'bg-mColor3/50 text-blackCustom' : 'bg-sColor6 text-whiteCustom'}`} />
                            )
                    }
                </form>
            </div>

            {/* Right Column - Order Summary */}
            <div className="w-full lg:w-[40%] space-y-6">
                <h2 className="text-sm font-semibold mb-2">PRICE DETAILS</h2>

                {/* Cart Items */}
                <div className="space-y-4">
                    {cartItemsAll?.map(({ title, image, sales_price, quantity }, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="w-14 h-14 overflow-hidden">
                                    <Image src={image ?? ""} alt={title} className="w-14 h-14 object-cover rounded" width={100} height={100} />
                                </div>
                                <div className={`${selected === "makeup" ? 'bg-mBtnBg' : 'bg-sBtmBg'} text-whiteCustom w-6 h-6 flex items-center justify-center rounded absolute -top-2 -right-2 `}>
                                    <p className="">{quantity}</p>
                                </div>
                            </div>
                            <h3 className="font-medium text-sm">{title}</h3>
                            <p className="font-semibold text-sm">
                                {sales_price} ৳
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between">
                    <span>SUBTOTAL - {cartItemsAll?.length} ITEMS</span>
                    <span>{cartItemsAll?.reduce((t, i) => t + i.sales_price! * i.quantity!, 0)} ৳</span>
                </div>

                {/* Price Summary */}
                <div className="space-y-2 pt-4">

                    <div className="flex justify-between">
                        <span>DELIVERY CHARGE</span>
                        <span>{totalDeliveryCharge} ৳</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t">
                        <span>TOTAL</span>
                        <span>{finalTotal} ৳</span>
                    </div>
                </div>

                {/* Payment Method */}
                <section>
                    <h2 className="text-sm font-semibold mb-2">PAYMENT METHOD</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <label onClick={() => setPaymentMethod("COD")} className={`flex items-center space-x-2 py-2 px-4 border-2 rounded-md cursor-pointer hover:bg-bColor1/10 ${paymentMethod === "COD" ? "border-bColor4" : ""}`}>
                            <div>
                                <Image src={icons.HandCash} alt="Hand Cash" className="w-12 h-12" />
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    value="COD"
                                    className="sr-only"
                                />
                                <div>
                                    <h2 className="font-medium">Cash On Delivery</h2>
                                    <p className="text-sm text-bColor2">Pay With Cash Upon Delivery</p>
                                </div>
                            </div>
                        </label>

                        <label onClick={() => setPaymentMethod("ONLINE")}
                            className={`flex items-center space-x-2 py-2 px-4 border-2 rounded-md cursor-pointer hover:bg-bColor1/10 ${paymentMethod === "ONLINE" ? "border-bColor4" : ""}`}
                        >
                            <div>
                                <Image src={icons.SSLCommerz} alt="SSLCommerz" className="w-12 h-12" />
                            </div>
                            <input
                                type="radio"
                                value="ONLINE"
                                className="sr-only"
                            />
                            <div>
                                <h2 className="font-medium">Online Payment</h2>
                                <div className="text-sm text-bColor2">
                                    <p>Card/MobileBanking/</p>
                                    <p>NetBanking/Bikash</p>
                                </div>
                            </div>
                        </label>
                    </div>
                </section>


                {/* Payment method icons */}
                {paymentMethod === "ONLINE" && (
                    <div className="flex items-center flex-wrap gap-2 mt-6 ">
                        {paymentMethods?.map((method) => (
                            <div key={method.name}
                                onClick={() => setPaymentGateway(method.name)}
                                className={`border-2 h-12 w-12 flex items-center justify-center rounded p-1 cursor-pointer ${paymentGateway === method.name ? "border-bColor4" : "border-bColor1/50"}`} >
                                <Image src={method.icon} alt={method.name} className="w-12 h-12" />
                            </div>
                        ))}
                    </div>
                )}

                {/* Checkboxes */}
                <div className="space-y-3 text-sm text-bColor3 ">
                    <p className=" ">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link href="/about" className="text-blackCustom underline underline-offset-2 " >Privacy Policy</Link> </p>
                    <CheckBox
                        isCenter={true}
                        checked={reviewTick}
                        label="Would you like to be invited to review your order? Check here to receive a message from CusRev (an independent reviews service) with a review form."
                        onClick={() => setReviewTick(!reviewTick)} />

                    <CheckBox
                        isCenter={true}
                        checked={terms}
                        label="I Have Read And Agree To The Website Terms & Conditions"
                        onClick={() => setTerms(!terms)} />
                </div>

                {/* Place Order Button */}
                <SecondaryButton
                    title="PLACE ORDER"
                    onClick={handlePlaceOrder}
                    className="w-full py-2"
                    disabled={!terms}
                />
            </div>
        </div >
    )
}
export default CheckoutForm