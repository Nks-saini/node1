//create api
var http = require('http')
var data = [
    {name : "nitin" , age :"24",email:"saininks@2013.com"},
    {name : "ravi" , age :"21",email:"ravi@2013.com"},
    {name : "vini" , age :"23",email:"vini@2013.com"},
    {name : "raaz" , age :"28",email:"raaz@2013.com"}
]



var data2 = {
    "status": "success",
    "seo": {
    "description": "Buy Ethnic Wear - Latest collection of ethnic wear online for women. Shop designer ethnic dresses, jewelry &  footwear in various patterns at best prices. Cod Available 14 day returns Free Shipping.",
    "hreflang": "en-us",
    "keywords": "Online shopping, Online shopping india, Women sarees, Women jewellery, Online Fashion shopping, shopping in budget, Fashion shopping, Personal Care products, home-made Ayurvedic products, Organic personal care",
    "icon": "https://cdn.tjori.com/media/favicon/default/favicon-tjori.ico",
    "p:domain_verify": "d06e960ac6a4266b0f3f2c3b7fc52e8f",
    "title": "Ethnic Wear - Buy Ethnic Jewelry & Footwear For Women Online | Latest Designs",
    "og": {
    "phone_number": "011-33138040",
    "description": "Tjori is one of best Online Shopping for traditional women ethnic fashion, jewellery, footwear, Accessories, Home & Decor, Bags and home-made Ayurvedic and Organic personal care at affordable price in india with Free Delivery* Cod* 14 Days Return*.",
    "locale": "en_US",
    "image": "https://mcdn.tjori.com/images/image/logo500x500.jpg",
    "postal-code": "110030",
    "country-name": "India",
    "title": "Online Shopping for Women Ethnic Wear, Jewelelry and Personal Care - Tjori",
    "url": "https://www.tjori.com/",
    "region": "Delhi",
    "locality": "New Delhi",
    "longitude": "77.159679",
    "street-address": "Kh-356,357. Basement, MG Road Sultanpur, Near Sultanpur Metro Station",
    "latitude": "28.498484",
    "type": "website",
    "email": "support@tjori.com"
    },
    "alternate": "https://www.tjori.com/",
    "manifest": "site.webmanifest",
    "google-site-verification": "JJDuklxPO9s5qfRnJQSCToS67YaWfnWvGwCh6xMV99M",
    "canonical": "https://www.tjori.com/"
    },
    "message": "check data key",
    "meta": {
    "max_pages": 40,
    "url": "/",
    "type": "homepage",
    "limit": 10,
    "breadcrumbs": [
    {
    "copy": "Home",
    "slug": "/",
    "hyperlink": false
    }
    ],
    "geo": "INR",
    "page": 1
    },
    "data": [
    {
    "data": [
    {
    "name": "Clearance Sale",
    "slug": "/sale/",
    "horizontal_menu_icon_cdn": "https://tjori.gumlet.com/categories/horizontal-icon/sale-horizontal-icon2020-05-05-14:43:48.981658.png",
    "type": "category-round-menu"
    },
    {
    "name": "Raksha",
    "slug": "/covid-19-essential-products/",
    "horizontal_menu_icon_cdn": "https://tjori.gumlet.com/categories/horizontal-icon/covid-19-essential-products-horizontal-icon2020-06-08-15:09:43.509079.jpg",
    "type": "category-round-menu"
    },
    {
    "name": "Apparel",
    "slug": "/apparel/",
    "horizontal_menu_icon_cdn": "https://tjori.gumlet.com/categories/horizontal-icon/apparel-horizontal-icon2020-05-05-18:10:53.220340.png",
    "type": "category-round-menu"
    },
    {
    "name": "Wellness",
    "slug": "/living/",
    "horizontal_menu_icon_cdn": "https://tjori.gumlet.com/categories/horizontal-icon/living-horizontal-icon2020-05-05-18:11:49.634354.png",
    "type": "category-round-menu"
    },
    {
    "name": "Footwear",
    "slug": "/footwear/",
    "horizontal_menu_icon_cdn": "https://tjori.gumlet.com/categories/horizontal-icon/footwear-horizontal-icon2020-05-05-14:44:41.241566.png",
    "type": "category-round-menu"
    },
    {
    "name": "Men",
    "slug": "/men/",
    "horizontal_menu_icon_cdn": "https://tjori.gumlet.com/categories/horizontal-icon/men-horizontal-icon2020-05-05-14:43:03.769453.png",
    "type": "category-round-menu"
    },
    {
    "name": "Jewelry",
    "slug": "/jewelry/",
    "horizontal_menu_icon_cdn": "https://tjori.gumlet.com/categories/horizontal-icon/jewelry-horizontal-icon2020-05-05-14:44:53.388695.png",
    "type": "category-round-menu"
    },
    {
    "name": "Mother & Child",
    "slug": "/mother-child/",
    "horizontal_menu_icon_cdn": "https://tjori.gumlet.com/categories/horizontal-icon/mother-child-horizontal-icon2020-05-09-21:47:23.170427.png",
    "type": "category-round-menu"
    },
    {
    "name": "Home & Decor",
    "slug": "/home/",
    "horizontal_menu_icon_cdn": "https://tjori.gumlet.com/categories/horizontal-icon/home-horizontal-icon2020-05-05-14:44:31.018423.png",
    "type": "category-round-menu"
    },
    {
    "name": "Bags",
    "slug": "/bags-totes-slings-clutches/",
    "horizontal_menu_icon_cdn": "https://tjori.gumlet.com/categories/horizontal-icon/bags-totes-slings-clutches-horizontal-icon2020-05-05-14:43:38.422293.png",
    "type": "category-round-menu"
    }
    ],
    "type": "horizontal-slider"
    },
    {
    "data": [
    {
    "creative_text": "Download App Now",
    "homepage_banner_cdn_url": "https://tjori.gumlet.com/homepage/ribbon/bannner/download-app-now-2020-04-29-00:53:45.030043.jpg",
    "homepage_redirect_link": "http://onelink.to/mgrecf",
    "homepage_type": "strip",
    "elements": []
    }
    ],
    "type": "sub-banners"
    },
    {
    "data": [
    {
    "copy": "Raksha",
    "link": "https://www.tjori.com/living/essentials/?utm_capaign=homepage%20banner%201%20Raksha",
    "banner_cdn": "https://tjori.gumlet.com/homepagebanner/mobile/raksha-2020-06-08-14:54:16.715666.jpg",
    "desktop_banner_cdn": "https://tjori.gumlet.com/homepagebanner/desktop/raksha-2020-06-08-14:54:17.969598.jpg",
    "type": "banner"
    },
    {
    "copy": "Masks",
    "link": "https://www.tjori.com/living/3-ply-face-mask/?utm_capaign=HP3_Masks",
    "banner_cdn": "https://tjori.gumlet.com/homepagebanner/mobile/masks-2020-06-08-11:03:49.173565.jpg",
    "desktop_banner_cdn": "https://tjori.gumlet.com/homepagebanner/desktop/masks-2020-06-08-11:03:51.514995.jpg",
    "type": "banner"
    },
    {
    "copy": "Sanitisers - New",
    "link": "https://www.tjori.com/living/hand-sanitizer/?utm_capaign=HP4_Sanitisers",
    "banner_cdn": "https://tjori.gumlet.com/homepagebanner/mobile/sanitisers - new-2020-06-08-14:56:20.478131.jpg",
    "desktop_banner_cdn": "https://tjori.gumlet.com/homepagebanner/desktop/sanitisers - new-2020-06-08-14:56:20.776471.jpg",
    "type": "banner"
    },
    {
    "copy": "Personal Grooming",
    "link": "https://www.tjori.com/living/personal-grooming-essentials/?utm_capaign=HP5_PersonalGrooming",
    "banner_cdn": "https://tjori.gumlet.com/homepagebanner/mobile/personal grooming-2020-06-08-15:30:07.278592.jpg",
    "desktop_banner_cdn": "https://tjori.gumlet.com/homepagebanner/desktop/personal grooming-2020-06-08-15:30:08.906905.jpg",
    "type": "banner"
    }
    ],
    "type": "carousal"
    },
    {
    "data": [],
    "type": "sub-banners"
    },
    {
    "name": "Sanitize & Stay Safe",
    "type": "collection",
    "slug": "/living/hand-sanitizer/",
    "cover_image": "https://tjori.gumlet.com/images/image/416892-2020-06-03-15:42:05.786724-image.jpg",
    "cover_image_desktop": "https://tjori.gumlet.com/subcategories/cover/hand-sanitizer-cover-image2020-06-08-15:31:56.990690.jpg",
    "subtitle": "Gel & Liquid Based Hand Sanitizers",
    "data": [
    {
    "id": 88508,
    "name": "Advanced Sanitiser Spray - 500 ML",
    "slug": "/p/sanitiser-spray-500-ml/88508/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcc-01-43-small-image2020-06-12-15:45:43.082586.png",
    "special_price_usd": "10.0000",
    "special_price": "250.0000",
    "price": "250.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 0,
    "type": "product-thumbnail",
    "sku": "TJ-PCC-01-43",
    "stockstatus": true
    },
    {
    "id": 90495,
    "name": "Set of 3: Advanced Gel Based Hand Sanitiser - 200 ML",
    "slug": "/p/set-of-3-advanced-gel-based-hand-sanitiser-200-ml/90495/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcc-01-67-small-image2020-06-13-12:56:53.299118.png",
    "special_price_usd": "10.0000",
    "special_price": "220.0000",
    "price": "300.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 27,
    "type": "product-thumbnail",
    "sku": "TJ-PCC-01-67",
    "stockstatus": true
    },
    {
    "id": 90496,
    "name": "Set of 5: Advanced Gel Based Hand Sanitiser - 200 ML",
    "slug": "/p/set-of-5-advanced-gel-based-hand-sanitiser-200-ml/90496/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcc-01-68-small-image2020-06-13-13:04:35.992465.png",
    "special_price_usd": "10.0000",
    "special_price": "350.0000",
    "price": "500.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 31,
    "type": "product-thumbnail",
    "sku": "TJ-PCC-01-68",
    "stockstatus": true
    },
    {
    "id": 90497,
    "name": "Set of 10: Advanced Gel Based Hand Sanitiser - 200 ML",
    "slug": "/p/set-of-10-advanced-gel-based-hand-sanitiser-200-ml/90497/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcc-01-69-small-image2020-06-13-13:11:18.305043.png",
    "special_price_usd": "20.0000",
    "special_price": "650.0000",
    "price": "1000.0000",
    "price_usd": "20.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 35,
    "type": "product-thumbnail",
    "sku": "TJ-PCC-01-69",
    "stockstatus": true
    },
    {
    "id": 90434,
    "name": "Set of 2: Advanced Sanitiser Spray - 500 ML",
    "slug": "/p/set-of-2-advanced-sanitiser-spray-500-ml/90434/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcc-01-65-small-image2020-06-11-22:51:50.271122.png",
    "special_price_usd": "10.0000",
    "special_price": "450.0000",
    "price": "500.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 10,
    "type": "product-thumbnail",
    "sku": "TJ-PCC-01-65",
    "stockstatus": true
    },
    {
    "id": 90433,
    "name": "Set of 3: Advanced Sanitiser Spray - 500 ML",
    "slug": "/p/set-of-3-advanced-sanitiser-spray-500-ml/90433/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcc-01-66-small-image2020-06-12-15:01:41.552775.png",
    "special_price_usd": "15.0000",
    "special_price": "650.0000",
    "price": "750.0000",
    "price_usd": "15.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 14,
    "type": "product-thumbnail",
    "sku": "TJ-PCC-01-66",
    "stockstatus": true
    }
    ],
    "pcount": 18,
    "widget": "subcategory",
    "craft_stories": "<p>Buy hand sanitizers that give you and your family round the clock protection. Stock up your quarantine essential with Tjori&#39;s hand sanitizers. Get your single peces as well as wholesale pieces and stay home with Tjori.</p>"
    },
    {
    "name": "Raksha Flagship 1.0",
    "type": "collection",
    "slug": "/living/3-ply-face-mask/",
    "cover_image": "https://tjori.gumlet.com/images/image/416891-2020-06-03-15:42:59.744229-image.jpg",
    "cover_image_desktop": "https://tjori.gumlet.com/subcategories/cover/3-ply-face-mask-cover-image2020-06-08-15:34:13.949942.jpg",
    "subtitle": "Designer Medical Grade N95 Masks",
    "data": [
    {
    "id": 90483,
    "name": "Shiv: Medical Grade N95 Black Clover Hand Block Print Cotto Washable Face mask",
    "slug": "/p/shiv-black-clover-hand-block-print-cotton-swasa-n95-washable-face-mask/90483/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcm-01-10-small-image2020-06-13-13:26:43.958899.jpg",
    "special_price_usd": "10.0000",
    "special_price": "349.0000",
    "price": "399.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 13,
    "type": "product-thumbnail",
    "sku": "TJ-PCM-01-10",
    "stockstatus": true
    },
    {
    "id": 90494,
    "name": "Mudit: Medical Grade N95 Dark Blue Hand Block Print Cotton Washable Face Mask",
    "slug": "/p/mudit-dark-blue-hand-block-print-cotton-swasa-n95-washable-face-mask/90494/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcm-01-21-small-image2020-06-13-13:26:43.362300.jpg",
    "special_price_usd": "10.0000",
    "special_price": "349.0000",
    "price": "399.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 13,
    "type": "product-thumbnail",
    "sku": "TJ-PCM-01-21",
    "stockstatus": true
    },
    {
    "id": 90492,
    "name": "Prashant: Medical Grade N95 Aqua Stripes Hand Block Print Cotton Washable Face mask",
    "slug": "/p/prashant-aqua-stripes-hand-block-print-cotton-swasa-n95-washable-face-mask/90492/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcm-01-19-small-image2020-06-11-17:51:40.562465.jpg",
    "special_price_usd": "10.0000",
    "special_price": "349.0000",
    "price": "399.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 13,
    "type": "product-thumbnail",
    "sku": "TJ-PCM-01-19",
    "stockstatus": true
    },
    {
    "id": 90491,
    "name": "Chetanya: Medical Grade N95 Musk Green Hand Block Print Cotton Washable Face mask",
    "slug": "/p/chetanya-musk-green-hand-block-print-cotton-swasa-n95-washable-face-mask/90491/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcm-01-18-small-image2020-06-12-12:55:37.991744.jpg",
    "special_price_usd": "10.0000",
    "special_price": "349.0000",
    "price": "399.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 13,
    "type": "product-thumbnail",
    "sku": "TJ-PCM-01-18",
    "stockstatus": true
    },
    {
    "id": 90484,
    "name": "Aditi: Medical Grade N95 Floral Hand Block Print Cotton Washable Face mask",
    "slug": "/p/aditi-floral-hand-block-print-cotton-swasa-n95-washable-face-mask/90484/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcm-01-11-small-image2020-06-12-19:26:44.260698.jpg",
    "special_price_usd": "10.0000",
    "special_price": "349.0000",
    "price": "399.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 13,
    "type": "product-thumbnail",
    "sku": "TJ-PCM-01-11",
    "stockstatus": true
    },
    {
    "id": 90489,
    "name": "Akanksha: Medical Grade N95 Pink Pattern Hand Block Print Cotton Washable Face mask",
    "slug": "/p/akanksha-pink-pattern-hand-block-print-cotton-swasa-n95-washable-face-mask/90489/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcm-01-16-small-image2020-06-11-14:59:21.855216.jpg",
    "special_price_usd": "10.0000",
    "special_price": "349.0000",
    "price": "399.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 13,
    "type": "product-thumbnail",
    "sku": "TJ-PCM-01-16",
    "stockstatus": true
    }
    ],
    "pcount": 11,
    "widget": "subcategory",
    "craft_stories": "<p>Buy your N95 Masks online and ensure that your family is safe. COVID-19 is a very serious concern all over the world as of now because even no cure has been found.</p>"
    },
    {
    "name": "Raksha C-Series",
    "type": "collection",
    "slug": "/living/raksha-c-series/",
    "cover_image": "https://tjori.gumlet.com/images/image/416954-2020-06-08-14:46:50.155938-image.jpg",
    "cover_image_desktop": "https://tjori.gumlet.com/subcategories/cover/raksha-c-series-cover-image2020-06-08-15:34:38.958662.jpg",
    "subtitle": "Casual Cloth Masks",
    "data": [
    {
    "id": 90430,
    "name": "Set of 2: Black Kalamkari Floral Kalamkari Washable Face Mask",
    "slug": "/p/set-of-2-black-kalamkari-floral-kalamkari-washable-face-mask/90430/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcm-01-08-small-image2020-06-11-15:09:25.228868.jpg",
    "special_price_usd": "10.0000",
    "special_price": "99.0000",
    "price": "149.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 34,
    "type": "product-thumbnail",
    "sku": "TJ-PCM-01-08",
    "stockstatus": true
    },
    {
    "id": 91118,
    "name": "Set Of 2: Azure Blue Ajrakh Print Cotton Washable Face Mask",
    "slug": "/p/set-of-2-azure-blue-ajrakh-print-cotton-washable-face-mask/91118/",
    "cdn_small_image": "https://tjori.gumlet.com/prod-images/TJ-PCM-01-22_1.jpg",
    "special_price_usd": "10.0000",
    "special_price": "100.0000",
    "price": "100.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 0,
    "type": "product-thumbnail",
    "sku": "TJ-PCM-01-22",
    "stockstatus": true
    },
    {
    "id": 91124,
    "name": "Set of 2: Teal Turquiose Ikat Print Cotton Washable Face Mask",
    "slug": "/p/set-of-2-teal-turquiose-ikat-print-cotton-washable-face-mask/91124/",
    "cdn_small_image": "https://tjori.gumlet.com/prod-images/TJ-PCM-01-28_1.jpg",
    "special_price_usd": "10.0000",
    "special_price": "100.0000",
    "price": "100.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 0,
    "type": "product-thumbnail",
    "sku": "TJ-PCM-01-28",
    "stockstatus": true
    },
    {
    "id": 89811,
    "name": "Set of 2: Maroon Cotton Washable Face Mask",
    "slug": "/p/set-of-2-maroon-cotton-washable-face-mask/89811/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcm-01-01-small-image2020-06-11-15:24:31.609420.jpg",
    "special_price_usd": "10.0000",
    "special_price": "100.0000",
    "price": "100.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 0,
    "type": "product-thumbnail",
    "sku": "TJ-PCM-01-01",
    "stockstatus": true
    },
    {
    "id": 89815,
    "name": "Set of 2: Scarlet Oyster Blue Floral Kalamkari Washable Face Mask",
    "slug": "/p/set-of-2-scarlet-oyster-blue-floral-kalamkari-washable-face-mask/89815/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcm-01-05-small-image2020-06-11-15:09:56.726843.jpg",
    "special_price_usd": "10.0000",
    "special_price": "99.0000",
    "price": "149.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 34,
    "type": "product-thumbnail",
    "sku": "TJ-PCM-01-05",
    "stockstatus": true
    },
    {
    "id": 90429,
    "name": "Set of 2: Black Kalamkari Floral Kalamkari Washable Face Mask",
    "slug": "/p/set-of-2-black-kalamkari-floral-kalamkari-washable-face-mask/90429/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcm-01-07-small-image2020-06-11-15:09:35.307583.jpg",
    "special_price_usd": "10.0000",
    "special_price": "99.0000",
    "price": "149.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 34,
    "type": "product-thumbnail",
    "sku": "TJ-PCM-01-07",
    "stockstatus": true
    }
    ],
    "pcount": 25,
    "widget": "subcategory",
    "craft_stories": ""
    },
    {
    "name": "Personal Grooming Essentials",
    "type": "collection",
    "slug": "/living/personal-grooming-essentials/",
    "cover_image": "https://tjori.gumlet.com/images/image/416888-2020-04-30-00:20:48.407486-image.jpg",
    "cover_image_desktop": "https://tjori.gumlet.com/subcategories/cover/personal-grooming-essentials-cover-image2020-05-14-14:39:08.505055.jpg",
    "subtitle": "DIY Hair Cut, Waxing, Pedicure & Manicure Kits",
    "data": [
    {
    "id": 90431,
    "name": "Premium Pedicure kit",
    "slug": "/p/premium-pedicure-kit/90431/",
    "cdn_small_image": "https://tjori.gumlet.com/prod-images/TJ-PCG-01-40_1.jpg",
    "special_price_usd": "100.0000",
    "special_price": "6999.0000",
    "price": "6999.0000",
    "price_usd": "100.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 0,
    "type": "product-thumbnail",
    "sku": "TJ-PCG-01-40",
    "stockstatus": true
    },
    {
    "id": 89975,
    "name": "Metal Foot Scraper",
    "slug": "/p/metal-foot-scraper/89975/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcg-01-39-small-image2020-05-31-15:27:36.081786.jpg",
    "special_price_usd": "10.0000",
    "special_price": "149.0000",
    "price": "149.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 0,
    "type": "product-thumbnail",
    "sku": "TJ-PCG-01-39",
    "stockstatus": true
    },
    {
    "id": 89974,
    "name": "Wooden Foot Scraper",
    "slug": "/p/wooden-foot-scraper/89974/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcg-01-38-small-image2020-06-08-16:04:02.997537.jpg",
    "special_price_usd": "10.0000",
    "special_price": "249.0000",
    "price": "249.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 0,
    "type": "product-thumbnail",
    "sku": "TJ-PCG-01-38",
    "stockstatus": true
    },
    {
    "id": 89973,
    "name": "Oxygen Bleach",
    "slug": "/p/oxygen-bleach/89973/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pcg-01-37-small-image2020-05-14-14:19:10.125933.jpg",
    "special_price_usd": "10.0000",
    "special_price": "225.0000",
    "price": "225.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 0,
    "type": "product-thumbnail",
    "sku": "TJ-PCG-01-37",
    "stockstatus": true
    },
    {
    "id": 89565,
    "name": "Hair Cutting Clips: Set of 4",
    "slug": "/p/hair-cutting-clips-set-of-4/89565/",
    "cdn_small_image": "https://tjori.gumlet.com/media-image/Collections/PCG-01/310X455/TJ-PCG-01-30_1.jpg",
    "special_price_usd": "10.0000",
    "special_price": "99.0000",
    "price": "99.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 0,
    "type": "product-thumbnail",
    "sku": "TJ-PCG-01-30",
    "stockstatus": true
    },
    {
    "id": 90432,
    "name": "Pedicure kit",
    "slug": "/p/pedicure-kit/90432/",
    "cdn_small_image": "https://tjori.gumlet.com/prod-images/TJ-PCG-01-41_1.jpg",
    "special_price_usd": "20.0000",
    "special_price": "999.0000",
    "price": "999.0000",
    "price_usd": "20.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 0,
    "type": "product-thumbnail",
    "sku": "TJ-PCG-01-41",
    "stockstatus": true
    }
    ],
    "pcount": 39,
    "widget": "subcategory",
    "craft_stories": "<p>Here at Tjori we offer you your very own perosonal grooming kit, for you to save your time money and tiring up and down to the parlour on weekends. Made with the finest quality and utmost care for you to pamper yourself and bringing your salon home by just a click.</p>"
    },
    {
    "name": "IRIS",
    "type": "collection",
    "slug": "/apparel/iris/",
    "cover_image": "https://mcdn.tjori.com/images/image/416875-2020-03-20-20:47:04.346084-image.jpg",
    "cover_image_desktop": "https://tjori.gumlet.com/subcategories/cover/iris-cover-image2020-06-09-14:03:30.183374.jpg",
    "subtitle": "Hand Block Printed Cotton Apparel",
    "data": [
    {
    "id": 88278,
    "name": "Muse Brown Quatrefoil Hand-Block Printed  Cotton  Halter Tie-up Neck Pleated Flared Dress",
    "slug": "/p/brown-cotton-hand-block-printed-halter-neck-flared-dress/88278/",
    "cdn_small_image": "https://tjori.gumlet.com/media-image/poonam/MK-239/310X455/TJ-MK-239-65_1.jpg",
    "special_price_usd": "30.0000",
    "special_price": "1139.0000",
    "price": "1899.0000",
    "price_usd": "30.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-239-65",
    "stockstatus": true
    },
    {
    "id": 88244,
    "name": "Lilac Floral Stripes Hand-Block Printed A line Cotton Kurta",
    "slug": "/p/pink-hand-block-printed-a-line-cotton-kurta/88244/",
    "cdn_small_image": "https://tjori.gumlet.com/media-image/poonam/MK-239/310X455/TJ-MK-239-31_1.jpg",
    "special_price_usd": "30.0000",
    "special_price": "1139.0000",
    "price": "1899.0000",
    "price_usd": "30.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-239-31",
    "stockstatus": true
    },
    {
    "id": 88241,
    "name": "Set of 2: Lilac Floral Hand-Block Printed Cotton Slip with White Palazzo",
    "slug": "/p/set-of-2-pink-hand-block-printed-cotton-slip-with-white-palazzo/88241/",
    "cdn_small_image": "https://tjori.gumlet.com/media-image/poonam/MK-239/310X455/TJ-MK-239-28_1.jpg",
    "special_price_usd": "40.0000",
    "special_price": "1559.0000",
    "price": "2599.0000",
    "price_usd": "40.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-239-28",
    "stockstatus": true
    },
    {
    "id": 88242,
    "name": "Set of 2: Lilac Floral Hand-Block Printed Cotton Slip with Lilac Stripes Handblock Printed Flared Palazzo",
    "slug": "/p/set-of-2-pink-hand-block-printed-cotton-slip-with-pink-printed-palazzo/88242/",
    "cdn_small_image": "https://tjori.gumlet.com/media-image/poonam/MK-239/310X455/TJ-MK-239-29_1.jpg",
    "special_price_usd": "40.0000",
    "special_price": "1649.0000",
    "price": "2749.0000",
    "price_usd": "50.0000",
    "percent_discount_usd": 20,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-239-29",
    "stockstatus": true
    },
    {
    "id": 88257,
    "name": "Lilac Stripes Hand-Block Printed Cotton Flared Knee Length Dress",
    "slug": "/p/amber-blue-hand-block-printed-cotton-flared-dress/88257/",
    "cdn_small_image": "https://tjori.gumlet.com/media-image/poonam/MK-239/310X455/TJ-MK-239-44_1.jpg",
    "special_price_usd": "30.0000",
    "special_price": "1139.0000",
    "price": "1899.0000",
    "price_usd": "30.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-239-44",
    "stockstatus": true
    },
    {
    "id": 88248,
    "name": "Set of 2: Lilac Asymmetrical Hand-Block Printed Cotton Kurta with Lilac Floral Block Printed Cotton Dhoti",
    "slug": "/p/set-of-2-salmon-pink-asymmetrical-hand-block-printed-cotton-kurta-with-pink-block-printed-cotton-dhoti/88248/",
    "cdn_small_image": "https://tjori.gumlet.com/media-image/poonam/MK-239/310X455/TJ-MK-239-35_1.jpg",
    "special_price_usd": "40.0000",
    "special_price": "1919.0000",
    "price": "3199.0000",
    "price_usd": "50.0000",
    "percent_discount_usd": 20,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-239-35",
    "stockstatus": true
    }
    ],
    "pcount": 79,
    "widget": "subcategory",
    "craft_stories": "<p>An outfit for every occassion. Find your inner diva and let it out with our IRIS cllection which has ethnic wear inspired for the women of today and tommorrow, simple yet elegant.</p>"
    },
    {
    "name": "Buy Any 3 & Get 1000 Off",
    "type": "collection",
    "slug": "/apparel/the-summer-bazzar/",
    "cover_image": "https://tjori.gumlet.com/images/image/416899-2020-06-09-13:59:30.791215-image.jpg",
    "cover_image_desktop": "https://tjori.gumlet.com/subcategories/cover/the-summer-bazzar-cover-image2020-06-09-13:59:30.540518.jpg",
    "subtitle": "Use Code: FLEA1000",
    "data": [
    {
    "id": 91115,
    "name": "Set of 3: Violet Purple Banarsi Suit with Magenta Banarsi Bottoms and Dupatta",
    "slug": "/p/set-of-3-violet-purple-banarsi-suit-with-magenta-banarsi-bottoms-and-dupatta/91115/",
    "cdn_small_image": "https://tjori.gumlet.com/prod-images/TJ-MK-LKD-24-29_1.jpg",
    "special_price_usd": "60.0000",
    "special_price": "3399.0000",
    "price": "6798.0000",
    "price_usd": "100.0000",
    "percent_discount_usd": 40,
    "percent_discount_inr": 50,
    "type": "product-thumbnail",
    "sku": "TJ-MK-LKD-24-29",
    "stockstatus": true
    },
    {
    "id": 91114,
    "name": "Set of 3: Violet Purple Banarsi Suit with Yellow Banarsi Bottoms and Dupatta",
    "slug": "/p/set-of-3-violet-purple-banarsi-suit-with-yellow-banarsi-bottoms-and-dupatta/91114/",
    "cdn_small_image": "https://tjori.gumlet.com/prod-images/TJ-MK-LKD-24-28_1.jpg",
    "special_price_usd": "90.0000",
    "special_price": "5999.0000",
    "price": "11998.0000",
    "price_usd": "170.0000",
    "percent_discount_usd": 48,
    "percent_discount_inr": 50,
    "type": "product-thumbnail",
    "sku": "TJ-MK-LKD-24-28",
    "stockstatus": true
    },
    {
    "id": 91117,
    "name": "Set of 3: White Chikankari Gold Suit with Bottoms and Dupatta",
    "slug": "/p/set-of-3-white-chikankari-gold-suit-with-bottoms-and-dupatta/91117/",
    "cdn_small_image": "https://tjori.gumlet.com/prod-images/TJ-MK-LKD-24-31_1.jpg",
    "special_price_usd": "70.0000",
    "special_price": "4199.0000",
    "price": "8398.0000",
    "price_usd": "120.0000",
    "percent_discount_usd": 42,
    "percent_discount_inr": 50,
    "type": "product-thumbnail",
    "sku": "TJ-MK-LKD-24-31",
    "stockstatus": true
    },
    {
    "id": 91116,
    "name": "Set of 3: White Floral Cottom Suit with Bottoms and White Net Dupatta",
    "slug": "/p/set-of-3-white-floral-cottom-suit-with-bottoms-and-white-net-dupatta/91116/",
    "cdn_small_image": "https://tjori.gumlet.com/prod-images/TJ-MK-LKD-24-30_1.jpg",
    "special_price_usd": "50.0000",
    "special_price": "3199.0000",
    "price": "6398.0000",
    "price_usd": "100.0000",
    "percent_discount_usd": 50,
    "percent_discount_inr": 50,
    "type": "product-thumbnail",
    "sku": "TJ-MK-LKD-24-30",
    "stockstatus": true
    },
    {
    "id": 91112,
    "name": "Set of 3: White Chikankari Suit with Bottom and White Dupatta",
    "slug": "/p/set-of-3-white-chikankari-suit-with-bottom-and-white-dupatta/91112/",
    "cdn_small_image": "https://tjori.gumlet.com/prod-images/TJ-MK-LKD-24-26_1.jpg",
    "special_price_usd": "60.0000",
    "special_price": "3499.0000",
    "price": "6998.0000",
    "price_usd": "100.0000",
    "percent_discount_usd": 40,
    "percent_discount_inr": 50,
    "type": "product-thumbnail",
    "sku": "TJ-MK-LKD-24-26",
    "stockstatus": true
    },
    {
    "id": 91113,
    "name": "Set of 3: White Chikankari Suit with Bottom and White Dupatta",
    "slug": "/p/set-of-3-white-chikankari-suit-with-bottom-and-white-dupatta/91113/",
    "cdn_small_image": "https://tjori.gumlet.com/prod-images/TJ-MK-LKD-24-27_1.jpg",
    "special_price_usd": "70.0000",
    "special_price": "4199.0000",
    "price": "8398.0000",
    "price_usd": "120.0000",
    "percent_discount_usd": 42,
    "percent_discount_inr": 50,
    "type": "product-thumbnail",
    "sku": "TJ-MK-LKD-24-27",
    "stockstatus": true
    }
    ],
    "pcount": 1441,
    "widget": "subcategory",
    "craft_stories": ""
    },
    {
    "name": "Saar",
    "type": "collection",
    "slug": "/apparel/saar-spring-summer-2020/",
    "cover_image": "https://mcdn.tjori.com/images/image/416865-2020-03-09-19:31:51.018302-image.png",
    "cover_image_desktop": "https://tjori.gumlet.com/subcategories/cover/saar-spring-summer-2020-cover-image2020-06-09-14:04:14.881163.jpg",
    "subtitle": "Ideal Summer Wear",
    "data": [
    {
    "id": 87732,
    "name": "Blue Plain Cotton  Tasseled  Anarkali",
    "slug": "/p/blue-plain-cotton-kota-anarkali/87732/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-mk-238-40-small-image2020-05-12-18:35:06.999623.jpg",
    "special_price_usd": "30.0000",
    "special_price": "1109.0000",
    "price": "1849.0000",
    "price_usd": "30.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-238-40",
    "stockstatus": true
    },
    {
    "id": 87730,
    "name": "Set of 3: Blue Kota Hand-Block Printed kurta , Blue Cotton Pallazo Paired with Embroidered Net Dupatta",
    "slug": "/p/set-of-3-blue-cotton-kota-kurta-with-cotton-pallazo-and-dupatta/87730/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-mk-238-38-small-image2020-05-07-18:52:43.352126.jpg",
    "special_price_usd": "50.0000",
    "special_price": "2789.0000",
    "price": "4649.0000",
    "price_usd": "70.0000",
    "percent_discount_usd": 29,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-238-38",
    "stockstatus": true
    },
    {
    "id": 87754,
    "name": "Set of 3: Light Pink Kalidar Cotton Kurta with Cotton Chooridar and  Hand-Block Printed Kota Dupatta",
    "slug": "/p/set-of-3-light-pink-kalidar-kota-kurti-with-cotton-chooridar-and-kota-print-dupatta/87754/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-mk-238-62-small-image2020-04-09-15:49:19.012270.jpg",
    "special_price_usd": "50.0000",
    "special_price": "2699.0000",
    "price": "4499.0000",
    "price_usd": "70.0000",
    "percent_discount_usd": 29,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-238-62",
    "stockstatus": true
    },
    {
    "id": 87693,
    "name": "Light Pink Cotton Slip",
    "slug": "/p/light-pink-cotton-slip/87693/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-mk-238-01-small-image2020-05-15-21:07:16.628875.jpg",
    "special_price_usd": "20.0000",
    "special_price": "629.0000",
    "price": "1049.0000",
    "price_usd": "20.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-238-01",
    "stockstatus": true
    },
    {
    "id": 87740,
    "name": "Light Green Cotton Slip Kurta",
    "slug": "/p/light-green-cotton-slip-kurta/87740/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-mk-238-48-small-image2020-06-12-19:51:50.933073.jpg",
    "special_price_usd": "20.0000",
    "special_price": "749.0000",
    "price": "1249.0000",
    "price_usd": "30.0000",
    "percent_discount_usd": 34,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-238-48",
    "stockstatus": true
    },
    {
    "id": 87734,
    "name": "Blue Kota Hand-Block Printed Jacket",
    "slug": "/p/blue-cotton-kota-print-jacket/87734/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-mk-238-42-small-image2020-05-07-22:19:06.654682.jpg",
    "special_price_usd": "20.0000",
    "special_price": "959.0000",
    "price": "1599.0000",
    "price_usd": "30.0000",
    "percent_discount_usd": 34,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-238-42",
    "stockstatus": true
    }
    ],
    "pcount": 72,
    "widget": "subcategory",
    "craft_stories": "<p>Add an oomph to your wardrobe this summer and flaunt the traditional motifs from all over the globe with a trendy touch and slay your way. Made with the most premium quality of fabric that not only looks good but also feels good. Available in beautiful pastel shades.</p>"
    },
    {
    "name": "Saiya",
    "type": "collection",
    "slug": "/apparel/saiya/",
    "cover_image": "https://mcdn.tjori.com/images/image/416884-2020-04-10-00:33:46.409630-image.jpg",
    "cover_image_desktop": "https://tjori.gumlet.com/subcategories/cover/saiya-cover-image2020-06-08-15:38:27.632047.jpg",
    "subtitle": "Handblock Printed Cotton Silhouette",
    "data": [
    {
    "id": 88420,
    "name": "Irvin Plain Bottle Green Cotton Dhoti",
    "slug": "/p/irvin-plain-bottle-green-cotton-dhoti/88420/",
    "cdn_small_image": "https://tjori.gumlet.com/media-image/poonam/MK-240/310X455/TJ-MK-240-14_1.jpg",
    "special_price_usd": "20.0000",
    "special_price": "779.0000",
    "price": "1299.0000",
    "price_usd": "30.0000",
    "percent_discount_usd": 34,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-240-14",
    "stockstatus": true
    },
    {
    "id": 88465,
    "name": "Irvin Plain Bottle Green Kota Slip",
    "slug": "/p/irvin-plain-bottle-green-kota-slip/88465/",
    "cdn_small_image": "https://tjori.gumlet.com/media-image/poonam/MK-240/310X455/TJ-MK-240-59_1.jpg",
    "special_price_usd": "20.0000",
    "special_price": "779.0000",
    "price": "1299.0000",
    "price_usd": "30.0000",
    "percent_discount_usd": 34,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-240-59",
    "stockstatus": true
    },
    {
    "id": 88456,
    "name": "Kanak Beige Plain Cotton Dhoti",
    "slug": "/p/kanak-beige-plain-cotton-dhoti/88456/",
    "cdn_small_image": "https://tjori.gumlet.com/media-image/poonam/MK-240/310X455/TJ-MK-240-50_1.jpg",
    "special_price_usd": "20.0000",
    "special_price": "779.0000",
    "price": "1299.0000",
    "price_usd": "30.0000",
    "percent_discount_usd": 34,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-240-50",
    "stockstatus": true
    },
    {
    "id": 88485,
    "name": "Kanak Beige Plain Round Neck Straight Fit Kota Bordered Cotton Kurta",
    "slug": "/p/kanak-beige-plain-round-neck-straight-fit-kota-bordered-cotton-kurta/88485/",
    "cdn_small_image": "https://tjori.gumlet.com/media-image/poonam/MK-240/310X455/TJ-MK-240-79_1.jpg",
    "special_price_usd": "30.0000",
    "special_price": "839.0000",
    "price": "1399.0000",
    "price_usd": "30.0000",
    "percent_discount_usd": 0,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-240-79",
    "stockstatus": true
    },
    {
    "id": 88482,
    "name": "Kanak Beige Plain Round Neck Gathered Tie Up Top",
    "slug": "/p/kanak-beige-plain-round-neck-gathered-tie-up-top/88482/",
    "cdn_small_image": "https://tjori.gumlet.com/media-image/poonam/MK-240/310X455/TJ-MK-240-76_1.jpg",
    "special_price_usd": "20.0000",
    "special_price": "779.0000",
    "price": "1299.0000",
    "price_usd": "30.0000",
    "percent_discount_usd": 34,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-240-76",
    "stockstatus": true
    },
    {
    "id": 88429,
    "name": "Gul Pink Plain Flared Cotton Palazzo",
    "slug": "/p/gul-pink-plain-flared-cotton-palazzo/88429/",
    "cdn_small_image": "https://tjori.gumlet.com/media-image/poonam/MK-240/310X455/TJ-MK-240-23_1.jpg",
    "special_price_usd": "20.0000",
    "special_price": "779.0000",
    "price": "1299.0000",
    "price_usd": "30.0000",
    "percent_discount_usd": 34,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MK-240-23",
    "stockstatus": true
    }
    ],
    "pcount": 79,
    "widget": "subcategory",
    "craft_stories": ""
    },
    {
    "name": "Rozana",
    "type": "collection",
    "slug": "/footwear/rozana/",
    "cover_image": "https://mcdn.tjori.com/images/image/416813-2020-03-12-13:09:51.747790-image.jpg",
    "cover_image_desktop": "https://tjori.gumlet.com/subcategories/cover/rozana-cover-image2020-06-08-15:39:46.392238.jpg",
    "subtitle": "",
    "data": [
    {
    "id": 86556,
    "name": "White Kali Braided Block Heels",
    "slug": "/p/white-kali-braided-block-heels/86556/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-kc-97-12-small-image2020-05-17-20:13:57.350962.jpg",
    "special_price_usd": "30.0000",
    "special_price": "1250.0000",
    "price": "2499.0000",
    "price_usd": "40.0000",
    "percent_discount_usd": 25,
    "percent_discount_inr": 50,
    "type": "product-thumbnail",
    "sku": "TJ-KC-97-12",
    "stockstatus": true
    },
    {
    "id": 86553,
    "name": "Black Chandini Braided Block Heels",
    "slug": "/p/black-chandini-braided-block-heels/86553/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-kc-97-09-small-image2020-05-17-20:16:17.266650.jpg",
    "special_price_usd": "30.0000",
    "special_price": "1250.0000",
    "price": "2499.0000",
    "price_usd": "40.0000",
    "percent_discount_usd": 25,
    "percent_discount_inr": 50,
    "type": "product-thumbnail",
    "sku": "TJ-KC-97-09",
    "stockstatus": true
    },
    {
    "id": 86545,
    "name": "Golden Sunheri Braided Mules",
    "slug": "/p/golden-sunheri-braided-mules/86545/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-kc-97-01-small-image2020-05-18-21:56:43.113972.jpg",
    "special_price_usd": "30.0000",
    "special_price": "1250.0000",
    "price": "2499.0000",
    "price_usd": "50.0000",
    "percent_discount_usd": 40,
    "percent_discount_inr": 50,
    "type": "product-thumbnail",
    "sku": "TJ-KC-97-01",
    "stockstatus": true
    },
    {
    "id": 86549,
    "name": "White Sunheri Braided Sliders",
    "slug": "/p/white-sunheri-braided-sliders/86549/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-kc-97-05-small-image2020-04-18-01:33:01.136350.jpg",
    "special_price_usd": "30.0000",
    "special_price": "1250.0000",
    "price": "2499.0000",
    "price_usd": "50.0000",
    "percent_discount_usd": 40,
    "percent_discount_inr": 50,
    "type": "product-thumbnail",
    "sku": "TJ-KC-97-05",
    "stockstatus": true
    },
    {
    "id": 86546,
    "name": "Black Sunheri Braided Juttis",
    "slug": "/p/black-sunheri-braided-juttis/86546/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-kc-97-02-small-image2020-03-11-11:38:21.373787.jpg",
    "special_price_usd": "30.0000",
    "special_price": "1425.0000",
    "price": "2849.0000",
    "price_usd": "50.0000",
    "percent_discount_usd": 40,
    "percent_discount_inr": 50,
    "type": "product-thumbnail",
    "sku": "TJ-KC-97-02",
    "stockstatus": true
    },
    {
    "id": 86555,
    "name": "Tan Bhoori Braided Block Heels",
    "slug": "/p/tan-bhoori-braided-block-heels/86555/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-kc-97-11-small-image2020-05-07-22:20:02.165732.jpg",
    "special_price_usd": "30.0000",
    "special_price": "1250.0000",
    "price": "2499.0000",
    "price_usd": "40.0000",
    "percent_discount_usd": 25,
    "percent_discount_inr": 50,
    "type": "product-thumbnail",
    "sku": "TJ-KC-97-11",
    "stockstatus": true
    }
    ],
    "pcount": 13,
    "widget": "subcategory",
    "craft_stories": "<p>Are you someone who loves to make a bold statement then we would definitely recommend you to buy this collection. Adorned with gorgeous braiding on the top of these mules.</p>"
    },
    {
    "name": "Men: Skin Concerns",
    "type": "collection",
    "slug": "/men/men-skin-concerns/",
    "cover_image": "https://mcdn.tjori.com/images/image/416829-2020-03-11-16:14:50.838938-image.jpg",
    "cover_image_desktop": "https://tjori.gumlet.com/subcategories/cover/men-skin-concerns-cover-image2020-05-14-14:41:57.226863.jpg",
    "subtitle": "",
    "data": [
    {
    "id": 65411,
    "name": "Underarms Skin Brightening Pack",
    "slug": "/p/underarms-skin-brightening-pack/65411/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pco-01-446-small-image2020-06-13-13:41:56.230509.jpg",
    "special_price_usd": "10.0000",
    "special_price": "329.0000",
    "price": "549.0000",
    "price_usd": "20.0000",
    "percent_discount_usd": 50,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-PCO-01-446",
    "stockstatus": true
    },
    {
    "id": 60627,
    "name": "Overnight Skin Transforming Face Serum",
    "slug": "/p/overnight-skin-transforming-face-serum/60627/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pco-01-416-small-image2020-06-12-22:51:54.370966.jpg",
    "special_price_usd": "10.0000",
    "special_price": "360.0000",
    "price": "600.0000",
    "price_usd": "20.0000",
    "percent_discount_usd": 50,
    "percent_discount_inr": 40,
    "type": "product-thumbnail",
    "sku": "TJ-PCO-01-416",
    "stockstatus": true
    },
    {
    "id": 64088,
    "name": "Papaya Everyday Cream",
    "slug": "/p/papaya-everyday-cream/64088/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pco-01-351-small-image2020-06-11-10:41:55.041553.jpg",
    "special_price_usd": "10.0000",
    "special_price": "239.0000",
    "price": "399.0000",
    "price_usd": "20.0000",
    "percent_discount_usd": 50,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-PCO-01-351",
    "stockstatus": true
    },
    {
    "id": 53455,
    "name": "Natural Beauty Multani Mitti And Rose Face Pack",
    "slug": "/p/natural-beauty-multani-mitti-and-rose-face-pack/53455/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pca-01-80-small-image2020-06-13-00:26:01.849922.jpg",
    "special_price_usd": "5.0000",
    "special_price": "179.0000",
    "price": "299.0000",
    "price_usd": "10.0000",
    "percent_discount_usd": 50,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-PCA-01-80",
    "stockstatus": true
    },
    {
    "id": 56772,
    "name": "Kumkumadi Face Serum",
    "slug": "/p/kumkumadi-face-serum/56772/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-pca-01-210-small_image.png",
    "special_price_usd": "20.0000",
    "special_price": "1109.0000",
    "price": "1849.0000",
    "price_usd": "40.0000",
    "percent_discount_usd": 50,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-PCA-01-210",
    "stockstatus": true
    },
    {
    "id": 82970,
    "name": "Aloe Vera Cooling Sunscreen SPF 30 -100gms",
    "slug": "/p/sunscreen-spf-30-for-men-aloe-vera/82970/",
    "cdn_small_image": "https://tjori.gumlet.com/310x455/tj-man-01-16-small-image2020-06-05-10:26:34.234945.jpg",
    "special_price_usd": "10.0000",
    "special_price": "239.0000",
    "price": "399.0000",
    "price_usd": "20.0000",
    "percent_discount_usd": 50,
    "percent_discount_inr": 41,
    "type": "product-thumbnail",
    "sku": "TJ-MAN-01-16",
    "stockstatus": true
    }
    ],
    "pcount": 48,
    "widget": "subcategory",
    "craft_stories": "<p>Goodness of nature mixed with the wellness of care, and keeping up the raw essence we bring you wellness products for men that will give you visible results with a regular use permanently.</p>"
    }
    ]
    }

    
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'application\json'})
    // res.write('{"name":"nitin"}');
    res.write(JSON.stringify(data));
    res.end();
}).listen(3900);




// var other = require("./other")
// console.warn(other.fn1(3,5,5));
// console.warn(other.abc)


