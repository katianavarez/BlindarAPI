import { IsInt, IsNotEmpty, IsPositive, IsString, Matches, MaxLength, Min } from "class-validator";

export class CrearHorarioDto {
  @IsInt()
  @IsPositive()
  claseId!: number;

  @IsString()
  @IsNotEmpty()
  dia!: string;

  @Matches(/^([01]\d|2[0-3]):[0-5]\d$/)
  horaInicio!: string;

  @IsInt()
  @Min(1)
  cupoMaximo!: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  entrenador!: string;
}
