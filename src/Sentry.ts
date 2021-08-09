import * as Sentry from '@sentry/browser'

export function init(): void {
  Sentry.init({
    dsn: "https://b0cc27b5b9c04726a4ec99ad36bef91a@o157493.ingest.sentry.io/1219537",
    beforeSend(event) {
      if (event.exception) {
        Sentry.showReportDialog({ eventId: event.event_id });
      }
      return event;
    },
  });
}
