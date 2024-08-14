export interface CategoryType {
    category_id: number;
    category: string;
    sort: number;
}
export interface ProductType {
    product_id: number;
    category_id: number;
    product_name: string;
    manufacturer: string;
    price: number;
    stock: number;
    image: string;
}
