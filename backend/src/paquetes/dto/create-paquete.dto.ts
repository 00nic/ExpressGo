import {
  IsString,
  IsNumber,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Min,
} from 'class-validator';
//import { Tamano } from '@prisma/client'; // Importamos el Enum de Prisma
export class CreatePaqueteDto {
  @IsString()
  @IsNotEmpty()
  codigoEnvio: string;

  @IsString()
  @IsNotEmpty()
  direccion: string;

  @IsString()
  @IsNotEmpty()
  destinatario: string;

  @IsNotEmpty()
  @IsEnum(['CHICO', 'MEDIANO', 'GRANDE'])
  tamano: 'CHICO' | 'MEDIANO' | 'GRANDE';

  @IsNotEmpty()
  @IsNumber()
  latitud: number;

  @IsNotEmpty()
  @IsNumber()
  longitud: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  ordenEntrega: number;

  @IsString()
  @IsOptional()
  repartidorId?: string;
}
