import * as Sentry from '@sentry/browser'
import { sentryDSN } from './env';

export function init(): void {
  Sentry.init({
    dsn: sentryDSN,
    beforeSend(event) {
      if (event.exception) {
        Sentry.showReportDialog({ eventId: event.event_id });
      }
      return event;
    },
  });
}
