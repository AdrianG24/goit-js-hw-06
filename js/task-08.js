const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  if (password === null || password === "" || email === null || email === "") {
    alert("Заповніть, будь ласка, всі поля");
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
  }
  form.reset();
}

//   const formData = new FormData(event.currentTarget);

//   formData.forEach((value, name) => {
//     console.log("name:", name);
//     console.log("value:", value);
//   });
