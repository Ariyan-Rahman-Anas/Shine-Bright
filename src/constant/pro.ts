import { images } from "@/assets";

export const SBProductsData = [
  {
    "id": "p-1",
    "title": "Maybelline Lifter Gloss with Hyaluronic Acid",
    "product_code": "250904143126675",
    "product_type": "VARIABLE",
    "ingredients": "<p><span style=\"color: rgb(0, 0, 0)\">Acid Triglyceride, Bis-Diglyceryl Polyacyladipate-2, Pentaerythrityl Tetraisostearate, Polybutene, Tridecyl Trimellitate, Diisostearyl Malate, Silica Dimethyl Silylate, Phenoxyethanol, Ethylhexyl Palmitate, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Ethylhexylglycerin, Calcium Sodium Borosilicate, Sorbic Acid, Calcium Aluminum Borosilicate, Tocopheryl Acetate, Sodium Saccharin, Alumina, Synthetic Fluorphlogopite, Silica, Polybutylene Terephthalate, Trihydroxystearin, Cocos Nucifera Oil / Coconut Oil, Aluminum Hydroxide, Ethylene/Va Copolymer, Acrylates Copolymer, Tin Oxide, Magnesium Silicate, Sodium Hyaluronate, Tocopherol, Glucomannan, Parfum / Fragrance.</span></p>",
    "other": null,
    "barcode": null,
    "slug": "maybelline-lifter-gloss-with-hyaluronic-acid",
    "price_type": "COMMON",
    "stock_type": "COMMON",
    "short_description": "Lifter Gloss is formulated with Hyaluronic Acid that visibly smooths lip surface and enhances lip contour with high shine for fuller looking lips.",
    "long_description": "<p><span>Lifter Gloss is formulated to help your lips look hydrated and shiny while being packed with benefits.<br><br><strong>Key Features:</strong><br><br></span></p><ul><li><p><span>Hydrating formula made with Hyaluronic Acid</span></p></li><li><p><span>20 modern shades from clear, pinks, nudes, and more</span></p></li><li><p><span>Non-sticky</span></p></li><li><p><span>High-shine finish for a fuller, lifted lip look</span></p></li><li><p><span>Allergy tested</span></p></li><li><p><span>Dermatologist tested</span></p></li><li><p><span>Suitable for sensitive skin.</span></p></li></ul>",
    "status": "PUBLISHED",
    "attributes": [
      {
        "id": "c-1",
        "attribute_type": "COLOR",
        "title": "002-Ice-1",
        "description": "#ffb8bd",
        "photos": [
          {
            "id": "i-1",
            "product_id": "p-1",
            "size_attribute_id": "s-1",
            "color_attribute_id": "c-1",
            "is_primary": true,
            "is_thumbnail": false,
            "photoURL": images.product1.pi1
          },
          {
            "id": "i-2",
            "product_id": "p-1",
            "size_attribute_id": "s-1",
            "color_attribute_id": "c-1",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL": images.product1.pi2
          }
        ]
      },
      {
        "id": "c-2",
        "attribute_type": "COLOR",
        "title": "002Ice-2",
        "description": "#F75270",
        "photos": [
          {
            "id": "i-3",
            "product_id": "p-1",
            "size_attribute_id": "s-2",
            "color_attribute_id": "c-2",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL": images.product1.pi3
          }
        ]
      },
      {
        "id": "c-3",
        "attribute_type": "COLOR",
        "title": "002Ice-3",
        "description": "#E62727",
        "photos": [
          {
            "id": "i-4",
            "product_id": "p-1",
            "size_attribute_id": "s-2",
            "color_attribute_id": "c-3",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL": images.product1.pi4
          }
        ]
      },
      {
        "id": "c-4",
        "attribute_type": "COLOR",
        "title": "002Ice-4",
        "description": "#9A3F3F",
        "photos": [
          {
            "id": "i-5",
            "product_id": "p-1",
            "size_attribute_id": "s-3",
            "color_attribute_id": "c-4",
            "is_primary": false,
            "is_thumbnail": true,
            "photoURL": images.product1.pi5
          }
        ]
      },
      {
        "id": "c-5",
        "attribute_type": "COLOR",
        "title": "002Ice-5",
        "description": "#F08787",
        "photos": [
          {
            "id": "i-6",
            "product_id": "p-1",
            "size_attribute_id": "s-3",
            "color_attribute_id": "c-5",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL": images.product1.pi6
          }
        ]
      },
      {
        "id": "s-1",
        "attribute_type": "SIZE",
        "title": "170 ML",
        "description": "170 ML"
      },
      {
        "id": "s-2",
        "attribute_type": "SIZE",
        "title": "250 ML",
        "description": "250 ML"
      },
      {
        "id": "s-3",
        "attribute_type": "SIZE",
        "title": "300 ML",
        "description": "300 ML"
      }
    ],
    "tags": [
      {
        "title": "Best Seller",
        "photo_path": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/TAG_MASTER/64db1648-IMG_1528.png"
      },
      {
        "title": "Trending",
        "photo_path": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/TAG_MASTER/trending.png"
      },
      {
        "title": "New Arrival",
        "photo_path": null
      }
    ],
    "pricing_groups": [
      {
        "id": "pg-1",
        "product_id": "p-1",
        "discount_price": null,
        "discount_start": null,
        "discount_end": null,
        "grouped_id": "1",
        "is_infinite": true,
        "is_stockout": false,
        "is_discounted": false,
        "regular_price": "1450",
        "discount_type": null,
        "discount_value": "0",
        "color": {
          "id": "c-1",
          "title": "002Ice-1",
          "description": "#ffb8bd"
        },
        "size": {
          "id": "s-1",
          "title": "170 ML",
          "description": "170 ML"
        }
      },
      {
        "id": "pg-2",
        "product_id": "p-1",
        "discount_price": null,
        "discount_start": null,
        "discount_end": null,
        "grouped_id": "2",
        "is_infinite": true,
        "is_stockout": false,
        "is_discounted": false,
        "regular_price": "1680",
        "discount_type": null,
        "discount_value": "0",
        "color": {
          "id": "c-2",
          "title": "002Ice-2",
          "description": "#F75270"
        },
        "size": {
          "id": "s-2",
          "title": "250 ML",
          "description": "250 ML"
        }
      },
      {
        "id": "pg-3",
        "product_id": "p-1",
        "discount_price": null,
        "discount_start": null,
        "discount_end": null,
        "grouped_id": "3",
        "is_infinite": true,
        "is_stockout": false,
        "is_discounted": false,
        "regular_price": "1850",
        "discount_type": null,
        "discount_value": "0",
        "color": {
          "id": "c-3",
          "title": "002Ice-3",
          "description": "#E62727"
        },
        "size": {
          "id": "s-3",
          "title": "300 ML",
          "description": "300 ML"
        }
      }
    ],
    "categories": [
      {
        "category_type": "LEVEL_1",
        "description": null,
        "discount_type": null,
        "discount_value": "0",
        "show_in_nav": false,
        "is_showcase": false,
        "show_in_sidebar": false,
        "is_active": true,
        "title": "Makeup"
      }
    ],
    "brands": [
      {
        "id": "b-1",
        "description": "Maybelline – New York's iconic beauty brand, bringing trendy, high-performance makeup at affordable prices.",
        "title": "Maybelline",
        "discount_type": null,
        "discount_value": "0"
      }
    ]
  },
  {
    "id": "p-2",
    "title": "L'Oreal Paris True Match Foundation",
    "product_code": "250904143126676",
    "product_type": "VARIABLE",
    "ingredients": "<p><span style=\"color: rgb(0, 0, 0)\">Aqua/Water, Cyclopentasiloxane, Nylon-12, Isododecane, Alcohol Denat., Cyclohexasiloxane, PEG-10 Dimethicone, Sodium Chloride, Phenoxyethanol, Magnesium Sulfate, Disteardimonium Hectorite, Ethylhexylglycerin, Tocopherol, Parfum/Fragrance, Propylene Carbonate, Aluminum Hydroxide, Titanium Dioxide, Iron Oxides.</span></p>",
    "other": null,
    "barcode": null,
    "slug": "loreal-paris-true-match-foundation",
    "price_type": "COMMON",
    "stock_type": "COMMON",
    "short_description": "True Match Foundation blends seamlessly into skin for a natural, weightless feel with buildable coverage.",
    "long_description": "<p><span>Perfect match foundation that adapts to your skin tone for a flawless finish.<br><br><strong>Key Features:</strong><br><br></span></p><ul><li><p><span>45 shades to match every skin tone</span></p></li><li><p><span>Buildable medium coverage</span></p></li><li><p><span>Natural finish</span></p></li><li><p><span>Long-lasting 24HR wear</span></p></li><li><p><span>Non-comedogenic</span></p></li><li><p><span>Suitable for all skin types</span></p></li></ul>",
    "status": "PUBLISHED",
    "attributes": [
      {
        "id": "c-1",
        "attribute_type": "COLOR",
        "title": "1N-Ivory",
        "description": "#f5deb3",
        "photos": [
          {
            "id": "i-1",
            "product_id": "p-2",
            "size_attribute_id": "s-1",
            "color_attribute_id": "c-1",
            "is_primary": true,
            "is_thumbnail": true,
            "photoURL": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/product-photos/foundation-ivory.jpg"
          }
        ]
      },
      {
        "id": "c-2",
        "attribute_type": "COLOR",
        "title": "2N-Vanilla",
        "description": "#f4e4c9",
        "photos": [
          {
            "id": "i-2",
            "product_id": "p-2",
            "size_attribute_id": "s-1",
            "color_attribute_id": "c-2",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/product-photos/foundation-vanilla.jpg"
          }
        ]
      },
      {
        "id": "c-3",
        "attribute_type": "COLOR",
        "title": "3N-Creamy-Beige",
        "description": "#e6d3b5",
        "photos": [
          {
            "id": "i-3",
            "product_id": "p-2",
            "size_attribute_id": "s-2",
            "color_attribute_id": "c-3",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/product-photos/foundation-beige.jpg"
          }
        ]
      },
      {
        "id": "s-1",
        "attribute_type": "SIZE",
        "title": "30 ML",
        "description": "30 ML"
      },
      {
        "id": "s-2",
        "attribute_type": "SIZE",
        "title": "50 ML",
        "description": "50 ML"
      }
    ],
    "tags": [
      {
        "title": "New Arrival",
        "photo_path": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/TAG_MASTER/new-arrival.png"
      },
      {
        "title": "Award Winner",
        "photo_path": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/TAG_MASTER/award-winner.png"
      }
    ],
    "pricing_groups": [
      {
        "id": "pg-1",
        "product_id": "p-2",
        "discount_price": "1800",
        "discount_start": "2024-01-01",
        "discount_end": "2024-12-31",
        "grouped_id": "1",
        "is_infinite": true,
        "is_stockout": false,
        "is_discounted": true,
        "regular_price": "2200",
        "discount_type": "PERCENTAGE",
        "discount_value": "18",
        "color": {
          "id": "c-1",
          "title": "1N-Ivory",
          "description": "#f5deb3"
        },
        "size": {
          "id": "s-1",
          "title": "30 ML",
          "description": "30 ML"
        }
      },
      {
        "id": "pg-2",
        "product_id": "p-2",
        "discount_price": "2400",
        "discount_start": "2024-01-01",
        "discount_end": "2024-12-31",
        "grouped_id": "2",
        "is_infinite": true,
        "is_stockout": false,
        "is_discounted": true,
        "regular_price": "2800",
        "discount_type": "PERCENTAGE",
        "discount_value": "14",
        "color": {
          "id": "c-2",
          "title": "2N-Vanilla",
          "description": "#f4e4c9"
        },
        "size": {
          "id": "s-2",
          "title": "50 ML",
          "description": "50 ML"
        }
      }
    ],
    "categories": [
      {
        "category_type": "LEVEL_1",
        "description": null,
        "discount_type": null,
        "discount_value": "0",
        "show_in_nav": true,
        "is_showcase": true,
        "show_in_sidebar": true,
        "is_active": true,
        "title": "Face"
      }
    ],
    "brands": [
      {
        "id": "b-1",
        "description": "L'Oreal Paris - Because you're worth it. Premium beauty products for everyone.",
        "title": "L'Oreal Paris",
        "discount_type": null,
        "discount_value": "0"
      }
    ]
  },
  {
    "id": "p-3",
    "title": "MAC Ruby Woo Lipstick",
    "product_code": "250904143126677",
    "product_type": "SIMPLE",
    "ingredients": "<p><span style=\"color: rgb(0, 0, 0)\">Ricinus Communis Seed Oil, Ethylhexyl Palmitate, Tridecyl Trimellitate, Ozokerite, Caprylic/Capric Triglyceride, Euphorbia Cerifera Wax, Copernicia Cerifera Wax, Tocopheryl Acetate, Phenyl Trimethicone, Vanilla Planifolia Fruit Extract, Red 7 Lake, Red 6, Titanium Dioxide.</span></p>",
    "other": null,
    "barcode": null,
    "slug": "mac-ruby-woo-lipstick",
    "price_type": "PREMIUM",
    "stock_type": "LIMITED",
    "short_description": "Iconic matte red lipstick with intense color payoff and long-lasting formula.",
    "long_description": "<p><span>The legendary Ruby Woo - MAC's most iconic red lipstick with a classic matte finish.<br><br><strong>Key Features:</strong><br><br></span></p><ul><li><p><span>Intense matte finish</span></p></li><li><p><span>High-impact color</span></p></li><li><p><span>Long-wearing formula</span></p></li><li><p><span>Smooth application</span></p></li><li><p><span>Iconic red shade</span></p></li><li><p><span>Professional quality</span></p></li></ul>",
    "status": "PUBLISHED",
    "attributes": [
      {
        "id": "c-1",
        "attribute_type": "COLOR",
        "title": "Ruby-Woo",
        "description": "#d2232a",
        "photos": [
          {
            "id": "i-1",
            "product_id": "p-3",
            "size_attribute_id": "s-1",
            "color_attribute_id": "c-1",
            "is_primary": true,
            "is_thumbnail": true,
            "photoURL": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/product-photos/mac-ruby-woo.jpg"
          }
        ]
      },
      {
        "id": "c-2",
        "attribute_type": "COLOR",
        "title": "Velvet-Teddy",
        "description": "#a67c73",
        "photos": [
          {
            "id": "i-2",
            "product_id": "p-3",
            "size_attribute_id": "s-1",
            "color_attribute_id": "c-2",
            "is_primary": false,
            "is_thumbnail": false,
            "photoURL": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/product-photos/mac-velvet-teddy.jpg"
          }
        ]
      },
      {
        "id": "s-1",
        "attribute_type": "SIZE",
        "title": "3g",
        "description": "Standard Size"
      }
    ],
    "tags": [
      {
        "title": "Limited Edition",
        "photo_path": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/TAG_MASTER/limited-edition.png"
      },
      {
        "title": "Best Seller",
        "photo_path": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/TAG_MASTER/64db1648-IMG_1528.png"
      }
    ],
    "pricing_groups": [
      {
        "id": "pg-1",
        "product_id": "p-3",
        "discount_price": null,
        "discount_start": null,
        "discount_end": null,
        "grouped_id": "1",
        "is_infinite": false,
        "is_stockout": false,
        "is_discounted": false,
        "regular_price": "3200",
        "discount_type": null,
        "discount_value": "0",
        "color": {
          "id": "c-1",
          "title": "Ruby-Woo",
          "description": "#d2232a"
        },
        "size": {
          "id": "s-1",
          "title": "3g",
          "description": "Standard Size"
        }
      },
      {
        "id": "pg-2",
        "product_id": "p-3",
        "discount_price": null,
        "discount_start": null,
        "discount_end": null,
        "grouped_id": "2",
        "is_infinite": false,
        "is_stockout": false,
        "is_discounted": false,
        "regular_price": "3200",
        "discount_type": null,
        "discount_value": "0",
        "color": {
          "id": "c-2",
          "title": "Velvet-Teddy",
          "description": "#a67c73"
        },
        "size": {
          "id": "s-1",
          "title": "3g",
          "description": "Standard Size"
        }
      }
    ],
    "categories": [
      {
        "category_type": "LEVEL_1",
        "description": null,
        "discount_type": null,
        "discount_value": "0",
        "show_in_nav": true,
        "is_showcase": true,
        "show_in_sidebar": false,
        "is_active": true,
        "title": "Lips"
      }
    ],
    "brands": [
      {
        "id": "b-1",
        "description": "MAC Cosmetics - Professional makeup artistry for all ages, races, and sexes.",
        "title": "MAC",
        "discount_type": null,
        "discount_value": "0"
      }
    ]
  },
  {
    "id": "p-4",
    "title": "Urban Decay Naked Heat Eyeshadow Palette",
    "product_code": "250904143126678",
    "product_type": "SIMPLE",
    "ingredients": "<p><span style=\"color: rgb(0, 0, 0)\">Talc, Zinc Stearate, Dimethicone, Boron Nitride, Lauroyl Lysine, Magnesium Myristate, Caprylic/Capric Triglyceride, Phenoxyethanol, Caprylyl Glycol, Dimethiconol, Tocopheryl Acetate, Mica, Titanium Dioxide, Iron Oxides, Ultramarines.</span></p>",
    "other": null,
    "barcode": null,
    "slug": "urban-decay-naked-heat-palette",
    "price_type": "PREMIUM",
    "stock_type": "COMMON",
    "short_description": "12 amber-hued neutral eyeshadows in matte and metallic finishes for versatile warm-toned looks.",
    "long_description": "<p><span>Naked Heat Palette featuring 12 gorgeous warm-toned eyeshadows perfect for creating sultry, smoky looks.<br><br><strong>Key Features:</strong><br><br></span></p><ul><li><p><span>12 warm amber and bronze shades</span></p></li><li><p><span>Mix of matte and metallic finishes</span></p></li><li><p><span>Highly pigmented formula</span></p></li><li><p><span>Buttery smooth application</span></p></li><li><p><span>Includes double-ended brush</span></p></li><li><p><span>Long-lasting wear</span></p></li></ul>",
    "status": "PUBLISHED",
    "attributes": [
      {
        "id": "c-1",
        "attribute_type": "COLOR",
        "title": "Naked-Heat",
        "description": "#b8860b",
        "photos": [
          {
            "id": "i-1",
            "product_id": "p-4",
            "size_attribute_id": "s-1",
            "color_attribute_id": "c-1",
            "is_primary": true,
            "is_thumbnail": true,
            "photoURL": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/product-photos/naked-heat-palette.jpg"
          }
        ]
      },
      {
        "id": "s-1",
        "attribute_type": "SIZE",
        "title": "Full Size",
        "description": "Standard Palette Size"
      }
    ],
    "tags": [
      {
        "title": "Trending",
        "photo_path": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/TAG_MASTER/trending.png"
      },
      {
        "title": "Limited Edition",
        "photo_path": "https://taupe-notch-bkt.s3.ap-southeast-1.amazonaws.com/TAG_MASTER/limited-edition.png"
      }
    ],
    "pricing_groups": [
      {
        "id": "pg-1",
        "product_id": "p-4",
        "discount_price": "4500",
        "discount_start": "2024-08-01",
        "discount_end": "2024-09-30",
        "grouped_id": "1",
        "is_infinite": true,
        "is_stockout": false,
        "is_discounted": true,
        "regular_price": "5200",
        "discount_type": "FIXED",
        "discount_value": "700",
        "color": {
          "id": "c-1",
          "title": "Naked-Heat",
          "description": "#b8860b"
        },
        "size": {
          "id": "s-1",
          "title": "Full Size",
          "description": "Standard Palette Size"
        }
      }
    ],
    "categories": [
      {
        "category_type": "LEVEL_1",
        "description": null,
        "discount_type": null,
        "discount_value": "0",
        "show_in_nav": true,
        "is_showcase": true,
        "show_in_sidebar": true,
        "is_active": true,
        "title": "Eyes"
      }
    ],
    "brands": [
      {
        "id": "b-1",
        "description": "Urban Decay - Beauty with an edge. Edgy, innovative makeup for fearless self-expression.",
        "title": "Urban Decay",
        "discount_type": null,
        "discount_value": "0"
      }
    ]
  },
]






