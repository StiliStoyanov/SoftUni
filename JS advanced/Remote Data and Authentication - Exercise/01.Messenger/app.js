function attachEvents() {
  const url = "http://localhost:3030/jsonstore/messenger";
  let textArea = document.getElementById("messages");

  let author = document.querySelector('input[name="author"]');
  let content = document.querySelector('input[name="content"]');

  document.getElementById("submit").addEventListener("click", send);
  document.getElementById("refresh").addEventListener("click", refresh);

  async function refresh() {
    const res = await fetch(url);
    const data = await res.json();
    textArea.value = Object.values(data)
      .map(({ author, content }) => `${author}: ${content}`)
      .join("\n");
  }
  async function send() {
    const newMsg = {
      author: author.value,
      content: content.value,
    };
    if (author.value != "" && content.value != "") {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newMsg),
      }).then(() => {
        author.value = "";
        content.value = "";
      });
    }
  }
}

attachEvents();
