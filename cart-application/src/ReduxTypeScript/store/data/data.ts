import { AddtoCardPropertyes, MyshoppingcardOpener, ShoppingProductCategoryPropertyes, User, Category, RecomendedProductCompanyes } from "../../../types/modules"
import { ProductState } from "../../types/type"
import { ProductCategory } from "../../../types/modules"
import Ratingstars from "../../../component/Ratingstars/Ratingstars"

export const allProducts: ProductCategory = {
    seeAllproduct: [
        {
            id: 1,
            name: "Household goods",
            imgUrl: "/imgs/haden.png",
            navigate: "/household"
        },
        {
            id: 2,
            name: "Game Cantrioller",
            imgUrl: "/imgs/gamecantroller.png",
            navigate: "/gamecontroiler",
        },
        {
            id: 3,
            name: "Accessories",
            imgUrl: "/imgs/bag.png",
            navigate: "/accessories"


        },
        {
            id: 4,
            name: "Furniture",
            imgUrl: "/imgs/furniture.png",
            navigate: "/furniture"
        },


    ]
}


export const category: Category = {
    category: [
        {
            name: "Electronic",
            navigate: "/electronic"
        },
        {
            name: "Computers",
            navigate: "/computers"
        },
        {
            name: "Clotes",
            navigate: "/clotes"
        },

        {
            name: "Jewerly",
            navigate: "/jewerly"
        },
        {
            name: "Furniture",
            navigate: "/furniture"
        },
        {
            name: "Sports",
            navigate: "/sports"
        },

    ]
}

export const recomendedcompany: RecomendedProductCompanyes = {
    companyes: [

        {
            companyname: "Apple"
        }, {
            companyname: "Acer"
        }, {
            companyname: "Asus"
        }, {
            companyname: "Atlanta"
        }, {
            companyname: "Beats"
        }, {
            companyname: "Bosh"
        }, {
            companyname: "Samsung"
        }, {
            companyname: "Electro Lux"
        }, {
            companyname: "Sony"
        }, {
            companyname: "Smeg"
        }, {
            companyname: "Microsoft"
        }, {
            companyname: "HP Corporation"
        }, {
            companyname: "Madway Furniture"
        }, {
            companyname: "Haden"
        }, {
            companyname: "Chanel"
        }, {
            companyname: "Canon"
        }, {
            companyname: "Instax"
        }, {
            companyname: "Hermes"
        }, {
            companyname: "Emporio Armani 7"
        }, {
            companyname: "Jordan"
        }, {
            companyname: "Nike"
        }, {
            companyname: "Adidass"
        }, {
            companyname: "Amazhiyu"
        }, {
            companyname: "Jewerly Art"
        },

    ]
}


