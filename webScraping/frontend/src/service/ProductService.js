import axios from "axios";

export default class ProductService {
    getProducts() {
        return axios.get("/product");
    }

    getProductsByModelNumber(modelNumber) {
        return axios.get("/product?modelNumber=" + modelNumber);
    }

    getProductsByName(name) {
        return axios.get("/product/" + name);
    }
}