import { PartialType } from '@nestjs/mapped-types';
import { CreateRepartidorDto } from './create-repartidor.dto';

export class UpdateRepartidoreDto extends PartialType(CreateRepartidorDto) {}
