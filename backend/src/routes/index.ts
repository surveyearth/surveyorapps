import { Sheetbase } from '../index';

export default () => {
    const router = Sheetbase.Router;

    router.get('/', (req, res) => {
        return res.success({
            title: 'Sheetbase Simple Blog Backend',
            homepage: 'https://sheetbase.net',
            docs: 'https://sheetbase.net/docs',
        });
    });

    router.post('/', (req, res) => {
        return res.success({
            title: 'Sheetbase Simple Blog Backend',
            homepage: 'https://sheetbase.net',
            docs: 'https://sheetbase.net/docs',
        });
    });

};