// import DOMPurify from 'dompurify';
// import ProductsWillLove from '@/components/pageComponents/Products/ProductsWillLove'
// import FloatingThemeBtn from '@/components/shared/FloatingThemeBtn'
// import GoBack from '@/components/shared/GoBack'
// import PathIndicator from '@/components/shared/PathIndicator'
// import SecondaryButton from '@/components/shared/SecondaryButton'
// import Image from 'next/image'
// import { useParams } from 'next/navigation'
// import React, { useEffect, useState, useMemo, useCallback } from 'react'
// import { LuHeart, LuMinus, LuPlus } from 'react-icons/lu'
// import { useSelector } from 'react-redux'
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion"
// import ProductDetailsSkeleton from '@/components/Skeletons/ProductDetailsSkeleton'
// import { icons, images } from '@/assets'
// import useManageWishlist from '@/hooks/useManageWishlist'
// import { wishlistItems } from '@/redux/features/wishlistSlice'
// import useManageCart from '@/hooks/useManageCart'
// import { domPurifyAllowedAttributes, domPurifyAllowedTags, SBProductsData } from '@/constant';
// import SearchableDropdown from '@/components/shared/SearchableDropdown';
// import { MdDoNotDisturbAlt } from 'react-icons/md';
// import Reviews from '@/components/modules/home-page/Reviews';

