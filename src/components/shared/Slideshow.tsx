"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";


const Slideshow = ({ images = [] }: { images: (string | { src: string, alt?: string })[] }) => {
    const [api, setApi] = useState<CarouselApi | null>(null);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    // Setup autoplay scroll
    useEffect(() => {
        if (!api || images.length <= 1) return;

        autoplayRef.current = setInterval(() => {
            api.scrollNext();
        }, 4000);

        return () => {
            if (autoplayRef.current) clearInterval(autoplayRef.current);
        };
    }, [api, images.length]);

    return (
        <div className="w-full lg:w-[910px] h-96 overflow-hidden">
            <Carousel
                className="w-full"
                opts={{ align: "center", loop: true }}
                setApi={setApi}
            >
                <CarouselContent>
                    {images.map((img, index) => {
                        const image = typeof img === 'string' || typeof (img as any).src === 'string'
                            ? { src: img, alt: "" }
                            : img;

                        return (
                            <CarouselItem key={index}>
                                <div className="relative flex items-center justify-center rounded-xl border border-metal-100 bg-metal-50 h-96 dark:border-metal-900 dark:bg-metal-900">
                                    <Image
                                        src={image.src as string}
                                        alt={image.alt || ""}
                                        fill
                                        className="object-cover"
                                        sizes="100%"
                                    />
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
            </Carousel>
        </div>
    );
};
export default Slideshow;