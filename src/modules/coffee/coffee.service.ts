import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CoffeeError } from '../../common/constants/service.message';
import { InternalServerErrorException } from '@nestjs/common';
import { Coffee, ICoffee } from './coffee.schema';
import { logError } from '../../utils/error';
import { IFindOptions } from '../../common/interfaces/query';
import { CreateCoffeeDto } from './coffee.dto';

type SearchOptions = Partial<ICoffee>;

export class CoffeeService {
  constructor(
    @InjectModel(Coffee.name) private readonly coffeeModel: Model<Coffee>,
  ) {}

  async createOne(data: CreateCoffeeDto): Promise<Coffee> {
    return await this.coffeeModel.create(data).catch(error => {
      logError(error);
      throw new InternalServerErrorException(CoffeeError.CANNOT_CREATE);
    });
  }

  async findOneBy(fields: SearchOptions): Promise<Coffee> {
    return await this.coffeeModel.findOne(fields).catch(error => {
      logError(error);
      throw new InternalServerErrorException(CoffeeError.NOT_FOUND);
    });
  }

  async find({
    options = {},
    searchOptions = {},
  }: {
    options?: IFindOptions;
    searchOptions: SearchOptions;
  }): Promise<Coffee[]> {
    const { limit = 20, order = -1, page = 1, sortBy = 'createdAt' } = options;

    return await this.coffeeModel
      .find({ ...searchOptions })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ [sortBy]: order })
      .catch(err => {
        logError(err);
        throw new InternalServerErrorException('Could not find transactions');
      });
  }

  async updateOne(id: ICoffee['_id'], fields: SearchOptions): Promise<Coffee> {
    return await this.coffeeModel
      .findByIdAndUpdate(
        id,
        {
          $set: fields,
        },
        { new: true },
      )
      .catch(error => {
        logError(error);
        throw new InternalServerErrorException(CoffeeError.CANNOT_UPDATE);
      });
  }

  async deleteOne(id: ICoffee['_id']): Promise<Coffee> {
    try {
      return await this.coffeeModel.findByIdAndDelete(id);
    } catch (error) {
      logError(error);
      throw new InternalServerErrorException(CoffeeError.CANNOT_DELETE);
    }
  }
}
