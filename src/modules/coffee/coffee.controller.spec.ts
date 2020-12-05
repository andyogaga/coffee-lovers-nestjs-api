import { TestingModule, Test } from '@nestjs/testing';
import { CoffeeController } from './coffee.controller';
import { AppModule } from '../../app.module';
import { CoffeeService } from './coffee.service';
import { HttpStatus } from '@nestjs/common';

const coffee = {
  _id: '5f4ca8e4e4139a3c08e3c0d8',
  brand: 'Nescafe',
  name: '3 in 1 Bumper',
  recommendations: ['I loved taking this coffee'],
  flavors: ['milk', 'strawberry'],
  createdAt: '2020-11-31T07:38:12.962Z',
  updatedAt: '2020-11-31T07:38:12.962Z',
};

describe('Coffee Controller Tests', () => {
  let module: TestingModule;
  let controller: CoffeeController;
  let service: CoffeeService;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    controller = module.get<CoffeeController>(CoffeeController);
    service = module.get<CoffeeService>(CoffeeService);
  });

  afterAll(async done => {
    module.close().then(() => done());
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a coffee', async done => {
    jest.spyOn(service, 'createOne').mockImplementation(
      async (): Promise<any> => {
        return await coffee;
      },
    );
    const response = await controller.createCoffee({
      brand: 'Nescafe',
      name: '3 in 1 Bumper',
      recommendations: ['I loved taking this coffee'],
      flavors: ['milk', 'strawberry'],
    });
    expect(response.statusCode).toEqual(HttpStatus.CREATED);
    expect(response.data).toHaveProperty('brand');
    expect(response.data).toHaveProperty('name');
    expect(response.data.name).toBe('3 in 1 Bumper');
    done();
  });
});
