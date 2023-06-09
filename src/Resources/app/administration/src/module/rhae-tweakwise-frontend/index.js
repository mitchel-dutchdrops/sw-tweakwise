import './page/rhae-tweakwise-frontend-list';
import './page/rhae-tweakwise-frontend-create';
import './page/rhae-tweakwise-frontend-detail';
import nlNL from './snippet/nl-NL.json';
import enGB from './snippet/en-GB.json';

Shopware.Module.register('rhae-tweakwise-frontend', {
    type: 'plugin',
    name: 'Tweakwise frontend',
    title: 'rhae-tweakwise-frontend.main.menuLabel',
    description: 'rhae-tweakwise-frontend.main.menuDescription',
    color: '#01b7cd',
    icon: 'default-symbol-content',

    snippets: {
        'nl-NL': nlNL,
        'en-GB': enGB
    },

    routes: {
        list: {
            component: 'rhae-tweakwise-frontend-list',
            path: 'list',
            meta: {
                parentPath: 'sw.settings.index.plugins'
            }
        },
        detail: {
            component: 'rhae-tweakwise-frontend-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'rhae.tweakwise.frontend.list'
            }
        },
        create: {
            component: 'rhae-tweakwise-frontend-create',
            path: 'create',
            meta: {
                parentPath: 'rhae.tweakwise.frontend.list'
            }
        }
    },

    settingsItem: {
        name: 'rhae-tweakwise-frontend-list',
        to: 'rhae.tweakwise.frontend.list',
        label: 'rhae-tweakwise-frontend.main.menuLabel',
        group: 'plugins',
        icon: 'default-symbol-content'
    }
});
