import { Controller, Query, Sse } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Observable } from 'rxjs';

@Controller('chat')
export class ChatController {
  constructor(private readonly chat: ChatService) {}

  @Sse()
  stream(@Query('q') q: string): Observable<{ data: string }> {
    return this.chat.stream(q ?? '');
  }
}
