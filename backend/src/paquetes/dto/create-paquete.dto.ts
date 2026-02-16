import {
  IsString,
  IsNumber,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Min,
} from 'class-validator';
import { Tamano, Estado } from '@prisma/client'; // Importamos el Enum de Prisma
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
  @IsEnum(Tamano)
  tamano: Tamano;

  @IsEnum(Estado, {
    message: 'El estado debe ser: PENDIENTE, EN_CAMINO o ENTREGADO',
  })
  @IsOptional() // Opcional porque en el schema ya tiene un default(PENDIENTE)
  estado?: Estado;

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
