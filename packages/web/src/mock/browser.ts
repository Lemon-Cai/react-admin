import { setupWorker } from 'msw'

import handlers from './handlers'
import appMock from './app.mock'
import authentication_mock from './authentication_mock'

// npx msw init public/ --save

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers, ...appMock, ...authentication_mock)