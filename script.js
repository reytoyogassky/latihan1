// FUNGSI CHECKBOX
function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("ShowPass");
  if (checkBox.checked === true) {
    text.innerHTML = "Hide Password 😊";
    text.style.color = "brown";
  } else {
    text.innerHTML = "Show Password 😡";
    text.style.color = "";
    return;
  }

  var x = document.getElementById("Idpassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
// END

// FUNGSI BUTTON
let Username = "admin";
const Password = "1234";
var button = document.getElementById("btnLogin");
var InputUsername = document.getElementById("Idusername");
var InputPassword = document.getElementById("Idpassword");

InputPassword.addEventListener &&
  InputUsername.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("btnLogin").click();
    }
  });

function FunctionButton() {
  if (InputUsername.value == Username && InputPassword.value == Password) {
    alert("YEAAYYY BERHASIL 😍😍😍");
    location.reload();
  } else {
      alert("Username Dan Password Anda Salah 😥😥");
      location.reload();
  }
}
