import { Test, TestingModule } from '@nestjs/testing';
import { PaquetesController } from './paquetes.controller';
import { PaquetesService } from './paquetes.service';
import { PrismaService } from '../prisma/prisma.service';

describe('PaquetesController', () => {
  let controller: PaquetesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaquetesController],
      providers: [
        PaquetesService,
        {
          provide: PrismaService,
          useValue: {
            paquete: {
              findMany: jest.fn().mockResolvedValue([]),
            },
          },
        },
      ],
    }).compile();

    controller = module.get<PaquetesController>(PaquetesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
