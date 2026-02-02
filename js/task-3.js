const userName = document.getElementById("name-input");
const out = document.getElementById("name-output");

userName.addEventListener("input", (event) => {
  const userInput = event.target.value.trim();
  if (userInput === "") {
    out.textContent = `Anonymous`;
  } else {
    out.textContent = `${userInput}`;
  }
});
