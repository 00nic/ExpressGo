import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Esto hace que Prisma esté disponible en todo el proyecto
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // ¡Importante! Exportarlo para que otros lo usen
})
export class PrismaModule {}
