//get html elements name, email, newInterest, submit
const name = document.getElementById("name");
const email = document.getElementById("email");
const newsInterest = document.getElementById("newsInterest");
const submit = document.getElementById("submit");
//email validation
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

//create error message array
let errorMessages = [];

//function that check if name is empty, if yes push error message to array
function checkName() {
  if (name.value === "") {
    errorMessages.push("Name is required");
  }
}

//function that check if email is empty, if yes push error message to array
function checkEmail() {
  if (email.value === "") {
    errorMessages.push("Email is required");
  }
}

//function that check if email is valid, if not push error message to array
function checkEmailValid() {
  if (!validateEmail(email.value)) {
    errorMessages.push("Email is not valid");
  }
}

//function that check if newInterest is empty, if yes push error message to array
function checkNewsInterest() {
  if (newsInterest.value === "") {
    errorMessages.push("New Interest is required");
  }
}
//on Submit, check if error messages array it's empty. If not, display the error messages in an alert. If yes, display a success message in an alert.
submit.addEventListener("click", (e) => {
  //empty the error messages array
  e.preventDefault();
  errorMessages = [];
  checkName();
  checkEmail();
  checkEmailValid();
  checkNewsInterest();
  if (errorMessages.length > 0) {
    alert(errorMessages.join(", "));
  } else {
    alert("Thank you for your interest!");
  }
});
