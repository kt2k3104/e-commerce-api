import { Injectable } from '@nestjs/common';
import { SuccessRes } from 'src/common/types/response';
import { CategoryRepository } from 'src/repositories/category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

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
}
