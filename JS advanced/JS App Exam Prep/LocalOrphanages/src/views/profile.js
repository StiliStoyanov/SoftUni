import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyPosts } from '../api/posts.js';
import { getUserData } from '../util.js';



const profileTemplate = (posts) => html`
<section id="my-posts-page">
  <h1 class="title">My Posts</h1>
  <div class="my-posts">
    ${posts.length > 0
      ? posts.map(cardTemplate)
      : html`
      <h1 class="title no-posts-title">You have no posts yet!</h1>`
    }
  </div>
</section>
`;

const cardTemplate = (post) => html`
  <div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src=${post.imageUrl}>
    <div class="btn-wrapper">
      <a href="/details/${post._id}" class="details-btn btn">Details</a>
    </div>
  </div>
`;

export async function profileView(ctx) {
    const userData = getUserData()
    if (userData) {
        const posts = await getMyPosts(userData._id)
        ctx.render(profileTemplate(posts))
    }
};
