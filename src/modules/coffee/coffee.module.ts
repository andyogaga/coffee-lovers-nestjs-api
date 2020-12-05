import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Coffee, CoffeeSchema } from './coffee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Coffee.name, schema: CoffeeSchema }]),
  ],
})
export class CoffeeModule {}
