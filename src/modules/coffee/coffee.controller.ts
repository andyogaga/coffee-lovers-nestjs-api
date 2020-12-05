import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { CoffeeResponse } from './api-doc/responses';
import { CoffeeError } from '../../common/constants/service.message';
import { CreateDto } from './dto/coffee.dto';
import { ResponseDto } from '../../common/dto';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Post('/create')
  @ApiCreatedResponse(CoffeeResponse.Created)
  @ApiInternalServerErrorResponse(
    CoffeeResponse.get500(CoffeeError.CANNOT_CREATE),
  )
  async createCoffee(@Body() createDto: CreateDto): Promise<ResponseDto> {
    const coffee = await this.coffeeService.createOne(createDto);
    return new ResponseDto({
      statusCode: HttpStatus.CREATED,
      data: coffee,
    });
  }
}
