import { sheetbase } from '@sheetbase/core-server';
import { sheets } from '@sheetbase/sheets-server';
import { middleware as apiKeyMiddleware } from '@sheetbase/api-key-server';

import { SHEETBASE_CONFIG } from './sheetbase.config';
import homeRoutes from './routes/index';

// configs
const { apiKey, databaseId } = SHEETBASE_CONFIG;

/**
 * modules
 */

const Sheetbase = sheetbase({
    allowMethodsWhenDoGet: true, // for dev, should remove when in production
});

const Sheets = sheets({
    databaseId,
    keyFields: {
        categories: 'slug',
        tags: 'slug',
        authors: 'slug',
        pages: 'slug',
        posts: 'slug',
    },
    securityRules: {
        categories: { '.read': true },
        tags: { '.read': true },
        authors: { '.read': true },
        pages: { '.read': true },
        posts: { '.read': true },
    },
});

const ApiKeyMiddleware = apiKeyMiddleware({ key: apiKey });

/**
 * routes
 */

Sheets
.registerRoutes({
    router: Sheetbase.Router,
    middlewares: [ ApiKeyMiddleware ],
    disabledRoutes: [],
});

homeRoutes();

// export for using elsewhere
export { Sheetbase, Sheets, ApiKeyMiddleware };