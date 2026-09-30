import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CrearClaseDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  descripcion!: string;
}
