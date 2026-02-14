import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RepartidoresService } from './repartidores.service';
import { CreateRepartidorDto } from './dto/create-repartidor.dto';

@Controller('repartidores') // Esta será la ruta base: http://localhost:3000/repartidores
export class RepartidoresController {
  constructor(private readonly repartidoresService: RepartidoresService) {}

  @Post() // Crear un repartidor [cite: 26]
  create(@Body() createRepartidorDto: CreateRepartidorDto) {
    return this.repartidoresService.create(createRepartidorDto);
  }

  @Get() // Listar repartidores [cite: 25]
  findAll() {
    return this.repartidoresService.findAll();
  }

  @Get(':id') // Obtener uno solo (útil para ver su ruta específica) [cite: 39]
  findOne(@Param('id') id: string) {
    return this.repartidoresService.findOne(id);
  }

  @Patch(':id') // Editar repartidor [cite: 26]
  update(@Param('id') id: string, @Body() updateData: any) {
    // Nota: Aquí podrías crear un UpdateRepartidorDto más adelante
    return this.repartidoresService.update(id, updateData);
  }

  @Delete(':id') // Eliminar repartidor [cite: 26]
  remove(@Param('id') id: string) {
    return this.repartidoresService.remove(id);
  }
}
