import { ChatService } from '../src/chat/chat.service';

describe('ChatService', () => {
  it('returns emergency message for banned words', (done) => {
    const prisma = { message: { create: jest.fn() } } as any;
    const service = new ChatService(prisma);
    service.stream('badword1').subscribe((event) => {
      expect(event.data).toContain('seek immediate help');
      done();
    });
  });
});