// // Safe HTML Content Component
// const SafeHtmlContent: React.FC<{ htmlContent: string }> = ({ htmlContent }) => {
//     const sanitizedHTML = useMemo(() =>
//         DOMPurify.sanitize(htmlContent, {
//             ALLOWED_TAGS: domPurifyAllowedTags,
//             ALLOWED_ATTR: domPurifyAllowedAttributes,
//         }), [htmlContent]
//     );

//     return (
//         <div
//             dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
//             className="custom-rich-text"
//         />
//     );
// };

// const ProductDetailsPage: React.FC = () => {
//     const { slug } = useParams();
//     const currentProduct = SBProductsData.find(item => item.slug === slug)
//     console.log({currentProduct})

//     const wishlistItemsAll = useSelector(wishlistItems);
//     const { selected } = useSelector((state: any) => state.category);
//     const { toggleWishlist } = useManageWishlist();
//     const { addToCartHandler } = useManageCart();

//     const [selectedThumbnail, setSelectedThumbnail] = useState<string | null>(null);
//     const [selectedColor, setSelectedColor] = useState<string>('');
//     const [selectedSize, setSelectedSize] = useState<string>('');
//     const [quantity, setQuantity] = useState(1);
//     const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null);

//     // page scroll to top when color is selected
//     useEffect(() => {
//         if (selectedColor) {
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth'
//             });
//         }
//     }, [selectedColor]);

    // const {id, title, tags, attributes, product_type, pricing_groups, short_description, long_description, ingredients } = currentProduct || {}

