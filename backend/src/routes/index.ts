import { Sheetbase } from '../index';

export default () => {

    const router = Sheetbase.Router;

    const previewUrl = 'https://sheetbase.net/theme/simpleblog-angular';

    router.get('/', (req, res) => {
        return res.html(
            `<h1>Sheetbase Simpleblog</h1>
            <p>Preview: <a href="${previewUrl}">${previewUrl}</a></p>`,
        );
    });

    router.post('/', (req, res) => {
        return res.success({
            title: 'Sheetbase Simpleblog',
            preview: previewUrl,
        });
    });

};
