import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreatePaqueteDto } from './dto/create-paquete.dto';
import { UpdatePaqueteDto } from './dto/update-paquete.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaquetesService {
  constructor(private prisma: PrismaService) {}

  async create(createPaqueteDto: CreatePaqueteDto) {
    const { repartidorId, ...rest } = createPaqueteDto;

    if (repartidorId) {
      const repartidor = await this.prisma.repartidor.findUnique({
        where: { id: repartidorId },
      });
      if (!repartidor) {
        throw new NotFoundException(
          `El repartidor con ID ${repartidorId} no existe.`,
        );
      }
    }
    try {
      return this.prisma.paquete.create({
        data: {
          ...rest,
          // Si viene repartidorId, lo conectamos automáticamente
          ...(repartidorId && {
            repartidor: { connect: { id: repartidorId } },
          }),
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new BadRequestException('El código de envío ya está en uso.');
        }
      }
      throw error;
    }
  }

  async findAll() {
    return this.prisma.paquete.findMany({
      include: { repartidor: true }, // Traemos info del repartidor asignado
      orderBy: { ordenEntrega: 'asc' }, // Ordenamos por la ruta de entrega
    });
  }

  async findOne(id: string) {
    const paquete = await this.prisma.paquete.findUnique({
      where: { id },
      include: { repartidor: true },
    });
    if (!paquete)
      throw new NotFoundException(`Paquete con ID ${id} no encontrado`);
    return paquete;
  }

  async update(id: string, updatePaqueteDto: UpdatePaqueteDto) {
    await this.findOne(id); // Verificamos si existe antes de actualizar
    const { repartidorId, ...rest } = updatePaqueteDto;

    return this.prisma.paquete.update({
      where: { id },
      data: {
        ...rest,
        ...(repartidorId && {
          repartidor: { connect: { id: repartidorId } },
        }),
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Verificamos si existe antes de borrar
    return this.prisma.paquete.delete({
      where: { id },
    });
  }
}