//     const colorAttributes = useMemo(() =>
//         attributes?.filter((item: any) => item?.attribute_type === "COLOR" && item?.title !== "No Shade") || [],
//         [attributes]
//     );

//     const sizeAttributes = useMemo(() =>
//         attributes?.filter((item: any) => item?.attribute_type === "SIZE") || [],
//         [attributes]
//     );

//     //Compute IDs from attributes (no dependency loop)
//     const selectedColorId = useMemo(() =>
//         colorAttributes?.find((item: any) => item?.description === selectedColor)?.id,
//         [colorAttributes, selectedColor]
//     );

//     const photosData = []


//     const primaryPhoto = useMemo(() =>
//         photosData?.data?.find((photo: any) =>
//             photo?.is_primary === true
//         ),
//         [photosData]
//     );

//     const photosToShow = photosData?.data || [];

//     const displayPhoto = useMemo(() => {
//         if (selectedThumbnail) return selectedThumbnail;
//         return primaryPhoto?.photoURL;
//     }, [selectedThumbnail, primaryPhoto]);

//     const isInWishlist = useMemo(() =>
//         wishlistItemsAll?.some(item => item.id === id),
//         [wishlistItemsAll, id]
//     );

//     const handleQuantityChange = useCallback((increment: boolean) => {
//         setQuantity(prev => increment ? prev + 1 : Math.max(1, prev - 1));
//     }, []);