export const productCategory: ShoppingProductCategoryPropertyes = {

    gamecantroler: [
        {
            id: 1,
            name: "Sony-PS Game Controiler",
            imgUrl: "/myprojectimages/Sony-wireless/1433003_002.jpg",
            navigate: "/searchitemsview",
            type: "gamecantroler",
            model: "Sony",
            price: 1222,
            typeimage: "/myprojectimages/Sony-wireless/type1433003_002-removebg-preview.png",
            imgUrlArray: [
                "/myprojectimages/Sony-wireless/1433003_002.jpg",
                "/myprojectimages/Sony-wireless/afd92c2aec7f7048f8a8ba6fc4609a6b.jpg",
                "/myprojectimages/Sony-wireless/1b979b7cc3045281bab97b7d7504e8c9.jpg",
                "/myprojectimages/Sony-wireless/c1d9275b9792d905f45e4761adc17250.jpg",
                "/myprojectimages/Sony-wireless/738d839e8cea90e88f35a06f955c8d60.jpg"
            ],
        },
        {
            id: 2,
            name: "Xbox Game Controiler",
            imgUrl: "/myprojectimages/Xbox-wireless/51WgKdIyJyS._AC_SL1000_.jpg",
            navigate: "/searchitemsview",
            type: "gamecantroler",
            price: 1222,
            model: "Microsoft",
            typeimage: "/myprojectimages/Xbox-wireless/type51WgKdIyJyS._AC_SL1000_-removebg-preview.png",
            imgUrlArray: [
                "/myprojectimages/Xbox-wireless/51WgKdIyJyS._AC_SL1000_.jpg",
                "/myprojectimages/Xbox-wireless/617v34sT0gL._AC_SL1500.jpg",
                "/myprojectimages/Xbox-wireless/61FczNmfCBL._AC_SL1500.jpg",
                "/myprojectimages/Xbox-wireless/51EUL2unjWL._AC_SL1080.jpg",
                "/myprojectimages/Xbox-wireless/41agf4-Cz6L._AC_SL1000.jpg"
            ],
        },
        {
            id: 3,
            name: "Xbox Game Controiler",
            imgUrl: "/myprojectimages/Xbox-wireless-special-blue/61cM+jwNNwL._AC_SL1500_.jpg",
            navigate: "/searchitemsview",
            type: "gamecantroler",
            price: 1222,
            model: "Microsoft",
            typeimage: "/myprojectimages/Xbox-wireless-special-blue/type61cM+jwNNwL._AC_SL1500_-removebg-preview.png",
            imgUrlArray: [
                "/myprojectimages/Xbox-wireless-special-blue/61cM+jwNNwL._AC_SL1500_.jpg",
                "/myprojectimages/Xbox-wireless-special-blue/61RUe9yKvHL._AC_SL1500_.jpg",
                "/myprojectimages/Xbox-wireless-special-blue/61YtJXbH46L._AC_SL1500_.jpg",
                "/myprojectimages/Xbox-wireless-special-blue/61SWvhbszyL._AC_SL1500_.jpg",
            ],
        },
        {
            id: 30909,
            name: "Xbox Camo Special Edition",
            imgUrl: "/myprojectimages/XboxCamoSpecialEdition/XBQAU00073_2.jpg",
            navigate: "/searchitemsview",
            type: "gamecantroler",
            price: 1222,
            model: "Microsoft",
            typeimage: "/myprojectimages/XboxCamoSpecialEdition/XBQAU00073_2-removebg-preview.png",
            imgUrlArray: [
                "/myprojectimages/XboxCamoSpecialEdition/XBQAU00073_2.jpg",
                "/myprojectimages/XboxCamoSpecialEdition/XBQAU00073.jpg",
                "/myprojectimages/XboxCamoSpecialEdition/XBQAU00073_1.jpg",
                "/myprojectimages/XboxCamoSpecialEdition/XBQAU00073_3.jpg",
            ],
        },
        {
            id: 30919,
            name: "Xbox-Wireless-ElectricVolt",
            imgUrl: "/myprojectimages/XboxWirelessElectricVolt/XBQAU00021_1.jpg",
            navigate: "/searchitemsview",
            type: "gamecantroler",
            price: 1222,
            model: "Microsoft",
            typeimage: "/myprojectimages/XboxWirelessElectricVolt/XBQAU00021_1-removebg-preview.png",
            imgUrlArray: [
                "/myprojectimages/XboxWirelessElectricVolt/XBQAU00021_1.jpg",
                "/myprojectimages/XboxWirelessElectricVolt/XBQAU00021.jpg",
                "/myprojectimages/XboxWirelessElectricVolt/XBQAU00021_2.jpg",
                "/myprojectimages/XboxWirelessElectricVolt/XBQAU00021_3.jpg",
            ],
        }




    ],
    furniture: [
        {
            id: 509,
            name: "Cornersofa Beller TextileYellow",
            imgUrl: "/myprojectimages/CornersofaBellerTextileYellow/4686476.png",
            navigate: "/searchitemsview",
            type: "furniture",
            typeimage: "/myprojectimages/CornersofaBellerTextileYellow/4686476.png",
            model: "Madway Furniture",
            price: 1700,
            imgUrlArray: [
                "/myprojectimages/CornersofaBellerTextileYellow/4686476.png",
                "/myprojectimages/CornersofaBellerTextileYellow/4683764.png",
                "/myprojectimages/CornersofaBellerTextileYellow/4686477.png",
                "/myprojectimages/CornersofaBellerTextileYellow/4683766.png",
                "/myprojectimages/CornersofaBellerTextileYellow/4683763.png",

            ]
        },
        {
            id: 5,
            name: "Furniture arno sofa sea blue",
            imgUrl: "/myprojectimages/furniture-arno-sofa-sea-blue/tov-s165-2_2000x.png",
            navigate: "/searchitemsview",
            type: "furniture",
            typeimage: "/myprojectimages/furniture-arno-sofa-sea-blue/type-s165-1_2000x-removebg-preview.png",
            model: "Madway Furniture",
            price: 800,
            imgUrlArray: [
                "/myprojectimages/furniture-arno-sofa-sea-blue/tov-s165-1_2000x.png",
                "/myprojectimages/furniture-arno-sofa-sea-blue/tov-s165-2_2000x.png",
                "/myprojectimages/furniture-arno-sofa-sea-blue/tov-s165-3_2000x.png",
            ],
        },
        {
            id: 511,
            name: "Sofa Elling pink",
            imgUrl: "/myprojectimages/SofaEllingpink/DV-000652071.png",
            navigate: "/searchitemsview",
            type: "furniture",
            typeimage: "/myprojectimages/SofaEllingpink/typeDV-000652071-removebg-preview.png",
            model: "Madway Furniture",
            price: 800,
            imgUrlArray: [
                "/myprojectimages/SofaEllingpink/DV-000652071.png",
                "/myprojectimages/SofaEllingpink/DV-000652072.png",
                "/myprojectimages/SofaEllingpink/DV-000652074.png",
                "/myprojectimages/SofaEllingpink/DV-000652073.png",
                "/myprojectimages/SofaEllingpink/DV-000652075.png",

            ]
        },
        {
            id: 599,
            name: "Enthusiastic Channel Velvet Sofa",
            imgUrl: "/myprojectimages/EnthusiasticVerticalChannelTuftedCurvedPerformanceVelvetSofa/EEI-3407-GRY_2_1024x1024.png",
            navigate: "/searchitemsview",
            type: "furniture",
            typeimage: "/myprojectimages/EnthusiasticVerticalChannelTuftedCurvedPerformanceVelvetSofa/typeEEI-3407-GRY_1_1024x1024-removebg-preview.png",
            model: "Madway Furniture",
            price: 800,
            imgUrlArray: [
                "/myprojectimages/EnthusiasticVerticalChannelTuftedCurvedPerformanceVelvetSofa/EEI-3407-GRY_2_1024x1024.png",
                "/myprojectimages/EnthusiasticVerticalChannelTuftedCurvedPerformanceVelvetSofa/EEI-3407-GRY_1_1024x1024.png",
                "/myprojectimages/EnthusiasticVerticalChannelTuftedCurvedPerformanceVelvetSofa/EEI-3407-GRY_5_1024x1024_1.png",
                "/myprojectimages/EnthusiasticVerticalChannelTuftedCurvedPerformanceVelvetSofa/EEI-3407-GRY_4_1024x1024_1.jpg",
            ],
        },
        {
            id: 513,
            name: "sofa sean velvet",
            imgUrl: "/myprojectimages/sofa-sean-velvet/sofa-sean-velvet-3-seat-sofa-23_1500x1500_0ed9a221-356c-46bd-9a63-bb2f1773765f.png",
            navigate: "/searchitemsview",
            type: "furniture",
            typeimage: "/myprojectimages/sofa-sean-velvet/typesofa-sean-velvet-3-seat-sofa-23_1500x1500_0ed9a221-356c-46bd-9a63-bb2f1773765f-removebg-preview.png",
            model: "Madway Furniture",
            price: 800,
            imgUrlArray: [
                "/myprojectimages/sofa-sean-velvet/sofa-sean-velvet-3-seat-sofa-23_1500x1500_0ed9a221-356c-46bd-9a63-bb2f1773765f.png",
                "/myprojectimages/sofa-sean-velvet/sofa-sean-velvet-3-seat-sofa-24_1500x1500_88f80437-46d1-421a-b526-78df3ceec23a.png",
                "/myprojectimages/sofa-sean-velvet/sofa-sean-velvet-3-seat-sofa-25_1500x1500_9d13e513-5a59-4ba2-9654-39e2b1210520.png",
                "/myprojectimages/sofa-sean-velvet/sofa-sean-velvet-3-seat-sofa-27_1500x1500_f45313a9-4fb9-48c1-89ce-de3acf0eea28.png",
            ],

        },
        {
            id: 514,
            name: "Plazas-nordico-desenfundabl-sofa ",
            imgUrl: "/myprojectimages/sofa-2-plazas-nordico-desenfundabl/sofa-2-plazas-nordico-desenfundable-azul-petroleo-y-madera-ynok-48795-5fb2a21306677_1200_676_.png",
            navigate: "/searchitemsview",
            model: "Madway Furniture",
            type: "furniture",
            typeimage: "/myprojectimages/sofa-2-plazas-nordico-desenfundabl/typesofa-2-plazas-nordico-desenfundable-azul-petroleo-y-madera-ynok-48795-5fb2a2116eea2_1200_675_-removebg-preview.png",
            price: 800,
            imgUrlArray: [
                "/myprojectimages/sofa-2-plazas-nordico-desenfundabl/sofa-2-plazas-nordico-desenfundable-azul-petroleo-y-madera-ynok-48795-5fb2a2116eea2_1200_675_.jpg",
                "/myprojectimages/sofa-2-plazas-nordico-desenfundabl/sofa-2-plazas-nordico-desenfundable-azul-petroleo-y-madera-ynok-48795-5fb2a21306677_1200_675_.jpg",
                "/myprojectimages/sofa-2-plazas-nordico-desenfundabl/sofa-2-plazas-nordico-desenfundable-azul-petroleo-y-madera-ynok-48795-5fb2a21440e24_1200_675_.jpg",
                "/myprojectimages/sofa-2-plazas-nordico-desenfundabl/sofa-2-plazas-nordico-desenfundable-azul-petroleo-y-madera-ynok-48795-5fb2a217131b0_1200_675_.jpg",

            ],
        },
        {
            id: 4,
            name: "Matiere grise steel-tables",
            imgUrl: "/myprojectimages/matiere_tables/matiere-grise-set-of-3-low-steel-tables-1.png",
            navigate: "/searchitemsview",
            model: "Madway Furniture",
            type: "furniture",
            typeimage: "/myprojectimages/matiere_tables/matiere-grise-set-of-3-low-steel-tables-1.png",
            price: 1383,
            imgUrlArray: [
                "/myprojectimages/matiere_tables/matiere-grise-set-of-3-low-steel-tables-1.png",
                "/myprojectimages/matiere_tables/matiere-grise-set-of-3-low-steel-tables-2.png",
                "/myprojectimages/matiere_tables/matiere-grise-set-of-3-low-steel-tables-3.png",
                "/myprojectimages/matiere_tables/matiere-grise-set-of-3-low-steel-tables-4.png",
                "/myprojectimages/matiere_tables/matiere-grise-set-of-3-low-steel-tables-6.png",
            ],
        },


    ],
    headphones: [
        {
            id: 6,
            name: "Beats-studio3-wireless-mx",
            imgUrl: "/myprojectimages/beats-studio-wireless-over-ear-headphones/beats-studio3-wireless-over-ear-headphones-d-20200619123151573~9473950w_100.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/beats-studio-wireless-over-ear-headphones/typebeats-studio3-wireless-over-ear-headphones-d-20200619123151573_9473950w_100-removebg-preview.png",
            price: 800,
            type: "headphones",
            model: "Beats",
            imgUrlArray: [
                "/myprojectimages/beats-studio-wireless-over-ear-headphones/beats-studio3-wireless-over-ear-headphones-d-20200619123151573~9473950w_100.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones/beats-studio3-wireless-over-ear-headphones-d-20200302112958283~9473950w_alt3.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones/beats-studio3-wireless-over-ear-headphones-d-2020030211300174~9473950w_alt.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones/beats-studio3-wireless-over-ear-headphones-d-20200302113001233~9473950w_alt4.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones/beats-studio3-wireless-over-ear-headphones-d-20200302113003213~9473950w_alt6.jpg",
            ],

        },
        {
            id: 7,
            name: "Beats-studio3-wireless-mx",
            imgUrl: "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja-av/btmx412lla.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja-av/typebtmx412lla-removebg-preview.png",
            price: 800,
            type: "headphones",
            model: "Beats",
            imgUrlArray: [
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja-av/btmx412lla.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja-av/btmx412lla_5.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja-av/btmx412lla_2.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja-av/btmx412lla_4.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja-av/btmx412lla_6.jpg",
            ],

        },
        {
            id: 7777,
            name: "Beatsby Dr.DreBeats Solo-3",
            imgUrl: "/myprojectimages/BeatsbyDr.DreBeatsSolo3/BTMX432LLA-removebg-preview.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/BeatsbyDr.DreBeatsSolo3/BTMX432LLA-removebg-preview.png",
            price: 800,
            type: "headphones",
            model: "Beats",
            imgUrlArray: [
                "/myprojectimages/BeatsbyDr.DreBeatsSolo3/BTMX432LLA-removebg-preview.png",
                "/myprojectimages/BeatsbyDr.DreBeatsSolo3/BTMX432LLA_1-removebg-preview.png",
                "/myprojectimages/BeatsbyDr.DreBeatsSolo3/BTMX432LLA_3-removebg-preview.png",
                "/myprojectimages/BeatsbyDr.DreBeatsSolo3/BTMX432LLA_2-removebg-preview.png",
                "/myprojectimages/BeatsbyDr.DreBeatsSolo3/BTMX432LLA_5-removebg-preview.png",
            ],

        },
        {
            id: 8,
            name: "Beats-studio3-wireless-mx",
            imgUrl: "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja/btmx422lla.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja/typebtmx422lla-removebg-preview.png",
            price: 800,
            type: "headphones",
            model: "Beats",
            imgUrlArray: [
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja/btmx422lla.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja/btmx422lla_3.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja/btmx422lla_4.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja/btmx422lla_5.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja/btmx422lla_6.jpg",
            ],

        },
        {
            id: 9,
            name: "Beats-studio3-wireless-mx",
            imgUrl: "/myprojectimages/beats-studio-wireless-over-ear-headphones-mx/btmx402lla.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/beats-studio-wireless-over-ear-headphones-mx/typebtmx402lla-removebg-preview.png",
            price: 800,
            type: "headphones",
            model: "Beats",
            imgUrlArray: [
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mx/btmx402lla.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mx/btmx402lla_5.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mx/btmx402lla_4.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mx/btmx402lla_2.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mx/btmx402lla_6.jpg",
            ],

        }


    ],
    computers: [
        {
            id: 10,
            name: "Apple-Macbok-16-pro",
            imgUrl: "/myprojectimages/Apple-Macbok-16-pro/ACMK183LLA1.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/Apple-Macbok-16-pro/typeACMK183LLA1-removebg-preview.png",
            price: 2600,
            type: "computers",
            model: "Apple",
            imgUrlArray: [
                "/myprojectimages/Apple-Macbok-16-pro/ACMK183LLA1.jpg",
                "/myprojectimages/Apple-Macbok-16-pro/ACMK183LLA1_3.jpg",
                "/myprojectimages/Apple-Macbok-16-pro/ACMK183LLA1_4.jpg",
                "/myprojectimages/Apple-Macbok-16-pro/ACMK183LLA1_2.jpg",
                "/myprojectimages/Apple-Macbok-16-pro/download.jpg",
            ],
            displaySize: 14,
            processor: "Apple M1 Pro",
            series: "MacBook Pro",
            storageCapacity: "1TB",
            ram: "32GB"
        },
        {
            id: 11,
            name: "Apple-MacBook-Air-13.6",
            imgUrl: "/myprojectimages/AppleMacBookAir13.6/ACMLY43LLA.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/AppleMacBookAir13.6/typeACMLY43LLA-removebg-preview.png",
            price: 1600,
            type: "computers",
            model: "Apple",
            imgUrlArray: [
                "/myprojectimages/AppleMacBookAir13.6/ACMLY43LLA.jpg",
                "/myprojectimages/AppleMacBookAir13.6/ACMLY43LLA_3.jpg",
                "/myprojectimages/AppleMacBookAir13.6/ACMLY43LLA_5.jpg",
                "/myprojectimages/AppleMacBookAir13.6/ACMLY43LLA_6.jpg",
                "/myprojectimages/AppleMacBookAir13.6/ACMLY43LLA_2.jpg",
            ],
            displaySize: 14,
            processor: "Apple M1 Pro",
            series: "MacBook Pro",
            storageCapacity: "1TB",
            ram: "32GB"

        },
        {
            id: 12,
            name: "Apple-MacBook-Pro-16",
            imgUrl: "/myprojectimages/AppleMacBookPro16withLiquidRetinaXDR/ACMK1F3LLA12.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/AppleMacBookPro16withLiquidRetinaXDR/typeACMK1F3LLA12-removebg-preview.png",
            price: 1800,
            type: "computers",
            model: "Apple",
            imgUrlArray: [
                "/myprojectimages/AppleMacBookPro16withLiquidRetinaXDR/ACMK1F3LLA12.jpg",
                "/myprojectimages/AppleMacBookPro16withLiquidRetinaXDR/ACMK1F3LLA12_3.jpg",
                "/myprojectimages/AppleMacBookPro16withLiquidRetinaXDR/ACMK1F3LLA12_1.jpg",
                "/myprojectimages/AppleMacBookPro16withLiquidRetinaXDR/ACMK1F3LLA12_2.jpg",
            ],
            displaySize: 14,
            processor: "Apple M1 Pro",
            series: "MacBook Pro",
            storageCapacity: "1TB",
            ram: "32GB"

        },

        {
            id: 14,
            name: "Acer-2023Aspire5-FHDIPS",
            imgUrl: "/myprojectimages/Acer2023Aspire5FHDIPS/51DuoPsdk9L._AC_SL1000_.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/Acer2023Aspire5FHDIPS/type51DuoPsdk9L._AC_SL1000_-removebg-preview.png",
            price: 1600,
            type: "computers",
            model: "Acer",
            imgUrlArray: [
                "/myprojectimages/Acer2023Aspire5FHDIPS/51DuoPsdk9L._AC_SL1000_.jpg",
                "/myprojectimages/Acer2023Aspire5FHDIPS/61f5+c3iiBL._AC_SL1500_.jpg",
                "/myprojectimages/Acer2023Aspire5FHDIPS/61YnjMLr3pL._AC_SL1500_.jpg",
                "/myprojectimages/Acer2023Aspire5FHDIPS/41cUZDT8AGL._AC_SL1000_.jpg",
                "/myprojectimages/Acer2023Aspire5FHDIPS/51HIkCXD0WL._AC_SL1500_.jpg",
            ],
            displaySize: 14,
            processor: "Apple M1 Pro",
            series: "MacBook Pro",
            storageCapacity: "1TB",
            ram: "32GB"

        },
        {
            id: 13,
            name: "Acer-predator 2023",
            imgUrl: "/myprojectimages/Acer-predator/ACNHQK3AA001.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/Acer-predator/typeACNHQK3AA001-removebg-preview.png",
            price: 3900,
            type: "computers",
            model: "Acer",
            imgUrlArray: [
                "/myprojectimages/Acer-predator/ACNHQK3AA001.jpg",
                "/myprojectimages/Acer-predator/ACNHQK3AA001_8.jpg",
                "/myprojectimages/Acer-predator/ACNHQK3AA001_2.jpg",
                "/myprojectimages/Acer-predator/ACNHQK3AA001_3.jpg",
                "/myprojectimages/Acer-predator/ACNHQK3AA001_7.jpg",
                "/myprojectimages/Acer-predator/ACNHQK3AA001_5.jpg",
            ],
            displaySize: 14,
            processor: "Apple M1 Pro",
            series: "MacBook Pro",
            storageCapacity: "1TB",
            ram: "32GB"

        },
        {
            id: 15,
            name: "ASUS-2023-Laptop",
            imgUrl: "/myprojectimages/ASUS2023ProArtStudioBook16OLEDLaptop/81k9wtz4kFL._AC_SL1500_.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/ASUS2023ProArtStudioBook16OLEDLaptop/type81k9wtz4kFL._AC_SL1500_-removebg-preview.png",
            price: 2600,
            model: "Asus",
            type: "computers",
            imgUrlArray: [
                "/myprojectimages/ASUS2023ProArtStudioBook16OLEDLaptop/81k9wtz4kFL._AC_SL1500_.jpg",
                "/myprojectimages/ASUS2023ProArtStudioBook16OLEDLaptop/71gSE67YHkL._AC_SL1500_.jpg",
                "/myprojectimages/ASUS2023ProArtStudioBook16OLEDLaptop/81Hvt9HN1eL._AC_SL1500_.jpg",
                "/myprojectimages/ASUS2023ProArtStudioBook16OLEDLaptop/61V1oMeRUiL._AC_SL1500_.jpg",
                "/myprojectimages/ASUS2023ProArtStudioBook16OLEDLaptop/51xFFCyWXiL._AC_SL1500_.jpg",
            ],
            displaySize: 14,
            processor: "Apple M1 Pro",
            series: "ProArt-16OLED",
            storageCapacity: "1TB",
            ram: "32GB"

        },
        {
            id: 16,
            name: "ASUS-ROG-Strix-Scar-18",
            imgUrl: "/myprojectimages/ASUSROGStrixScar18/819IGJqXvOL._AC_SL1500_.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/ASUSROGStrixScar18/type819IGJqXvOL._AC_SL1500_-removebg-preview.png",
            price: 2900,
            type: "computers",
            model: "Asus",
            imgUrlArray: [
                "/myprojectimages/ASUSROGStrixScar18/819IGJqXvOL._AC_SL1500_.jpg",
                "/myprojectimages/ASUSROGStrixScar18/71IgT8VBLGL._AC_SL1500_.jpg",
                "/myprojectimages/ASUSROGStrixScar18/81zNQsY1gCL._AC_SL1500_.jpg",
                "/myprojectimages/ASUSROGStrixScar18/810BnHvCCpL._AC_SL1500_.jpg",
                "/myprojectimages/ASUSROGStrixScar18/81oFqzYqkkL._AC_SL1500_.jpg",
            ],
            displaySize: 14,
            processor: "Apple M1 Pro",
            series: "MacBook Pro",
            storageCapacity: "1TB",
            ram: "32GB"
        },
        {
            id: 17,
            name: "HP_OMEN-Laptop2023",
            imgUrl: "/myprojectimages/HP_OMENLaptop2023/61yTEMSH2DL._AC_SL1500_.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/HP_OMENLaptop2023/type61yTEMSH2DL._AC_SL1500_-removebg-preview.png",
            price: 1400,
            type: "computers",
            model: "HP Corporation",
            imgUrlArray: [
                "/myprojectimages/HP_OMENLaptop2023/61yTEMSH2DL._AC_SL1500_.jpg",
                "/myprojectimages/HP_OMENLaptop2023/61Pj4CO-DyL._AC_SL1500_.jpg",
                "/myprojectimages/HP_OMENLaptop2023/617xqFPITHL._AC_SL1500_.jpg",
                "/myprojectimages/HP_OMENLaptop2023/51SBJcC2FmL._AC_SL1500_.jpg",
                "/myprojectimages/HP_OMENLaptop2023/411xJGI2nOL._AC_SL1500_.jpg",
            ],
            displaySize: 14,
            processor: "Apple M1 Pro",
            series: "MacBook Pro",
            storageCapacity: "1TB",
            ram: "32GB"

        }
    ],
    electronics: [
        {
            id: 160,
            name: "Minioven-Atlanta-black",
            imgUrl: "/myprojectimages/MiniovenAtlantaATH-1410black/f147cce01dc9ec2e755c5760e4357b13ec2ba45d93978bb8756ae2738e92a5ac.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/MiniovenAtlantaATH-1410black/typef147cce01dc9ec2e755c5760e4357b13ec2ba45d93978bb8756ae2738e92a5ac-removebg-preview.png",
            price: 290,
            type: "electronics",
            model: "Atlanta",
            imgUrlArray: [
                "/myprojectimages/MiniovenAtlantaATH-1410black/f147cce01dc9ec2e755c5760e4357b13ec2ba45d93978bb8756ae2738e92a5ac.jpg",
                "/myprojectimages/MiniovenAtlantaATH-1410black/3580fb44129c20ff26105b2f90a4f954f9075304c9abce1079f9b726e950cf5a.jpg.png",
                "/myprojectimages/MiniovenAtlantaATH-1410black/607630bfc188b690964468673602f2ffff3783fdf0627a7ee3ac4975f670377e.jpg.png",
                "/myprojectimages/MiniovenAtlantaATH-1410black/356ddb0d6a7deeebbc7afadf064ea69d47ebf5326082823f4de523c62312cdb4.jpg.png",
                "/myprojectimages/MiniovenAtlantaATH-1410black/3e5497194e737f36aa0171cea3fee4bf1fd4c748f0641e7e6e1c50d90ee43a12.jpg.png",
            ],

        },
        {
            id: 161,
            name: "Electrolux-RKR660204X",
            imgUrl: "/myprojectimages/ElectroluxRKR660204X/5294301.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/ElectroluxRKR660204X/type5294301-removebg-preview.png",
            price: 490,
            type: "electronics",
            model: "Electro Lux",
            imgUrlArray: [
                "/myprojectimages/ElectroluxRKR660204X/5294301.jpg",
                "/myprojectimages/ElectroluxRKR660204X/5294301-4.jpg",
                "/myprojectimages/ElectroluxRKR660204X/5294301-5.jpg",
                "/myprojectimages/ElectroluxRKR660204X/5294301-2.jpg",
                "/myprojectimages/ElectroluxRKR660204X/5294301-3.jpg",
            ],

        },
        {
            id: 163,
            name: "Bosch-KGN-86AI32",
            imgUrl: "/myprojectimages/BoschKGN86AI32/5301770.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/BoschKGN86AI32/type5301770-removebg-preview.png",
            price: 490,
            type: "electronics",
            model: "Bosh",
            imgUrlArray: [
                "/myprojectimages/BoschKGN86AI32/5301770.jpg",
                "/myprojectimages/BoschKGN86AI32/5301770-3.jpg",
                "/myprojectimages/BoschKGN86AI32/5301770-7.jpg",
                "/myprojectimages/BoschKGN86AI32/5301770-6.jpg",
                "/myprojectimages/BoschKGN86AI32/5301770-5.jpg",
            ],

        },
        {
            id: 164,
            name: "Samsung-WW11BB744CGBLP",
            imgUrl: "/myprojectimages/SamsungWW11BB744CGBLP/720855.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/SamsungWW11BB744CGBLP/type720855-removebg-preview.png",
            price: 490,
            type: "electronics",
            model: "Samsung",
            imgUrlArray: [
                "/myprojectimages/SamsungWW11BB744CGBLP/720855.jpg",
                "/myprojectimages/SamsungWW11BB744CGBLP/720855-1_1.png",
                "/myprojectimages/SamsungWW11BB744CGBLP/720855-2_1.png",
                "/myprojectimages/SamsungWW11BB744CGBLP/720855-3_1.png",
                "/myprojectimages/SamsungWW11BB744CGBLP/720855-4_1.png",
            ],

        },

    ],
    householdGods: [
        {
            id: 104,
            name: "Highclere1.5L-KettleBPA",
            imgUrl: "/myprojectimages/Highclere1.5L-6CupCordlessElectricKettleBPAFreewithAutoShut-Off-75025/60a6ef5ba8c5966370617a3cf31d2ced.jpeg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/Highclere1.5L-6CupCordlessElectricKettleBPAFreewithAutoShut-Off-75025/removed.png",
            price: 290,
            type: "electronics",
            model: "Haden",
            imgUrlArray: [
                "/myprojectimages/Highclere1.5L-6CupCordlessElectricKettleBPAFreewithAutoShut-Off-75025/60a6ef5ba8c5966370617a3cf31d2ced.jpeg",
                "/myprojectimages/Highclere1.5L-6CupCordlessElectricKettleBPAFreewithAutoShut-Off-75025/0e1c18436aa4306d69864a8a52b932f3.jpeg",
                "/myprojectimages/Highclere1.5L-6CupCordlessElectricKettleBPAFreewithAutoShut-Off-75025/61uUjrOqpIL._AC_SY550_.jpg",
                "/myprojectimages/Highclere1.5L-6CupCordlessElectricKettleBPAFreewithAutoShut-Off-75025/1f424ab04500ae52677d5141b040be3e.jpeg",
                "/myprojectimages/Highclere1.5L-6CupCordlessElectricKettleBPAFreewithAutoShut-Off-75025/4f5d403a37146fa066b2d2cd43517839.jpeg",
            ],

        },
        {
            id: 105,
            name: "Haden-Heritage-1.7L-Stainless-Steel",
            imgUrl: "/myprojectimages/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle-Black-Chrome/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle,-Black-Chrome1.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle-Black-Chrome/haden.png",
            price: 490,
            type: "electronics",
            model: "Haden",
            imgUrlArray: [
                "/myprojectimages/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle-Black-Chrome/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle,-Black-Chrome1.png",
                "/myprojectimages/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle-Black-Chrome/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle,-Black-Chrome2.png",
                "/myprojectimages/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle-Black-Chrome/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle,-Black-Chrome3.png",
                "/myprojectimages/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle-Black-Chrome/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle,-Black-Chrome4.jpg",
                "/myprojectimages/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle-Black-Chrome/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle,-Black-Chrome5.jpg",
            ],

        },
        {
            id: 106,
            name: "Toaster-SmegTSF-02BLEU",
            imgUrl: "/myprojectimages/Toaster-SmegTSF02BLEU/p860962-1mw.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/Toaster-SmegTSF02BLEU/typep860962-1mw-removebg-preview.png",
            price: 490,
            type: "electronics",
            model: "Smeg",
            imgUrlArray: [
                "/myprojectimages/Toaster-SmegTSF02BLEU/p860962-1mw.jpg",
                "/myprojectimages/Toaster-SmegTSF02BLEU/p860962-0mw.jpg",
                "/myprojectimages/Toaster-SmegTSF02BLEU/p860962-2mw.jpg",
                "/myprojectimages/Toaster-SmegTSF02BLEU/p860962-3mw.jpg",
                "/myprojectimages/Toaster-SmegTSF02BLEU/p860962-4mw.jpg",
            ],

        },


    ],
    accsessories: [
        {
            id: 176,
            name: "Obag-Mini",
            imgUrl: "/myprojectimages/ObagMini/COBC2A02_TE001_017_1-650x650.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/ObagMini/typeCOBC2A02_TE001_017_1-650x650-removebg-preview.png",
            price: 250,
            type: "accsessories",
            model: "O Bag Mini",
            imgUrlArray: [
                "/myprojectimages/ObagMini/COBC2A02_TE001_017_1-650x650.jpg",
                "/myprojectimages/ObagMini/COBC2A02_TE001_017_2-650x650.jpg",
                "/myprojectimages/ObagMini/COBC2A02_TE001_017_3-650x650.jpg",
                "/myprojectimages/ObagMini/COBC2A02_TE001_017_4-650x650.jpg",
                "/myprojectimages/ObagMini/COBC2A02_TE001_017_5-650x650.jpg",
            ],

        },
        {
            id: 177,
            name: "HERMES-Mini-Kelly",
            imgUrl: "/myprojectimages/HERMESNEWMiniKelly20SellierBlueGreenCognacGoldSmallTopHandleBag/v_14230622_1639826426980_bg_processed.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/HERMESNEWMiniKelly20SellierBlueGreenCognacGoldSmallTopHandleBag/typev_14230622_1639826426980_bg_processed-removebg-preview.png",
            price: 250,
            type: "accsessories",
            model: "Hermes",
            imgUrlArray: [
                "/myprojectimages/HERMESNEWMiniKelly20SellierBlueGreenCognacGoldSmallTopHandleBag/v_14230622_1639826426980_bg_processed.jpg",
                "/myprojectimages/HERMESNEWMiniKelly20SellierBlueGreenCognacGoldSmallTopHandleBag/15250fc7c4ebcd36054d8c075f9af9b4_1296x_master.jpg",
                "/myprojectimages/HERMESNEWMiniKelly20SellierBlueGreenCognacGoldSmallTopHandleBag/3e8ed87093b72ad6001885bb914ff51b_1296x_master.jpg",
                "/myprojectimages/HERMESNEWMiniKelly20SellierBlueGreenCognacGoldSmallTopHandleBag/a37417ce3da8cc84e75229da7763071f_1296x_master.jpg",
            ],

        },
        {
            id: 178,
            name: "HERMÈS-LeatherKelly",
            imgUrl: "/myprojectimages/HERMÈSBougainvilleaEpsom LeatherKelly32cmRetourne/v_17660772_1668769153656_bg_processed.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/HERMÈSBougainvilleaEpsom LeatherKelly32cmRetourne/typev_17660772_1668769153656_bg_processed-removebg-preview.png",
            price: 250,
            type: "accsessories",
            model: "Hermes",
            imgUrlArray: [
                "/myprojectimages/HERMÈSBougainvilleaEpsom LeatherKelly32cmRetourne/v_17660772_1668769153656_bg_processed.jpg",
                "/myprojectimages/HERMÈSBougainvilleaEpsom LeatherKelly32cmRetourne/i05_master.jpg",
                "/myprojectimages/HERMÈSBougainvilleaEpsom LeatherKelly32cmRetourne/i02_master.jpg",
                "/myprojectimages/HERMÈSBougainvilleaEpsom LeatherKelly32cmRetourne/i03_master.jpg",
                "/myprojectimages/HERMÈSBougainvilleaEpsom LeatherKelly32cmRetourne/i06_master.jpg",
            ],

        },
        {
            id: 179,
            name: "Chanel-Aqua-Lambskin",
            imgUrl: "/myprojectimages/ChanelAquaLambskinTrendyCCTopHandle/12580_Chanel_Agneau_Quilted_Lambskin_Coco_Handle_wGH_9_750_1__master.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/ChanelAquaLambskinTrendyCCTopHandle/type12580_Chanel_Agneau_Quilted_Lambskin_Coco_Handle_wGH_9_750_1__master-removebg-preview.png",
            price: 250,
            type: "accsessories",
            model: "Chanel",
            imgUrlArray: [
                "/myprojectimages/ChanelAquaLambskinTrendyCCTopHandle/12580_Chanel_Agneau_Quilted_Lambskin_Coco_Handle_wGH_9_750_1__master.jpg",
                "/myprojectimages/ChanelAquaLambskinTrendyCCTopHandle/v_15865332_1653424510916_bg_processed.jpg",
                "/myprojectimages/ChanelAquaLambskinTrendyCCTopHandle/12580_Chanel_Agneau_Quilted_Lambskin_Coco_Handle_wGH_9_750_2__master.jpg",
                "/myprojectimages/ChanelAquaLambskinTrendyCCTopHandle/12580_Chanel_Agneau_Quilted_Lambskin_Coco_Handle_wGH_9_750_4__master.jpg",
                "/myprojectimages/ChanelAquaLambskinTrendyCCTopHandle/12580_Chanel_Agneau_Quilted_Lambskin_Coco_Handle_wGH_9_750_5__master.jpg",
            ],

        },
        {
            id: 17909,
            name: "1994Hermes Kelly 32cm Selllier",
            imgUrl: "/myprojectimages/1994HermesVertFonceRougeH&IndigoBoxCalfVintageKelly32cmSelllier/12616582_master.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/1994HermesVertFonceRougeH&IndigoBoxCalfVintageKelly32cmSelllier/type12616582_master-removebg-preview.png",
            price: 250,
            type: "accsessories",
            model: "Hermes",
            imgUrlArray: [
                "/myprojectimages/1994HermesVertFonceRougeH&IndigoBoxCalfVintageKelly32cmSelllier/12616582_master.jpg",
                "/myprojectimages/1994HermesVertFonceRougeH&IndigoBoxCalfVintageKelly32cmSelllier/i02_master.jpg",
                "/myprojectimages/1994HermesVertFonceRougeH&IndigoBoxCalfVintageKelly32cmSelllier/i04_master.jpg",
                "/myprojectimages/1994HermesVertFonceRougeH&IndigoBoxCalfVintageKelly32cmSelllier/i05_master.jpg",
                "/myprojectimages/1994HermesVertFonceRougeH&IndigoBoxCalfVintageKelly32cmSelllier/i06_master.jpg",
            ],

        },
    ],
    clotes: [
        {
            id: 141,
            name: "Emporio-Armani-7-trousers",
            imgUrl: "/myprojectimages/EmporioArmani7trousers/EmporioArmani7_1.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/EmporioArmani7trousers/EmporioArmani7_1.png",
            price: 250,
            type: "clotes",
            model: "Emporio Armani 7",
            imgUrlArray: [
                "/myprojectimages/EmporioArmani7trousers/EmporioArmani7_1.png",
                "/myprojectimages/EmporioArmani7trousers/EmporioArmani7_2.png",
                "/myprojectimages/EmporioArmani7trousers/EmporioArmani7_3.png",
                "/myprojectimages/EmporioArmani7trousers/EmporioArmani7_4.png",
            ],

        },
        {
            id: 142,
            name: "Jordan-Tshirt",
            imgUrl: "/myprojectimages/Jordan-Tshirt/Jordan-CJ0921-010-Black-L__1.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/Jordan-Tshirt/typeJordan-CJ0921-010-Black-L__1-removebg-preview.png",
            price: 150,
            type: "clotes",
            model: "Jordan",
            imgUrlArray: [
                "/myprojectimages/Jordan-Tshirt/Jordan-CJ0921-010-Black-L__1.jpg",
                "/myprojectimages/Jordan-Tshirt/Jordan-CJ0921-091-Grey-L__1.jpg",
                "/myprojectimages/Jordan-Tshirt/Jordan-CJ0921-410-Blue-L__1.jpg",
                "/myprojectimages/Jordan-Tshirt/Jordan-CJ0921-687-Red-L__1.jpg",
            ],

        },
        {
            id: 143,
            name: "Nike-Tshirt",
            imgUrl: "/myprojectimages/NikeTshirt/Nike-PS-891953-Black-L__1.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/NikeTshirt/typeNike-PS-891953-Black-L__1-removebg-preview.png",
            price: 150,
            type: "clotes",
            model: "Nike",
            imgUrlArray: [
                "/myprojectimages/NikeTshirt/Nike-PS-891953-Black-L__1.jpg",
                "/myprojectimages/NikeTshirt/Nike-PS-891953-Blue-L__1.jpg",
                "/myprojectimages/NikeTshirt/Nike-PS-891953-Red-L__1.jpg",
            ],

        },
        {
            id: 144,
            name: "Amazhiyu WomenCropped Sweatshirt",
            imgUrl: "/myprojectimages/AmazhiyuWomenCroppedSweatshirt/71p-BbMfdcL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/AmazhiyuWomenCroppedSweatshirt/71p-BbMfdcL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
            price: 150,
            type: "clotes",
            model: "Amazhiyu",
            imgUrlArray: [
                "/myprojectimages/AmazhiyuWomenCroppedSweatshirt/71p-BbMfdcL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/AmazhiyuWomenCroppedSweatshirt/61kI2cRv8vL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/AmazhiyuWomenCroppedSweatshirt/51pIQDPAJRL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
            ],

        },
        {
            id: 145,
            name: "Dynamic AthleteT-shirt",
            imgUrl: "/myprojectimages/DynamicAthleteT-shirt/Dynamic_Athlete_T-shirt-removebg-preview.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/DynamicAthleteT-shirt/Dynamic_Athlete_T-shirt-removebg-preview.png",
            price: 150,
            type: "clotes",
            model: "Emporio Armani 7",
            imgUrlArray: [
                "/myprojectimages/DynamicAthleteT-shirt/Dynamic_Athlete_T-shirt-removebg-preview.png",
                "/myprojectimages/DynamicAthleteT-shirt/Dynamic_Athlete_T-shirt2-removebg-preview.png",
                "/myprojectimages/DynamicAthleteT-shirt/Dynamic_Athlete_T-shirt3-removebg-preview.png",
                "/myprojectimages/DynamicAthleteT-shirt/Dynamic_Athlete_T-shirt4-removebg-preview.png",
            ],

        },
    ],
    sports: [
        {
            id: 183,
            name: "Nike-Cross",
            imgUrl: "/myprojectimages/Nike-Cross/Nike_cross_1.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/Nike-Cross/Nike_cross_1.png",
            price: 150,
            model: "Nike",
            type: "sports",
            imgUrlArray: [
                "/myprojectimages/Nike-Cross/Nike_cross_1.png",
                "/myprojectimages/Nike-Cross/Nike_cross_3.png",
                "/myprojectimages/Nike-Cross/Nike_cross_4.png",
                "/myprojectimages/Nike-Cross/Nike_cross_2.png",
            ],

        },
        {
            id: 184,
            name: "Adidass-Superstar",
            imgUrl: "/myprojectimages/Adidass-Superstar/Adidass-Superstar_1.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/Adidass-Superstar/Adidass-Superstar_1.png",
            price: 150,
            type: "sports",
            model: "Adidass",
            imgUrlArray: [
                "/myprojectimages/Adidass-Superstar/Adidass-Superstar_1.png",
                "/myprojectimages/Adidass-Superstar/Adidass-Superstar_3.png",
                "/myprojectimages/Adidass-Superstar/Adidass-Superstar_2.png",
                "/myprojectimages/Adidass-Superstar/Adidass-Superstar_4.png",
            ],

        },
        {
            id: 180094,
            name: "Crusher Distance Knitsneakers",
            imgUrl: "/myprojectimages/CrusherDistanceKnitsneakers/Crusher_Distance_Knit_sneaker__1_-removebg-preview.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/CrusherDistanceKnitsneakers/Crusher_Distance_Knit_sneaker__1_-removebg-preview.png",
            price: 150,
            model: "Emporio Armani 7",
            type: "sports",
            imgUrlArray: [
                "/myprojectimages/CrusherDistanceKnitsneakers/Crusher_Distance_Knit_sneaker__1_-removebg-preview.png",
                "/myprojectimages/CrusherDistanceKnitsneakers/Crusher_Distance_Knit_sneakers2-removebg-preview.png",
                "/myprojectimages/CrusherDistanceKnitsneakers/Crusher_Distance_Knit_sneakers-removebg-preview.png",
                "/myprojectimages/CrusherDistanceKnitsneakers/Crusher_Distance_Knit_sneakers3-removebg-preview.png",
            ],

        },
        {
            id: 1805094,
            name: "Tennis Proboard shorts",
            imgUrl: "/myprojectimages/TennisProboardshorts/Tennis_Pro_board_shorts-removebg-preview.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/TennisProboardshorts/Tennis_Pro_board_shorts-removebg-preview.png",
            price: 150,
            type: "sports",
            model: "Emporio Armani 7",
            imgUrlArray: [
                "/myprojectimages/TennisProboardshorts/Tennis_Pro_board_shorts-removebg-preview.png",
                "/myprojectimages/TennisProboardshorts/TennisPro_boardshort1-removebg-preview.png",
                "/myprojectimages/TennisProboardshorts/Tennis_Pro_board_shorts2-removebg-preview.png",
            ],

        },
        {
            id: 1099094,
            name: "T-shirtEvolution amanichelunghe",
            imgUrl: "/myprojectimages/T-shirtEvolutionamanichelunghe/w1600-removebg-preview.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/T-shirtEvolutionamanichelunghe/w1600-removebg-preview.png",
            price: 150,
            type: "sports",
            model: "Emporio Armani 7",
            imgUrlArray: [
                "/myprojectimages/T-shirtEvolutionamanichelunghe/w1600-removebg-preview.png",
                "/myprojectimages/T-shirtEvolutionamanichelunghe/w1280-removebg-preview.png",
                "/myprojectimages/T-shirtEvolutionamanichelunghe/w128j0-removebg-preview.png",
            ],

        },

    ],
    jewerly: [
        {
            id: 2099094,
            name: "Mandala",
            imgUrl: "/myprojectimages/Mandala/81ElmLiyawL._AC_SY500._SX._UX._SY._UY_-removebg-preview.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/Mandala/81ElmLiyawL._AC_SY500._SX._UX._SY._UY_-removebg-preview.png",
            price: 150,
            type: "jewerly",
            model: "Jewerly Art",
            imgUrlArray: [
                "/myprojectimages/Mandala/81ElmLiyawL._AC_SY500._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/Mandala/81ElRs-jxqL._AC_SY535._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/Mandala/81eXHlnvcEL._AC_SY575._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/Mandala/8134HjKfavL._AC_SY625._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/Mandala/81W5X-2G19L._AC_UY575_-removebg-preview.png"
            ],

        },
        {
            id: 2799094,
            name: "Swarovski FurtherClear Crystals",
            imgUrl: "/myprojectimages/SwarovskiFurtherClearCrystals/71KdbwYqy9L._AC_UY395_-removebg-preview.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/SwarovskiFurtherClearCrystals/71KdbwYqy9L._AC_UY395_-removebg-preview.png",
            price: 150,
            type: "jewerly",
            model: "Jewerly Art",
            imgUrlArray: [
                "/myprojectimages/SwarovskiFurtherClearCrystals/71KdbwYqy9L._AC_UY395_-removebg-preview.png",
                "/myprojectimages/SwarovskiFurtherClearCrystals/71QDLWAU1nL._AC_UY395_-removebg-preview.png",
                "/myprojectimages/SwarovskiFurtherClearCrystals/71uKz2MTa-L._AC_UY500_-removebg-preview.png",
                "/myprojectimages/SwarovskiFurtherClearCrystals/513EqwTAEML._AC_UY395_-removebg-preview.png",
                "/myprojectimages/SwarovskiFurtherClearCrystals/414kcDHtxeL._AC_UY395_-removebg-preview.png",
            ],

        },
        {
            id: 2799694,
            name: "Platinum Plated Mandal",
            imgUrl: "/myprojectimages/Platinum-Plated/610m0xyYHXL._AC_UY395_-removebg-preview.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/Platinum-Plated/610m0xyYHXL._AC_UY395_-removebg-preview.png",
            price: 150,
            type: "jewerly",
            model: "Jewerly Art",
            imgUrlArray: [
                "/myprojectimages/Platinum-Plated/610m0xyYHXL._AC_UY395_-removebg-preview.png",
                "/myprojectimages/Platinum-Plated/61Zs3ry9MKL._AC_UY500_-removebg-preview.png",
                "/myprojectimages/Platinum-Plated/51GyBiGI6vL._AC_UY395_-removebg-preview.png",
                "/myprojectimages/Platinum-Plated/51ioKabOXaL._AC_UY395_-removebg-preview.png",
            ],

        },
        {
            id: 2798694,
            name: "Plating OverSterling SilverPendant",
            imgUrl: "/myprojectimages/PlatingOverSterlingSilverPendant/81jvQaP2MwL._AC_UX385_-removebg-preview.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/PlatingOverSterlingSilverPendant/81jvQaP2MwL._AC_UX385_-removebg-preview.png",
            price: 150,
            type: "jewerly",
            model: "Jewerly Art",
            imgUrlArray: [
                "/myprojectimages/PlatingOverSterlingSilverPendant/81jvQaP2MwL._AC_UX385_-removebg-preview.png",
                "/myprojectimages/PlatingOverSterlingSilverPendant/71TAnKxPbPL._AC_UX385_-removebg-preview.png",
                "/myprojectimages/PlatingOverSterlingSilverPendant/61X+zlLoaML._AC_UX385_-removebg-preview.png",
                "/myprojectimages/PlatingOverSterlingSilverPendant/71a+cEWIhAL._AC_UX385_-removebg-preview.png",
            ],

        },
        {
            id: 2198694,
            name: "Swarowsky Culon",
            imgUrl: "/myprojectimages/SwarowskyCulon/71t20ESxTuL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/SwarowskyCulon/71t20ESxTuL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
            price: 150,
            type: "jewerly",
            model: "Jewerly Art",
            imgUrlArray: [
                "/myprojectimages/SwarowskyCulon/71t20ESxTuL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/SwarowskyCulon/71TK+4-S5TL._AC_UX385_-removebg-preview.png",
                "/myprojectimages/SwarowskyCulon/71VgxHAwzOL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/SwarowskyCulon/71WU9RNnhlL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/SwarowskyCulon/714ofQWJzBL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
            ],

        },


    ],
    camera: [
        {
            id: 9188690,
            name: "Instax Minipastel blue",
            imgUrl: "/myprojectimages/InstaxMinipastelblue/51T3ZomxaCL._AC_SL1200_-removebg-preview.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/InstaxMinipastelblue/51T3ZomxaCL._AC_SL1200_-removebg-preview.png",
            price: 300,
            type: "camera",
            model: "Instax",
            imgUrlArray: [
                "/myprojectimages/InstaxMinipastelblue/51T3ZomxaCL._AC_SL1200_-removebg-preview.png",
                "/myprojectimages/InstaxMinipastelblue/61WsTW+uRNL._AC_SL1200_-removebg-preview.png",
                "/myprojectimages/InstaxMinipastelblue/51LNs6qPZGL._AC_SL1200_-removebg-preview.png",
                "/myprojectimages/InstaxMinipastelblue/517Hqa2ysNL._AC_SL1200_-removebg-preview.png",
                "/myprojectimages/InstaxMinipastelblue/51yOcN7m4sL._AC_SL1200_-removebg-preview.png",
                "/myprojectimages/InstaxMinipastelblue/51CkVZo1UnL._AC_SL1200_-removebg-preview.png",
            ],

        },
        {
            id: 9198694,
            name: "Instax Mini Blossom Pink",
            imgUrl: "/myprojectimages/InstaxMiniBlossomPink/51XKzQLJL3L._AC_SL1500_-removebg-preview.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/InstaxMiniBlossomPink/51XKzQLJL3L._AC_SL1500_-removebg-preview.png",
            price: 300,
            type: "camera",
            model: "Instax",
            imgUrlArray: [
                "/myprojectimages/InstaxMiniBlossomPink/51XKzQLJL3L._AC_SL1500_-removebg-preview.png",
                "/myprojectimages/InstaxMiniBlossomPink/61BN19sZSiL._AC_SL1500_-removebg-preview.png",
                "/myprojectimages/InstaxMiniBlossomPink/61EKZ7Pav6L._AC_SL1500_-removebg-preview.png",
                "/myprojectimages/InstaxMiniBlossomPink/51YAf4kMS5L._AC_SL1500_-removebg-preview.png",
                "/myprojectimages/InstaxMiniBlossomPink/51Dlpowy91L._AC_SL1500_-removebg-preview.png",
                "/myprojectimages/InstaxMiniBlossomPink/510hFrn+1RL._AC_SL1500_-removebg-preview.png",
            ],

        },
        {
            id: 91887690,
            name: "Canon EOSR7",
            imgUrl: "/myprojectimages/CanonEOSR7/CAR7K-removebg-preview.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/CanonEOSR7/CAR7K-removebg-preview.png",
            price: 2600,
            type: "camera",
            model: "Canon",
            imgUrlArray: [
                "/myprojectimages/CanonEOSR7/CAR7K-removebg-preview.png",
                "/myprojectimages/CanonEOSR7/CAR7K_1-removebg-preview.png",
                "/myprojectimages/CanonEOSR7/CAR7K_4-removebg-preview.png",
                "/myprojectimages/CanonEOSR7/CAR7K_6-removebg-preview.png",
                "/myprojectimages/CanonEOSR7/CAR7K_9-removebg-preview.png",
                "/myprojectimages/CanonEOSR7/CAR7K_14-removebg-preview.png",
            ],

        },
        {
            id: 91487290,
            name: "Canon EOSR50",
            imgUrl: "/myprojectimages/CanonEOSR50/CAR50WK.jpg",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/CanonEOSR50/CAR50WK-removebg-preview.png",
            price: 1200,
            type: "camera",
            model: "Canon",
            imgUrlArray: [
                "/myprojectimages/CanonEOSR50/CAR50WK.jpg",
                "/myprojectimages/CanonEOSR50/CAR50WK_2.jpg",
                "/myprojectimages/CanonEOSR50/CAR50WK_3.jpg",
                "/myprojectimages/CanonEOSR50/CAR50WK_1.jpg",
                "/myprojectimages/CanonEOSR50/CAR50WK_5.jpg",
            ],

        },
        {
            id: 91411290,
            name: "Sony a 7III (ILCEM3KB)",
            imgUrl: "/myprojectimages/Sonya7III(ILCEM3KB)/517CEyCXIHL._AC_SL1000_-removebg-preview.png",
            navigate: "/searchitemsview",
            typeimage: "/myprojectimages/Sonya7III(ILCEM3KB)/517CEyCXIHL._AC_SL1000_-removebg-preview.png",
            price: 2900,
            model: "Sony",
            type: "camera",
            imgUrlArray: [
                "/myprojectimages/Sonya7III(ILCEM3KB)/517CEyCXIHL._AC_SL1000_-removebg-preview.png",
                "/myprojectimages/Sonya7III(ILCEM3KB)/61MiK+gVl4L._AC_SL1000_-removebg-preview.png",
                "/myprojectimages/Sonya7III(ILCEM3KB)/519CXmlsweL._AC_SL1000_-removebg-preview.png",
                "/myprojectimages/Sonya7III(ILCEM3KB)/51NEeAr+M9L._AC_SL1000_-removebg-preview.png",
                "/myprojectimages/Sonya7III(ILCEM3KB)/517yhzFugKL._AC_SL1000_-removebg-preview.png",
            ],

        },

    ]



}


