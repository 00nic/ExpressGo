import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateRepartidorDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsString()
  @IsOptional()
  telefono?: string;
}