//     const handleSizeSelect = useCallback((size: string, sizeId?: string) => {
//         setSelectedSize(size);
//         setSelectedSizeId(sizeId || null);
//     }, []);

//     const processItems = [
//         {
//             title: "Details",
//             description: long_description,
//             isHtml: true
//         },
//         {
//             title: "Ingredients",
//             description: ingredients ?? "Not Provided",
//             isHtml: true
//         },
//         {
//             title: "Shipping Details",
//             deliverWay: icons?.deliverWay,
//             deliverWayTitle: "We Deliver All over BANGLADESH.",
//             deliverWayDescription: "We value your time. That's why we offer fast shipping so you can enjoy your purchases sooner.",
//             deliverCar: icons?.deliverCar,
//             deliverCarTitle: "Fast Shipping, Fast Satisfaction",
//             deliverCarDescription: "Inside Dhaka & Chattogram TAKA 80 and Outside TAKA 100",
//             isHtml: false
//         }
//     ];

//     const themeClasses = {
//         primary: selected === "makeup" ? "text-mBtnBg" : "text-sBtnBg",
//         secondary: selected === "makeup" ? "bg-mBtnBg" : "bg-sBtnBg",
//         button: selected === "makeup" ? "mBtn" : "sBtn",
//         border: selected === "makeup" ? "border-mBtnBg" : "border-sBtnBg"
//     };

//     // Enhanced pricing logic 
//     const selectedPriceGroup = useMemo(() => {
//         if (!pricing_groups || pricing_groups?.length === 0) return null;

//         // If both color and size are selected, find exact match
//         if (selectedColorId && selectedSizeId) {
//             const exactMatch = pricing_groups.find((item: any) =>
//                 item?.colorAttribute?.id === selectedColorId &&
//                 item?.sizeAttribute?.id === selectedSizeId
//             );
//             if (exactMatch) return exactMatch;
//         }

//         // If only color is selected, find first match with that color
//         if (selectedColorId && !selectedSizeId) {
//             const colorMatch = pricing_groups.find((item: any) =>
//                 item?.colorAttribute?.id === selectedColorId
//             );
//             if (colorMatch) return colorMatch;
//         }

//         // If only size is selected, find first match with that size
//         if (!selectedColorId && selectedSizeId) {
//             const sizeMatch = pricing_groups.find((item: any) =>
//                 item?.sizeAttribute?.id === selectedSizeId
//             );
//             if (sizeMatch) return sizeMatch;
//         }

//         // Default: return first pricing group (index 0)
//         return pricing_groups?.find((item: any) => item?.is_stockout === false)
//     }, [pricing_groups, selectedColorId, selectedSizeId]);

//     // Get available sizes for selected color
//     const availableSizesForSelectedColor = useMemo(() => {
//         if (!selectedColorId || !pricing_groups) return [];

//         return pricing_groups
//             .filter((item: any) => item?.colorAttribute?.id === selectedColorId)
//             .map((item: any) => item?.size || item?.sizeAttribute)
//             .filter((item: any) => item?.title !== "No Size");
//     }, [pricing_groups, selectedColorId]);

//     // Get available colors for selected size
//     // const availableColorsForSelectedSize = useMemo(() => {
//     //     if (!selectedSizeId || !pricing_groups) return [];

//     //     return pricing_groups
//     //         .filter((item: any) => item?.sizeAttribute?.id === selectedSizeId)
//     //         .map((item: any) => item?.color || item?.colorAttribute)
//     //         .filter(Boolean);
//     // }, [pricing_groups, selectedSizeId]);


