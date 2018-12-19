import { Sheetbase, SheetsSQL } from '../index';
import { AuthApiKey } from '../middlewares/auth-api-key';

export default () => {

    // database
    SheetsSQL.registerRoutes({
        router: Sheetbase.Router,
        middlewares: [ AuthApiKey ],
    });

};