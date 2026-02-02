const userName = document.getElementById("name-input");
const out = document.getElementById("name-output");

userName.addEventListener("input", (event) => {
  if (event.target.value.trim() === "") {
    out.textContent = `Anonymous`;
  } else {
    out.textContent = `${event.target.value.trim()}`;
  }
});