//     const itemForCart = {
//         id: id as string,
//         title,
//         product_type: product_type,
//         regular_price: selectedPriceGroup?.regular_price,
//         sales_price: (selectedPriceGroup?.discount_price ) > 0 ? selectedPriceGroup?.discount_price : selectedPriceGroup?.regular_price,
//         discount_price: selectedPriceGroup?.discount_price,
//         quantity: quantity,
//         image: primaryPhoto?.photoURL ?? photosData?.data?.find((photo: any) => photo?.photoURL !== "")?.photoURL ?? images?.imgNotAvailable,
//         color: selectedColor
//             ? `${selectedColor} - ${selectedPriceGroup?.color?.title !== "No Shade"
//                 ? selectedPriceGroup?.color?.title
//                 : ""}`
//             : `${selectedPriceGroup?.color?.title !== "No Shade"
//                 ? selectedPriceGroup?.color?.description
//                 : ""} - ${selectedPriceGroup?.color?.title !== "No Shade"
//                     ? selectedPriceGroup?.color?.title
//                     : ""}`,
//         size: selectedSize ? selectedSize : selectedPriceGroup?.size?.title !== "No Size" ? selectedPriceGroup?.size?.title : "",
//         discount_type: selectedPriceGroup?.discount_type,
//         discount_value: selectedPriceGroup?.discount_value,
//         size_attribute_id: selectedSizeId ? selectedSizeId : selectedPriceGroup?.size?.title !== "No Size" ? selectedPriceGroup?.size?.id : "",
//         color_attribute_id: selectedColorId ? selectedColorId : selectedPriceGroup?.color?.title !== 'No Shade' ? selectedPriceGroup?.color?.id : "",
//     }

//     const photoTags = tags?.filter((tag: any) => tag?.photo_path !== null) || [];
//     const withoutPhotoTags = tags?.filter((tag: any) => tag?.photo_path === null) || [];

//     const stockOutShades = pricing_groups?.filter((item: any) => item?.is_stockout === true)
//     const stockOutColorIds = stockOutShades?.map((item: any) => item?.colorAttribute?.id);

//     if (isLoading) {
//         return <ProductDetailsSkeleton />;
//     }

//     console.log(photosToShow)

//     return (
//         <div className='mb-16'>
//             <div className='mb-6'>
//                 <FloatingThemeBtn />
//             </div>

//             <div className='md:hidden'>
//                 <GoBack />
//             </div>

//             <div className='section-setup-1600-p hidden md:block'>
//                 <PathIndicator path={`Shop All > Products > ${title}`} />
//             </div>

//             <div className='section-setup-1400-p md:mt-6 mb-6 md:mb-14'>
//                 <div className='flex flex-col md:flex-row items-start gap-x-10 space-y-6 md:space-y-0'>
//                     {/* Product Media */}
//                     <div className='w-full md:w-1/2'>
//                         <div className='w-full h-full rounded-lg overflow-hidden'>
//                             <Image
//                                 src={displayPhoto
//                                     ? displayPhoto
//                                     : photosToShow?.find((photo: any) => photo?.photoURL !== "")
//                                         ? photosToShow?.find((photo: any) => photo?.photoURL !== "")?.photoURL
//                                         : images?.imgNotAvailable}
//                                 alt={title || "Product image"}
//                                 loading="lazy"
//                                 height={1080}
//                                 width={1920}
//                                 className="w-full lg:w-[758px] h-full lg:h-[758px] object-cover rounded-lg"
//                             />
//                         </div>

//                         <div className='flex items-center gap-1 flex-wrap mt-2'>
//                             {photosToShow?.map((item: any, idx: number) => (
//                                 <div
//                                     key={idx}
//                                     className={`w-12 h-12 cursor-pointer roundedmd shadow border-2 ${displayPhoto === item?.photoURL ? themeClasses.border : "border-transparent"
//                                         }`}
//                                     onClick={() => setSelectedThumbnail(item?.photoURL)}
//                                 >
//                                     <Image
//                                         src={item?.photoURL}
//                                         alt={`${title} thumbnail ${idx + 1}`}
//                                         loading="lazy"
//                                         height={1080}
//                                         width={1920}
//                                         className='w-full h-full roundedsm object-cover'
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Product Info */}
//                     <div className='w-full md:w-1/2'>
//                         <h1 className='text-lg font-semibold'>{title}</h1>

//                         {/* without photo's tags and stock */}
//                         <div className='flex items-center gap-2 my-6'>
//                             <div>
//                                 {
//                                     selectedPriceGroup?.is_stockout === false ? (
//                                         <div className='flex items-center gap-1.5 rounded-full border px-2 w-fit'>
//                                             <div className='h-2 w-2 rounded-full bg-green-500'></div>
//                                             <span> In Stock</span>
//                                         </div>

//                                     ) : (
//                                         <div className='flex items-center gap-1.5 rounded-full border px-2 w-fit'>
//                                             <div className='h-2 w-2 rounded-full bg-error'></div>
//                                             <span> Out of Stock</span>
//                                         </div>
//                                     )
//                                 }
//                             </div>
//                             {/* Tags without photo */}
//                             {withoutPhotoTags && withoutPhotoTags?.length > 0 && (
//                                 <div className="flex items-center flex-wrap gap-1.5">
//                                     {withoutPhotoTags.map(({ title }: any, index: number) => (
//                                         <div key={index} className='flex items-center gap-1.5 rounded-full border px-2 w-fit'>
//                                             <div className={`h-2 w-2 rounded-full ${selected === "makeup" ? "bg-mBtnBg" : "bg-sBtnBg"} `}></div>
//                                             <span> {title}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>

