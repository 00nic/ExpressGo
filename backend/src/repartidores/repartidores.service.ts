import { Injectable } from '@nestjs/common';
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

  async update(id: string, updateRepartidorDto: UpdateRepartidorDto) {
    return this.prisma.repartidor.update({
      where: { id },
      data: updateRepartidorDto,
    });
  }

  async remove(id: string) {
    return this.prisma.repartidor.delete({
      where: { id },
    });
  }

  async findOne(id: string) {
    return this.prisma.repartidor.findUnique({
      where: { id },
      include: { paquetes: true }, // Importante para ver sus paquetes asignados [cite: 22]
    });
  }
}
