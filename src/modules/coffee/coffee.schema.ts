import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface ICoffee {
  _id?: string;
  brand: string;
  name: string;
  recommendations: string[];
  flavors: string[];
}

@Schema({
  timestamps: true,
})
export class Coffee extends Document {
  @Prop({
    default: '',
  })
  brand: string;

  @Prop({
    default: '',
  })
  name: string;

  @Prop({})
  recommendations: string[];

  @Prop({})
  flavors: string[];
}

export const CoffeeSchema = SchemaFactory.createForClass(Coffee);
