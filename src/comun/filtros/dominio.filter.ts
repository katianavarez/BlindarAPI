import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import type { Request, Response } from 'express';
import {
  ErrorDeDominio,
  HorarioNoEncontradoError,
  MiembroNoEncontradoError,
} from '../../inscripciones/dominio/errores';

@Catch(ErrorDeDominio)
export class DominioExceptionFilter implements ExceptionFilter {
  catch(error: ErrorDeDominio, host: ArgumentsHost) {
    const req = host.switchToHttp().getRequest<Request>();
    const res = host.switchToHttp().getResponse<Response>();
    const estado = this.codigoPara(error);

    res.status(estado).json({
      statusCode: estado,
      error: error.name,
      message: error.message,
      path: req.url,
      timestamp: new Date().toISOString(),
    });
  }

  private codigoPara(error: ErrorDeDominio): number {
    if (error instanceof HorarioNoEncontradoError || error instanceof MiembroNoEncontradoError) {
      return 404;
    }
    return 409;
  }
}
