import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCoffeeDto {
  @IsString()
  @ApiProperty()
  readonly brand: string;

  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @ApiProperty()
  readonly recommendations: string[];

  @IsString()
  @ApiProperty()
  readonly flavors: string[];
}
