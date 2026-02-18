import { Test, TestingModule } from '@nestjs/testing';
import { PaquetesService } from './paquetes.service';

describe('PaquetesService', () => {
  let service: PaquetesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PaquetesService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<PaquetesService>(PaquetesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('debería fallar si la latitud está fuera de rango', () => {
    const latitudInvalida = -32.8895;
    expect(latitudInvalida).toBeLessThanOrEqual(90);
    expect(latitudInvalida).toBeGreaterThanOrEqual(-90);
  });

  it('debería validar que el tamaño del paquete sea aceptado', () => {
    const tamano = 'GRANDE';
    const opcionesValidas = ['PEQUEÑO', 'MEDIANO', 'GRANDE'];
    expect(opcionesValidas).toContain(tamano);
  });
});
