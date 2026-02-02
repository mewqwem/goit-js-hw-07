const formInputs = document.querySelector(".login-form");

formInputs.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    [email.name]: emailValue,
    [password.name]: passwordValue,
  };

  console.log(formData);

  event.currentTarget.reset();
});
