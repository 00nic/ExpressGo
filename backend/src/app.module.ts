import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { RepartidoresModule } from './repartidores/repartidores.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { PaquetesModule } from './paquetes/paquetes.module';

@Module({
  imports: [
    RepartidoresModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PaquetesModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
