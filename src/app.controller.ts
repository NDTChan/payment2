import { Controller, Get, Logger, Post, RawBodyRequest, Req } from '@nestjs/common';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  @Post()
  webhook(@Req() req: RawBodyRequest<Request>): string {
    const raw = req.rawBody;
    return raw.toString();
  }

  @Get()
  hello(): string {
    this.logger.log('Seeing that');
    return 'hello guys';
  }
}