export const isOpener: MyshoppingcardOpener = {
    isOpen: false

}

export const addtocartstate: AddtoCardPropertyes = {
    items: []
}


export const initialState: User = {
    user: [],
    isLoading: true
}


export const productsInitialState: ProductState = {
    cartQuantity: 1,
    products: [
        {
            id: 1,
            name: "Sony-PS Game Controiler",
            price: 1222,
            quantity: 1,
            preventPrice: 1222,
            cartQuantity: 1,
            type: "gamecantroler",
            hashCode: "005 gmd",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/Sony-wireless/1433003_002.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            color: [
                "#725EA6FF",
                "#A7262AFF",
                "#274495FF",
                "#D3D4D6FF",
                "#111113FF"
            ],
            imgUrlArray: [
                "/myprojectimages/Sony-wireless/1433003_002.jpg",
                "/myprojectimages/Sony-wireless/afd92c2aec7f7048f8a8ba6fc4609a6b.jpg",
                "/myprojectimages/Sony-wireless/1b979b7cc3045281bab97b7d7504e8c9.jpg",
                "/myprojectimages/Sony-wireless/c1d9275b9792d905f45e4761adc17250.jpg",
                "/myprojectimages/Sony-wireless/738d839e8cea90e88f35a06f955c8d60.jpg"
            ],
            isFollow: false,

        },
        {
            id: 2,
            name: "Xbox Game Controiler",
            price: 1222,
            quantity: 1,
            preventPrice: 1222,
            cartQuantity: 1,
            type: "gamecantroler",
            hashCode: "",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/Xbox-wireless/51WgKdIyJyS._AC_SL1000_.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            color: [
                "#111113FF",
                "#D6D6E0FF",
                "#234A8FFF",
                "#CF3F72FF",
                "#AF1209FF"
            ],
            imgUrlArray: [
                "/myprojectimages/Xbox-wireless/51WgKdIyJyS._AC_SL1000_.jpg",
                "/myprojectimages/Xbox-wireless/617v34sT0gL._AC_SL1500.jpg",
                "/myprojectimages/Xbox-wireless/61FczNmfCBL._AC_SL1500.jpg",
                "/myprojectimages/Xbox-wireless/51EUL2unjWL._AC_SL1080.jpg",
                "/myprojectimages/Xbox-wireless/41agf4-Cz6L._AC_SL1000.jpg"
            ],
            isFollow: false,

        },
        {
            id: 3,
            name: "Xbox ecsclusive Game Controiler",
            price: 1222,
            quantity: 1,
            preventPrice: 1222,
            cartQuantity: 1,
            type: "gamecantroler",
            hashCode: "",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/Xbox-wireless-special-blue/61cM+jwNNwL._AC_SL1500_.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/Xbox-wireless-special-blue/61cM+jwNNwL._AC_SL1500_.jpg",
                "/myprojectimages/Xbox-wireless-special-blue/61RUe9yKvHL._AC_SL1500_.jpg",
                "/myprojectimages/Xbox-wireless-special-blue/61YtJXbH46L._AC_SL1500_.jpg",
                "/myprojectimages/Xbox-wireless-special-blue/61SWvhbszyL._AC_SL1500_.jpg",
            ],
            isFollow: false,

            exclusive: true
        },
        {
            id: 30909,
            name: "Xbox Camo Special Edition",
            imgUrl: "/myprojectimages/XboxCamoSpecialEdition/XBQAU00073_2.jpg",
            type: "gamecantroler",
            quantity: 1,
            preventPrice: 1222,
            cartQuantity: 1,
            hashCode: "",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            price: 1222,
            imgUrlArray: [
                "/myprojectimages/XboxCamoSpecialEdition/XBQAU00073_2.jpg",
                "/myprojectimages/XboxCamoSpecialEdition/XBQAU00073.jpg",
                "/myprojectimages/XboxCamoSpecialEdition/XBQAU00073_1.jpg",
                "/myprojectimages/XboxCamoSpecialEdition/XBQAU00073_3.jpg",
            ],
            isFollow: false,
            exclusive: true
        },
        {
            id: 30919,
            name: "Xbox-Wireless-ElectricVolt",
            imgUrl: "/myprojectimages/XboxWirelessElectricVolt/XBQAU00021_1.jpg",
            price: 1222,
            type: "gamecantroler",
            quantity: 1,
            preventPrice: 1222,
            cartQuantity: 1,
            hashCode: "",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/XboxWirelessElectricVolt/XBQAU00021_1.jpg",
                "/myprojectimages/XboxWirelessElectricVolt/XBQAU00021.jpg",
                "/myprojectimages/XboxWirelessElectricVolt/XBQAU00021_2.jpg",
                "/myprojectimages/XboxWirelessElectricVolt/XBQAU00021_3.jpg",
            ],
            isFollow: false,
            exclusive: true
        },
        {
            id: 4,
            name: "Matiere grise steel-tables",
            price: 1383,
            quantity: 1,
            preventPrice: 1383,
            cartQuantity: 1,
            hashCode: "87000 9",
            type: "furniture",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/matiere_tables/matiere-grise-set-of-3-low-steel-tables-1.png",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/matiere_tables/matiere-grise-set-of-3-low-steel-tables-1.png",
                "/myprojectimages/matiere_tables/matiere-grise-set-of-3-low-steel-tables-2.png",
                "/myprojectimages/matiere_tables/matiere-grise-set-of-3-low-steel-tables-3.png",
                "/myprojectimages/matiere_tables/matiere-grise-set-of-3-low-steel-tables-4.png",
                "/myprojectimages/matiere_tables/matiere-grise-set-of-3-low-steel-tables-6.png",
            ],
            isFollow: false,


        },
        {
            id: 509,
            name: "Cornersofa Beller TextileYellow",
            price: 1700,
            quantity: 1,
            preventPrice: 1700,
            cartQuantity: 1,
            hashCode: "87000 9",
            type: "furniture",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/CornersofaBellerTextileYellow/4683760.png",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/CornersofaBellerTextileYellow/4686476.png",
                "/myprojectimages/CornersofaBellerTextileYellow/4683764.png",
                "/myprojectimages/CornersofaBellerTextileYellow/4686477.png",
                "/myprojectimages/CornersofaBellerTextileYellow/4683766.png",
                "/myprojectimages/CornersofaBellerTextileYellow/4683763.png",

            ],
            isFollow: false,
            exclusive: true


        },
        {
            id: 5,
            name: "Furniture arno sofa sea blue",
            imgUrl: "/myprojectimages/furniture-arno-sofa-sea-blue/tov-s165-1_2000x.png",
            type: "furniture",
            price: 800,
            quantity: 1,
            preventPrice: 800,
            cartQuantity: 1,
            infoTxt: "",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            hashCode: "87000 9",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/furniture-arno-sofa-sea-blue/tov-s165-1_2000x.png",
                "/myprojectimages/furniture-arno-sofa-sea-blue/tov-s165-2_2000x.png",
                "/myprojectimages/furniture-arno-sofa-sea-blue/tov-s165-3_2000x.png",
                "/myprojectimages/furniture-arno-sofa-sea-blue/tov-s165-4_2000x.png",
            ],
            isFollow: false,
            exclusive: true
        },
        {
            id: 513,
            name: "sofa sean velvet",
            price: 800,
            quantity: 1,
            preventPrice: 800,
            cartQuantity: 1,
            hashCode: "87000 9",
            type: "furniture",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/sofa-sean-velvet/sofa-sean-velvet-3-seat-sofa-23_1500x1500_0ed9a221-356c-46bd-9a63-bb2f1773765f.png",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/sofa-sean-velvet/sofa-sean-velvet-3-seat-sofa-23_1500x1500_0ed9a221-356c-46bd-9a63-bb2f1773765f.png",
                "/myprojectimages/sofa-sean-velvet/sofa-sean-velvet-3-seat-sofa-24_1500x1500_88f80437-46d1-421a-b526-78df3ceec23a.png",
                "/myprojectimages/sofa-sean-velvet/sofa-sean-velvet-3-seat-sofa-25_1500x1500_9d13e513-5a59-4ba2-9654-39e2b1210520.png",
                "/myprojectimages/sofa-sean-velvet/sofa-sean-velvet-3-seat-sofa-27_1500x1500_f45313a9-4fb9-48c1-89ce-de3acf0eea28.png",
                "/myprojectimages/sofa-sean-velvet/sofa-sean-velvet-3-seat-sofa-28_1500x1500_38179e7b-5dc0-4040-add6-5a5c303a876f.png",
            ],
            isFollow: false,

            exclusive: true


        },
        {
            id: 599,
            name: "Enthusiastic Channel Velvet Sofa",
            price: 800,
            quantity: 1,
            preventPrice: 800,
            cartQuantity: 1,
            hashCode: "87000 9",
            type: "furniture",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/EnthusiasticVerticalChannelTuftedCurvedPerformanceVelvetSofa/EEI-3407-GRY_1_1024x1024.png",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/EnthusiasticVerticalChannelTuftedCurvedPerformanceVelvetSofa/EEI-3407-GRY_1_1024x1024.png",
                "/myprojectimages/EnthusiasticVerticalChannelTuftedCurvedPerformanceVelvetSofa/EEI-3407-GRY_2_1024x1024.png",
                "/myprojectimages/EnthusiasticVerticalChannelTuftedCurvedPerformanceVelvetSofa/EEI-3407-GRY_3_1024x1024_1.jpg",
                "/myprojectimages/EnthusiasticVerticalChannelTuftedCurvedPerformanceVelvetSofa/EEI-3407-GRY_4_1024x1024_1.jpg",
            ],
            isFollow: false,

            exclusive: true


        },
        {
            id: 511,
            name: "Sofa-Elling-pink",
            price: 800,
            quantity: 1,
            preventPrice: 800,
            cartQuantity: 1,
            hashCode: "87000 9",
            type: "furniture",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/SofaEllingpink/DV-000652071.png",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/SofaEllingpink/DV-000652071.png",
                "/myprojectimages/SofaEllingpink/DV-000652072.png",
                "/myprojectimages/SofaEllingpink/DV-000652074.png",
                "/myprojectimages/SofaEllingpink/DV-000652073.png",
                "/myprojectimages/SofaEllingpink/DV-000652075.png",

            ],
            isFollow: false,

            exclusive: true


        },
        {
            id: 514,
            name: "Plazas-nordico-desenfundabl-sofa ",
            price: 800,
            quantity: 1,
            preventPrice: 800,
            cartQuantity: 1,
            hashCode: "87000 9",
            type: "furniture",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/sofa-2-plazas-nordico-desenfundabl/sofa-2-plazas-nordico-desenfundable-azul-petroleo-y-madera-ynok-48795-5fb2a2116eea2_1200_675_.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/sofa-2-plazas-nordico-desenfundabl/sofa-2-plazas-nordico-desenfundable-azul-petroleo-y-madera-ynok-48795-5fb2a2116eea2_1200_675_.jpg",
                "/myprojectimages/sofa-2-plazas-nordico-desenfundabl/sofa-2-plazas-nordico-desenfundable-azul-petroleo-y-madera-ynok-48795-5fb2a21306677_1200_675_.jpg",
                "/myprojectimages/sofa-2-plazas-nordico-desenfundabl/sofa-2-plazas-nordico-desenfundable-azul-petroleo-y-madera-ynok-48795-5fb2a21440e24_1200_675_.jpg",
                "/myprojectimages/sofa-2-plazas-nordico-desenfundabl/sofa-2-plazas-nordico-desenfundable-azul-petroleo-y-madera-ynok-48795-5fb2a217131b0_1200_675_.jpg",
                "/myprojectimages/sofa-2-plazas-nordico-desenfundabl/sofa-2-plazas-nordico-desenfundable-azul-petroleo-y-madera-ynok-48795-5fb2a2199df34_1200_675_.jpg",

            ],
            isFollow: false,

            exclusive: true


        },
        {
            id: 6,
            name: "Beats-studio3-wireless-mx",
            price: 800,
            quantity: 1,
            preventPrice: 800,
            type: "headphones",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/beats-studio-wireless-over-ear-headphones/beats-studio3-wireless-over-ear-headphones-d-20200619123151573~9473950w_100.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/beats-studio-wireless-over-ear-headphones/beats-studio3-wireless-over-ear-headphones-d-20200619123151573~9473950w_100.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones/beats-studio3-wireless-over-ear-headphones-d-20200302112958283~9473950w_alt3.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones/beats-studio3-wireless-over-ear-headphones-d-2020030211300174~9473950w_alt.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones/beats-studio3-wireless-over-ear-headphones-d-20200302113001233~9473950w_alt4.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones/beats-studio3-wireless-over-ear-headphones-d-20200302113003213~9473950w_alt6.jpg",
            ],
            isFollow: false,

            exclusive: true


        },
        {
            id: 7,
            name: "Beats-studio3-wireless-mx",
            price: 800,
            quantity: 1,
            preventPrice: 800,
            type: "headphones",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja-av/btmx412lla.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja-av/btmx412lla.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja-av/btmx412lla_5.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja-av/btmx412lla_2.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja-av/btmx412lla_4.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja-av/btmx412lla_6.jpg",
            ],
            isFollow: false,

            exclusive: true


        },
        {
            id: 7777,
            price: 800,
            quantity: 1,
            preventPrice: 800,
            name: "Beatsby Dr.DreBeats Solo-3",
            imgUrl: "/myprojectimages/BeatsbyDr.DreBeatsSolo3/BTMX432LLA-removebg-preview.png",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            type: "headphones",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/BeatsbyDr.DreBeatsSolo3/BTMX432LLA-removebg-preview.png",
                "/myprojectimages/BeatsbyDr.DreBeatsSolo3/BTMX432LLA_1-removebg-preview.png",
                "/myprojectimages/BeatsbyDr.DreBeatsSolo3/BTMX432LLA_3-removebg-preview.png",
                "/myprojectimages/BeatsbyDr.DreBeatsSolo3/BTMX432LLA_2-removebg-preview.png",
                "/myprojectimages/BeatsbyDr.DreBeatsSolo3/BTMX432LLA_5-removebg-preview.png",
            ],
            isFollow: false,

            exclusive: true

        },
        {
            id: 8,
            name: "Beats-studio3-wireless-mx",
            price: 800,
            quantity: 1,
            preventPrice: 800,
            type: "headphones",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja/btmx422lla.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja/btmx422lla.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja/btmx422lla_3.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja/btmx422lla_4.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja/btmx422lla_5.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mxja/btmx422lla_6.jpg",
            ],
            isFollow: false,

            exclusive: true


        },
        {
            id: 9,
            name: "Beats-studio3-wireless-mx",
            price: 800,
            quantity: 1,
            preventPrice: 800,
            type: "headphones",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/beats-studio-wireless-over-ear-headphones-mx/typebtmx402lla-removebg-preview.png",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mx/btmx402lla.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mx/btmx402lla_5.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mx/btmx402lla_4.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mx/btmx402lla_2.jpg",
                "/myprojectimages/beats-studio-wireless-over-ear-headphones-mx/btmx402lla_6.jpg",
            ],
            isFollow: false,
            exclusive: true


        },
        {
            id: 10,
            name: "Apple-Macbok-16-pro",
            price: 2600,
            quantity: 1,
            preventPrice: 2600,
            type: "computers",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/Apple-Macbok-16-pro/ACMK183LLA1.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/Apple-Macbok-16-pro/ACMK183LLA1.jpg",
                "/myprojectimages/Apple-Macbok-16-pro/ACMK183LLA1_3.jpg",
                "/myprojectimages/Apple-Macbok-16-pro/ACMK183LLA1_4.jpg",
                "/myprojectimages/Apple-Macbok-16-pro/ACMK183LLA1_2.jpg",
                "/myprojectimages/Apple-Macbok-16-pro/download.jpg",
            ],
            isFollow: false,
            exclusive: true


        },


        {
            id: 11,
            name: "Apple-MacBook-Air-13.6",
            price: 1600,
            quantity: 1,
            preventPrice: 1600,
            type: "computers",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/AppleMacBookAir13.6/ACMLY43LLA.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/AppleMacBookAir13.6/ACMLY43LLA.jpg",
                "/myprojectimages/AppleMacBookAir13.6/ACMLY43LLA_3.jpg",
                "/myprojectimages/AppleMacBookAir13.6/ACMLY43LLA_5.jpg",
                "/myprojectimages/AppleMacBookAir13.6/ACMLY43LLA_6.jpg",
                "/myprojectimages/AppleMacBookAir13.6/ACMLY43LLA_2.jpg",
            ],
            isFollow: false,
            exclusive: true


        },
        {
            id: 12,
            name: "Apple-MacBook-Pro-16",
            price: 1800,
            quantity: 1,
            preventPrice: 1800,
            type: "computers",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/AppleMacBookPro16withLiquidRetinaXDR/ACMK1F3LLA12.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/AppleMacBookPro16withLiquidRetinaXDR/ACMK1F3LLA12.jpg",
                "/myprojectimages/AppleMacBookPro16withLiquidRetinaXDR/ACMK1F3LLA12_3.jpg",
                "/myprojectimages/AppleMacBookPro16withLiquidRetinaXDR/ACMK1F3LLA12_1.jpg",
                "/myprojectimages/AppleMacBookPro16withLiquidRetinaXDR/ACMK1F3LLA12_2.jpg",
            ],
            isFollow: false,
            exclusive: true


        },
        {
            id: 13,
            name: "Acer-predator 2023",
            price: 3900,
            quantity: 1,
            preventPrice: 3900,
            type: "computers",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/Acer-predator/ACNHQK3AA001.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/Acer-predator/ACNHQK3AA001.jpg",
                "/myprojectimages/Acer-predator/ACNHQK3AA001_8.jpg",
                "/myprojectimages/Acer-predator/ACNHQK3AA001_2.jpg",
                "/myprojectimages/Acer-predator/ACNHQK3AA001_3.jpg",
                "/myprojectimages/Acer-predator/ACNHQK3AA001_7.jpg",
                "/myprojectimages/Acer-predator/ACNHQK3AA001_5.jpg",
            ],
            isFollow: false,
            exclusive: true


        },
        {
            id: 14,
            name: "Acer-2023-Aspire-5-FHDIPS",
            price: 1600,
            quantity: 1,
            preventPrice: 1600,
            type: "computers",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/Acer2023Aspire5FHDIPS/51DuoPsdk9L._AC_SL1000_.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/Acer2023Aspire5FHDIPS/51DuoPsdk9L._AC_SL1000_.jpg",
                "/myprojectimages/Acer2023Aspire5FHDIPS/61f5+c3iiBL._AC_SL1500_.jpg",
                "/myprojectimages/Acer2023Aspire5FHDIPS/61YnjMLr3pL._AC_SL1500_.jpg",
                "/myprojectimages/Acer2023Aspire5FHDIPS/41cUZDT8AGL._AC_SL1000_.jpg",
                "/myprojectimages/Acer2023Aspire5FHDIPS/51HIkCXD0WL._AC_SL1500_.jpg",
            ],
            isFollow: false,
            exclusive: true


        },
        {
            id: 15,
            name: "ASUS-2023-ProArt-16OLED-Laptop",
            price: 2600,
            quantity: 1,
            preventPrice: 2600,
            type: "computers",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/ASUS2023ProArtStudioBook16OLEDLaptop/81k9wtz4kFL._AC_SL1500_.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/ASUS2023ProArtStudioBook16OLEDLaptop/81k9wtz4kFL._AC_SL1500_.jpg",
                "/myprojectimages/ASUS2023ProArtStudioBook16OLEDLaptop/71gSE67YHkL._AC_SL1500_.jpg",
                "/myprojectimages/ASUS2023ProArtStudioBook16OLEDLaptop/81Hvt9HN1eL._AC_SL1500_.jpg",
                "/myprojectimages/ASUS2023ProArtStudioBook16OLEDLaptop/61V1oMeRUiL._AC_SL1500_.jpg",
                "/myprojectimages/ASUS2023ProArtStudioBook16OLEDLaptop/51xFFCyWXiL._AC_SL1500_.jpg",
            ],
            isFollow: false,
            exclusive: true


        },
        {
            id: 16,
            name: "ASUS-ROG-Strix-Scar-18",
            price: 2900,
            quantity: 1,
            preventPrice: 2900,
            type: "computers",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/ASUSROGStrixScar18/819IGJqXvOL._AC_SL1500_.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/ASUSROGStrixScar18/819IGJqXvOL._AC_SL1500_.jpg",
                "/myprojectimages/ASUSROGStrixScar18/71IgT8VBLGL._AC_SL1500_.jpg",
                "/myprojectimages/ASUSROGStrixScar18/81zNQsY1gCL._AC_SL1500_.jpg",
                "/myprojectimages/ASUSROGStrixScar18/810BnHvCCpL._AC_SL1500_.jpg",
                "/myprojectimages/ASUSROGStrixScar18/81oFqzYqkkL._AC_SL1500_.jpg",
            ],
            isFollow: false,
            exclusive: true


        },
        {
            id: 17,
            name: "HP_OMENLaptop2023",
            price: 1400,
            quantity: 1,
            preventPrice: 1400,
            type: "computers",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/HP_OMENLaptop2023/61yTEMSH2DL._AC_SL1500_.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/HP_OMENLaptop2023/61yTEMSH2DL._AC_SL1500_.jpg",
                "/myprojectimages/HP_OMENLaptop2023/61Pj4CO-DyL._AC_SL1500_.jpg",
                "/myprojectimages/HP_OMENLaptop2023/617xqFPITHL._AC_SL1500_.jpg",
                "/myprojectimages/HP_OMENLaptop2023/51SBJcC2FmL._AC_SL1500_.jpg",
                "/myprojectimages/HP_OMENLaptop2023/411xJGI2nOL._AC_SL1500_.jpg",
            ],
            isFollow: false,
            exclusive: true


        },
        {
            id: 160,
            name: "Minioven-Atlanta-ATH-1410-black",
            price: 290,
            quantity: 1,
            preventPrice: 290,
            type: "electronics",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/MiniovenAtlantaATH-1410black/f147cce01dc9ec2e755c5760e4357b13ec2ba45d93978bb8756ae2738e92a5ac.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/MiniovenAtlantaATH-1410black/f147cce01dc9ec2e755c5760e4357b13ec2ba45d93978bb8756ae2738e92a5ac.jpg",
                "/myprojectimages/MiniovenAtlantaATH-1410black/3580fb44129c20ff26105b2f90a4f954f9075304c9abce1079f9b726e950cf5a.jpg.png",
                "/myprojectimages/MiniovenAtlantaATH-1410black/607630bfc188b690964468673602f2ffff3783fdf0627a7ee3ac4975f670377e.jpg.png",
                "/myprojectimages/MiniovenAtlantaATH-1410black/356ddb0d6a7deeebbc7afadf064ea69d47ebf5326082823f4de523c62312cdb4.jpg.png",
                "/myprojectimages/MiniovenAtlantaATH-1410black/3e5497194e737f36aa0171cea3fee4bf1fd4c748f0641e7e6e1c50d90ee43a12.jpg.png",
            ],
            isFollow: false,
            exclusive: true


        },
        {
            id: 161,
            name: "Electrolux-RKR660204X",
            price: 290,
            quantity: 1,
            preventPrice: 490,
            type: "electronics",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/ElectroluxRKR660204X/5294301.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/ElectroluxRKR660204X/5294301.jpg",
                "/myprojectimages/ElectroluxRKR660204X/5294301-4.jpg",
                "/myprojectimages/ElectroluxRKR660204X/5294301-5.jpg",
                "/myprojectimages/ElectroluxRKR660204X/5294301-2.jpg",
                "/myprojectimages/ElectroluxRKR660204X/5294301-3.jpg",
            ],
            isFollow: false,
            exclusive: true


        },
        {
            id: 163,
            name: "Bosch-KGN-86AI32",
            price: 490,
            quantity: 1,
            preventPrice: 490,
            type: "electronics",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/BoschKGN86AI32/type5301770-removebg-preview.png",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/BoschKGN86AI32/type5301770-removebg-preview.png",
                "/myprojectimages/BoschKGN86AI32/5301770-3.jpg",
                "/myprojectimages/BoschKGN86AI32/5301770-7.jpg",
                "/myprojectimages/BoschKGN86AI32/5301770-6.jpg",
                "/myprojectimages/BoschKGN86AI32/5301770-5.jpg",
            ],
            isFollow: false,
            exclusive: true
        },
        {
            id: 164,
            name: "Samsung-WW11BB-744CGBLP",
            price: 490,
            quantity: 1,
            preventPrice: 490,
            type: "electronics",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/SamsungWW11BB744CGBLP/720855.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/SamsungWW11BB744CGBLP/720855.jpg",
                "/myprojectimages/SamsungWW11BB744CGBLP/720855-1_1.png",
                "/myprojectimages/SamsungWW11BB744CGBLP/720855-2_1.png",
                "/myprojectimages/SamsungWW11BB744CGBLP/720855-3_1.png",
                "/myprojectimages/SamsungWW11BB744CGBLP/720855-4_1.png",
            ],
            isFollow: false,
            exclusive: true
        },
        {
            id: 104,
            name: "Highclere1.5L-Electric-KettleBPA",
            price: 290,
            quantity: 1,
            preventPrice: 290,
            type: "electronics",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/Highclere1.5L-6CupCordlessElectricKettleBPAFreewithAutoShut-Off-75025/60a6ef5ba8c5966370617a3cf31d2ced.jpeg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/Highclere1.5L-6CupCordlessElectricKettleBPAFreewithAutoShut-Off-75025/60a6ef5ba8c5966370617a3cf31d2ced.jpeg",
                "/myprojectimages/Highclere1.5L-6CupCordlessElectricKettleBPAFreewithAutoShut-Off-75025/0e1c18436aa4306d69864a8a52b932f3.jpeg",
                "/myprojectimages/Highclere1.5L-6CupCordlessElectricKettleBPAFreewithAutoShut-Off-75025/61uUjrOqpIL._AC_SY550_.jpg",
                "/myprojectimages/Highclere1.5L-6CupCordlessElectricKettleBPAFreewithAutoShut-Off-75025/1f424ab04500ae52677d5141b040be3e.jpeg",
                "/myprojectimages/Highclere1.5L-6CupCordlessElectricKettleBPAFreewithAutoShut-Off-75025/4f5d403a37146fa066b2d2cd43517839.jpeg",
            ],
            isFollow: false,
            exclusive: true
        },
        {
            id: 105,
            name: "Haden-Heritage-1.7L-Stainless-Steel",
            price: 490,
            quantity: 1,
            preventPrice: 490,
            type: "electronics",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle-Black-Chrome/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle,-Black-Chrome1.png",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "19"
            },
            imgUrlArray: [
                "/myprojectimages/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle-Black-Chrome/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle,-Black-Chrome1.png",
                "/myprojectimages/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle-Black-Chrome/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle,-Black-Chrome2.png",
                "/myprojectimages/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle-Black-Chrome/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle,-Black-Chrome3.png",
                "/myprojectimages/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle-Black-Chrome/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle,-Black-Chrome4.jpg",
                "/myprojectimages/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle-Black-Chrome/Haden-Heritage-1.7L-Stainless-Steel-Body-Retro-Electric-Kettle,-Black-Chrome5.jpg",
            ],
            isFollow: false,
            exclusive: true
        },
        {
            id: 106,
            name: "Toaster-SmegTSF-02BLEU",
            price: 490,
            quantity: 1,
            preventPrice: 490,
            type: "electronics",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/Toaster-SmegTSF02BLEU/p860962-1mw.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/Toaster-SmegTSF02BLEU/p860962-1mw.jpg",
                "/myprojectimages/Toaster-SmegTSF02BLEU/p860962-0mw.jpg",
                "/myprojectimages/Toaster-SmegTSF02BLEU/p860962-2mw.jpg",
                "/myprojectimages/Toaster-SmegTSF02BLEU/p860962-3mw.jpg",
                "/myprojectimages/Toaster-SmegTSF02BLEU/p860962-4mw.jpg",
            ],
            isFollow: false,
            exclusive: true
        },
        {
            id: 176,
            name: "Obag-Mini",
            price: 250,
            quantity: 1,
            preventPrice: 250,
            type: "accsessories",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/ObagMini/COBC2A02_TE001_017_1-650x650.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/ObagMini/COBC2A02_TE001_017_1-650x650.jpg",
                "/myprojectimages/ObagMini/COBC2A02_TE001_017_2-650x650.jpg",
                "/myprojectimages/ObagMini/COBC2A02_TE001_017_3-650x650.jpg",
                "/myprojectimages/ObagMini/COBC2A02_TE001_017_4-650x650.jpg",
                "/myprojectimages/ObagMini/COBC2A02_TE001_017_5-650x650.jpg",
            ],
            isFollow: false,
            exclusive: true
        },
        {
            id: 177,
            name: "HERMES-Mini-Kelly",
            price: 250,
            quantity: 1,
            preventPrice: 250,
            type: "accsessories",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/HERMESNEWMiniKelly20SellierBlueGreenCognacGoldSmallTopHandleBag/v_14230622_1639826426980_bg_processed.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/HERMESNEWMiniKelly20SellierBlueGreenCognacGoldSmallTopHandleBag/v_14230622_1639826426980_bg_processed.jpg",
                "/myprojectimages/HERMESNEWMiniKelly20SellierBlueGreenCognacGoldSmallTopHandleBag/15250fc7c4ebcd36054d8c075f9af9b4_1296x_master.jpg",
                "/myprojectimages/HERMESNEWMiniKelly20SellierBlueGreenCognacGoldSmallTopHandleBag/3e8ed87093b72ad6001885bb914ff51b_1296x_master.jpg",
                "/myprojectimages/HERMESNEWMiniKelly20SellierBlueGreenCognacGoldSmallTopHandleBag/a37417ce3da8cc84e75229da7763071f_1296x_master.jpg",
            ],
            isFollow: false,
            exclusive: true
        },
        {
            id: 178,
            name: "HERMÈS-LeatherKelly",
            price: 250,
            quantity: 1,
            preventPrice: 250,
            type: "accsessories",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/HERMÈSBougainvilleaEpsom LeatherKelly32cmRetourne/v_17660772_1668769153656_bg_processed.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/HERMÈSBougainvilleaEpsom LeatherKelly32cmRetourne/v_17660772_1668769153656_bg_processed.jpg",
                "/myprojectimages/HERMÈSBougainvilleaEpsom LeatherKelly32cmRetourne/i05_master.jpg",
                "/myprojectimages/HERMÈSBougainvilleaEpsom LeatherKelly32cmRetourne/i02_master.jpg",
                "/myprojectimages/HERMÈSBougainvilleaEpsom LeatherKelly32cmRetourne/i03_master.jpg",
                "/myprojectimages/HERMÈSBougainvilleaEpsom LeatherKelly32cmRetourne/i06_master.jpg",
            ],
            isFollow: false,
            exclusive: true
        },
        {
            id: 179,
            name: "ChanelAqua-Lambskin",
            price: 250,
            quantity: 1,
            preventPrice: 250,
            type: "accsessories",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            imgUrl: "/myprojectimages/ChanelAquaLambskinTrendyCCTopHandle/12580_Chanel_Agneau_Quilted_Lambskin_Coco_Handle_wGH_9_750_1__master.jpg",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/ChanelAquaLambskinTrendyCCTopHandle/12580_Chanel_Agneau_Quilted_Lambskin_Coco_Handle_wGH_9_750_1__master.jpg",
                "/myprojectimages/ChanelAquaLambskinTrendyCCTopHandle/v_15865332_1653424510916_bg_processed.jpg",
                "/myprojectimages/ChanelAquaLambskinTrendyCCTopHandle/12580_Chanel_Agneau_Quilted_Lambskin_Coco_Handle_wGH_9_750_2__master.jpg",
                "/myprojectimages/ChanelAquaLambskinTrendyCCTopHandle/12580_Chanel_Agneau_Quilted_Lambskin_Coco_Handle_wGH_9_750_4__master.jpg",
                "/myprojectimages/ChanelAquaLambskinTrendyCCTopHandle/12580_Chanel_Agneau_Quilted_Lambskin_Coco_Handle_wGH_9_750_5__master.jpg",
            ],
            isFollow: false,
            exclusive: true
        },
        {
            id: 17909,
            quantity: 1,
            preventPrice: 250,
            name: "1994Hermes KellySelllier",
            imgUrl: "/myprojectimages/1994HermesVertFonceRougeH&IndigoBoxCalfVintageKelly32cmSelllier/12616582_master.jpg",
            price: 250,
            type: "accsessories",
            cartQuantity: 1,
            hashCode: "87000 9",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/1994HermesVertFonceRougeH&IndigoBoxCalfVintageKelly32cmSelllier/12616582_master.jpg",
                "/myprojectimages/1994HermesVertFonceRougeH&IndigoBoxCalfVintageKelly32cmSelllier/i02_master.jpg",
                "/myprojectimages/1994HermesVertFonceRougeH&IndigoBoxCalfVintageKelly32cmSelllier/i04_master.jpg",
                "/myprojectimages/1994HermesVertFonceRougeH&IndigoBoxCalfVintageKelly32cmSelllier/i05_master.jpg",
                "/myprojectimages/1994HermesVertFonceRougeH&IndigoBoxCalfVintageKelly32cmSelllier/i06_master.jpg",
            ],
            isFollow: false,
            exclusive: true

        },
        {
            id: 141,
            name: "Emporio-Armani-7-trousers",
            imgUrl: "/myprojectimages/EmporioArmani7trousers/EmporioArmani7_1.png",
            price: 250,
            quantity: 1,
            preventPrice: 250,
            type: "clotes",
            cartQuantity: 1,
            infoTxt: "",
            hashCode: "87000 9",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            imgUrlArray: [
                "/myprojectimages/EmporioArmani7trousers/EmporioArmani7_1.png",
                "/myprojectimages/EmporioArmani7trousers/EmporioArmani7_2.png",
                "/myprojectimages/EmporioArmani7trousers/EmporioArmani7_3.png",
                "/myprojectimages/EmporioArmani7trousers/EmporioArmani7_4.png",
            ],
            isFollow: false,


        },
        {
            id: 142,
            name: "Jordan-Tshirt",
            preventPrice: 150,
            type: "clotes",
            quantity: 1,
            cartQuantity: 1,
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            imgUrl: "/myprojectimages/Jordan-Tshirt/Jordan-CJ0921-010-Black-L__1.jpg",
            hashCode: "89798",
            infoTxt: "",
            price: 150,
            imgUrlArray: [
                "/myprojectimages/Jordan-Tshirt/Jordan-CJ0921-010-Black-L__1.jpg",
                "/myprojectimages/Jordan-Tshirt/Jordan-CJ0921-091-Grey-L__1.jpg",
                "/myprojectimages/Jordan-Tshirt/Jordan-CJ0921-410-Blue-L__1.jpg",
                "/myprojectimages/Jordan-Tshirt/Jordan-CJ0921-687-Red-L__1.jpg",
            ],
            isFollow: false
        },
        {
            id: 143,
            name: "Nike-Tshirt",
            quantity: 1,
            cartQuantity: 1,
            imgUrl: "/myprojectimages/NikeTshirt/Nike-PS-891953-Black-L__1.jpg",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            price: 150,
            type: "clotes",
            preventPrice: 150,
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/NikeTshirt/Nike-PS-891953-Black-L__1.jpg",
                "/myprojectimages/NikeTshirt/Nike-PS-891953-Blue-L__1.jpg",
                "/myprojectimages/NikeTshirt/Nike-PS-891953-Red-L__1.jpg",
            ],
            isFollow: false,
        },
        {
            id: 144,
            name: "Amazhiyu WomenCropped Sweatshirt",
            quantity: 1,
            cartQuantity: 1,
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            imgUrl: "/myprojectimages/AmazhiyuWomenCroppedSweatshirt/71p-BbMfdcL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
            price: 150,
            type: "clotes",
            preventPrice: 150,
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/AmazhiyuWomenCroppedSweatshirt/71p-BbMfdcL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/AmazhiyuWomenCroppedSweatshirt/61kI2cRv8vL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/AmazhiyuWomenCroppedSweatshirt/51pIQDPAJRL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
            ],
            isFollow: false

        },
        {
            id: 145,
            name: "Dynamic AthleteT-shirt",
            quantity: 1,
            cartQuantity: 1,
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            imgUrl: "/myprojectimages/DynamicAthleteT-shirt/Dynamic_Athlete_T-shirt-removebg-preview.png",
            price: 150,
            type: "clotes",
            preventPrice: 150,
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/DynamicAthleteT-shirt/Dynamic_Athlete_T-shirt-removebg-preview.png",
                "/myprojectimages/DynamicAthleteT-shirt/Dynamic_Athlete_T-shirt2-removebg-preview.png",
                "/myprojectimages/DynamicAthleteT-shirt/Dynamic_Athlete_T-shirt3-removebg-preview.png",
                "/myprojectimages/DynamicAthleteT-shirt/Dynamic_Athlete_T-shirt4-removebg-preview.png",
            ],
            isFollow: false

        },
        {
            id: 183,
            name: "Nike-Cross",
            quantity: 1,
            cartQuantity: 1,
            imgUrl: "/myprojectimages/Nike-Cross/Nike_cross_1.png",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            price: 150,
            type: "sports",
            preventPrice: 150,
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/Nike-Cross/Nike_cross_1.png",
                "/myprojectimages/Nike-Cross/Nike_cross_3.png",
                "/myprojectimages/Nike-Cross/Nike_cross_4.png",
                "/myprojectimages/Nike-Cross/Nike_cross_2.png",
            ],
            isFollow: false,
        },
        {
            id: 184,
            name: "Adidass-Superstar",
            quantity: 1,
            cartQuantity: 1,
            imgUrl: "/myprojectimages/Adidass-Superstar/Adidass-Superstar_1.png",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            price: 150,
            type: "sports",
            preventPrice: 150,
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/Adidass-Superstar/Adidass-Superstar_1.png",
                "/myprojectimages/Adidass-Superstar/Adidass-Superstar_3.png",
                "/myprojectimages/Adidass-Superstar/Adidass-Superstar_2.png",
                "/myprojectimages/Adidass-Superstar/Adidass-Superstar_4.png",
            ],
            isFollow: false,
        },
        {
            id: 180094,
            name: "CrusherDistance Knitsneakers",
            imgUrl: "/myprojectimages/CrusherDistanceKnitsneakers/Crusher_Distance_Knit_sneaker__1_-removebg-preview.png",
            quantity: 1,
            cartQuantity: 1,
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            price: 150,
            type: "sports",
            preventPrice: 150,
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/CrusherDistanceKnitsneakers/Crusher_Distance_Knit_sneaker__1_-removebg-preview.png",
                "/myprojectimages/CrusherDistanceKnitsneakers/Crusher_Distance_Knit_sneakers2-removebg-preview.png",
                "/myprojectimages/CrusherDistanceKnitsneakers/Crusher_Distance_Knit_sneakers-removebg-preview.png",
                "/myprojectimages/CrusherDistanceKnitsneakers/Crusher_Distance_Knit_sneakers3-removebg-preview.png",
            ],
            isFollow: false

        },
        {
            id: 1805094,
            name: "Tennis Proboardshorts",
            quantity: 1,
            cartQuantity: 1,
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            imgUrl: "/myprojectimages/TennisProboardshorts/Tennis_Pro_board_shorts-removebg-preview.png",
            preventPrice: 150,
            favoriteImgUrl: [],
            price: 150,
            type: "sports",
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/TennisProboardshorts/Tennis_Pro_board_shorts-removebg-preview.png",
                "/myprojectimages/TennisProboardshorts/TennisPro_boardshort1-removebg-preview.png",
                "/myprojectimages/TennisProboardshorts/Tennis_Pro_board_shorts2-removebg-preview.png",
            ],
            isFollow: false

        },
        {
            id: 1099094,
            name: "T-shirtEvolution amanichelunghe",
            imgUrl: "/myprojectimages/T-shirtEvolutionamanichelunghe/w1600-removebg-preview.png",
            quantity: 1,
            cartQuantity: 1,
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            price: 150,
            preventPrice: 150,
            type: "sports",
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            favoriteImgUrl: [],
            imgUrlArray: [
                "/myprojectimages/T-shirtEvolutionamanichelunghe/w1600-removebg-preview.png",
                "/myprojectimages/T-shirtEvolutionamanichelunghe/w1280-removebg-preview.png",
                "/myprojectimages/T-shirtEvolutionamanichelunghe/w128j0-removebg-preview.png",
            ],
            isFollow: false

        },
        {
            id: 2099094,
            name: "Mandala",
            imgUrl: "/myprojectimages/Mandala/81ElmLiyawL._AC_SY500._SX._UX._SY._UY_-removebg-preview.png",
            price: 150,
            quantity: 1,
            cartQuantity: 1,
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            preventPrice: 150,
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            favoriteImgUrl: [],
            type: "jewerly",
            imgUrlArray: [
                "/myprojectimages/Mandala/81ElmLiyawL._AC_SY500._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/Mandala/81ElRs-jxqL._AC_SY535._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/Mandala/81eXHlnvcEL._AC_SY575._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/Mandala/8134HjKfavL._AC_SY625._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/Mandala/81W5X-2G19L._AC_UY575_-removebg-preview.png"
            ],
            isFollow: false,
            exclusive: true

        },
        {
            id: 2799094,
            name: "Swarovski FurtherCrystals",
            imgUrl: "/myprojectimages/SwarovskiFurtherClearCrystals/71KdbwYqy9L._AC_UY395_-removebg-preview.png",
            price: 150,
            quantity: 1,
            cartQuantity: 1,
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            preventPrice: 150,
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            favoriteImgUrl: [],
            type: "jewerly",
            imgUrlArray: [
                "/myprojectimages/SwarovskiFurtherClearCrystals/71KdbwYqy9L._AC_UY395_-removebg-preview.png",
                "/myprojectimages/SwarovskiFurtherClearCrystals/71QDLWAU1nL._AC_UY395_-removebg-preview.png",
                "/myprojectimages/SwarovskiFurtherClearCrystals/71uKz2MTa-L._AC_UY500_-removebg-preview.png",
                "/myprojectimages/SwarovskiFurtherClearCrystals/513EqwTAEML._AC_UY395_-removebg-preview.png",
                "/myprojectimages/SwarovskiFurtherClearCrystals/414kcDHtxeL._AC_UY395_-removebg-preview.png",
            ],
            isFollow: false,
            exclusive: true

        },
        {
            id: 2798694,
            name: "Plating  SilverPendant",
            imgUrl: "/myprojectimages/PlatingOverSterlingSilverPendant/81jvQaP2MwL._AC_UX385_-removebg-preview.png",
            price: 150,
            quantity: 1,
            cartQuantity: 1,
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            preventPrice: 150,
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            favoriteImgUrl: [],
            type: "jewerly",
            imgUrlArray: [
                "/myprojectimages/PlatingOverSterlingSilverPendant/81jvQaP2MwL._AC_UX385_-removebg-preview.png",
                "/myprojectimages/PlatingOverSterlingSilverPendant/71TAnKxPbPL._AC_UX385_-removebg-preview.png",
                "/myprojectimages/PlatingOverSterlingSilverPendant/71a+cEWIhAL._AC_UX385_-removebg-preview.png",
            ],
            isFollow: false,
            exclusive: true

        },
        {
            id: 2198694,
            name: "Swarowsky Culon",
            imgUrl: "/myprojectimages/SwarowskyCulon/71t20ESxTuL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
            price: 150,
            quantity: 1,
            cartQuantity: 1,
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            preventPrice: 150,
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            favoriteImgUrl: [],
            type: "jewerly",
            imgUrlArray: [
                "/myprojectimages/SwarowskyCulon/71t20ESxTuL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/SwarowskyCulon/71TK+4-S5TL._AC_UX385_-removebg-preview.png",
                "/myprojectimages/SwarowskyCulon/71VgxHAwzOL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/SwarowskyCulon/71WU9RNnhlL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
                "/myprojectimages/SwarowskyCulon/714ofQWJzBL._AC_SX385._SX._UX._SY._UY_-removebg-preview.png",
            ],
            isFollow: false,
            exclusive: true

        },
        {
            id: 2799694,
            name: "Platinum PlatedMandal",
            imgUrl: "/myprojectimages/Platinum-Plated/610m0xyYHXL._AC_UY395_-removebg-preview.png",
            price: 150,
            quantity: 1,
            cartQuantity: 1,
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            preventPrice: 150,
            type: "jewerly",
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            imgUrlArray: [
                "/myprojectimages/Platinum-Plated/610m0xyYHXL._AC_UY395_-removebg-preview.png",
                "/myprojectimages/Platinum-Plated/61Zs3ry9MKL._AC_UY500_-removebg-preview.png",
                "/myprojectimages/Platinum-Plated/51GyBiGI6vL._AC_UY395_-removebg-preview.png",
                "/myprojectimages/Platinum-Plated/51ioKabOXaL._AC_UY395_-removebg-preview.png",
            ],
            isFollow: false,
            exclusive: true

        },
        {
            id: 9188690,
            name: "Instax Minipastelblue",
            imgUrl: "/myprojectimages/InstaxMinipastelblue/51T3ZomxaCL._AC_SL1200_-removebg-preview.png",
            price: 300,
            quantity: 1,
            cartQuantity: 1,
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            preventPrice: 300,
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            favoriteImgUrl: [],
            type: "camera",
            imgUrlArray: [
                "/myprojectimages/InstaxMinipastelblue/51T3ZomxaCL._AC_SL1200_-removebg-preview.png",
                "/myprojectimages/InstaxMinipastelblue/61WsTW+uRNL._AC_SL1200_-removebg-preview.png",
                "/myprojectimages/InstaxMinipastelblue/51LNs6qPZGL._AC_SL1200_-removebg-preview.png",
                "/myprojectimages/InstaxMinipastelblue/517Hqa2ysNL._AC_SL1200_-removebg-preview.png",
                "/myprojectimages/InstaxMinipastelblue/51yOcN7m4sL._AC_SL1200_-removebg-preview.png",
                "/myprojectimages/InstaxMinipastelblue/51CkVZo1UnL._AC_SL1200_-removebg-preview.png",
            ],
            isFollow: false,
            exclusive: true


        },
        {
            id: 9198694,
            name: "InstaxMini BlossomPink",
            imgUrl: "/myprojectimages/InstaxMiniBlossomPink/51XKzQLJL3L._AC_SL1500_-removebg-preview.png",
            price: 350,
            type: "camera",
            quantity: 1,
            cartQuantity: 1,
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            preventPrice: 350,
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            favoriteImgUrl: [],
            imgUrlArray: [
                "/myprojectimages/InstaxMiniBlossomPink/51XKzQLJL3L._AC_SL1500_-removebg-preview.png",
                "/myprojectimages/InstaxMiniBlossomPink/61BN19sZSiL._AC_SL1500_-removebg-preview.png",
                "/myprojectimages/InstaxMiniBlossomPink/61EKZ7Pav6L._AC_SL1500_-removebg-preview.png",
                "/myprojectimages/InstaxMiniBlossomPink/51YAf4kMS5L._AC_SL1500_-removebg-preview.png",
                "/myprojectimages/InstaxMiniBlossomPink/51Dlpowy91L._AC_SL1500_-removebg-preview.png",
                "/myprojectimages/InstaxMiniBlossomPink/510hFrn+1RL._AC_SL1500_-removebg-preview.png",
            ],
            isFollow: false,
            exclusive: true

        },
        {
            id: 91887690,
            name: "Canon EOSR7",
            imgUrl: "/myprojectimages/CanonEOSR7/CAR7K-removebg-preview.png",
            price: 2600,
            type: "camera",
            quantity: 1,
            cartQuantity: 1,
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            preventPrice: 2600,
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            favoriteImgUrl: [],
            imgUrlArray: [
                "/myprojectimages/CanonEOSR7/CAR7K-removebg-preview.png",
                "/myprojectimages/CanonEOSR7/CAR7K_1-removebg-preview.png",
                "/myprojectimages/CanonEOSR7/CAR7K_4-removebg-preview.png",
                "/myprojectimages/CanonEOSR7/CAR7K_6-removebg-preview.png",
                "/myprojectimages/CanonEOSR7/CAR7K_9-removebg-preview.png",
                "/myprojectimages/CanonEOSR7/CAR7K_14-removebg-preview.png",
            ],
            isFollow: false,
            exclusive: true

        },
        {
            id: 91487290,
            name: "Canon EOSR50",
            imgUrl: "/myprojectimages/CanonEOSR50/CAR50WK.jpg",
            price: 2000,
            type: "camera",
            quantity: 1,
            cartQuantity: 1,
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            preventPrice: 2000,
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            favoriteImgUrl: [],
            imgUrlArray: [
                "/myprojectimages/CanonEOSR50/CAR50WK.jpg",
                "/myprojectimages/CanonEOSR50/CAR50WK_2.jpg",
                "/myprojectimages/CanonEOSR50/CAR50WK_3.jpg",
                "/myprojectimages/CanonEOSR50/CAR50WK_1.jpg",
                "/myprojectimages/CanonEOSR50/CAR50WK_5.jpg",
            ],
            isFollow: false,
            exclusive: true

        },
        {
            id: 91411290,
            name: "Sony a 7III (ILCEM3KB)",
            imgUrl: "/myprojectimages/Sonya7III(ILCEM3KB)/517CEyCXIHL._AC_SL1000_-removebg-preview.png",
            quantity: 1,
            cartQuantity: 1,
            type: "camera",
            informationText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, quisquam nostrum. Debitis qui vitae omnis pariatur quaerat. Cupiditate possimus expedita cumque quod",
            infoTxt: "",
            hashCode: "097970",
            preventPrice: 2900,
            favoriteImgUrl: [],
            dimensius: {
                width: "12",
                height: "13",
                length: "15"
            },
            price: 2900,
            imgUrlArray: [
                "/myprojectimages/Sonya7III(ILCEM3KB)/517CEyCXIHL._AC_SL1000_-removebg-preview.png",
                "/myprojectimages/Sonya7III(ILCEM3KB)/61MiK+gVl4L._AC_SL1000_-removebg-preview.png",
                "/myprojectimages/Sonya7III(ILCEM3KB)/519CXmlsweL._AC_SL1000_-removebg-preview.png",
                "/myprojectimages/Sonya7III(ILCEM3KB)/51NEeAr+M9L._AC_SL1000_-removebg-preview.png",
                "/myprojectimages/Sonya7III(ILCEM3KB)/517yhzFugKL._AC_SL1000_-removebg-preview.png",
            ],
            isFollow: false,
            exclusive: true

        },



    ],
    cartitems: {
        cartitemsAray: [],
        favoritecartitemsAray: []
    },
    changeImage: "",
    cartPrice: 0,
    filteritems: [],
    filterByprice: []

}
