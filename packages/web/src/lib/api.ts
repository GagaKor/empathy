export function streamChat(message: string): EventSource {
  const url = `/api/chat?q=${encodeURIComponent(message)}`;
  return new EventSource(url);
}
