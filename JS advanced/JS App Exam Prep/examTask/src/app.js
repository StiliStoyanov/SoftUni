import { render } from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { getUserData } from './util.js';
import { catalogView } from './views/catalog.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { createView } from './views/create.js';
import * as api from './api/users.js'
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';



const main = document.querySelector('main');


updateNav()
page(decorateContext)


page('/', homeView);
page('/catalog', catalogView);
page('/create', createView);
page('/login', loginView);
page('/register', registerView);
page('/logout', onLogout)
page('/edit/:id', editView);
page('/details/:id', detailsView);

export function updateNav() {
    const userData = getUserData();
    if (userData) {
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}




page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    next();
}

function renderMain(templateResult) {
    render(templateResult, main);
}

function onLogout(ctx) {
    api.logout()
    updateNav()
    ctx.page.redirect('/catalog')
}