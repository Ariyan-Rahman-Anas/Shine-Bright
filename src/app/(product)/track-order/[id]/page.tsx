"use client"

import { GoCheckCircle, GoPackage } from 'react-icons/go';
import { CiDeliveryTruck, CiMapPin } from 'react-icons/ci';
import { FaRegClock } from 'react-icons/fa';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import FloatingThemeBtn from '@/components/shared/FloatingThemeBtn';
import GoBack from '@/components/shared/GoBack';
import { useGetOrderedItemsBySalesOrderIdQuery } from '@/redux/api/orderApi';

const TrackOrderPage = ({ params }: { params: { id: string } }) => {
    const { data: ordersData } = useGetOrderedItemsBySalesOrderIdQuery(params.id)
    console.log("ordersData", ordersData)

    const totalAmount = ordersData?.data?.reduce((acc: number, item: any) => {
        return acc + Number(item.sales_price || 0);
    }, 0) || 0;

    const orderStatus = ordersData?.data?.[0]?.status;

    const timelineSteps = [
        { id: 1, title: 'Accepted', icon: GoCheckCircle, completed: true, active: false },
        { id: 2, title: 'Picked', icon: GoPackage, completed: true, active: false },
        { id: 3, title: 'In Transit', icon: CiDeliveryTruck, completed: false, active: false },
        { id: 4, title: 'Out For Delivery', icon: MdOutlineDeliveryDining, completed: false, active: false },
        { id: 5, title: 'Delivered', icon: CiMapPin, completed: false, active: false }
    ];

    const orderStatusHistory = [
        {
            title: 'Order Has Been Assigned To Delivery',
            date: '21 Sept, 2024',
            time: '11:32 PM',
            active: true
        },
        {
            title: 'Order Has Reached At Delivery Hub',
            date: '21 Sept, 2024',
            time: '11:32 PM',
            active: false
        },
        {
            title: 'Order Is On The Way To Delivery Hub From Gab',
            date: '21 Sept, 2024',
            time: '11:32 PM',
            active: false
        }
    ];

    return (
        <div className="page-setup">
            <div className='mb-4'>
                <FloatingThemeBtn />
            </div>
            <GoBack />
            <div className='my-10'>
                <h1 className='sub-heading' >Track Order</h1>
                <div className="flex items-center justify-between gap-10 text-left text-sm ">
                    <div>
                        <strong>Order Id</strong>
                        <p>{"DFG34455DFG"}</p>
                    </div>
                    <div>
                        <strong>Order Date</strong>
                        <p>{"2023-06-01"}</p>
                    </div>
                    <div>
                        <strong>Amount</strong>
                        <p>{totalAmount}</p>
                    </div>
                    <div>
                        <strong>Number of Products</strong>
                        <p>{ordersData?.data?.length}</p>
                    </div>
                    <div>
                        <strong>Payment Status</strong>
                        <p>{orderStatus}</p>
                    </div>
                    <div>
                        <strong>Address</strong>
                        <p>23/A, 3rd floor, house no 211/A , Road no 234,</p>
                        <p>Paterbag , jatrabari, Dhaka 1240</p>
                    </div>
                </div>
            </div>

            <div className="space-y-10">
                {/* Timeline Section */}
                <div className="border4 p6">
                    <h2 className="sub-heading mb-4">TIMELINE</h2>
                    <div className="relative">
                        {/* Progress Line */}
                        {/* <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div> */}
                        {/* <div className="absolute left-6 top-0 w-0.5 bg-green-500 transition-all duration-500" style={{ height: '40%' }}></div> */}

                        <div className="space--8 flex items-center gap-6 flex-wrap ">
                            {timelineSteps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div key={index} className="relative flex items-center justify-center flex-col gap-2 ">
                                        {/* Icon */}
                                        <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded border-2 transition-all duration-300 ${step.completed
                                            ? 'border-green-500 text-green-500'
                                            : 'border-gray-300 text-gray-400'
                                            }`}>
                                            <Icon className="w-5 h-5" />
                                        </div>

                                        {/* Label */}
                                        <div className="">
                                            <p className={`font-medium transition-colors text-sm duration-300 ${step.completed ? 'text-gray-900' : 'text-gray-400'
                                                }`}>
                                                {step.title}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Order Status Section */}
                <div className="">
                    <h2 className="sub-heading mb-4">ORDER STATUS</h2>

                    <div className="space-y-6">
                        {orderStatusHistory.map((status, index) => (
                            <div key={index} className="relative flex items-start">
                                {/* Status Indicator */}
                                <div className={`flex-shrink-0 w-3 h-3 rounded-full mt-2 ${status.active ? 'bg-green-500' : 'bg-gray-300'
                                    }`}></div>

                                {/* Status Content */}
                                <div className="ml-4 flex-1">
                                    <p className={`font-medium leading-relaxed ${status.active ? 'text-gray-900' : 'text-gray-600'
                                        }`}>
                                        {status.title}
                                    </p>
                                    <div className="flex items-center mt-1 text-sm text-gray-500">
                                        <FaRegClock className="w-4 h-4 mr-1" />
                                        <span>{status.date} {status.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TrackOrderPage;