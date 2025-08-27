import { ConsoleLogger } from '@nestjs/common';
import { maskPii } from '@empathy/shared';

export class PiiLogger extends ConsoleLogger {
  log(message: unknown, context?: string) {
    super.log(maskPii(String(message)), context);
  }

  warn(message: unknown, context?: string) {
    super.warn(maskPii(String(message)), context);
  }

  error(message: unknown, trace?: string, context?: string) {
    super.error(maskPii(String(message)), trace, context);
  }
}
