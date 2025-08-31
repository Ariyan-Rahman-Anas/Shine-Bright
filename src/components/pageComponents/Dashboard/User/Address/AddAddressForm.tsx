import CheckBox from "@/components/shared/CheckBox"
import InputField from "@/components/shared/InputField"
import ModalTemplate from "@/components/shared/ModalTemplate"
import SearchableDropdown from "@/components/shared/SearchableDropdown"
import SecondaryButton from "@/components/shared/SecondaryButton"
import { countries, zones } from "@/constant/locations"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { RxCross2 } from "react-icons/rx"

const AddAddressForm = () => {
    const [openModal, setOpenModal] = useState(false);
    const { register, handleSubmit } = useForm();
    const [shippingAddress, setShippingAddress] = useState(false);
    const [billingAddress, setBillingAddress] = useState(false);
    const [country, setCountry] = useState<string | number>("Bangladesh");
    const [city, setCity] = useState<string | number>("");
    const [thana, setThana] = useState<string | number>("");

    const uniqueDistricts = Array.from(new Set(zones.map((z) => z.district))).map((d) => ({
        label: d,
        value: d,
    }));

    const filteredThanas = zones.filter((i) => i.district === city);

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <div>
            <h1 className="text-base uppercase font-medium mb-2">Address</h1>
            <div>
                <ModalTemplate
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    tiggerTitle="Add Address"
                    className="rounded-md px-10 py-2"
                    body={
                        <div className="w-full h-full p-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-base uppercase font-medium">Add Address</h2>
                                <RxCross2
                                    className="cursor-pointer"
                                    onClick={() => setOpenModal(false)}
                                />
                            </div>
                            {/* Add your form content here */}
                            <div className="mt-4">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <InputField
                                            type="text"
                                            id="address_title"
                                            placeholder="Address Title"
                                            register={register}
                                            name="address_title"
                                        />
                                        <SearchableDropdown
                                            isLabel={false}
                                            options={countries}
                                            value={country}
                                            onChange={(value) => setCountry(value as string)}
                                            placeholder="Country"
                                            searchPlaceholder="Search countries..."
                                            clearable
                                            required
                                            maxHeight="250px"
                                            className="border border-bColor2"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

                                        <SearchableDropdown
                                            options={filteredThanas}
                                            value={thana}
                                            onChange={(value) => {
                                                setThana(value as string);
                                            }}
                                            placeholder="Zone"
                                            searchPlaceholder="Search zones..."
                                            clearable
                                            maxHeight="250px"
                                            className="border border-bColor2"
                                        />

                                        <InputField
                                            type="text"
                                            id="area"
                                            placeholder="Area"
                                            register={register}
                                            name="area"
                                        />
                                        <InputField
                                            type="number"
                                            id="postal_code"
                                            placeholder="Postal Code"
                                            register={register}
                                            name="postal_code"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <InputField
                                            type="number"
                                            id="flat_no"
                                            placeholder="Flat No"
                                            register={register}
                                            name="flat_no"
                                        />
                                        <InputField
                                            type="number"
                                            id="floor_no"
                                            placeholder="Floor No"
                                            register={register}
                                            name="floor_no"
                                        />
                                        <InputField
                                            type="number"
                                            id="house_no"
                                            placeholder="House No"
                                            register={register}
                                            name="house_no"
                                        />
                                        <InputField
                                            type="number"
                                            id="road_no"
                                            placeholder="Road No"
                                            register={register}
                                            name="road_no"
                                        />
                                    </div>

                                    <textarea id="full_address" className="input-field border-bColor2" placeholder="Full Address" {...register("full_address")} />

                                    <div className="flex items-center gap-6 mt-4">
                                        <CheckBox
                                            label="Shipping Address"
                                            onClick={() => setShippingAddress(!shippingAddress)}
                                            checked={shippingAddress}
                                        />

                                        <CheckBox
                                            label="Billing Address"
                                            onClick={() => setBillingAddress(!billingAddress)}
                                            checked={billingAddress}
                                        />
                                    </div>

                                    <SecondaryButton
                                        bType="submit"
                                        title="Save Address"
                                        className={`w-fit text-base font-medium px-5`}
                                    />
                                </form>
                            </div>
                        </div>
                    }
                />
            </div>
        </div>
    )
}
export default AddAddressForm