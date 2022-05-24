window.addEventListener("keydown", (e) => {
  const hidden = document.querySelector(".hidden");
  if (hidden) hidden.classList.remove("hidden");

  const page1 = document.getElementById("landing");
  const page2 = document.getElementById("page2");
  page1.style.display = "none";
  page2.style.display = "page2";
});

window.addEventListener("keydown", (event) => {
  let key = document.getElementById("event.key");
  let which = document.getElementById("event.which");
  let location = document.getElementById("event.location");
  let code = document.getElementById("event.code");

  key.innerText = event.key;
  which.innerText = event.which;
  location.innerText = event.location;
  code.innerText = event.code;
});
