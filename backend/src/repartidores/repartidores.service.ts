import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRepartidorDto } from './dto/create-repartidor.dto';
import { UpdateRepartidorDto } from './dto/update-repartidor.dto';

@Injectable()
export class RepartidoresService {
  constructor(private prisma: PrismaService) {}

  async create(createRepartidorDto: CreateRepartidorDto) {
    return this.prisma.repartidor.create({
      data: createRepartidorDto,
    });
  }

  async findAll() {
    return this.prisma.repartidor.findMany({
      include: { paquetes: true }, // Requerimiento: ver paquetes asignados [cite: 22]
    });
  }

  async findOne(id: string) {
    const repartidor = await this.prisma.repartidor.findUnique({
      where: { id },
      include: { paquetes: true }, // Requerimiento: ver paquetes asignados [cite: 22]
    });
    if (!repartidor) {
      throw new NotFoundException(`Repartidor con ID ${id} no encontrado`);
    }
    return repartidor;
  }

  async update(id: string, updateRepartidorDto: UpdateRepartidorDto) {
    await this.findOne(id); // Verificamos si existe antes de actualizar
    return this.prisma.repartidor.update({
      where: { id },
      data: updateRepartidorDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Verificamos si existe antes de borrar
    return this.prisma.repartidor.delete({
      where: { id },
    });
  }
}
