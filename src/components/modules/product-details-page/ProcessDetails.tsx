import { icons } from "@/assets";
import { domPurifyAllowedAttributes, domPurifyAllowedTags } from "@/constant";
import DOMPurify from 'dompurify';
import { useMemo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image";


const SafeHtmlContent: React.FC<{ htmlContent: string }> = ({ htmlContent }) => {
    const sanitizedHTML = useMemo(() =>
        DOMPurify.sanitize(htmlContent, {
            ALLOWED_TAGS: domPurifyAllowedTags,
            ALLOWED_ATTR: domPurifyAllowedAttributes,
        }), [htmlContent]
    );
    return (
        <div
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
            className="custom-rich-text"
        />
    );
};


const ProcessDetails = ({ long_description, ingredients }: { long_description: string, ingredients: string }) => {

    const processItems = [
        {
            title: "Details",
            description: long_description,
            isHtml: true
        },
        {
            title: "Ingredients",
            description: ingredients ?? "Not Provided",
            isHtml: true
        },
        {
            title: "Shipping Details",
            deliverWay: icons?.deliverWay,
            deliverWayTitle: "We Deliver All over BANGLADESH.",
            deliverWayDescription: "We value your time. That's why we offer fast shipping so you can enjoy your purchases sooner.",
            deliverCar: icons?.deliverCar,
            deliverCarTitle: "Fast Shipping, Fast Satisfaction",
            deliverCarDescription: "Inside Dhaka & Chattogram TAKA 80 and Outside TAKA 100",
            isHtml: false
        }
    ];

    return (
        <div className=''>
            <Accordion type="single" collapsible>
                {processItems?.map(({ title: itemTitle, description, isHtml, deliverWay, deliverWayTitle, deliverWayDescription, deliverCar, deliverCarTitle, deliverCarDescription }, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{itemTitle}</AccordionTrigger>
                        <AccordionContent>
                            <div className={`${itemTitle === "Details" ? "h-[350px]" : "h-fit"} overflow-y-auto`} >
                                {deliverWay && (
                                    <div className='min-w-full h-full space-y-4'>
                                        <div className="flex items-center gap-4 w-full ">
                                            <div className='w-12'>
                                                <Image
                                                    src={deliverWay}
                                                    alt={itemTitle}
                                                    loading="lazy"
                                                    height={800}
                                                    width={800}
                                                    className="w-full h-full object-cover rounded-md"
                                                />
                                            </div>
                                            <div className='w-full'>
                                                <h3 className="text-base font-semibold">{deliverWayTitle}</h3>
                                                <p className="text-sm">{deliverWayDescription}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 w-full">
                                            <div className='w-12'>
                                                <Image
                                                    src={deliverCar}
                                                    alt={itemTitle}
                                                    loading="lazy"
                                                    height={800}
                                                    width={800}
                                                    className="w-full h-full object-cover rounded-md"
                                                />
                                            </div>
                                            <div className='w-full'>
                                                <h3 className="text-base font-semibold  ">{deliverCarTitle}</h3>
                                                <p className="text-sm">{deliverCarDescription}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div
                                    className="w-full"
                                >
                                    {
                                        description && (isHtml ? (
                                            <SafeHtmlContent htmlContent={description} />
                                        ) : <p>{description}</p>)
                                    }
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default ProcessDetails