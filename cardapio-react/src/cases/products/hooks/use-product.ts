import {ProductService} from "../services/product-service";

export function useProducts() {
    return ProductService.listAll();
}