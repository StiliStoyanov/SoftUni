import { html } from '../../node_modules/lit-html/lit-html.js';
import { delPost, getById } from '../api/posts.js';
import { getUserData } from '../util.js';



const detailsTemplate = (currPost, isOwner, onDelete) => html`
 <section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src=${currPost.imageUrl} alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${currPost.title}</h2>
                        <p class="post-description"> ${currPost.description}</p>
                        <p class="post-address">${currPost.address}</p>
                        <p class="post-number">${currPost.phone}</p>
                        <p class="donate-Item">Donate Materials: 0</p>

                        <!--Edit and Delete are only for creator-->
                        ${ isOwner ? html ` <div class="btns">
                            <a href="/edit/${currPost._id}" class="edit-btn btn">Edit</a>
                            <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>
                        </div>` : ''}
                       
                    </div>
                </div>
            </div>
        </section>
`;

export async function detailsView(ctx) {
    
    const currPost = await getById(ctx.params.id);
    const userData = getUserData();
    const isOwner =  userData?._id == currPost._ownerId; 
    ctx.render(detailsTemplate(currPost, isOwner, onDelete))

    //създаваме булева променлива, за проверка на собственика на мемето

    async function onDelete() {
        const choice = confirm('Are you sure you wont to delete this post?');
        //confirm('Are you sure you wont to delete this meme?') -> 
        //вградена функция от браузъра (блокираща операция) за потвърждение

        if (choice) {
            await delPost(currPost._id);
            ctx.page.redirect('/');
        }
    }

};
