import { IsEmail, IsIn, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CrearMiembroDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre!: string;

  @IsEmail()
  @MaxLength(150)
  correo!: string;

  @IsIn(["basica", "plus", "premium"])
  membresia!: string;
}
