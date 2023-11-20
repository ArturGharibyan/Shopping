
export interface Products {
    id: any,
    name: string
    imgUrl: any
    navigate: string
    model?: string
    price?: number 
    imgUrlArray?: any
    displaySize?: number
    processor?: string
    series?: string
    storageCapacity?: string
    ram?: string
    type?: any
    typeimage?: any

}


export interface RecomendedProductCompanyes{
    companyes:any
}



export interface ShoppingProductPropertyes {
    id: any
    name: string
    price: number
    preventPrice: number
    hashCode: string
    informationText: string
    quantity: number
    infoTxt: string
    imgUrl: any
    model?: string
    favoriteImgUrl: Array<any>
    dimensius?: any
    color?: any
    imgUrlArray?: any
    exclusive?: any
    cartQuantity: number
    isFollow: boolean
    type?: any

}





export interface AddtoCardPropertyes {
    items: ShoppingProductPropertyes[]
}

export interface ProductCategory {
    seeAllproduct?: Products[]

}

export interface Navigation {
    name: string
    navigate: string
}


export interface Category {
    category: Navigation[]
}



export interface ShoppingProductCategoryPropertyes {
    gamecantroler?: Products[]
    furniture?: Products[]
    headphones?: Products[]
    computers?: Products[]
    electronics?: Products[]
    householdGods?: Products[]
    accsessories?: Products[]
    clotes?: Products[]
    sports?: Products[]
    jewerly?:Products[]
    camera?:Products[]
}


export interface MyshoppingcardOpener {
    isOpen: boolean
}



export interface User {
    user: any[]
    isLoading:boolean
}

