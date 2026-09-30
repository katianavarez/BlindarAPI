import { IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Matches, MaxLength, Min } from "class-validator";

// Todo opcional: un PATCH manda solo lo que cambia.
export class ActualizarHorarioDto {
  @IsOptional()
  @IsInt()
  @IsPositive()
  claseId?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  dia?: string;

  @IsOptional()
  @Matches(/^([01]\d|2[0-3]):[0-5]\d$/)
  horaInicio?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  cupoMaximo?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  entrenador?: string;
}
