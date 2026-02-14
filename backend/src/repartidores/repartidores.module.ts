import { Module } from '@nestjs/common';
import { RepartidoresService } from './repartidores.service';
import { RepartidoresController } from './repartidores.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RepartidoresController],
  providers: [RepartidoresService, PrismaService],
})
export class RepartidoresModule {}
