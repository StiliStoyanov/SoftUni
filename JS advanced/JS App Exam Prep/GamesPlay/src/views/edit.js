import {html} from '../../node_modules/lit-html/lit-html.js';
import * as gamesService from '../api/games.js'

const editTemplate = (game, onSubmit) => html`
 <section id="edit-page" class="auth">
            <form @submit=${onSubmit} id="edit">
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" .value=${game.title}>

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" .value=${game.category}>

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${game.maxLevel}>

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" .value=${game.imageUrl}>

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary" .value=${game.summary}></textarea>
                    <input class="btn submit" type="submit" value="Edit Game">

                </div>
            </form>
        </section>

`

export async function editPage(ctx) {

    const gameId = ctx.params.id;
    const game = await gamesService.getById(gameId)
    ctx.render(editTemplate(game, onSubmit))

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        const game = {
            title: formData.get('title'),
            category: formData.get('category'),
            maxLevel: formData.get('maxLevel'),
            imageUrl: formData.get('imageUrl'),
            summary: formData.get('summary')
        }

        if (game.title == '' || game.category == '' || game.maxLevel == '' || game.summary == '' || game.imageUrl =='') {
            return alert ('All fields are required!');
        }
        
        await gamesService.update(ctx.params.id, game);
        
        event.target.reset();
        ctx.page.redirect('/details/' + ctx.params.id);
        
    }

}