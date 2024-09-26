export interface productsResponse {
    products:Product[],
    total:number;
    skip:number;
    limit:number;
}


export interface Product {
    id:number;
    title:string;
    price:number;
    category:string;
    stock:number;
    rating:number;
    discription:string;
}
