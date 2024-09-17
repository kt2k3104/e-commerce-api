import { Injectable } from '@nestjs/common';
import { SuccessRes } from 'src/common/types/response';
import { CategoryRepository } from 'src/repositories/category.repository';
import { ProductlineRepository } from 'src/repositories/productline.repository';

@Injectable()
export class ProductService {
  constructor(
    private readonly productlineRepository: ProductlineRepository,
    private readonly categoryRepository: CategoryRepository,
  ) {}
  // Category
  async getAllCategories() {
    return this.categoryRepository.find();
  }

  async getCategoryById(categoryId: number) {
    return this.categoryRepository.findOne({
      where: { id: categoryId },
    });
  }

  async createCategory(data: any) {
    const newCategory = this.categoryRepository.create(data);
    await this.categoryRepository.save(newCategory);

    return new SuccessRes('Create category successfully');
  }

  async updateCategory(categoryId: number, data: any) {
    await this.categoryRepository.update({ id: categoryId }, data);

    return new SuccessRes('Update category successfully');
  }

  async deleteCategory(categoryId: number) {
    await this.categoryRepository.delete({ id: categoryId });

    return new SuccessRes('Delete category successfully');
  }

  // Option
  async getOptionsByCategory(categoryId: number) {
    return this.categoryRepository.findOne({
      where: { id: categoryId },
      relations: ['options'],
    });
  }

  // Productline
  async getProductlinesByCategory(categoryId: number) {
    return this.productlineRepository.find({
      where: { category_id: categoryId },
    });
  }

  async getProductlineById(productlineId: number) {
    return this.productlineRepository.findOne({
      where: { id: productlineId },
    });
  }

  async addProductline(data: any) {
    const newProductline = this.productlineRepository.create(data);
    await this.productlineRepository.save(newProductline);

    return new SuccessRes('Add productline successfully');
  }

  async updateProductline(productlineId: number, data: any) {
    await this.productlineRepository.update({ id: productlineId }, data);

    return new SuccessRes('Update productline successfully');
  }

  async deleteProductline(productlineId: number) {
    await this.productlineRepository.delete({ id: productlineId });

    return new SuccessRes('Delete productline successfully');
  }
}