//                         {/* Pricing */}
//                         <div className='flex items-center gap-4 mb-6'>
//                             {
//                                 selectedPriceGroup?.is_infinite === true && selectedPriceGroup?.discount_price > 0
//                                     ? (
//                                         <p className={`text-lg font-semibold ${themeClasses.primary}`}>
//                                             {selectedPriceGroup?.discount_price}.00৳
//                                         </p>
//                                     )
//                                     : selectedPriceGroup?.is_infinite === false && selectedPriceGroup?.discount_price > 0 ? (
//                                         <p className={`text-lg font-semibold ${themeClasses.primary}`}>
//                                             {selectedPriceGroup?.discount_price}.00৳
//                                         </p>
//                                     ) : (
//                                         <p className={`text-lg font-semibold ${themeClasses.primary}`}>
//                                             {selectedPriceGroup?.regular_price}.00৳
//                                         </p>
//                                     )
//                             }

//                             {selectedPriceGroup?.discount_price > 0 && <p className='line-through text-bColor3 font-normal'>
//                                 {selectedPriceGroup?.regular_price}.00৳
//                             </p>}

//                             {selectedPriceGroup?.discount_price > 0 && <p className={`border-2 py-[2px] text-sm px-4 rounded-full w-fit ${themeClasses.primary} ${themeClasses.border}`}>

//                                 Save {selectedPriceGroup?.discount_value}
//                                 {selectedPriceGroup?.discount_type === "PERCENTAGE" ? "%" : "৳"}
//                             </p>}
//                         </div>

//                         <p className='text-sm mb-4'>{short_description}</p>

//                         {/* Quantity Controls */}
//                         <div className="flex items-center gap-2 mb-6">
//                             <div
//                                 className='border-2 border-bColor1 w-8 h-8 flex items-center justify-center rounded cursor-pointer '
//                                 onClick={() => handleQuantityChange(false)}
//                             >
//                                 <LuMinus size={20} />
//                             </div>
//                             <p className='w-32 h-8 rounded border-2 border-bColor1 text-center py-0.5'>{quantity}</p>
//                             <div
//                                 className='border-2 border-bColor1 w-8 h-8 flex items-center justify-center rounded cursor-pointer '
//                                 onClick={() => handleQuantityChange(true)}
//                             >
//                                 <LuPlus size={20} />
//                             </div>
//                         </div>

//                         {/* shade Dropdown */}
//                         {
//                             product_type === "VARIABLE" && colorAttributes?.length > 0 && <SearchableDropdown
//                                 isLabel={false}
//                                 options={colorAttributes
//                                     ?.map((item: any) => ({
//                                         value: item?.description,
//                                         label: item?.title,
//                                         disabled: stockOutColorIds?.includes(item?.id),
//                                     }))}
//                                 value={selectedColor}
//                                 onChange={(value) => setSelectedColor(value as string)}
//                                 placeholder="Shades: "
//                                 searchPlaceholder="Select Shades"
//                                 clearable={false}
//                                 required
//                                 maxHeight="250px"
//                                 isSearchable={false}
//                                 isShades={true}
//                                 className='border-2 border-bColor1 w-full md:w-2/3 min-w-32 mb-2 '
//                             />
//                         }

//                         {/* Color Selection */}
//                         {colorAttributes?.length > 0 && (
//                             <div className="mb-2 space-y-1.5">
//                                 <div className='flex items-center flex-wrap gap-1'>
//                                     {colorAttributes?.map(({ title, description, id }: any, idx: number) => (
//                                         <div key={idx} className='h-10 relative flex items-center justify-center'>
//                                             <button
//                                                 onClick={() => setSelectedColor(title !== "No Shade" ? description : "")}
//                                                 style={{ backgroundColor: description }}
//                                                 className={`${selectedColor === description
//                                                     ? "border-2 border-blackCustom hover:border-blackCustom"
//                                                     : "border-2 border-dotted border-transparent shadow hover:border-blackCustom/60"
//                                                     } cursor-pointer transition-colors h-10 w-10 border-2 duration-300`}
//                                                 aria-label={`Select color ${description}`}
//                                             >
//                                             </button>
//                                             {
//                                                 stockOutShades?.find((item: any) => item?.color?.id === id) && (
//                                                     <div
//                                                         style={{ backgroundColor: `color-mix(in srgb, ${description} 5%, transparent)` }}
//                                                         className={`absolute left-1/2 -translate-x-1/2 h-10 w-10 flex items-center justify-center cursor-not-allowed `}>
//                                                         <MdDoNotDisturbAlt size={22} />
//                                                     </div>
//                                                 )
//                                             }
//                                         </div>
//                                     ))}

//                                 </div>
//                             </div>
//                         )}

//                         {/* Size Selection */}
//                         <div className=''>
//                             {selectedColor && availableSizesForSelectedColor?.length > 0 && (
//                                 <div className="mb-6 space-y-1.5">
//                                     <div className='flex items-center flex-wrap gap-2'>
//                                         {availableSizesForSelectedColor?.map((size: any, idx: number) => (
//                                             <button
//                                                 key={idx}
//                                                 onClick={() => handleSizeSelect(size?.title !== "No Size" ? size?.title : "", size?.id)}
//                                                 className={`px-5 py-1 bg-bColor1/20 ${selectedSize === size?.title
//                                                     ? `${themeClasses.button} bg-mColorBase2`
//                                                     : " hover:bg-bColor1/30"
//                                                     } cursor-pointer transition-colors duration-300`}
//                                                 aria-label={`Select size ${size?.title}`}
//                                             >
//                                                 <span>{size?.title || ""}</span>
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )
//                             }

//                             {
//                                 selectedColor && availableSizesForSelectedColor?.length <= 0 && <p className='my-4' >No size available for this item</p>
//                             }

