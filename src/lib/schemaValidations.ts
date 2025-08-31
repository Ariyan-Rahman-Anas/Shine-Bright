import { z } from 'zod'

// Validation schema
// export const CustomerCreateSchema = z.object({
//     first_name: z.string().min(1, 'First name is required'),
//     last_name: z.string().min(1, 'Last name is required').optional(),
//     email: z.string().email('Invalid email address').optional(),
//     phone: z.string().min(10, 'Phone number must be at least 10 digits'),
//     country_code: z.string().min(1, 'Country code is required'),
//     country: z.string().min(1, 'Country is required').optional(),
//     city: z.string().min(1, 'City is required').optional(),
//     thana: z.string().min(1, 'Thana is required').optional(),
//     zone: z.string().min(1, 'Zone is required').optional(),
//     area: z.string().min(1, 'Area is required').optional(),
//     postal_code: z.string().min(1, 'Postal code is required').optional(),
//     is_primary: z.boolean(),
//     address: z.string().min(1, 'Address is required'),
//     address_type: z.string()
// })

export const CustomerCreateSchema = z.object({
    first_name: z.string().min(1, 'First name is required'),
    last_name: z.string().optional(), // Made optional
    email: z.string().email('Invalid email address').optional(),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    country_code: z.string().optional(), // Made optional - has default value
    country: z.string().optional(),
    city: z.string().optional(),
    thana: z.string().optional(),
    zone: z.string().optional(),
    area: z.string().optional(),
    postal_code: z.string().optional(),
    is_primary: z.boolean(),
    address: z.string().min(1, 'Address is required'),
    address_type: z.string().optional() // Made optional - has default value
})


export const PlaceOrderSchema = z.object({
    client_id: z.string().min(1, 'Client ID is required'),
    order_id: z.string().min(1, 'Order ID is required'),
    order_date: z.string().min(1, 'Order Date is required'),
    order_amount: z.number().min(1, 'Order Amount is required'),
    current_status: z.string().default('ORDERED'),
    payment_status: z.enum(['UNPAID', 'PAID']).default('UNPAID'),
    payment_method: z.enum(['COD', 'ONLINE']).default('ONLINE'),
    invoice_id: z.string().min(1, 'Invoice ID is required'),
    total_order_qty: z.number().min(1, 'Total Order Qty is required'),
    delivery_charge: z.number().min(1, 'Delivery Charge is required'),
    delivery_agent: z.string().min(1, 'Delivery Agent is required'),
    delivery_location: z.enum(['STORE_PICKUP', 'INSIDE_CITY', 'OUTSIDE_CITY']),
    order_details: z.array(z.object({
        product_id: z.string().min(1, 'Product ID is required'),
        regular_price: z.number().min(1, 'Quantity is required'),
        sales_price: z.number().min(1, 'Price is required'),
        discount_price: z.number().min(1, 'Discount Price is required'),
        discount_value: z.number().min(1, 'Discount Value is required'),
        discount_type: z.enum(['FLAT', 'PERCENTAGE']).default('FLAT'),
        size_attribute_id: z.number().min(1, 'Size Attribute ID is required'),
        color_attribute_id: z.number().min(1, 'Color Attribute ID is required'),
        quantity: z.number().min(1, 'Quantity is required'),
    }))
})