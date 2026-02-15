import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    try {
      await this.$connect();
      console.log('✅ Prisma conectado a MongoDB');
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('❌ Error Prisma:', error.message);
      } else {
        console.error('❌ Error Prisma desconocido');
      }
      process.exit(1);
    }
  }
}
