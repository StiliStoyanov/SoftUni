import page from '../node_modules/page/page.mjs'
import { createView } from './views/create.js'
import { detailsView } from './views/details.js'
import { editView } from './views/edit.js'
import { homeView } from './views/home.js'
import { loginView } from './views/login.js'
import { profileView } from './views/profile.js'
import { registerView } from './views/register.js'


import * as api from './api/users.js'
import { getUserData } from './util.js'
import { render } from '../node_modules/lit-html/lit-html.js'

const main = document.getElementById('main-content')

updateNav()
page(decorateContext)

page('/', homeView)
page('/login', loginView)
page('/register', registerView)
page('/create', createView)
page('/details/:id', detailsView)
page('/edit/:id', editView)
page('/profile', profileView)
page('/logout', onLogout)


export function updateNav() {
    const userData = getUserData();
    if (userData) {
        document.querySelector('#user').style.display = 'block';
        document.querySelector('#guest').style.display = 'none';
    } else {
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = 'block';
    }
}


page.start()

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    next();
}

/*функция, която визуализира HTML(templateResult) на определено място(main) */
function renderMain(templateResult) {
    render(templateResult, main);
}


function onLogout(ctx) {
    api.logout()
    updateNav()
    ctx.page.redirect('/')
}