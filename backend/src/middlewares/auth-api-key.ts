import { middleware } from '@sheetbase/auth-api-key-server';
import { SHEETBASE_CONFIG } from '../sheetbase.config';

export const AuthApiKey = middleware({
    key: SHEETBASE_CONFIG.apiKey,
});