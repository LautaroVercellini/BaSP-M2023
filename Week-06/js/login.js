var validaciones = {
    correctos: {},
    incorrectos: {}
}

console.log(validaciones.incorrectos);
console.log(validaciones.correctos);

function containsLetter(value) {
    for (var i = 0; i < value.length; i++) {
      var charCode = value.charCodeAt(i);
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        return true;
      }
    }
    return false;
}

function containsNumber(value) {
    for (var i = 0; i < value.length; i++) {
      var charCode = value.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
        return true;
      }
    }
    return false;
}

var required = document.getElementById("required")
var email = document.getElementById("email");
var errorEmail = document.getElementById("incorrect-email");
var validEmail =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

email.onblur = function() {
    if (email.value == ""){
        required.style.display="block";
        email.classList.add("red-border");
        validaciones.incorrectos["email"] = "Email is empty";
    } else if (!validEmail.test(email.value)){
        email.classList.add("red-border");
        errorEmail.style.display="block";
        validaciones.incorrectos["email:"] = "Invalid format email";
    }else
        validaciones.correctos["email"] = email.value;
}

email.onfocus = function() {
    email.classList.remove("red-border");
    errorEmail.style.display="none";
    required.style.display="none";
    email.value = "";
}

var psw = document.getElementById("password");
var incorrectPsw = document.getElementById("incorrect-password");

psw.onblur = function () {
    if (psw.value.length == 0) {
        required.style.display="block";
        psw.classList.add("red-border");
        validaciones.incorrectos["Password:"] = "Incorrect password";
    } else if (!containsLetter(psw.value) || !containsNumber(psw.value) || psw.value.length < 8) {
        psw.classList.add("red-border");
        incorrectPsw.style.display="block";
        validaciones.incorrectos["Password:"] = "Password must contain letters and numbers";
    } else {
        validaciones.correctos["password"] = "Correct password";
    }
}

psw.onfocus = function() {
    psw.classList.remove("red-border");
    incorrectPsw.style.display="none";
    required.style.display="none";
    psw.value = "";
}

var submitBottom = document.querySelector("#submit-buttom");
submitBottom.onclick = function(e) {
    e.preventDefault()
}

