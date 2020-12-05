import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDto {
  @IsString({
    message: 'Please enter the name of the brand',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly brand: string;

  @IsString({
    message: 'Please enter the name of the product',
  })
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsArray()
  @IsOptional()
  @ApiProperty()
  readonly recommendations: string[];

  @IsArray()
  @ApiProperty()
  readonly flavors: string[];
}
