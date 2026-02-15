export class CreatePaqueteDto {
  codigoEnvio: string;
  direccion: string;
  destinatario: string;
  tamano: 'CHICO' | 'MEDIANO' | 'GRANDE';
  latitud: number;
  longitud: number;
  ordenEntrega: number;
  repartidorId?: string; // Opcional por ahora
}
