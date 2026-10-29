import { products } from "../dtos/product";

export const ProductService = {
    listAll() {
        return products;

    }
}