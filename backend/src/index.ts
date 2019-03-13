import { sheetbase } from '@sheetbase/core-server';
import { middleware as apiKeyMiddleware } from '@sheetbase/api-key-server';
import { sheets } from '@sheetbase/sheets-server';

import { SHEETBASE_CONFIG } from './sheetbase.config';
import appRoutes from './routes/index';

// configs
const { apiKey, databaseId } = SHEETBASE_CONFIG;

/**
 * modules
 */

const Sheetbase = sheetbase({
    allowMethodsWhenDoGet: true, // for dev, should remove when in production
});

const ApiKeyMiddleware = apiKeyMiddleware({ key: apiKey });

const Sheets = sheets({
    databaseId,
    keyFields: {
        categories: 'slug',
        tags: 'slug',
        authors: 'slug',
        pages: 'slug',
        posts: 'slug',
    },
    security: {
        categories: { '.read': true },
        tags: { '.read': true },
        authors: { '.read': true },
        pages: { '.read': true },
        posts: { '.read': true },
    },
});

/**
 * routes
 */

Sheets
.registerRoutes({
    router: Sheetbase.Router,
    middlewares: [ ApiKeyMiddleware ],
    disabledRoutes: [],
});

appRoutes();

// export for using elsewhere
export { Sheetbase, ApiKeyMiddleware, Sheets };