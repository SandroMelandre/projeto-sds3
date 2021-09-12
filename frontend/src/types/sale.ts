import { seller } from "./seller"

export type Sale = {
    id: number,
    visited: number,
    deals: number,
    date: string,
    amount: number,
    seller: seller
}

export type SalePage = {
    content?: Sale[],
    last: boolean,
    totalPages: number,
    totalElements: number,
    first: boolean,
    number: number,
    numberOfElements?: number,
    size?: number,
    empty?: boolean


}


export type SaleSum =  {
    sellerName: string,
    sum: number
}

export type SaleSucess  = {
    sellerName: string,
    visited: number,
    deals: number
}