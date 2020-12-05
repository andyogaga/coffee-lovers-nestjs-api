import { ApiResponseOptions } from '@nestjs/swagger';
import { ResponseDto } from '../../../common/dto';
import { HttpStatus, InternalServerErrorException } from '@nestjs/common';

const coffee = {
  _id: '5f4ca8e4e4139a3c08e3c0d8',
  brand: 'Nescafe',
  name: '3 in 1 Bumper',
  recommendations: ['I loved taking this coffee'],
  flavors: ['milk', 'strawberry'],
  createdAt: '2020-11-31T07:38:12.962Z',
  updatedAt: '2020-11-31T07:38:12.962Z',
};

export class CoffeeResponse {
  static Created: ApiResponseOptions = {
    description: 'Coffee has been added',
    schema: {
      example: new ResponseDto({
        statusCode: HttpStatus.CREATED,
        data: {
          coffee,
        },
      }),
    },
  };

  static get500(message: string): ApiResponseOptions {
    return {
      description: message,
      schema: {
        example: new InternalServerErrorException(message).getResponse(),
      },
    };
  }
}
