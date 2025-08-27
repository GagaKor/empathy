import { Injectable } from '@nestjs/common';
import { Observable, interval, map, take } from 'rxjs';
import { PrismaService } from '../prisma.service';
import { bannedWords } from '@empathy/shared';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async saveMessage(sessionId: string, content: string, role = 'user') {
    await this.prisma.message.create({ data: { sessionId, role, content } });
  }

  stream(prompt: string): Observable<{ data: string }> {
    if (bannedWords.some((w) => prompt.includes(w))) {
      return new Observable((observer) => {
        observer.next({ data: 'Please seek immediate help or contact emergency services.' });
        observer.complete();
      });
    }
    const responses = ['Thinking...', 'This is a stubbed response.'];
    return interval(1000).pipe(
      take(responses.length),
      map((i) => ({ data: responses[i] }))
    );
  }
}
