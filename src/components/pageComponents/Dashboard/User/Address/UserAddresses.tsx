import PrimaryButton from "@/components/shared/PrimaryButton"
import { useGetCustomerByIdQuery } from "@/redux/api/authApi"
import { loggedInUser } from "@/redux/features/authSlice"
import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"

const UserAddresses = () => {
    const loggedInUserSelector = useSelector(loggedInUser)
    const { id, first_name } = loggedInUserSelector?.basicInfo || {}
    const { data: customerData } = useGetCustomerByIdQuery(id)

    return (
        <div className="w-full mt-8">
            {
                customerData?.data?.userProfile?.map(({ address_type, thana, city, country, area, zone, postal_code }: any, idx: number) => <div key={idx} className="text-sm">
                    <div className="flex items-center justify-between">
                        <h1 className="text-base font-medium uppercase" >{address_type} Address</h1>
                        <div>
                            <PrimaryButton title="Edit" className="" icon={<RiEditBoxLine />} />
                        </div>
                    </div>
                    <p className="my-2">Address {idx + 1} ({first_name})</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                        <div>
                            <h1 className="text-bColor3">Country</h1>
                            <p>{country}</p>
                        </div>
                        <div>
                            <h1 className="text-bColor3">City</h1>
                            <p>{city}</p>
                        </div>
                        <div>
                            <h1 className="text-bColor3">Thana</h1>
                            <p>{thana}</p>
                        </div>
                        <div>
                            <h1 className="text-bColor3">Area</h1>
                            <p>{area}</p>
                        </div>
                        <div>
                            <h1 className="text-bColor3">Zone</h1>
                            <p>{zone}</p>
                        </div>
                        <div>
                            <h1 className="text-bColor3">Postal Code</h1>
                            <p>{postal_code}</p>
                        </div>
                        <div>
                            <h1 className="text-bColor3">Road No</h1>
                            <p>{"23/A"}</p>
                        </div>
                        <div>
                            <h1 className="text-bColor3">House No</h1>
                            <p>{"23/A"}</p>
                        </div>
                        <div>
                            <h1 className="text-bColor3">Flat No</h1>
                            <p>{"23/A"}</p>
                        </div>
                        <div>
                            <h1 className="text-bColor3">Floor No</h1>
                            <p>{"2nd"}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
export default UserAddresses