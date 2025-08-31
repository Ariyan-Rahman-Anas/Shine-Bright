"use client"

import FloatingThemeBtn from '@/components/shared/FloatingThemeBtn'
import GoBack from '@/components/shared/GoBack'
import ProductListingCard from '@/components/shared/ProductListingCard'
import { useGetOrderedItemsBySalesOrderIdQuery } from '@/redux/api/orderApi'
import React from 'react'

const ProductsListPage = ({ params }: { params: { id: string } }) => {

  const { data: ordersData } = useGetOrderedItemsBySalesOrderIdQuery(params.id)
  console.log("ordersData", ordersData)

  // Deduplicate based on product_id, sales_price, product_title, size_attribute_id, color_attribute_id
  const groupedData = ordersData?.data?.reduce((acc: any, item: any) => {
    // Create a unique key combining all fields
    const uniqueKey = `${item.product_id}_${item.sales_price}_${item.product_title}_${item.size_attribute_id}_${item.color_attribute_id}`;
    
    // Only add if this combination doesn't exist yet (takes first occurrence)
    if (!acc[uniqueKey]) {
      acc[uniqueKey] = {
        ...item,
        duplicateItems: [item]
      };
    } else {
      // If duplicate found, add to duplicateItems array
      acc[uniqueKey].duplicateItems.push(item);
    }
    
    return acc;
  }, {});

  // Convert to array and add dynamic quantity count
  const uniqueProducts = Object.values(groupedData || {}).map((item: any) => ({
    ...item,
    quantity: item.duplicateItems.length
  }));

  return (
    <div className='page-setup'>
      <div className='mb-6'>
        <FloatingThemeBtn />
      </div>
      <GoBack />
      <h1 className="sub-heading">Products List</h1>

      <div className='mt-4'>
        {
          uniqueProducts?.map((item: any, idx: number) => (
            <ProductListingCard key={`${item.product_id}_${idx}`} item={item} />
          ))
        }
      </div>
    </div>
  )
}
export default ProductsListPage