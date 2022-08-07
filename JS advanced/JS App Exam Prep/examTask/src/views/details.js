import { html } from '../../node_modules/lit-html/lit-html.js';
import { delOffer,getById } from '../api/offers.js';
import { getUserData } from '../util.js';



const detailsTemplate = (offer, isOwner, onDelete, userData, hideApplyBtn) => html`
   <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${offer.imageUrl} alt="example1" />
            <p id="details-title">${offer.title}</p>
            <p id="details-category">
              Category: <span id="categories">${offer.category}</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">${offer.salary}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span>
                    ${offer.description}
                    </span>
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span
                  >${offer.requirements}</span
                >
              </div>
            </div>

            ${ isOwner ? html `<div id="action-buttons">
              <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : ''}

            <!--Edit and Delete are only for creator-->
          
            <p>Applications: <strong id="applications">0</strong></p>
              <!--Bonus - Only for logged-in users ( not authors )
            -->
            ${userData && !isOwner ? html` <a @click=${hideApplyBtn} href="" id="apply-btn">Apply</a>` : '' }
              
              
            </div>
          </div>
        </section>
`;

export async function detailsView(ctx) {
    
    const offer = await getById(ctx.params.id);
    const userData = getUserData();
    const isOwner =  userData?._id == offer._ownerId; 
    function hideApplyBtn() {
        let currNum = document.getElementById('applications').textContent
        document.getElementById('applications').textContent = Number(currNum) + 1
        document.getElementById('apply-btn').style.display = 'none';
    }
    ctx.render(detailsTemplate(offer, isOwner, onDelete ,userData, hideApplyBtn))

  

    async function onDelete() {
        const choice = confirm('Are you sure you wont to delete this post?');

        if (choice) {
            await delOffer (offer._id);
            ctx.page.redirect('/catalog');
        }
    }

};
