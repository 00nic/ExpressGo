import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { RepartidoresModule } from './repartidores/repartidores.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [RepartidoresModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
