window.addEventListener("load", solve);

function solve() {
  const genre = document.getElementById("genre");
  const nameOfSong = document.getElementById("name");
  const author = document.getElementById("author");
  const date = document.getElementById("date");

  const addButton = document.getElementById("add-btn");

  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      genre.value == "" ||
      nameOfSong.value == "" ||
      author.value == "" ||
      date.value == ""
    ) {
      return;
    }

    const allHistContainer = document.querySelector(
      "#all-hits .all-hits-container"
    );

    const div = document.createElement("div");
    div.className = "hits-info";
    div.innerHTML = `
    <img src="./static/img/img.png">
    <h2>Genre: ${genre.value}</h2>
    <h2>Name: ${nameOfSong.value}</h2>
    <h2>Author: ${author.value}</h2>
    <h3>Date: ${date.value}</h3>
    <button class="save-btn">Save song</button>
    <button class="like-btn">Like song</button>
    <button class="delete-btn">Delete</button>`;

    allHistContainer.appendChild(div);

    genre.value = "";
    nameOfSong.value = "";
    author.value = "";
    date.value = "";

    const likeButton = div.querySelector(".like-btn");

    likeButton.addEventListener("click", () => {
      const likeCountDiv = document.querySelector("#total-likes .likes p");
      let likes = Number(likeCountDiv.textContent.slice(13));
      likeCountDiv.textContent =
        likeCountDiv.textContent.slice(0, 13) + (likes + 1);
      likeButton.disabled = true;
    });

    const savedHitsContainer = document.querySelector(
      "#saved-hits .saved-container"
    );

    const saveButton = div.querySelector(".save-btn");
    saveButton.addEventListener("click", () => {
      saveButton.remove();
      likeButton.remove();
      savedHitsContainer.appendChild(div);
    });

    const deleteButton = div.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      div.remove();
    });
  });
}
