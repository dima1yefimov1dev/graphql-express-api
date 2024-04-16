import { error } from "console";
import { ICreateProduct } from "../lib/types";
import { Product } from "./product-model"

export const ProductService = new class {
  public async getAllProducts() {
    return await Product.find();
  }

  public async getProductById(id: string) {
    return await Product.findById(id);
  }

  public async createProduct(productData: ICreateProduct) {
    return await Product.create(productData);
  }

  public async deleteProduct(id: string) {
   return await Product.findByIdAndDelete(id);
  }

  public async updateProduct(id: string, productData: Partial<ICreateProduct>) {
    return await Product.findByIdAndUpdate(id, productData);
  }
}