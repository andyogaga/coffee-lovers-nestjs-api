import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { envVariables } from './config/variables';
import { MongooseModule } from '@nestjs/mongoose';
import { CoffeeModule } from './modules/coffee/coffee.module';
@Module({
  imports: [
    MongooseModule.forRoot(envVariables.dbUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }),
    CoffeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
