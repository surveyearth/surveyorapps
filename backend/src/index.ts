import { sheetbase } from '@sheetbase/core-server';
import { sheetsSQL } from '@sheetbase/sheets-server';

import { SHEETBASE_CONFIG } from './sheetbase.config';

import extendedRoutes from './routes/extend';
import homeRoutes from './routes/index';

const Sheetbase = sheetbase({
    allowMethodsWhenDoGet: true, // for dev, should remove when in production
});

const SheetsSQL = sheetsSQL({
    databaseId: SHEETBASE_CONFIG.databaseId,
    securityRules: {
        '.read': true,
    },
});

extendedRoutes();
homeRoutes();

export { Sheetbase, SheetsSQL };