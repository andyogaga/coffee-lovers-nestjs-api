import { envVariables } from '../config/variables';

export function logError(err: Error): void {
  if (envVariables.nodeEnv === 'production') {
    // TODO: log to service (Sentry)
    return;
  } else {
    console.error(err);
  }
}