//                             {
//                                 !selectedColor && sizeAttributes?.length > 0 &&
//                                 <div className="mb-6 space-y-1.5">
//                                     <div className='flex items-center flex-wrap gap-2'>
//                                         {sizeAttributes?.filter((item: any) => item?.description !== "No Size")?.map(({ id, description }: any, idx: number) => (
//                                             <button
//                                                 key={idx}
//                                                 onClick={() => handleSizeSelect(description, id)}
//                                                 className={`px-5 py-1 bg-bColor1/20 ${selectedSize === description
//                                                     ? `${themeClasses.button} bg-mColorBase2`
//                                                     : " hover:bg-bColor1/30"
//                                                     } cursor-pointer transition-colors duration-300`}
//                                                 aria-label={`Select size ${description}`}
//                                             >
//                                                 <span>{description}</span>
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                             }
//                         </div>

//                         {/* Cart and Wishlist Buttons */}
//                         <div className='w-fit mx-auto md:w-full bg-whiteCustom md:bg-transparent shadow-md md:shadow-none p-2 md:p-0 rounded-lg md:rounded-none fixed bottom-4 left-0 right-0 md:static z-20 flex items-center gap-2 mb-6'>
//                             <SecondaryButton
//                                 onClick={() => addToCartHandler(itemForCart)}
//                                 title="Add to Cart"
//                                 className="py-2 w-full md:w-56 uppercase border-2 border-transparent"
//                             />
//                             <div
//                                 onClick={() => toggleWishlist(itemForCart)}
//                                 className='py-2 border-2 border-bColor2 rounded-sm w-10 flex items-center justify-center cursor-pointer'
//                             >
//                                 {isInWishlist
//                                     ? <LuHeart size={20} fill='black' />
//                                     : <LuHeart size={20} />}
//                             </div>
//                         </div>

//                         {/* Tags with photo */}
//                         {photoTags && photoTags?.length > 0 && (
//                             <div className="flex items-center flex-wrap gap-6 my-6">
//                                 {photoTags?.map(({ title, photo_path }: any, index: number) => (
//                                     <div key={index} className='flex items-center gap-1.5'>
//                                         <div className='border border-black rounded-full'>
//                                             <Image src={photo_path} alt={title} width={50} height={50} className='h-12 w-12 rounded-full' />
//                                         </div>
//                                         <span
//                                             className={`text-sm uppercase rounded`}
//                                         >
//                                             {title}
//                                         </span>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}

//                         {/* Details Accordion */}
//                         <div className=''>
//                             <Accordion type="single" collapsible>
//                                 {processItems?.map(({ title: itemTitle, description, isHtml, deliverWay, deliverWayTitle, deliverWayDescription, deliverCar, deliverCarTitle, deliverCarDescription }, index) => (
//                                     <AccordionItem key={index} value={`item-${index}`}>
//                                         <AccordionTrigger>{itemTitle}</AccordionTrigger>
//                                         <AccordionContent>
//                                             <div className={`${itemTitle === "Details" ? "h-[350px]" : "h-fit"} overflow-y-auto`} >
//                                                 {deliverWay && (
//                                                     <div className='min-w-full h-full space-y-4'>
//                                                         <div className="flex items-center gap-4 w-full ">
//                                                             <div className='w-12'>
//                                                                 <Image
//                                                                     src={deliverWay}
//                                                                     alt={itemTitle}
//                                                                     loading="lazy"
//                                                                     height={800}
//                                                                     width={800}
//                                                                     className="w-full h-full object-cover rounded-md"
//                                                                 />
//                                                             </div>
//                                                             <div className='w-full'>
//                                                                 <h3 className="text-base font-semibold">{deliverWayTitle}</h3>
//                                                                 <p className="text-sm">{deliverWayDescription}</p>
//                                                             </div>
//                                                         </div>

//                                                         <div className="flex items-center gap-4 w-full">
//                                                             <div className='w-12'>
//                                                                 <Image
//                                                                     src={deliverCar}
//                                                                     alt={itemTitle}
//                                                                     loading="lazy"
//                                                                     height={800}
//                                                                     width={800}
//                                                                     className="w-full h-full object-cover rounded-md"
//                                                                 />
//                                                             </div>
//                                                             <div className='w-full'>
//                                                                 <h3 className="text-base font-semibold  ">{deliverCarTitle}</h3>
//                                                                 <p className="text-sm">{deliverCarDescription}</p>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 )}
//                                                 <div
//                                                     className="w-full"
//                                                 >
//                                                     {
//                                                         description && (isHtml ? (
//                                                             <SafeHtmlContent htmlContent={description} />
//                                                             //  <div className="min-w-full"><SafeHtmlContent htmlContent={description} /></div>
//                                                         ) : <p>{description}</p>)
//                                                     }
//                                                 </div>
//                                             </div>
//                                         </AccordionContent>
//                                     </AccordionItem>
//                                 ))}
//                             </Accordion>
//                         </div>

//                         {/* Member Deals */}
//                         <div className='relative'>
//                             <Image
//                                 src={images.ProductDetailsBg}
//                                 alt="Product Details Background"
//                                 className="w-full h-28 md:h-44 object-cover rounded-md"
//                             />
//                             <div className={`absolute inset-0 flex items-center justify-center gap-4 rounded-md p-4 md:p-2 ${selected === "makeup"
//                                 ? "bg-mBtnBg/80 text-blackCustom"
//                                 : "bg-sBtnBg/80 text-whiteCustom"
//                                 }`}>
//                                 <div>
//                                     <Image
//                                         src={icons.HandshakeHeart}
//                                         alt="Handshake Heart"
//                                         className="w-20 h-20"
//                                     />
//                                 </div>
//                                 <div>
//                                     <h3 className='text-base font-semibold md:sub-heading'>
//                                         Exclusive Member Deals: Grab Now!
//                                     </h3>
//                                     <p className='text-xs md:text-base'>
//                                         Spend over ৳5000 and unlock exclusive member benefits.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className='space-y-16'>
//                 <Reviews />
//                 <ProductsWillLove />
//             </div>
//         </div>
//     );
// };
// export default ProductDetailsPage;