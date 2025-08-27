export interface Message {
  id: string;
  userId: string;
  content: string;
  createdAt: Date;
}

export interface Conversation {
  id: string;
  userId: string;
  messages: Message[];
}

export interface TonePreset {
  name: string;
  description: string;
}

export function maskPii(text: string): string {
  return text.replace(/[\w.+-]+@[\w.-]+/g, '[masked]');
}

export const bannedWords = ['badword1', 'badword2'];
