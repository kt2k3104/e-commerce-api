import { Injectable } from '@nestjs/common';
import { SuccessRes } from 'src/common/types/response';
import { OptionRepository } from 'src/repositories/option.repository';

@Injectable()
export class OptionService {
  constructor(private readonly optionRepository: OptionRepository) {}

  async getOptionByCategory(categoryId: number) {
    return this.optionRepository.find({
      where: { category_id: categoryId },
    });
  }

  async getOptionById(optionId: number) {
    return this.optionRepository.findOne({
      where: { id: optionId },
    });
  }

  async addOption(data: any) {
    const newOption = this.optionRepository.create(data);
    await this.optionRepository.save(newOption);

    return new SuccessRes('Add option successfully');
  }

  async updateOption(optionId: number, data: any) {
    await this.optionRepository.update({ id: optionId }, data);

    return new SuccessRes('Update option successfully');
  }

  async deleteOption(optionId: number) {
    await this.optionRepository.delete({ id: optionId });

    return new SuccessRes('Delete option successfully');
  }
}
