const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("pass-input");
const btnLogin = document.getElementById("btn-login");

const users = [
  {
    email: "Mauricio",
    password: "12345",
    balance: 100,
  },
  {
    email: "Sebastian",
    password: "12345",
    balance: 100,
  },
  {
    email: "Andres",
    password: "12345",
    balance: 100,
  },
];

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  let email = emailInput.value;
  let password = passwordInput.value;

  let loggedUser = users.find(
    (element) => element.email === email && element.password === password
  );

  if (loggedUser) {
    // localStorage.setItem("loggedUser", loggedUser);
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    window.location.href = "./home.html";
  } else {
    alert("El usuario o la contraseña son incorrectos");
  }
});
