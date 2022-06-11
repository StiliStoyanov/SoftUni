function toggle() {
  let buttonText = document.querySelector(".button").textContent;

  if (buttonText == "More") {
    document.querySelector(".button").textContent = "Less";
    document.querySelector("#extra").style.display = "block";
  } else {
    document.querySelector("#extra").style.display = "none";
    document.querySelector(".button").textContent = "More";
  }
}
