import { SuccessRes } from '../../common/types/response';
import { Injectable } from '@nestjs/common';
import { ProductlineRepository } from '../../repositories/productline.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productlineRepository: ProductlineRepository) {}

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
