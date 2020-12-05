import { ApiProperty } from '@nestjs/swagger';

export class ResponseDto {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  data?: any | any[];

  constructor({ statusCode, data }: IResponse) {
    this.statusCode = statusCode;
    this.data = data;
  }
}

interface IResponse {
  statusCode: number;
  data?: any | any[];
}
